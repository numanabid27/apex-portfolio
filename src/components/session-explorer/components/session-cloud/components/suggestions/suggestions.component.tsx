import { Box, Chip, Typography } from '@mui/material'
import React from 'react';
import {styles} from "./sugggestions.style";
import {SUGGESTIONS} from "../suggestions/suggestions.constant";

export const Suggestions = ({handleClick, value}:any) => {
  return (
    <>
        <Box sx={styles.suggestions_row}>
        <Typography sx={styles.suggestion_text}>Suggestions:</Typography>
        {
          SUGGESTIONS.map((item:any)=>{
            return(
              <Chip 
                label={item.title} 
                key={item.id}
                sx={styles.suggestion_chip} 
                onClick={() => handleClick(item.title)}
                disabled={value.includes(item.title)}
                className={value.includes(item.title) ? "addClass" : "removeClass"}
              />
            )
          })
        }
      </Box>
    </>
  )
}
