"use client"
import React from 'react';
import {
    Box,
    CircularProgress,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";
import Image from 'next/image';
import {styles} from "./style";
import warning from '@/common/assets/images/warning.svg';
import { styled } from '@mui/system';

const Container = styled(Box)({
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const RedCircularProgress = styled(CircularProgress)(({ theme }) => ({
    color: '#F2F4F7',
  }));
  const CustomCircularProgress = ({ value, ...props }:any) => {
    return (
      <Container className='customProgressBar'>
        <RedCircularProgress variant="determinate" value={100} thickness={4} {...props} />
        <CircularProgress
          variant="determinate"
          value={value}
          thickness={4}
          {...props}
          style={{ position: 'absolute' }}
        />
      </Container>
    );
  };

export const Folder = ({data, handleClick, isColor}:any) => {
  return (
    <TableContainer sx={{...styles.tableContainer, cursor:'pointer'}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell sx={styles.cellHeader}>Folder</TableCell>
                <TableCell sx={styles.cellHeader}>Copilot code</TableCell>
                <TableCell sx={styles.cellHeader}>Violations</TableCell>
                <TableCell align="right" sx={styles.cellHeader}>Last commit</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data?.map((item: any, i: number) => {
                    return (
                        <TableRow key={i.toString()} onClick={()=>handleClick(item.id)} sx={{background:isColor == item.id ? "#F2F4F7" : ""}}>
                            <TableCell>
                                <Box sx={styles.tableCell}>
                                    <Image
                                        src="/image/folder.svg"
                                        width={20}
                                        height={20}
                                        alt=""
                                    />
                                    <Typography sx={styles.cellData}>{item.folderName}</Typography>
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box sx={styles.tableCell}>
                                    <CustomCircularProgress value={item.code} />
                                    <Typography sx={styles.cellData}>{`${item.code}%`}</Typography>
                                    <Image src="/image/info.svg" width={20} height={20} alt="info" />
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box sx={styles.tableCell}>
                                    {
                                        item.voilation[0] >= 15 && 
                                        <Image src={warning} width={20} height={20}  alt="warning" />
                                    }
                                    <Typography sx={{...styles.cellData, fontWeight:700}}>{item.voilation[0]}</Typography>
                                    <Typography sx={styles.cellData}>{item.voilation[1]}</Typography>
                                </Box>
                            </TableCell>
                            <TableCell align="right">
                                <Typography sx={styles.cellCommit}>{item.comment}</Typography>
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    </TableContainer>
  )
}
