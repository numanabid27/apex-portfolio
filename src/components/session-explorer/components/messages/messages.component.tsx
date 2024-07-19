import calender from "@/common/assets/images/calendar.svg";
import flag from "@/common/assets/images/flag.svg";
import search from "@/common/assets/images/search.svg";
import CustomDialog from "@/common/components/custom-dialog/custom-dialog.component";
import CustomTable from "@/common/components/custom-table/custom-table.component";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ReactEcharts from "echarts-for-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  CONVERSATION,
  ENGINE_NAMES,
  INTEND,
  INTERFACE_NAME,
  TOPICS,
} from "../../session-explore.constant";
import {
  SEVERITY,
  EQUALS,
  MESSAGES_GRAPH,
  SENTIMENT,
  HIRING,
  options,
  MARKETING,
} from "./message.constant";
import { styles } from "./messages.style";
import useMessage from "./use-message.hook";
import Severity from "@/components/create-policy/component/severityLevel/severty.component";
import downArrow from "@/common/assets/images/downs.svg";
import equal from "@/common/assets/images/equal.svg";
import check from "@/common/assets/images/check.svg";
import { Toggle } from "./toggle/togle.component";
import add from "@/common/assets/images/add-query.svg";
import MultiSelect from "@/components/create-policy/component/multiselect/Mutiselect.component";
import ClearIcon from "@mui/icons-material/Clear";
import del from "@/common/assets/images/delete.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useWidth from "@/components/issues/components/issue-table/use-width.hook";

