"use client";

import loader from "@/common/assets/images/loader.svg";
import { CustomLineChart } from "@/common/components/custom-line-chart/custom-line-chart.component";
import { Box, Grid, Tab, Tabs, Typography } from "@mui/material";
import Image from "next/image";
import {
  SESSION_EXPLORER_DATA,
  SESSION_EXPLORER_DATA2,
  SESSION_EXPLORER_DATA4,
  SESSION_EXPLORER_DATA3,
} from "./aiBoom.constant";
import { styles } from "./aiBoom.style";
import { File } from "./components/files/file.component";
import { Folder } from "./components/folder/folder.component";
import useAiboom from "./use-aiBoom.hook";
import TopIssuesChart from "../issues/components/top-issues-chart/top-issues-chart.component";
import { GithubFolder } from "./components/githubFolder/githubFolder.component";
import Graphs from "./components/graphs";

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

export default function AiBoom() {
  const {
    handleChange,
    value,
    isDetail,
    handleClick,
    isLoading,
    hoveredIndex,
    isClicked,
    setHoveredIndex,
    setIsClicked,
    repo,
    isColor,
    nestTableData,
    selectedFileData,
  } = useAiboom();
  return (
    <Box sx={styles.mainGrid}>
      {/* tabs */}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="code tabs"
        sx={styles.tabs}
      >
        <Tab label="Box" />
        <Tab label="Github Copilot" />
        <Tab label="Sharepoint" />
        <Tab label="Notion" />
      </Tabs>

      <TabPanel value={value} index={0}>

        <Graphs
          chart1={SESSION_EXPLORER_DATA}
          chart2={SESSION_EXPLORER_DATA2}
          firstValue="45%"
          secondValue="65%"
          firstValueText="of total content written with AI"
          secondValueText="of words written in AI over last month"
          topChart1="Amount of words written by AI assistants trend"
        />
        <Box display="flex" alignItems="center" mt={6} mb={2} gap="7px">
          <Typography sx={styles.font_700}>Repo Name</Typography>
          <Typography sx={styles.repo}>|</Typography>
          <Typography sx={[styles.repo, styles.font_700]}>
            Branch: <span>Master</span>
          </Typography>
        </Box>
        <AiBox
          isDetail={isDetail}
          handleClick={handleClick}
          isLoading={isLoading}
          hoveredIndex={hoveredIndex}
          isClicked={isClicked}
          setHoveredIndex={setHoveredIndex}
          setIsClicked={setIsClicked}
          repo={repo}
          isColor={isColor}
          nestTableData={nestTableData}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Graphs
          chart1={SESSION_EXPLORER_DATA3}
          chart2={SESSION_EXPLORER_DATA4}
          firstValue="60%"
          secondValue="65%"
          firstValueText="of total code written with Copilot"
          secondValueText="of code written in copilot over last month"
          topChart1="Amount of code lines written by copilot trend"
        />
        <Box display="flex" alignItems="center" mt={6} mb={2} gap="7px">
          <Typography sx={styles.font_700}>Repo Name</Typography>
          <Typography sx={styles.repo}>|</Typography>
          <Typography sx={[styles.repo, styles.font_700]}>
            Branch: <span>Master</span>
          </Typography>
        </Box>
        <GitHub
          isDetail={isDetail}
          handleClick={handleClick}
          isLoading={isLoading}
          hoveredIndex={hoveredIndex}
          isClicked={isClicked}
          setHoveredIndex={setHoveredIndex}
          setIsClicked={setIsClicked}
          repo={repo}
          isColor={isColor}
          nestTableData={nestTableData}
          selectedFileData={selectedFileData}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box display="flex" alignItems="center" mt={6} mb={2} gap="7px">
          <Typography sx={styles.font_700}>Repo Name</Typography>
          <Typography sx={styles.repo}>|</Typography>
          <Typography sx={[styles.repo, styles.font_700]}>
            Branch: <span>Master</span>
          </Typography>
        </Box>
        <AiBox />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box display="flex" alignItems="center" mt={6} mb={2} gap="7px">
          <Typography sx={styles.font_700}>Repo Name</Typography>
          <Typography sx={styles.repo}>|</Typography>
          <Typography sx={[styles.repo, styles.font_700]}>
            Branch: <span>Master</span>
          </Typography>
        </Box>
        <AiBox />
      </TabPanel>
    </Box>
  );
}

// BOX
export const AiBox = ({
  isDetail,
  handleClick,
  isLoading,
  hoveredIndex,
  isClicked,
  setHoveredIndex,
  setIsClicked,
  repo,
  isColor,
  nestTableData,
  selectedFileData,
}: any) => {
  return (
    <Grid container gap="10px" mt={4} justifyContent="space-between">
      <Grid item xs={12} lg={7.5}>
        <Folder
          data={nestTableData}
          handleClick={handleClick}
          isColor={isColor}
        />
      </Grid>
      <Grid item xs={12} lg={4.3}>
        {isLoading ? (
          <Image
            src={loader}
            alt="loader"
            width={100}
            height={100}
            style={{ margin: "0 auto", display: "block" }}
          />
        ) : (
          <File
            isDetail={isDetail}
            hoveredIndex={hoveredIndex}
            isClicked={isClicked}
            setHoveredIndex={setHoveredIndex}
            setIsClicked={setIsClicked}
            repo={repo}
            selectedFileData={selectedFileData}
          />
        )}
      </Grid>
    </Grid>
  );
};

// github
export const GitHub = ({
  isDetail,
  handleClick,
  isLoading,
  hoveredIndex,
  isClicked,
  setHoveredIndex,
  setIsClicked,
  repo,
  isColor,
  nestTableData,
  selectedFileData,
}: any) => {
  return (
    <Grid container gap="10px" mt={4} justifyContent="space-between">
      <Grid item xs={12} lg={7.5}>
        <GithubFolder
          data={nestTableData}
          handleClick={handleClick}
          isColor={isColor}
        />
      </Grid>
      <Grid item xs={12} lg={4.3}>
        {isLoading ? (
          <Image
            src={loader}
            alt="loader"
            width={100}
            height={100}
            style={{ margin: "0 auto", display: "block" }}
          />
        ) : (
          <File
            isDetail={isDetail}
            hoveredIndex={hoveredIndex}
            isClicked={isClicked}
            setHoveredIndex={setHoveredIndex}
            setIsClicked={setIsClicked}
            repo={repo}
            selectedFileData={selectedFileData}
          />
        )}
      </Grid>
    </Grid>
  );
};
