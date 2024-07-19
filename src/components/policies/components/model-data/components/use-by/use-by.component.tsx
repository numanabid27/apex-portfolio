"use client";

import { Chip, Typography } from "@mui/material";
import {styles} from "./use-by.style";

export const UseBy = ({ selectedRow }: any) => {
  return (
    <>
      {
        selectedRow?.usedBy?.map((g:any, i:number)=>{
          return(
            <Chip
              key={i.toString()}
              sx={styles.chip}
              label={<Typography sx={styles.label}>{g.title}</Typography>}
            />
          )
        })
       
      }
    </>
   
  );
};
