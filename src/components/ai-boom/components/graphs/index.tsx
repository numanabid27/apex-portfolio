import { CustomLineChart } from "@/common/components/custom-line-chart/custom-line-chart.component";
import TopIssuesChart from "@/components/issues/components/top-issues-chart/top-issues-chart.component";
import { Box, Grid, Typography } from "@mui/material";
import {styles} from "../../aiBoom.style";

export default function Graphs({chart1, chart2, firstValue, secondValue, firstValueText, secondValueText, topChart1}:any) {
  return (
    <Grid container gap="10px" justifyContent="space-between">
      <Grid
        item
        xs={12}
        md={3.9}
        className="border border-radius bg-white"
        sx={styles.aiEngine}
      >
        <CustomLineChart
          title={
            <>
              <Box display="flex" alignItems="center" gap="5px">
                <Typography
                  sx={{
                    fontSize: { lg: "42px", sm: "30px" },
                    fontWeight: 600,
                  }}
                >
                  {firstValue}
                </Typography>
                {firstValueText}
              </Box>
            </>
          }
          chartData={chart1}
          aiBoom={true}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={3.9}
        sx={styles.aiEngine}
        className="border border-radius bg-white"
      >
        <CustomLineChart
          title={
            <Box display="flex" alignItems="center" gap="5px">
              <Typography
                sx={{ fontSize: { lg: "42px", sm: "30px" }, fontWeight: 600 }}
              >
                {secondValue}
              </Typography>{" "}
              {secondValueText}
            </Box>
          }
          chartData={chart2}
          aiBoom={true}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={3.9}
        sx={styles.aiEngine}
        className="border border-radius bg-white"
      >
        <TopIssuesChart
          aiBoom={true}
          title={topChart1}
        />
      </Grid>
    </Grid>
  );
}
