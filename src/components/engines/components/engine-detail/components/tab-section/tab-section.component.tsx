import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { DashboardStyles } from "@/components/dashboard/dashboard.style";
import EnergyInfo from "../engine-info/engine-info.component";
import DataFlow from "@/components/dashboard/components/data-flow/data-flow.component";
import PieChart from "@/components/issues/components/pie-chart/pie-chart.component";
import { EngineDetailStyle } from "../../engine-detail.style";
import { TabSectionStyle } from "./tab-section.style";
import EngineCategory from "../engine-category/engine-category";
import { EngineInfoStyle } from "../engine-info/engine-info.style";
import TocOutlinedIcon from "@mui/icons-material/TocOutlined";
import ShareIcon from "@mui/icons-material/Share";
import { AllTopIssues } from "@/common/components/all-top-issues/all-top-issues.component";
import {
  SENSITIVE_DATATYPE_CHART,
  SENSITIVE_DATATYPE_DATA,
  ISSUES_BY_ENGINE_CHART,
  ISSUES_BY_ENGINE_DATA,
} from "@/components/issues/issues.constant";
import UsserAcces from "../user-access/user-access-component";
import { users } from "../user-access/user-access.contant";
import Image from "next/image";
import ZoomOut from "../graph/zoom-out";
import ZoomIn from "../graph/zoom-in";

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      sx={{ padding: "0px" }}
      container
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Grid container>{children}</Grid>}
    </Grid>
  );
}

export default function ViewAsTabs() {
  const [ZoomAffect, setZoomAffect] = useState(false);



  const EnableZoom = () => {
    setZoomAffect(true);
  };

  const DisableZoom = () => {
    setZoomAffect(false);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid container>
        <Grid lg={9} xl={9.7}>
          <EngineCategory />
        </Grid>
        <Grid lg={3} xl={2.3} container>
          <Box sx={TabSectionStyle.spanItem}>
            <span>View As:</span>
          </Box>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab
              icon={<TocOutlinedIcon sx={TabSectionStyle.iconStyle} />}
              label="Table"
              sx={TabSectionStyle.tableTabsStyling}
              className="tab"
            />
            <Tab
              icon={
                <ShareIcon
                  sx={{
                    ...TabSectionStyle.iconStyle,
                    transform: "rotate(90deg)",
                  }}
                />
              }
              label="Graph"
              sx={TabSectionStyle.graphTabStyling}
            />
          </Tabs>
        </Grid>
      </Grid>
      <Grid container>
        <EnergyInfo />
      </Grid>
      <TabPanel value={value} index={0}>
        <Grid
          sx={{ marginTop: "13px" }}
          container
          item
          xs={12}
          className="justify-between"
        >
          <Grid
            item
            xs={12}
            md={5.93}
            sx={DashboardStyles.EngineManageMain}
            className="border border-radius"
          >
            {/* <CustomTopIssues
              title="Top Issues"
              issuesData={ACTIVE_ENGINE_DATA}
              arrowIcon={false}
              image={false}
              pathname="/issues"
            /> */}

            <UsserAcces users={users} />
          </Grid>
          <Grid
            item
            xs={12}
            md={5.93}
            sx={DashboardStyles.EngineManageMain}
            className="border border-radius top_issues"
          >
            <AllTopIssues pagination={true} />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          className="justify-between"
          sx={{ marginTop: "13px" }}
        >
          <Grid item xs={12} md={5.85} lg={3.88}>
            <DataFlow />
          </Grid>
          <Grid
            item
            xs={12}
            md={5.85}
            lg={4}
            className="border border-radius bg-white"
          >
            <Box>
              <PieChart
                sx={EngineDetailStyle.chartBox}
                chartData={ISSUES_BY_ENGINE_CHART}
                chartLabels={ISSUES_BY_ENGINE_DATA}
                title="Issues by Engine"
                lgHeight={256}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={5.85}
            lg={4}
            className="border border-radius bg-white"
          >
            <Box className="issues-pie__chart__outer">
              <PieChart
                chartData={SENSITIVE_DATATYPE_CHART}
                chartLabels={SENSITIVE_DATATYPE_DATA}
                title="Sensitive data types"
                lgHeight={256}
              />
            </Box>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid
          container
          sx={{
            ...EngineInfoStyle.mainContent,
            justifyContent: "center",
            alignItems: "center",
           
          }}
        >
          <Grid
            sx={{
              ...EngineInfoStyle.innerContent,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid>
              {ZoomAffect === false ? (
                <img
                  style={{
                    width: "80%",
                    height: "90%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  src="/image/map2.png"
                />
              ) : (
                <img
                  style={{
                    width: "80%",
                    height: "90%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                  src="/image/map1.png"
                />
              )}
            </Grid>

            <Grid>
            <button className="zoomBtn" onClick={EnableZoom}>
              <Image
                src="/image/zoom_in.png"
                alt="Node Image"
                width={20}
                height={20}
              />
            </button>
            <br />
            <button className="zoomOutBtn" onClick={DisableZoom}>
              <Image
                src="/image/zoom_out.png"
                alt="Node Image"
                width={20}
                height={20}
              />
            </button>
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
    </div>
  );
}
