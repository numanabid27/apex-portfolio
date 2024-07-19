import draft from "@/common/assets/images/draft.svg";
import warning from "@/common/assets/images/warning.svg";
import { handleAiBoomData } from "@/provider/features/aiBoom/aiBoom.slice";
import { useAppDispatch } from "@/provider/store";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Py } from "../py/py";
import { styles } from "./style";

export const File = ({
  isDetail,
  hoveredIndex,
  isClicked,
  setHoveredIndex,
  setIsClicked,
  repo,
  selectedFileData,
}: any) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  return (
    <>
      <Box sx={{ ...styles.tableContainer }}>
        <Typography sx={styles.repo_info}>
          <span>{repo}</span> / Data /{" "}
        </Typography>
        <Grid container sx={styles.container}>
          <Grid xs={6}>
            <Typography sx={styles.cellHeader}>Folder</Typography>
          </Grid>
          <Grid xs={3}>
            <Typography sx={styles.cellHeader}>Violations</Typography>
          </Grid>
          <Grid xs={3}>
            <Typography sx={styles.cellHeader} textAlign="right">
              Last commit
            </Typography>
          </Grid>
        </Grid>

        <Box>
          {isDetail?.map((item: any, i: number) => {
            return (
              <Grid
                container
                justifyContent="space-between"
                sx={styles.grid}
                key={i.toString()}
              >
                <Grid
                  xs={6}
                  sx={styles.gridInner}
                  className="gridInner"
                  onMouseEnter={() => {
                    setIsClicked(item.id);
                    setHoveredIndex(!hoveredIndex);
                  }}
                  onMouseLeave={() => {
                    setHoveredIndex(false);
                  }}
                  onClick={() => {
                    if (item.fileName.endsWith(".py")) {
                      let finalData: any = {
                        file: item,
                        mainData: selectedFileData,
                      };
                      localStorage.setItem("code", JSON.stringify(finalData));
                      // dispatch(handleAiBoomData(finalData));
                      router.push(`ai-boom/code-view`);
                    }
                  }}
                >
                  <Box sx={styles.tableCell}>
                    <Image src={draft} width={20} height={20} alt="" />
                    <Typography sx={styles.cellData}>
                      {item.fileName}
                    </Typography>
                  </Box>
                  <Box>
                    {isClicked === item.id && (
                      <>
                        <Py
                          items={item.fileName}
                          handleClick={() => setHoveredIndex(!hoveredIndex)}
                          hoveredIndex={hoveredIndex}
                        />
                      </>
                    )}
                  </Box>
                </Grid>
                <Grid xs={3} sx={styles.gridInner}>
                  <Box sx={styles.tableCell}>
                    {item.fileVoilation[0] >= 15 && (
                      <Image
                        src={warning}
                        width={20}
                        height={20}
                        alt="warning"
                      />
                    )}
                    <Typography sx={{ ...styles.cellData, fontWeight: 700 }}>
                      {item.fileVoilation[0]}
                    </Typography>
                    <Typography sx={styles.cellData}>
                      {item.fileVoilation[1]}
                    </Typography>
                  </Box>
                </Grid>
                <Grid xs={3} sx={styles.gridInner}>
                  <Typography sx={styles.cellCommit}>
                    {item.fileCommit}
                  </Typography>
                </Grid>
              </Grid>
            );
          })}
        </Box>
      </Box>
    </>
  );
};
