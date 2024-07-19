import React from "react";
import { Grid } from "@mui/material";
import { DashboardStyles } from "@/components/dashboard/dashboard.style";
import ViewAsTabs from "./components/tab-section/tab-section.component";

function EngineDetail() {
  return (
    <>
      <Grid
        container
        item
        xs={12}
        sx={DashboardStyles.DashboardGrid}
        className="justify-between"
      >
        <Grid lg={12} xs={12}>
          <ViewAsTabs />
        </Grid>
      </Grid>
    </>
  );
}

export default EngineDetail;
