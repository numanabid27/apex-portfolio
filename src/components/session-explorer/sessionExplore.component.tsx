"use client";

import {
  Box,
  Grid,
  Tabs,
  Tab,
} from "@mui/material";
import { styles } from "./session-explore.style";
import useSessionExplore from "./use-session-explore.hook";
import "react-datepicker/dist/react-datepicker.css";
import Messages from "./components/messages/messages.component";
import Sessions from "./components/sessions/sessions.component";
import Users from "./components/users/users.component";
import Files from "./components/files/files.component";

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

export default function SessionExplorer() {
  const {
    handleChange,
    value
  } = useSessionExplore();

  return (
    <Box sx={styles.mainGrid}>
      <Tabs value={value} onChange={handleChange} aria-label="code tabs" sx={styles.tabs}>
        <Tab label="Messages" />
        <Tab label="Sessions" />
        <Tab label="Users" />
        <Tab label="Files" />
        <Tab label="Interfaces" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Messages />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Sessions />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Users />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Files />
      </TabPanel>
      <TabPanel value={value} index={4}>
          <p>interfaces</p>
      </TabPanel>
    </Box>
    
  );
}

