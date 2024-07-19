"use client";

import {
  Box,
  Button,
  Chip,
  Collapse,
  Grid,
  IconButton,
  InputBase,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { style } from "./createPolicy.style";
import { actionsAction, assets, POLICIES_CHECKBOX_FILTER } from "./createPolicy.constant";
import CheckBoxComponent from "./component/checkbox.component";
import { Rows } from "../policies/policies.constant";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Paper from "@mui/material/Paper";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useEffect, useState } from "react";
import msg from "@/common/assets/images/msg.svg";
import file from "@/common/assets/images/file.svg";
import bell from "@/common/assets/images/bell.svg";
import Image from "next/image";
import block from "@/common/assets/images/shield-off.svg";
import redat from "@/common/assets/images/shield-minus.svg";
import check from "@/common/assets/images/check-check.svg";
import { severity } from "./createPolicy.constant";
import CustomizedAccordions from "./component/customizeAccordian/index.component";
import Filters from "../session-explorer/components/filters/filter.component";
import search from "@/common/assets/images/search.svg";
import useFilterPolicy from "./use-createPolicies.hook";
import PolicyFilters from "./component/filters";
import CustomDialog from "@/common/components/custom-dialog/custom-dialog.component";
import usePolicies from "../policies/use-policies.hook";
import Severity from "./component/severityLevel/severty.component";
import { POLICIES_GPT } from "../policies/components/model-data/components/model-data/modal-data.constants";
import downArrow from "@/common/assets/images/downs.svg";
import gemini from "@/common/assets/images/gemini.svg";
import AddIcon from "@mui/icons-material/Add";

