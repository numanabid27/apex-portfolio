"use client";

import { useState } from 'react';
import {styles} from "./addWord.style";
import { Box, Button } from '@mui/material';
import CustomizedHook from './customizedHook';

const AddWord = () => {
    const [isHide, setIsHide] = useState(false);

  return (
    <Box display="flex" gap="10px" alignItems="center" position="relative">
        <Button sx={styles.button} onClick={()=>setIsHide(!isHide)}>
            + words
        </Button>
        {
            isHide && 
            <Box position="absolute" top="-45px">
                <CustomizedHook />
            </Box>
            
        } 
    </Box>
  )
}
export default AddWord;