"use client";

import collapse from "@/common/assets/images/collapse.svg";
import exportImg from "@/common/assets/images/export.svg";
import { ButtonComponent } from "@/common/components/button/button";
import CustomDialog from "@/common/components/custom-dialog/custom-dialog.component";
import { CustomDropdown } from "@/common/components/custom-dropdown/custom-dropdown.component";
import { CustomPagination } from "@/common/components/custom-pagination/custom-pagination.component";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Chip, Grid, Typography } from "@mui/material";
import CollapsibleTable from "./components/issue-table/issuesTable.component";
import TopIssuesChart from "./components/top-issues-chart/top-issues-chart.component";
import { FILTERS_DROPDOWN, rows } from "./issues.constant";
import { styles } from "./issues.style";
import useIssues from "./use-issues.hook";
import switchGraph from "@/common/assets/images/switchGraph.svg";
import { useState } from "react";
import SwitchGraph from "./components/switch-graph/switchGrpah.component";


function Issues() {
  const {
    openModal,
    setOpenModal,
    setSelectedRow,
    searchQuery,
    setSearchQuery,
    currentPage,
    setCurrentPage,
    rowsPerPage,
    setSelectedFilters,
    filteredTableRows,
    selectedFilters,
    handleDeleteOption,
  } = useIssues(rows);

  const ISSUES_TABLE_HEADER = [
    { id: 1, header: "Last event", accessor: "timestamp" },
    {
      id: 2,
      header: "Violation Category ",
      accessor: "violation",
      cell: (data: any) => {
        return (
          <Chip
            sx={styles.voilationChip}
            label={
              <>
                <Box>
                  <Typography sx={styles.outgoing}>
                    Outgoing Data:
                    <span style={styles.outgoingBold}>{`${data}`}</span>
                  </Typography>
                </Box>
              </>
            }
          />
        );
      },
    },
    {
      id: 3,
      header: "Source",
      accessor: "source",
    },
    {
      id: 4,
      header: "Engine ",
      accessor: "engine",
      cell: (data: any) => {
        return <Chip sx={styles.chip} label={data} variant="outlined" />;
      },
    },
    {
      id: 5,
      header: "Conversation ID",
      accessor: "conversationalId",
      cell: (data: any) => {
        return (
          <Typography sx={styles.conversationText}>
            {data.slice(0, 10) + " ..."}
          </Typography>
        );
      },
    },
    {
      id: 6,
      header: "User Email",
      accessor: "user",
      cell: (data: any) => {
        return <Typography sx={styles.email}>{data}</Typography>;
      },
    },
    {
      id: 7,
      header: "Severity",
      accessor: "severity",
      cell: (data: any) => {
        return (
          <Chip
            label={data}
            sx={{
              ...styles.sverityChip,
              color:
                data === "Medium"
                  ? Colors.brown
                  : data === "Critical"
                  ? Colors.darkBrown
                  : Colors.defaultBrown,
              bgcolor:
                data === "Medium"
                  ? Colors.primaryWhite
                  : data === "Critical"
                  ? Colors.secondaryWhite
                  : Colors.defaultWhite,
              p: 0,
            }}
            icon={
              <CircleIcon
                sx={{
                  ...styles.Icon,
                  color:
                    data === "Medium"
                      ? `${Colors.brown} !important`
                      : data === "Critical"
                      ? `${Colors.darkBrown} !important`
                      : data === "High"
                      ? `${Colors.orange} !important`
                      : `${Colors.defaultBrown} !important`,
                }}
              />
            }
          />
        );
      },
    },
    {
      id: 8,
      header: "Status",
      accessor: "status",
    },
    {
      id: 9,
      header: "Chat",
      accessor: "chat",
    },
  ];

  const [isSwitch, setIsSwitch] = useState(false);
  const handleClick = () => {
    setIsSwitch(!isSwitch);
  };

  
  return (
    <Box sx={styles.issueGrid}>
      <Box display="flex" gap="10px" justifyContent="flex-end" flexDirection={{sm:'row', xs:'column'}} mt={5}>
        <ButtonComponent
          title="Switch graph"
          icon={switchGraph}
          handleClick={handleClick}
        />
        <ButtonComponent title="Collapse" icon={collapse} />
        <ButtonComponent title="Export" icon={exportImg} />
      </Box>

      {isSwitch ? (
          <SwitchGraph />
      ) : (
        <TopIssuesChart />
      )}

      <Grid container>
        <CustomDropdown
          dropdownData={FILTERS_DROPDOWN}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          handleDeleteOption={handleDeleteOption}
          thead={true}
          setOpenModal={setOpenModal}
        />
        <CollapsibleTable
          filteredTableRows={filteredTableRows.slice(
            (currentPage - 1) * rowsPerPage,
            currentPage * rowsPerPage
          )}
          currentPage={currentPage}
          ISSUES_TABLE_HEADER={ISSUES_TABLE_HEADER}
          setOpenModal={setOpenModal}
          setSelectedRow={setSelectedRow}
          setCurrentPage={setCurrentPage}
          rowsPerPage={rowsPerPage}
        />
        {
          <CustomPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            filteredTableRows={filteredTableRows}
            rowsPerPage={rowsPerPage}
          />
        }
        <CustomDialog
          thead={"issue"}
          openModal={openModal}
          setOpenModal={setOpenModal}
          issues={true}
        />
      </Grid>
    </Box>
  );
}

export default Issues;