export default function Message() {
  // const { windowWidth } = useWidth();
  const {
    engineName,
    setEngineName,
    openModal,
    setOpenModal,
    selectedRow,
    setSelectedRow,
    finalData,
    startDate,
    endDate,
    setDateRange,
    handleSearch,
    searchQuery,
    allOptions,
    handleAutocompleteChange,
    setIsInterface,
    isInterface,
    isStatus,
    setIsStatus,
    isBuilder,
    setIsBuilder,
    isTopic,
    setIsTopic,
    setisSentiment,
    isSentiment,
    isClick,
    setIsClick
  } = useMessage();

  const SESSION_EXPLORE_TABLE_HEADER = [
    {
      id: 1,
      header: "Flagged",
      accessor: "flag",
      cell: (data: any) => {
        return (
          <>
            {data ? <Image src={data} alt="" width={20} height={20} /> : null}
          </>
        );
      },
    },
    {
      id: 2,
      header: "Title",
      accessor: "title",
    },
    {
      id: 3,
      header: "User",
      accessor: "mails",
      cell: (data: any) => {
        return <Typography sx={{ color: "#2E90FA" }}>{data}</Typography>;
      },
    },
    {
      id: 4,
      header: "Last updated",
      accessor: "lastUpdate",
    },
    {
      id: 7,
      header: "Interface",
      accessor: "interface",
    },
    {
      id: 8,
      header: "Engine",
      accessor: "engineType",
      cell: (data: any) => {
        return (
          <Chip
            sx={styles.engineItem}
            label={data}
            variant="outlined"
          />
        );
      },
    },
    { id: 9, header: "Context", accessor: "context" },
    {
      id: 10,
      header: "Topics",
      accessor: "topics",
      cell: (data: any) => {
        return (
          <Box display="flex" className="issueTbaleChip">
            {data?.map((item: any, i: number) => {
              return (
                <IconButton key={i.toString()}>
                  <Chip
                    sx={styles.topicItem}
                    icon={
                      <>
                        <Image src={item.img} width={20} height={20} alt="" />
                      </>
                    }
                    label={item.title}
                    variant="outlined"
                  />
                </IconButton>
              );
            })}
          </Box>
        );
      },
    },
  ];
 
  return (
    <Box position="relative" width="100%">
      {/*query builder  */}
      <Box sx={styles.queryBuilder}>
        <Button
          onClick={() => setIsBuilder(true)}
          sx={styles.queryBuilderButton}
        >
          Query Builder
        </Button>
        {isBuilder && (
          <Box sx={styles.queryBuilderSec}>
            <Box
              display="flex"
              justifyContent="space-between"
              sx={styles.header}
            >
              <Typography variant="h6">Query builder</Typography>
              <ClearIcon onClick={() => setIsBuilder(false)} />
            </Box>
            <Box
              display="flex"
              flexWrap={{ xs: "wrap", sm: "unset" }}
              gap="10px"
              sx={styles.filterRow}
            >
              <Severity
                title="Select Department"
                img={downArrow}
                severity={SEVERITY}
                ltr={true}
              />
              <Severity
                title="Equals"
                img={equal}
                severity={EQUALS}
                ltr={false}
              />
              <MultiSelect />
            </Box>

            <Box sx={styles.filterRow}>
              <Toggle />
            </Box>
            <Box
              sx={styles.filterRow}
              display="flex"
              gap="10px"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                gap="10px"
                flexWrap={{ xs: "wrap", sm: "unset" }}
              >
                <Severity
                  title="Topic"
                  img={downArrow}
                  severity={SEVERITY}
                  ltr={true}
                />
                <Severity
                  title="Contains"
                  img={check}
                  severity={SEVERITY}
                  ltr={false}
                />
                <Severity
                  title="Marketing"
                  img={downArrow}
                  severity={SEVERITY}
                  ltr={true}
                />
              </Box>
              <Box display="flex" gap="7px" sx={styles.delBtns}>
                <ClearIcon />
                <Image src={del} alt="" width={20} height={20} />
              </Box>
            </Box>

            <Box sx={styles.filterRow}>
              <Toggle />
            </Box>

            <Box
              sx={styles.filterRow}
              display="flex"
              gap="10px"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box
                display="flex"
                gap="10px"
                flexWrap={{ xs: "wrap", sm: "unset" }}
              >
                <Severity
                  title="Sentiment"
                  img={downArrow}
                  severity={SENTIMENT}
                  ltr={true}
                />
                <Severity
                  title="Equals"
                  img={equal}
                  severity={EQUALS}
                  ltr={false}
                />
                <Severity
                  title="Any"
                  img={downArrow}
                  severity={SEVERITY}
                  ltr={true}
                />
              </Box>
              <Box display="flex" gap="7px" sx={styles.delBtns}>
                <ClearIcon />
                <Image src={del} alt="" width={20} height={20} />
              </Box>
            </Box>

            <Grid container pt={3} pb={3} alignItems="center">
              <Grid sm={3} xs={12}>
                <Image
                  src={add}
                  alt=""
                  width={40}
                  height={40}
                  style={{ cursor: "pointer" }}
                />
              </Grid>
              <Grid
                sm={9}
                xs={12}
                display="flex"
                gap="10px"
                justifyContent="flex-end"
                sx={styles.actionSubmit}
              >
                <Button>Create detection rule</Button>
                <Button>Run query</Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
      {/* graphs */}
      <Grid container justifyContent="space-between" mt={10}>
        <Grid
          item
          xs={12}
          md={5.85}
          lg={7.5}
          className="border border-radius bg-white engine-usage"
          sx={styles.GridShadow}
        >
          <Box className="sessionEchart" sx={styles.sessionUser}>
            <Box sx={styles.shankyFilter}>
              {isClick === "Marketing" ? null : (
                <Box sx={styles.hiring}>
                  <Severity
                    title="User department"
                    img={downArrow}
                    severity={SENTIMENT}
                    ltr={true}
                  />
                </Box>
              )}

              <Box
                sx={{
                  ...styles.filter1,
                  ...(isClick === "Marketing" ? styles.filter5 : {}),
                }}
              >
                <Severity
                  title="Topics"
                  img={downArrow}
                  severity={SEVERITY}
                  ltr={true}
                  onItemClick={(label: any) => {
                    setIsClick(label);
                  }}
                />
              </Box>
              <Box
                sx={{
                  ...styles.filter2,
                  ...(isClick === "Hiring" ? styles.filter3 : {}),
                  ...(isClick === "Marketing" ? styles.filter4 : {}),
                }}
              >
                <Severity
                  title="Sentiment"
                  img={downArrow}
                  severity={SENTIMENT}
                  ltr={true}
                />
              </Box>
            </Box>
            {isClick === "Hiring" ? (
              <ReactEcharts option={HIRING} />
            ) : isClick === "Marketing" ? (
              <ReactEcharts option={options} />
            ) : (
              <ReactEcharts option={MARKETING} />
            )}
     
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5.85}
          lg={4.3}
          sx={styles.SessionEngine}
          className="border border-radius bg-white"
        >
          <Grid mb={4} display="flex" alignItems="center">
            <Grid xl={8} xs={7}>
              <Typography variant="h5">Top 5 Weekly Active Users</Typography>
            </Grid>
            <Grid xl={4} xs={5}>
              <Typography className="sessions_state">Messages</Typography>
            </Grid>
          </Grid>
          {MESSAGES_GRAPH.map((item: any, i: number) => {
            return (
              <Grid container sx={styles.activeUser} key={i.toString()}>
                <Grid xl={8} xs={7}>
                  <Typography sx={styles.typography}>{item.title}</Typography>
                </Grid>
                <Grid xl={4} xs={5}>
                  <Box sx={styles.user1}>
                    <Typography sx={styles.typography}>{item.value}</Typography>
                    <ReactEcharts option={item.chart} />
                  </Box>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      {/* search */}

      {/* filters */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={styles.session_filters}
      >
        <Grid item sm={2} xs={12} sx={styles.engineFilter}>
          <FormControl fullWidth sx={styles.userFormControl}>
            <InputLabel
              id="demo-simple-select-label-2"
              className="interLable"
              sx={styles.userText}
            >
              Interface
            </InputLabel>

            <Select
              sx={styles.sessionEngineFilter}
              labelId="demo-simple-select-label-2"
              id="demo-simple-select-2"
              value={isInterface}
              label="Interface"
              className="session-search-input2"
              onChange={(event) => {
                setIsInterface(event.target.value as string);
              }}
              renderValue={() => isInterface}
              IconComponent={KeyboardArrowDownIcon}
            >
              {INTERFACE_NAME.map((item: any) => (
                <MenuItem value={item.name} sx={styles.enginItem} key={item.id}>
                  {item.name}
                  {isInterface === item.name && (
                    <IconButton
                      sx={styles.iconBtn}
                      aria-label="delete"
                      onClick={() => setIsInterface("")}
                    >
                      <ClearIcon sx={styles.closeIcon} />
                    </IconButton>
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={2} xs={12} sx={styles.datePicker} className="dateRange">
          <Image src={calender} alt="" />
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update: any) => {
              setDateRange(update);
            }}
            placeholderText="Last updated"
            isClearable={true}
          />
        </Grid>
        <Grid item sm={2} xs={12} sx={styles.engineFilter}>
          <FormControl sx={styles.formControl}>
            <InputLabel sx={styles.engine}>Engine</InputLabel>
            <Select
              sx={styles.sessionEngineFilter}
              multiple
              value={engineName}
              className="session-search-input2"
              onChange={(e: any) => setEngineName(e.target.value)}
              input={<OutlinedInput label="Engine" />}
              renderValue={(selected) => (
                <Stack gap={1} direction="row" flexWrap="wrap">
                  {selected.map((value: any) => (
                    <Chip
                      sx={styles.chip}
                      key={value}
                      label={value}
                      onDelete={() =>
                        setEngineName(
                          engineName.filter((item: any) => item !== value)
                        )
                      }
                      deleteIcon={
                        <CancelIcon
                          onMouseDown={(event) => event.stopPropagation()}
                        />
                      }
                    />
                  ))}
                </Stack>
              )}
              IconComponent={KeyboardArrowDownIcon}
            >
              {ENGINE_NAMES.map((item: any) => (
                <MenuItem key={item.id} value={item.name}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item sm={2} xs={12} sx={styles.engineFilter}>
          <FormControl fullWidth sx={styles.userFormControl}>
            <InputLabel
              id="demo-simple-select-label-222"
              className="interLable"
              sx={styles.userText}
            >
              Topics
            </InputLabel>

            <Select
              sx={styles.sessionEngineFilter}
              labelId="demo-simple-select-label-222"
              id="demo-simple-select-222"
              value={isTopic}
              label="Topics"
              className="session-search-input222"
              onChange={(event) => {
                setIsTopic(event.target.value as string);
              }}
              renderValue={() => isTopic}
              IconComponent={KeyboardArrowDownIcon}
            >
              {TOPICS.map((item: any) => (
                <MenuItem value={item.name} sx={styles.enginItem} key={item.id}>
                  {item.name}
                  {isTopic === item.name && (
                    <IconButton
                      sx={styles.iconBtn}
                      aria-label="delete"
                      onClick={() => setIsTopic("")}
                    >
                      <ClearIcon sx={styles.closeIcon} />
                    </IconButton>
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item sm={2} xs={12} sx={styles.userConsistancy}>
          <FormControl fullWidth sx={styles.userFormControl}>
            <InputLabel id="demo-simple-select-label-3" sx={styles.userText}>
              Conversation consistency
            </InputLabel>

            <Select
              sx={styles.sessionEngineFilter}
              labelId="demo-simple-select-label-3"
              id="demo-simple-select-3"
              value={isStatus}
              className="session-search-input2"
              label="Conversation consistency"
              onChange={(event) => {
                setIsStatus(event.target.value as string);
              }}
              renderValue={() => isStatus}
              IconComponent={KeyboardArrowDownIcon}
            >
              {CONVERSATION.map((item: any) => (
                <MenuItem value={item.name} sx={styles.enginItem} key={item.id}>
                  {item.name}
                  {isStatus === item.name && (
                    <IconButton
                      sx={styles.iconBtn}
                      aria-label="delete"
                      onClick={() => setIsStatus("")}
                    >
                      <ClearIcon sx={styles.closeIcon} />
                    </IconButton>
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item sm={2} xs={12} sx={styles.engineFilter}>
          <FormControl fullWidth sx={styles.userFormControl}>
            <InputLabel id="demo-simple-select-label-3" sx={styles.userText}>
              Sentiment
            </InputLabel>

            <Select
              sx={styles.sessionEngineFilter}
              labelId="demo-simple-select-label-3"
              id="demo-simple-select-3"
              value={isSentiment}
              className="session-search-input2"
              label="Sentiment"
              onChange={(event) => {
                setisSentiment(event.target.value as string);
              }}
              renderValue={() => isSentiment}
              IconComponent={KeyboardArrowDownIcon}
            >
              {SENTIMENT.map((item: any) => (
                <MenuItem
                  value={item.label}
                  sx={styles.enginItem}
                  key={item.id}
                >
                  {item.label}
                  {isSentiment === item.label && (
                    <IconButton
                      sx={styles.iconBtn}
                      aria-label="delete"
                      onClick={() => setisSentiment("")}
                    >
                      <ClearIcon sx={styles.closeIcon} />
                    </IconButton>
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item sm={2} xs={12} sx={styles.engineFilter}>
          <FormControl fullWidth sx={styles.userFormControl}>
            <InputLabel id="demo-simple-select-label-3" sx={styles.userText}>
              Intent
            </InputLabel>

            <Select
              sx={styles.sessionEngineFilter}
              labelId="demo-simple-select-label-3"
              id="demo-simple-select-3"
              value={isSentiment}
              className="session-search-input2"
              label="Intent"
              onChange={(event) => {
                setisSentiment(event.target.value as string);
              }}
              renderValue={() => isSentiment}
              IconComponent={KeyboardArrowDownIcon}
            >
              {INTEND.map((item: any) => (
                <MenuItem value={item.name} sx={styles.enginItem} key={item.id}>
                  {item.name}
                  {isSentiment === item.name && (
                    <IconButton
                      sx={styles.iconBtn}
                      aria-label="delete"
                      onClick={() => setisSentiment("")}
                    >
                      <ClearIcon sx={styles.closeIcon} />
                    </IconButton>
                  )}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid
          sx={{ ...styles.searchBox, margin: "0 0 0 auto" }}
          className="sesson-search"
          sm={3}
          xs={12}
        >
          <Box sx={styles.searchInner} className="session-search-input">
            <Box sx={styles.searchIcon}>
              <Image src={search} alt="" />
            </Box>
            <Autocomplete
              options={allOptions}
              value={searchQuery}
              onChange={handleAutocompleteChange}
              style={{ flexGrow: "1", width: "100%" }}
              renderInput={(params: any) => (
                <TextField
                  {...params}
                  size="small"
                  type="search"
                  placeholder="Search by session id or free text"
                  sx={styles.searchInput}
                  onChange={handleSearch}
                  value={searchQuery}
                />
              )}
            />
          </Box>
        </Grid>
      </Grid>
      <Box sx={styles.sessionTableRow}>
        <CustomTable
          rows={finalData}
          column={SESSION_EXPLORE_TABLE_HEADER}
          setOpenModal={setOpenModal}
          isSwitch={false}
          setSelectedRow={setSelectedRow}
          isTableHead={true}
          isPagination={true}
        />

        <CustomDialog
          thead={"session"}
          openModal={openModal}
          newData={selectedRow}
          setOpenModal={setOpenModal}
          isMessage={true}
        />
      </Box>
    </Box>
  );
}
