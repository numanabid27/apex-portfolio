"use client";

import { Grid, Typography } from '@mui/material';
import EChartsReact from 'echarts-for-react';
import { ISSUES_DATA } from '../model-data/modal-data.constants';
import { styles } from "./issue.style";

export const Issue = ({selectedRow}:any) => {
  const chartData = ISSUES_DATA(selectedRow?.highData, selectedRow?.mediumData, selectedRow?.lowData)
    return (
        <>
          <Grid container alignItems="center" justifyContent="center">
            <Grid item sx={styles.issueColumn}>
              <Typography sx={styles.issueTitle}>{selectedRow?.count}</Typography>
            </Grid>
            <Grid item>
              <Typography sx={styles.issueDesc}>Total Issues</Typography>
            </Grid>
          </Grid>
          <EChartsReact option={chartData} />
        </>
    );
}

