"use client";

import {
  Box,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { styles } from "@/common/styles/global.style";
import { chartStyle } from "./custom-line-chart.style";
import { useState } from "react";

/**
 * Renders the CustomLineChart component
 * This component displays Line Chart data
 * @returns The CustomLineChart component
 */

export const CustomLineChart = ({
  chartData,
  title,
  dropdown,
  percentage,
  aiBoom,
  issuesEngine
}: any) => {
  const [session, setSession] = useState<any>("All Models");
  const SessionHandler = (event: any) => {
    setSession(event.target.value as string);
  };
  const totalValue = chartData?.reduce(
    (total: any, item: any) => total + item.value,
    0
  );
  const widthFactor = totalValue > 0 ? 100 / totalValue : 0;

  return (
    <Box className="d-flex" sx={chartStyle.lineChartMain}>
      {dropdown ? (
        <Grid container justifyContent="space-between">
          <Grid item xs={6}>
            <Typography sx={chartStyle.linechartHeader}>{title}</Typography>
          </Grid>
          <Grid item xs={6} textAlign="right">
            <FormControl variant="standard" sx={chartStyle.engineOverTime}>
              <Select
                labelId="demo-simple-select-autowidth-label"
                value={session}
                onChange={SessionHandler}
                className="enginDropdown"
              >
                <MenuItem value="All Models" sx={chartStyle.SessionText}>
                  All Models
                </MenuItem>
                <MenuItem value="CHAT GPT" sx={chartStyle.SessionText}>
                  CHAT GPT
                </MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      ) : (
        <Typography sx={chartStyle.linechartHeader}>{title}</Typography>
      )}
      <Box>
        <Box className="d-flex" sx={aiBoom ? chartStyle.chartDataMain2 : chartStyle.chartDataMain}>
          {chartData?.map((item: any) => (
            <Box
              key={item.id}
              sx={{
                ...styles.LineChartData,
                width: `${item.value * widthFactor}%`,
                color: `${item.color}`,
                bgcolor: `${item.color}`,
              }}
            ></Box>
          ))}
        </Box>

        <Grid item justifyContent={aiBoom ? "unset": "space-around"} gap={aiBoom ? "16px": "0px"} className={`${aiBoom && "borderTop"} ${issuesEngine && "isssuesEngine"} d-flex`}>
          {chartData?.map((item: any) => (
            <Box
              key={item.id}
              sx={{ ...chartStyle.Row, borderLeft: `3px solid ${item.color}` }}
              >
              <Typography
                sx={chartStyle.lineChartDetails}
                className="tertiary-title fw-600"
              >
                {item.name}
              </Typography>
              <Typography
                sx={chartStyle.lineChartDetails}
                className="tertiary-title"
              >
                {item.value}
                {item.percentage}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