function Row(props: any) {
  const { Rows, selectedRow, setSelectedRow, finalData, setOpenModal, setAb } =
    props;
  // const { selectedRow, setSelectedRow, finalData } = useFilterPolicy();
  // const { Rows } = props;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (selectedRow?.id) {
      const res = finalData.find((item: any) => item.id === selectedRow?.id);
      setSelectedRow(res);
    }
  }, [selectedRow]);

  const [isOpenSwitch, setIsOpenSwitch] = useState(false);

  const switchChange = (e: any) => {
    setIsOpenSwitch(e.target.checked);
  };

  return (
    <>
      <TableRow
        sx={style.parentRow}
        onClick={() => {
          setOpenModal(true);
          setSelectedRow(Rows);
        }}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={(e: any) => {
              setOpen(!open);
              e.stopPropagation();
            }}
          >
            {Rows.policiesData ? (
              <>{open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}</>
            ) : null}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" sx={style.type}>
          <Box display="flex" gap="21px">
            {
              <Rows.component
                onClick={(e: any) => e.stopPropagation()}
                onChange={switchChange}
              />
            }
            {Rows.type}
          </Box>
        </TableCell>
        <TableCell>
          {typeof Rows.action === "string" ? (
            <Button sx={{ gap: "10px", textTransform: "capitalize" }}>
              <Image src={bell} alt="" />
              <Typography sx={style.engineCell}>{Rows.action}</Typography>
            </Button>
          ) : (
            <Box onClick={(e: any) => e.stopPropagation()}>
              <Rows.action
                title="Set for all"
                img={check}
                severity={severity}
                ltr={false}
                data={actionsAction}
              />
            </Box>
          )}
        </TableCell>
        <TableCell>
          {typeof Rows.engines === "object" ? (
            <Box display="flex" gap="5px">
              {Rows.engines?.map((item: any, i: number) => {
                return (
                  <Button
                    sx={{ gap: "5px", textTransform: "capitalize" }}
                    key={i.toString()}
                  >
                    <Image src={item.icon} alt="" />
                    <Typography sx={style.engineCell}>{item.text}</Typography>
                  </Button>
                );
              })}
            </Box>
          ) : (
            <Box onClick={(e: any) => e.stopPropagation()}>
              <Rows.engines />
            </Box>
          )}
        </TableCell>
        <TableCell>
          {typeof Rows.headerAssets === "string" ? (
            <Button sx={{ gap: "10px", textTransform: "capitalize" }}>
              <Typography sx={style.engineCell}>{Rows.headerAssets}</Typography>
            </Button>
          ) : (
            <Box onClick={(e: any) => e.stopPropagation()}>
              <Rows.headerAssets
                title="Set for all"
                img={check}
                severity={severity}
                ltr={false}
                data={assets}
              />
            </Box>
          )}
        </TableCell>
        <TableCell align="right">
          {typeof Rows.integration === "object" ? (
            <Box display="flex" gap="5px">
              {Rows.integration.map((item: any, i: number) => {
                return (
                  <Chip
                    label={item}
                    variant="outlined"
                    key={i.toString()}
                    sx={style.integration}
                  />
                );
              })}
            </Box>
          ) : (
            <Box onClick={(e: any) => e.stopPropagation()}>
              <Rows.integration />
            </Box>
          )}
        </TableCell>
        <TableCell>
          {typeof Rows.headerSeverityevel === "string" ? (
            <IconButton sx={style.iconBtn}>
              <Chip
                label={Rows.headerSeverityevel}
                sx={{
                  ...style.severityChip,
                  color:
                    Rows.headerSeverityevel === "Medium"
                      ? Colors.brown
                      : Rows.headerSeverityevel === "Critical"
                      ? Colors.darkBrown
                      : Rows.headerSeverityevel === "Low"
                      ? Colors.textGreen
                      : Rows.headerSeverityevel === "High"
                      ? Colors.textHigh
                      : "",
                  bgcolor:
                    Rows.headerSeverityevel === "Medium"
                      ? Colors.primaryWhite
                      : Rows.headerSeverityevel === "Critical"
                      ? Colors.secondaryWhite
                      : Rows.headerSeverityevel === "Low"
                      ? Colors.primaryGreen
                      : Rows.headerSeverityevel === "High"
                      ? Colors.defaultWhite
                      : "",
                  p: 0,
                }}
                icon={
                  <CircleIcon
                    sx={{
                      fill:
                        Rows.headerSeverityevel === "Medium"
                          ? `${Colors.orange} !important`
                          : Rows.headerSeverityevel === "Critical"
                          ? `${Colors.darkBrown} !important`
                          : Rows.headerSeverityevel === "High"
                          ? Colors.circleHigh
                          : Rows.headerSeverityevel === "Low"
                          ? Colors.circleLow
                          : `${Colors.defaultBrown} !important`,

                      ...style.severityLevel,
                    }}
                  />
                }
              />
            </IconButton>
          ) : (
            <Box onClick={(e: any) => e.stopPropagation()}>
              <Rows.headerSeverityevel
                title="Set for all"
                img={check}
                severity={severity}
                ltr={false}
                policySeverity={true}
              />
            </Box>
          )}
        </TableCell>
      </TableRow>

      {/* nested row */}
      <TableRow>
        <TableCell style={{ padding: "0px" }} colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box>
              <Table
                size="small"
                aria-label="purchases"
                sx={style.nestedTableRow}
              >
                <TableBody sx={style.thBorder}>
                  {Rows.policiesData?.map((historyRow: any) => (
                    <TableRow key={historyRow.date}>
                      <TableCell></TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={style.nestedCell}
                      >
                        <Box display="flex" alignItems="center" gap="16px">
                          {isOpenSwitch && isOpenSwitch ? (
                            <> {<historyRow.component defaultChecked />}</>
                          ) : (
                            <>{<historyRow.component />}</>
                          )}

                          {historyRow.keyWord && <historyRow.keyWord />}
                          {historyRow.policyName}
                        </Box>
                      </TableCell>
                      <TableCell sx={style.nestedCell}>
                        <Box display="flex" gap="10px">
                          {historyRow.type === "Block" ? (
                            <Image src={block} alt="" />
                          ) : historyRow.type === "Redact" ? (
                            <Image src={redat} alt="" />
                          ) : historyRow.type === "Notify" ? (
                            <Image src={bell} alt="" />
                          ) : (
                            ""
                          )}
                          {historyRow.type}
                        </Box>
                      </TableCell>
                      <TableCell sx={style.nestedCell}>
                        <Box display="flex" gap="5px">
                          {historyRow.engine?.map((item: any, i: number) => {
                            return (
                              <Box display="flex" gap="5px" key={item.id}>
                                <Image
                                  src={item.icon}
                                  alt=""
                                  width={17}
                                  height={17}
                                />
                                <Typography
                                  fontSize="14px"
                                  color={`${Colors.primary_101}`}
                                >
                                  {item.text}
                                </Typography>
                              </Box>
                            );
                          })}
                        </Box>
                      </TableCell>
                      <TableCell sx={style.nestedCell}>
                        <Box display="flex" gap="10px">
                          {historyRow.assets === "File" ? (
                            <Image src={file} alt="" />
                          ) : historyRow.assets === "Message" ? (
                            <Image src={msg} alt="" />
                          ) : (
                            ""
                          )}
                          {historyRow.assets}
                        </Box>
                      </TableCell>
                      <TableCell sx={style.nestedCell}>
                        <Box display="flex" gap="10px">
                          <Box display="flex" gap="5px">
                            {historyRow.integration.map(
                              (item: any, i: number) => {
                                return (
                                  <Chip
                                    label={item}
                                    variant="outlined"
                                    key={i.toString()}
                                    sx={style.integration}
                                  />
                                );
                              }
                            )}
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell sx={style.nestedCell}>
                        <IconButton sx={style.iconBtn}>
                          <Chip
                            label={historyRow.severityLevel}
                            sx={{
                              ...style.severityChip,
                              color:
                                historyRow.severityLevel === "Medium"
                                  ? Colors.brown
                                  : historyRow.severityLevel === "Critical"
                                  ? Colors.darkBrown
                                  : historyRow.severityLevel === "Low"
                                  ? Colors.textGreen
                                  : historyRow.severityLevel === "High"
                                  ? Colors.textHigh
                                  : "",
                              bgcolor:
                                historyRow.severityLevel === "Medium"
                                  ? Colors.primaryWhite
                                  : historyRow.severityLevel === "Critical"
                                  ? Colors.secondaryWhite
                                  : historyRow.severityLevel === "Low"
                                  ? Colors.primaryGreen
                                  : historyRow.severityLevel === "High"
                                  ? Colors.defaultWhite
                                  : "",
                              p: 0,
                            }}
                            icon={
                              <CircleIcon
                                sx={{
                                  fill:
                                    historyRow.severityLevel === "Medium"
                                      ? `${Colors.orange} !important`
                                      : historyRow.severityLevel === "Critical"
                                      ? `${Colors.darkBrown} !important`
                                      : historyRow.severityLevel === "High"
                                      ? Colors.circleHigh
                                      : historyRow.severityLevel === "Low"
                                      ? Colors.circleLow
                                      : `${Colors.defaultBrown} !important`,

                                  ...style.severityLevel,
                                }}
                              />
                            }
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default function CreatePolicy(id: any) {
  const {
    selectedRow,
    setSelectedRow,
    finalData,
    engineName,
    setEngineName,
    setActions,
    actions,
    setDateRange,
    setseverity,
    severity,
    isStatus,
    setIsStatus,
    tags,
    setTags,
  } = useFilterPolicy();

  const {
    openModal,
    setOpenModal,
    setIsModel,
    isModel,
    isPrompt,
    setIsPrompt,
  } = usePolicies();
  const [ab, setAb] = useState("");
  const [isGenerate, setIsGenerate] = useState(false);
  return (
    <>
      <Box sx={style.createPolicy}>
        {/* right search bar and left side filters */}
        <Grid container justifyContent="space-between">
          <Grid sm={8} xs={11.7}>
            <PolicyFilters
              users={false}
              policies={true}
              engineName={engineName}
              setEngineName={setEngineName}
              setActions={setActions}
              actions={actions}
              setDateRange={setDateRange}
              setseverity={setseverity}
              severity={severity}
              isStatus={isStatus}
              setIsStatus={setIsStatus}
              setTags={setTags}
              tags={tags}
            />
          </Grid>
          <Grid sm={3.5} xs={12}>
            <Paper
              component="form"
              sx={{
                p: "3px 9px",
                border: "1px solid #CFD4DC",
                boxShadow: "0px 1px 2px 0px #1018280D",
                borderRadius: "8px",
                display: { sm: "block", xs: "none" },
              }}
            >
              <IconButton sx={{ p: "10px" }} aria-label="menu">
                <Image src={search} alt="" />
              </IconButton>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "Search" }}
              />
            </Paper>
          </Grid>
        </Grid>

        <Box sx={style.createPolicyGrid}>
          <Box
            sx={{
              marginLeft: "auto",
              display: "flex",
              justifyContent: { sm: "flex-end", xs: "center" },
              flexWrap: { sm: "unset", xs: "wrap" },
            }}
          >
            {POLICIES_CHECKBOX_FILTER?.map((item: any, i: number) => {
              return (
                <CheckBoxComponent
                  id={item?.id}
                  key={i.toString()}
                  label={item?.value}
                  check={item?.check}
                  policy={true}
                  checkedValue={item?.checkedValue}
                  enable={item?.enable}
                />
              );
            })}
          </Box>

          {finalData?.map((item: any) => {
            return (
              <Box key={item.id}>
                <CustomizedAccordions
                  id={item.id}
                  title={item.value}
                  component={
                    <TableContainer component={Paper} className="scrollStyle">
                      <Table aria-label="collapsible table">
                        {item.value === "Responsible AI usage" ? (
                          <TableHead>
                            <TableRow sx={style.tableRow}>
                              <TableCell></TableCell>
                              <TableCell sx={style.typography}>Type</TableCell>
                              <TableCell sx={style.typography}>
                                Action
                              </TableCell>
                              <TableCell sx={style.typography}>
                                Engines
                              </TableCell>
                              <TableCell sx={style.typography}>
                                Assets
                              </TableCell>
                              <TableCell sx={style.typography}>Tags</TableCell>
                              <TableCell sx={style.typography}>
                                Criticality
                              </TableCell>
                            </TableRow>
                          </TableHead>
                        ) : (
                          <TableHead>
                            <TableRow sx={style.tableRow}>
                              <TableCell></TableCell>
                              <TableCell sx={style.typography}>Type</TableCell>
                              <TableCell sx={style.typography}>
                                Action
                              </TableCell>
                              <TableCell sx={style.typography}>
                                Engines
                              </TableCell>
                              <TableCell sx={style.typography}>
                                Groups
                              </TableCell>
                              <TableCell sx={style.typography}>Tags</TableCell>
                              <TableCell sx={style.typography}>
                                Criticality
                              </TableCell>
                            </TableRow>
                          </TableHead>
                        )}

                        <TableBody>
                          {item?.policiesMainData?.map((Rows: any) => (
                            <Row
                              key={Rows.name}
                              Rows={Rows}
                              selectedRow={selectedRow}
                              setSelectedRow={setSelectedRow}
                              finalData={finalData}
                              setOpenModal={setOpenModal}
                              setAb={setAb}
                            />
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  }
                />
              </Box>
            );
          })}
        </Box>

        <Button sx={style.save}>Save</Button>
      </Box>
      {/* delete policy model */}
      {isModel && (
        <Box sx={style.deleteBackdrop}>
          <Box sx={{ ...style.deleteModel, background: "#fff" }}>
            <Typography variant="h5">Delete Policy</Typography>
            <Typography variant="h6">
              By proceeding, you will permanently lose all data associated with
              this policy. Are you sure you want to permanently delete this
              policy?
            </Typography>
            <Box display="flex" justifyContent="flex-end" gap="10px">
              <Button
                onClick={() => {
                  setIsModel(false);
                }}
                sx={style.cancel}
              >
                Cancel
              </Button>
              <Button sx={style.del}>Yes, delete it</Button>
            </Box>
          </Box>
        </Box>
      )}

      {/* prompt model */}
      {isPrompt && (
        <Box sx={style.deleteBackdrop}>
          <Box
            sx={{ ...style.deleteModel, background: "#F9FAFB" }}
            className="modelMain"
          >
            <Box sx={style.actionBtn}>
              <Severity
                title="Select Engine"
                img={downArrow}
                severity={POLICIES_GPT}
                ltr={true}
              />
              <Button className="testBtn">
                <AddIcon />
                New Test
              </Button>
            </Box>

            <Box sx={style.promptBox}>
              <Typography variant="h6">Prompt</Typography>
              <textarea
                placeholder="What's my email address number?"
                rows={7}
              ></textarea>

              <Box sx={style.bard}>
                <Image src={gemini} alt="" />
                <Box>
                  <Typography color="#374151" pb={1} fontWeight={500}>
                    Your email is
                  </Typography>
                  <Typography color="#D92D20" fontWeight={500}>
                    Jhon_doe@gmail.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={style.voilationBox}>
                <Typography variant="h4">
                  <span>1 Violations: </span>
                  PII (email)
                </Typography>
                <Box sx={style.piBox}>
                  <Typography variant="h2">PII</Typography>
                  <Typography color="#374151" pt={2}>
                    Personally identifiable information (PII) is any information
                    connected to a specific individual that can be used to
                    uncover that individuals identity, such as their social
                    security number, full name, email address or phone number.
                  </Typography>
                </Box>
                <Box sx={style.piBox}>
                  <Typography variant="h2">Email</Typography>
                  <Typography color="#374151" pt={2}>
                    Personally identifiable information (PII) is any information
                    connected to a specific individual that can be used to
                    uncover
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box display="flex" justifyContent="center" gap="10px">
              <Button className="runTest">Run Test</Button>
              <Button
                className="testBtn"
                onClick={() => {
                  setIsPrompt(false);
                }}
              >
                Stop
              </Button>
            </Box>
          </Box>
        </Box>
      )}
      <CustomDialog
        selectedRow={selectedRow}
        thead={"policy"}
        openModal={openModal}
        setOpenModal={setOpenModal}
        setIsModel={setIsModel}
        setIsPrompt={setIsPrompt}
        createPolicy={true}
        setIsGenerate={setIsGenerate}
        isGenerate={isGenerate}
      />
    </>
  );
}
