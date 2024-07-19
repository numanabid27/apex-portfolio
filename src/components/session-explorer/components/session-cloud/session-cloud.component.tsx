import { Box, Chip, Grid, Input, Typography } from "@mui/material";
import Image from "next/image";
import searh from "@/common/assets/images/search.svg";
import { styles } from "./session-word-cloud.style";
import { WordCloud } from "./components/word-cloud/word-cloud.component";
import ClearIcon from "@mui/icons-material/Clear";
import CustomTable from "@/common/components/custom-table/custom-table.component";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import useSessionCloud from "./use-session-cloud.hook";
import { Suggestions } from "./components/suggestions/suggestions.component";

export const SessionWordCloud = () => {
  const SESSION_EXPLORE_TABLE_HEADER = [
    { id: 1, header: "Time", accessor: "time" },
    {
      id: 2,
      header: "Engine ",
      accessor: "engineType",
      cell: (data: any) => {
        return (
          <Typography
            sx={{ color: "#344054", fontSize: "14px", fontWeight: 700 }}
          >
            {data}
          </Typography>
        );
      },
    },
    {
      id: 3,
      header: "revenue",
      accessor: "revenue",
      cell: (data: any) => {
        return (
          <Typography sx={{ color: "#344054", fontSize: "14px" }}>
            {data.split(/(revenue)/gi).map((text: any, index: any) =>
              text.toLowerCase() === "revenue" ? (
                <span key={index} style={{ fontWeight: 600 }}>
                  {text}
                </span>
              ) : (
                <span key={index}>{text}</span>
              )
            )}
          </Typography>
        );
      },
    },
    {
      id: 4,
      header: "Violation",
      accessor: "violation",
      cell: (data: any) => {
        return (
          <Chip
            sx={{ color: "#667085", bgcolor: "#FFFFFF !important" }}
            label={
              <>
                <Typography
                  sx={{ fontSize: "14px", fontWeight: 400, color: "#344054" }}
                >
                  <span style={{ fontWeight: 600 }}>{data}</span> violations
                </Typography>
              </>
            }
            icon={
              <WarningAmberIcon
                sx={{
                  color: "#F04438 !important",
                  fontSize: "15px",
                }}
              />
            }
          />
        );
      },
    },
    {
      id: 5,
      header: "Violation Category",
      accessor: "violationCat",
      cell: (data: any) => {
        return (
          <Chip
            sx={{
              border: "1px solid #bdbdbd",
              "&:hover": { border: "1px solid #939291" },
              height: "26px",
              color: "#344054",
            }}
            label={data}
            variant="outlined"
          />
        );
      },
    },
    {
      id: 6,
      header: "Mail",
      accessor: "mails",
      cell: (data: any) => {
        return (
          <Typography sx={{ color: "#1570EF", fontSize: "14px" }}>
            {data}
          </Typography>
        );
      },
    },
  ];

  const {
    handleClear,
    handleClick,
    finalData,
    isValue,
    handleSearch,
    searchQuery,
  } = useSessionCloud();

  return (
    <Box sx={styles.clound_box}>
      <Typography sx={styles.search_text}>
        Try searching using keywords, session id, engine, user, date range,
        contains issues
      </Typography>
      <Box sx={styles.search_box}>
        <Image src={searh} alt="" />
        <Box sx={styles.searchRow}>
          {isValue?.map((item: any, i: number) => (
            <Box sx={styles.searchChip} key={i.toString()}>
              <Typography sx={styles.searchChip_text}>
                {item?.slice(0, 6) + ".."}
              </Typography>
              <ClearIcon sx={styles.cross} onClick={() => handleClear(item)} />
            </Box>
          ))}
        </Box>

        <Input
          placeholder="Search by session id or free text"
          onChange={handleSearch}
          value={searchQuery}
          sx={styles.input}
        />
      </Box>

      <Suggestions handleClick={handleClick} value={isValue} />

      {/* table */}
      {finalData ? (
        <Box sx={styles.tableBox}>
          <CustomTable
            rows={finalData}
            column={SESSION_EXPLORE_TABLE_HEADER}
            isTableHead={false}
          />
        </Box>
      ) : null}

      {/* word cloud */}
      <WordCloud handleClick={handleClick} value={isValue} />
    </Box>
  );
};
