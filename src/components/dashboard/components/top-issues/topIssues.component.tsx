"use client";

import React, { useEffect } from "react";
import { styles } from "./topIssues.style";
import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function TopIssues({
  setIsModel,
  setOpenModal,
  item,
  handleClick,
  i
}: any) {
  return (
    <Grid
      container
      sx={styles.container}
      key={item.id}
      onClick={()=>{setIsModel(handleClick),  setOpenModal(true)}}
    >
      <Grid item xl={9.6} sm={8} xs={12} sx={styles.textGrid}>
        <Typography variant="h5">
          {i === 0 && <span style={{ color: "#186FFA" }}> @Anna Smith </span>}
          {item.title}
        </Typography>
        <Typography variant="h6">{item.time}</Typography>
      </Grid>
      <Grid item xl={2.39} sm={4} xs={12} sx={styles.badgeBtn}>
        <Link href={item.link ? `${item.link}` : "#"} onClick={(e)=>e.stopPropagation()}>
          <Image src={item.img} alt="" />
          {item.button}
        </Link>
      </Grid>
    </Grid>
  );
}
