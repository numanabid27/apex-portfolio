import * as React from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { rows } from "../../issues.constant";
import { styles } from "./issuesTable.style";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";
import { Box, Chip, Typography } from "@mui/material";
import Image from "next/image";
import useWidth from "./use-width.hook";

function Row(props: {
  row: any;
  filteredTableRows: any;
  currentPage: any;
  ISSUES_TABLE_HEADER: any;
  setOpenModal: any;
  setSelectedRow: any;
  rowsPerPage: any;
}) {
  const {
    row,
    filteredTableRows,
    currentPage,
    ISSUES_TABLE_HEADER,
    setOpenModal,
    setSelectedRow,
    rowsPerPage,
  } = props;
  const [open, setOpen] = React.useState(false);
  const { windowWidth } = useWidth();
  return (
    <>
      <TableRow
        sx={styles.tableRow}
        onClick={() => {
          setOpenModal(row), console.log("row", row);
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={(e) => {setOpen(!open), e.stopPropagation()}}
          >
            {open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
          </IconButton>
        </TableCell>
       
        <TableCell width="19%" sx={{ fontWeight: "bold !important" }}>
          {windowWidth && windowWidth < 1440 ? (
            <>{row.name.slice(0, 15) + " ..."}</>
          ) : (
            <>{row.name}</>
          )}
        </TableCell>
        <TableCell>{row.subcategories}</TableCell>
        <TableCell>
          <IconButton sx={styles.iconBtn}>
            <Chip
              label={row.severity}
              sx={{
                ...styles.severityChip,
                color:
                  row.severity === "Medium"
                    ? Colors.brown
                    : row.severity === "Critical"
                    ? Colors.darkBrown
                    : row.severity === "Low"
                    ? Colors.textGreen
                    : row.severity === "High"
                    ? Colors.textHigh
                    : "",
                bgcolor:
                  row.severity === "Medium"
                    ? Colors.primaryWhite
                    : row.severity === "Critical"
                    ? `${Colors.secondaryWhite} !important`
                    : row.severity === "Low"
                    ? Colors.primaryGreen
                    : row.severity === "High"
                    ? Colors.defaultWhite
                    : "",
                p: 0,
              }}
              icon={
                <CircleIcon
                  sx={{
                    fill:
                      row.severity === "Medium"
                        ? `${Colors.orange} !important`
                        : row.severity === "Critical"
                        ? `${Colors.darkBrown} !important`
                        : row.severity === "High"
                        ? Colors.textHight_102
                        : row.severity === "Low"
                        ? Colors.circleLow
                        : `${Colors.defaultBrown} !important`,

                    ...styles.severityLevel,
                  }}
                />
              }
            />
          </IconButton>
        </TableCell>
        <TableCell>
          <Image src={row.interface} alt="" width={27} height={27} />
        </TableCell>
        <TableCell>
          <Box display="flex" alignItems="center" gap="10px">
            <Chip label={row.engine[0]} variant="outlined" />
            <Typography sx={{ ...styles.font_14, color: Colors.skyBlue }}>
              {row.engine[1]}
            </Typography>
          </Box>
        </TableCell>
        <TableCell>
          <Box display="flex" gap="6px">
              <Image src={row.tags.icon} alt="" width={27} height={27} />
              <Typography>{row.tags.title}</Typography>
          </Box>
        </TableCell>
        <TableCell>{row.status}</TableCell>
        <TableCell component="th" scope="row">
          {row.lastEvent}
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ padding: 0 }} colSpan={10}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            {/* <CustomTable
              rows={filteredTableRows.slice(
                (currentPage - 1) * rowsPerPage,
                currentPage * rowsPerPage
              )}
              column={ISSUES_TABLE_HEADER}
              setOpenModal={setOpenModal}
              isSwitch={false}
              setSelectedRow={setSelectedRow}
              isTableHead={true}
              isTableDate={true}
              issues={false}
            /> */}
            <Table size="small" aria-label="purchases">
              <TableHead>
                <TableRow sx={styles.nestedthead}>
                  <TableCell>#</TableCell>
                  <TableCell>Last event</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Violation Type</TableCell>
                  <TableCell>Severity</TableCell>
                  <TableCell>User Email</TableCell>
                  <TableCell>Session ID</TableCell>
                  <TableCell>Model</TableCell>
                  <TableCell>Source</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.policiesData?.map((items: any) => {
                  return (
                    <TableRow
                      key={items.id}
                      sx={styles.nestedTbody}
                    >
                      <TableCell component="th" scope="row">
                        {items.id}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        <Typography sx={styles.nestedDate}>
                          {items.date}
                        </Typography>
                      </TableCell>
                      <TableCell>{items.role}</TableCell>
                      <TableCell>
                        <Chip
                          label={items.voilationType}
                          sx={styles.nestedChip}
                        />
                      </TableCell>
                      <TableCell>
                        <IconButton sx={styles.iconBtn}>
                          <Chip
                            label={items.severity}
                            sx={{
                              ...styles.severityChip,
                              color:
                                items.severity === "Medium"
                                  ? Colors.brown
                                  : items.severity === "Critical"
                                  ? Colors.darkBrown
                                  : items.severity === "Low"
                                  ? Colors.textGreen
                                  : items.severity === "High"
                                  ? Colors.textHigh
                                  : "",
                              bgcolor:
                                items.severity === "Medium"
                                  ? Colors.primaryWhite
                                  : items.severity === "Critical"
                                  ? Colors.secondaryWhite
                                  : items.severity === "Low"
                                  ? Colors.primaryGreen
                                  : items.severity === "High"
                                  ? Colors.defaultWhite
                                  : "",
                              p: 0,
                            }}
                            icon={
                              <CircleIcon
                                sx={{
                                  fill:
                                    items.severity === "Medium"
                                      ? `${Colors.orange} !important`
                                      : items.severity === "Critical"
                                      ? `${Colors.darkBrown} !important`
                                      : items.severity === "High"
                                      ? Colors.textHight_102
                                      : items.severity === "Low"
                                      ? Colors.circleLow
                                      : `${Colors.defaultBrown} !important`,

                                  ...styles.severityLevel,
                                }}
                              />
                            }
                          />
                        </IconButton>
                      </TableCell>
                      <TableCell sx={{ color: Colors.skyBlue }}>
                        {items.userEmail}
                      </TableCell>
                      <TableCell sx={{ color: Colors.skyBlue }}>
                        {items.sessionId}
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={items.model}
                          variant="outlined"
                          sx={styles.modelChip}
                        />
                      </TableCell>
                      <TableCell>{items.source}</TableCell>
                      <TableCell>{items.status}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CollapsibleTable({
  filteredTableRows,
  currentPage,
  ISSUES_TABLE_HEADER,
  setOpenModal,
  setSelectedRow,
  rowsPerPage,
}: any) {
  return (
    <TableContainer component={Paper} className="collapsibeTable">
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow sx={styles.headerRow}>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Subcategories</TableCell>
            <TableCell>Severity</TableCell>
            <TableCell>Interface</TableCell>
            <TableCell>Engine</TableCell>
            <TableCell>Risk</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Last event</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows
            .slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage)
            .map((row: any, i: number) => {
              return (
                <Row
                  key={i.toString()}
                  row={row}
                  filteredTableRows={filteredTableRows}
                  currentPage={currentPage}
                  ISSUES_TABLE_HEADER={ISSUES_TABLE_HEADER}
                  setOpenModal={setOpenModal}
                  setSelectedRow={setSelectedRow}
                  rowsPerPage={rowsPerPage}
                />
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
