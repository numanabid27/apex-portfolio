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
} from "@mui/material";
import DatePicker from "react-datepicker";
import Image from "next/image";
import React from "react";
import useSessions from "../sessions/use-seesions.hook";
import {
  ENGINE_NAMES,
  INTERFACE_NAME,
  POLICY_TOPICS,
  STATUS,
  TOPICS,
} from "../../session-explore.constant";
import filter from "@/common/assets/images/more-filters.svg";
import { styles } from "../sessions/sessions.style";
import ClearIcon from "@mui/icons-material/Clear";
import calender from "@/common/assets/images/calendar.svg";
import CancelIcon from "@mui/icons-material/Cancel";
import search from "@/common/assets/images/search.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Filters = ({ users, policies }: any) => {
  const {
    engineName,
    setEngineName,
    startDate,
    endDate,
    setDateRange,
    setIsInterface,
    isInterface,
    isStatus,
    setIsStatus,
    setTopicName,
    topicName,
    allOptions,
  } = useSessions();
  return (
    <>
      {/* filters */}
      <Grid
        container
        spacing={2}
        alignItems="center"
        sx={styles.session_filters}
      >
        {policies ? (
          <>
            <Grid item sm={2} xs={12} sx={styles.engineFilter}>
              <FormControl sx={styles.formControl}>
                <InputLabel sx={styles.engine} className="interLable2">
                  Groups
                </InputLabel>
                <Select
                  sx={styles.sessionEngineFilter}
                  multiple
                  value={topicName}
                  onChange={(e: any) => setTopicName(e.target.value)}
                  input={<OutlinedInput label="Topics" />}
                  renderValue={(selected) => (
                    <Stack gap={1} direction="row" flexWrap="wrap">
                      {selected.map((value: any) => (
                        <Chip
                          sx={styles.chip}
                          key={value}
                          label={value}
                          onDelete={() =>
                            setTopicName(
                              topicName.filter((item: any) => item !== value)
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
                  {STATUS.map((item: any) => (
                    <MenuItem key={item.id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item sm={2} xs={12} sx={styles.engineFilter}>
              <FormControl sx={styles.formControl}>
                <InputLabel sx={styles.engine} className="interLable2">
                  Engine
                </InputLabel>
                <Select
                  sx={styles.sessionEngineFilter}
                  multiple
                  value={engineName}
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

            <Grid item sm={2} xs={12} sx={styles.user} width="119px">
              <FormControl fullWidth sx={styles.userFormControl}>
                <InputLabel
                  id="demo-simple-select-label-3"
                  className="interLable"
                  sx={styles.userText}
                >
                  policy name
                </InputLabel>

                <Select
                  sx={styles.sessionEngineFilter}
                  labelId="demo-simple-select-label-3"
                  id="demo-simple-select-3"
                  value={isStatus}
                  label="Status"
                  onChange={(event) => {
                    setIsStatus(event.target.value as string);
                  }}
                  renderValue={() => isStatus}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  {POLICY_TOPICS.map((item: any) => (
                    <MenuItem
                      value={item.name}
                      sx={styles.enginItem}
                      key={item.id}
                    >
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

            <Grid item sm={2} xs={12} sx={styles.user}>
              <FormControl fullWidth sx={styles.userFormControl}>
                <InputLabel
                  id="demo-simple-select-label-3"
                  className="interLable"
                  sx={styles.userText}
                >
                  Action
                </InputLabel>

                <Select
                  sx={styles.sessionEngineFilter}
                  labelId="demo-simple-select-label-3"
                  id="demo-simple-select-3"
                  value={isStatus}
                  label="Status"
                  onChange={(event) => {
                    setIsStatus(event.target.value as string);
                  }}
                  renderValue={() => isStatus}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  {TOPICS.map((item: any) => (
                    <MenuItem
                      value={item.name}
                      sx={styles.enginItem}
                      key={item.id}
                    >
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

            <Grid item sm={2} xs={12} paddingLeft="0px !important">
              <Button sx={styles.moreSelected}>
                <Image src={filter} alt="" width={15} height={15} />
                More Filters
              </Button>
            </Grid>
          </>
        ) : (
          <>
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
                  onChange={(event) => {
                    setIsInterface(event.target.value as string);
                  }}
                  renderValue={() => isInterface}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  {INTERFACE_NAME.map((item: any) => (
                    <MenuItem
                      value={item.name}
                      sx={styles.enginItem}
                      key={item.id}
                    >
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
            <Grid
              item
              sm={2}
              xs={12}
              sx={styles.datePicker}
              className="dateRange"
            >
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
                <InputLabel sx={styles.engine} className="interLable2">
                  Engine
                </InputLabel>
                <Select
                  sx={styles.sessionEngineFilter}
                  multiple
                  value={engineName}
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
              <FormControl sx={styles.formControl}>
                <InputLabel sx={styles.engine} className="interLable2">
                  Topics
                </InputLabel>
                <Select
                  sx={styles.sessionEngineFilter}
                  multiple
                  value={topicName}
                  onChange={(e: any) => setTopicName(e.target.value)}
                  input={<OutlinedInput label="Topics" />}
                  renderValue={(selected) => (
                    <Stack gap={1} direction="row" flexWrap="wrap">
                      {selected.map((value: any) => (
                        <Chip
                          sx={styles.chip}
                          key={value}
                          label={value}
                          onDelete={() =>
                            setTopicName(
                              topicName.filter((item: any) => item !== value)
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
                  {STATUS.map((item: any) => (
                    <MenuItem key={item.id} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item sm={2} xs={12} sx={styles.user}>
              <FormControl fullWidth sx={styles.userFormControl}>
                <InputLabel
                  id="demo-simple-select-label-3"
                  className="interLable"
                  sx={styles.userText}
                >
                  Status
                </InputLabel>

                <Select
                  sx={styles.sessionEngineFilter}
                  labelId="demo-simple-select-label-3"
                  id="demo-simple-select-3"
                  value={isStatus}
                  label="Status"
                  onChange={(event) => {
                    setIsStatus(event.target.value as string);
                  }}
                  renderValue={() => isStatus}
                  IconComponent={KeyboardArrowDownIcon}
                >
                  {TOPICS.map((item: any) => (
                    <MenuItem
                      value={item.name}
                      sx={styles.enginItem}
                      key={item.id}
                    >
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

            <Grid item sm={2} xs={12} paddingLeft="0px !important">
              <Button sx={styles.moreSelected}>
                <Image src={filter} alt="" width={15} height={15} />
                More Filters
              </Button>
            </Grid>
          </>
        )}

        {users && (
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
                value={""}
                style={{ flexGrow: "1", width: "100%" }}
                renderInput={(params: any) => (
                  <TextField
                    {...params}
                    size="small"
                    type="search"
                    placeholder="Search by session id or free text"
                    sx={styles.searchInput}
                    value={""}
                  />
                )}
              />
            </Box>
          </Grid>
        )}
      </Grid>
    </>
  );
};
export default Filters;
