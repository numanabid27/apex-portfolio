"use client";

import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/provider/store";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { styles } from "./style";
import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "next/image";
import draft from "@/common/assets/images/draft.svg";
import { useRouter } from "next/navigation";
import danger from "@/common/assets/images/danger.svg"

export default function AiBomView(){
  const aiBoomData = useAppSelector((item: any) => item?.aiBoom?.aiBoomData);
  const [filteredData, setFilteredData] = useState<any>();
  const item = localStorage.getItem("code");
  const router = useRouter();

  useEffect(() => {
    if (item) {
      const data: any = item ? JSON.parse(item) : {};
      setFilteredData(data);
    }
  }, [item]);

  return (
    <Box mt={6} sx={styles.container}>
      <Box display="flex" gap="10px" mb={4}>
        <KeyboardBackspaceIcon
          sx={styles.icon}
          onClick={() => {
            localStorage.removeItem("code");
            router.push("/ai-boom");
          }}
        />
        <Typography color="#374151" fontSize="14px">
          reponame / Data /{" "}
        </Typography>
      </Box>
      <TableContainer sx={{ ...styles.tableContainer, cursor: "pointer" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={styles.cellHeader}>Folder</TableCell>
              <TableCell sx={styles.cellHeader}>Violations</TableCell>
              <TableCell sx={styles.cellHeader}>
                Open source similarity
              </TableCell>
              <TableCell sx={styles.cellHeader}>Open source licenses</TableCell>
              <TableCell align="right" sx={styles.cellHeader}>
                Last commit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Box sx={styles.tableCell}>
                  <Image src={draft} width={20} height={20} alt="" />
                  <Typography sx={styles.cellData}>
                    {filteredData?.file?.fileName}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell>
                <Box sx={styles.voilation}>
                  {
                    filteredData?.mainData && filteredData?.mainData?.voilation[0] === 15 || 
                    filteredData?.mainData && filteredData?.mainData?.voilation[0] === 22 
                    ?
                    <Image
                      src={danger}
                      alt=""
                    />
                    : null
                  }
                  <Typography variant="h6">
                    {filteredData?.mainData?.voilation[0]}
                  </Typography>
                  <Typography variant="h5">
                    {filteredData?.mainData?.voilation[1]}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell>
                <Box sx={styles.voilation}>
                  <Image
                    src={filteredData?.mainData?.osSimilarity?.icon}
                    alt=""
                  />
                  <Typography variant="h6">
                    {filteredData?.mainData?.osSimilarity?.label}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell>
                <Box sx={styles.voilation}>
                  <Image
                    src={filteredData?.mainData?.osLicience?.icon}
                    alt=""
                  />
                  <Typography variant="h6">
                    {filteredData?.mainData?.osLicience?.label}
                  </Typography>
                </Box>
              </TableCell>

              <TableCell align="right">
                <Typography color="#667085" fontSize="14px">
                  {filteredData?.mainData?.comment}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={6} mb={4}>
        <Typography color="#374151" mb={4}>23% Copilot code in file</Typography>
        <Box sx={styles.descCode}>
          <Box sx={styles.code}>
            <pre className="viewCode">
              {`function alea(mini, maxi) {
    // random number in given range`}
            </pre>
            <pre
              style={{
                background: "rgb(240 68 56 / 18%)",
                color: "#F04438",
                padding: "0px 19px",
                margin: "0",
              }}
            >
              {`
  if (typeof maxi == "undefined") return mini * mrandom(); 
  // range 0..mini
    `}
            </pre>
            <pre className="viewCode">
              {`
return mini + mrandom() * (maxi - mini); 
// range mini..maxi
    `}
            </pre>
            <pre
              style={{
                padding: "0px 19px",
                background: "rgb(50 213 131 / 6%)",
                color: "#32D583",
                margin: "0 0 15px",
              }}
            >
              {`
// - - - - - - - - - - - - - - - - - - - - - - -
function intAlea(mini, maxi) {
    // random integer in given range (mini..maxi - 1 or 
    0..mini - 1)
    //
    if (typeof maxi == "undefined") return mfloor(mini * 
        mrandom()); // range 0..mini - 1
    return mini + mfloor(mrandom() * (maxi - mini)); // 
    range mini .. maxi - 1
}
// - - - - - - - - - - - - - - - - - - - - - - -
  `}
            </pre>

            <pre>
              {`      
   'use client';

   import { Logo } from '@lobehub/ui';
   import { createStyles } from 'antd-style';
   import Link from 'next/link';
   import { memo } from 'react';
   import { Flexbox, FlexboxProps } from 'react-layout-kit';

   const useStyles = createStyles(({ token, css }) => ({
    logoLink: css'
      height: 20px;
      color: inherit;

      &:hover {
        color: token.colorLink;
      }
    ',
    }));

  const BrandWatermark = memo<Omit<FlexboxProps, 'children'>>(({ style, ...rest }) => {
  const { styles, theme } = useStyles();
    return (
    `}</pre> 
    <pre style={{
      padding: "0px 0 0 19px",
      background: "rgb(50 213 131 / 6%)",
      color: "#32D583",
      margin: "-27px 0px 0px",
    }}>{`           
      <Flexbox
        align={'center'}
        flex={'none'}
        gap={4}
        horizontal
        style={{ color: theme.colorTextDescription, 
    `}</pre>
    <pre style={{margin:"-14px 0 0 0"}}>{`
    fontSize: 12, ...style }}
      {...rest}
        >
      <span>Powered by</span>
      <Link className={styles.logoLink} href={'https://lobehub.com'} target={'_blank'}>
        <Logo size={20} type={'text'} />
      </Link>
      </Flexbox>
    );
  });
    `}
                  </pre>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
