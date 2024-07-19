"use client";

import { styles } from "@/common/styles/global.style";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Box, FormControl, Grid, MenuItem, Select, Typography } from "@mui/material";
import ReactEcharts from "echarts-for-react";
import { SESSION_USER_CHART } from "../../dashboard.constant";
import { SessionTimeStyle } from "./session-time-user.style";
import {useState} from "react"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
/**
 * Renders the Session over Time & Active User data
 * This component displays Session over Time & Active User & its chart
 * @returns The SessionTimeUser chart component
 */

function SessionTimeUser() {
  const [session, setSession] = useState<any>("All Models");
  const SessionHandler = (event: any) => {
    setSession(event.target.value as string);
  };
  return (
    <>
      <Box sx={SessionTimeStyle.SessionTimeMain}>
        <Box>
          <Typography sx={styles.SessionOverTimeText}>
            Sessions over time
          </Typography>
          <Box
            sx={{
              ...SessionTimeStyle.SessionOverTimeBox,
              ...SessionTimeStyle.SessionOvertimeBoxComponent,
            }}
          >
            <span style={SessionTimeStyle.Letterspacing}>57.8M</span>{" "}
            <Box>
              <Typography sx={SessionTimeStyle.SessionTrendingValue}>
                <TrendingUpIcon sx={SessionTimeStyle.TrendingIcon} /> 14.2%
              </Typography>
              <Typography sx={SessionTimeStyle.increaseSession}>increase session</Typography>
            </Box>
          </Box>
        </Box>
        <Box className="dropdown-margin">
          <FormControl variant="standard" sx={SessionTimeStyle.engineOverTime}>
            <Select
              labelId="demo-simple-select-autowidth-label"
              value={session}
              onChange={SessionHandler}
              className="enginDropdown"
              IconComponent={KeyboardArrowDownIcon}
            >
              <MenuItem value="All Models" sx={SessionTimeStyle.SessionText}>
                All Engines
              </MenuItem>
              <MenuItem value="CHAT GPT" sx={SessionTimeStyle.SessionText}>
                CHAT GPT
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box sx={SessionTimeStyle.DashboardChart}>
        <ReactEcharts option={SESSION_USER_CHART} />
      </Box>
    </>
  );
}

export default SessionTimeUser;
