"use client";

import { Box, Grid, Typography } from "@mui/material";
import ReactEcharts from "echarts-for-react";
import Image from "next/image";
import { PieChartStyle } from "./pie-chart.style";
import { usePathname } from "next/navigation";

function PieChart({
  chartLabels,
  chartData,
  title,
  usageDepartment,
  lgHeight,
  border,
}: any) {
  const pathname = usePathname();
  return (
    <Grid
      item
      xs={12}
      md={12}
      lg={12}
      sx={
        !usageDepartment
          ? PieChartStyle.PieChartStyling
          : PieChartStyle.PieChartStylingDep
      }
      className="border border-radius issues-pie__chart"
    >
      {pathname === "/" ? null : (
        <>
          <Typography sx={PieChartStyle.PieHeaderStyling}>{title}</Typography>
          {usageDepartment && (
            <Box sx={PieChartStyle.active_users}>
              <Typography sx={PieChartStyle.active_users_count}>
                3,523
              </Typography>
              <Typography sx={PieChartStyle.active_users_status}>
                Active users
              </Typography>
            </Box>
          )}
        </>
      )}

      <Grid
        item
        className={`${border && "borderUsage"}`}
        sx={{
          height: {
            lg: `${lgHeight}px !important`,
            md: "320px",
            sm: "320px",
            xs: "320px",
          },
          display: "flex",
          flexDirection: {
            lg: "row",
            md: "column-reverse",
            sm: "column-reverse",
            xs: "column-reverse",
          },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: "15px",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={5.5}
          sx={PieChartStyle.PieChartDataStyling}
        >
          <ReactEcharts option={chartData} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6.5} sx={PieChartStyle.chartLab}>
          {chartLabels.map((item: any) => (
            <Grid
              key={item.id}
              item
              xs={12}
              sx={PieChartStyle.PieChartLabel}
            >
              <Grid item xs={4} sx={{ textAlign: { md: "center", xs: "end" } }}>
                <Typography sx={PieChartStyle.PiePercentageStyling} display="flex">
                  <Image
                    src={item.icon}
                    alt="pci-icon"
                    style={PieChartStyle.icon}
                  />
                  {item.value}%
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Typography sx={PieChartStyle.PieLabelStyling}>
                  {item.name}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PieChart;
