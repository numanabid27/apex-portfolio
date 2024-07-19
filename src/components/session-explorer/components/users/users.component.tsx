import {
  Autocomplete,
  Box,
  Chip,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import CustomTable from "@/common/components/custom-table/custom-table.component";
import { styles } from "../../session-explore.style";
import useUsers from "./use-users.hook";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";
import { userStyle } from "./users.style";

import ReactEcharts from "echarts-for-react";
import { SESSION_USER_CHART } from "../sessions/session.constant";
import { SESSION_GRAPH } from "./session-user.constant";
import Image from "next/image";
import useFilterPolicy from "@/components/create-policy/use-createPolicies.hook";
import Filters from "../filters/filter.component";

export default function Users() {
  const {
    setOpenModal,
    setSelectedRow,
    finalData,
    handleSearch,
    searchQuery,
    allOptions,
    handleAutocompleteChange,
  } = useUsers();


  const SESSION_EXPLORE_TABLE_HEADER = [
    { id: 1, header: "#", accessor: "id" },
    { id: 2, header: "Name", accessor: "name" },
    {
      id: 3,
      header: "Email ",
      accessor: "mails",
    },
    {
      id: 4,
      header: "Department",
      accessor: "department",
    },
    {
      id: 5,
      header: "User risk score ",
      accessor: "riskScore",
      cell: (data: any) => {
        return (
          <Chip
            label={data}
            sx={{
              ...userStyle.severityChip,
              color:
                data === "Medium"
                  ? Colors.darkBrown
                  : data === "Low"
                  ? Colors.textGreen
                  : data === "High"
                  ? Colors.textHigh
                  : "",
              bgcolor:
                data === "Medium"
                  ? Colors.primaryWhite
                  : data === "Low"
                  ? Colors.primaryGreen
                  : data === "High"
                  ? Colors.defaultWhite
                  : "",
              p: 0,
            }}
            icon={
              <CircleIcon
                sx={{
                  fill:
                    data === "Medium"
                      ? `${Colors.orange} !important`
                      : data === "High"
                      ? Colors.circleHigh
                      : data === "Low"
                      ? Colors.circleLow
                      : `${Colors.defaultBrown} !important`,

                  ...userStyle.severityLevel,
                }}
              />
            }
          />
        );
      },
    },
    {
      id: 7,
      header: "Violations",
      accessor: "violation",
      cell: (voilationData: any) => {
        return (
          <Box display="flex" gap="10px">
            {voilationData.map((item: any, i: number) => {
              return (
                <Chip
                  key={i.toString()}
                  label={item}
                  sx={{
                    ...userStyle.severityChip,
                    color: item.includes("Critical")
                      ? Colors.darkBrown
                      : item.includes("High")
                      ? Colors.textHigh
                      : item.includes("Medium")
                      ? Colors.darkBrown
                      : item.includes("Low")
                      ? Colors.textGreen
                      : "",
                    bgcolor: item.includes("Critical")
                      ? Colors.secondaryWhite
                      : item.includes("High")
                      ? Colors.defaultWhite
                      : item.includes("Medium")
                      ? Colors.primaryWhite
                      : item.includes("Low")
                      ? Colors.primaryGreen
                      : "",
                    p: 0,
                  }}
                  icon={
                    <CircleIcon
                      sx={{
                        fill: item.includes("Critical")
                          ? `${Colors.darkBrown} !important`
                          : item.includes("High")
                          ? `${Colors.circleHigh}`
                          : item.includes("Medium")
                          ? `${Colors.orange}`
                          : item.includes("Medium")
                          ? `${Colors.circleLow}`
                          : "",
                        ...userStyle.severityLevel,
                      }}
                    />
                  }
                />
              );
            })}

            {/* <Chip
              label={voilationData[1]}
              sx={{
                ...userStyle.severityChip,
                color: voilationData[1] === "2 High" ? Colors.textHigh : "",
                bgcolor:
                  voilationData[1] === "2 High" ? Colors.defaultWhite : "",
                p: 0,
              }}
              icon={
                <CircleIcon
                  sx={{
                    fill:
                      voilationData[1] === "2 High" ? Colors.circleHigh : "",

                    ...userStyle.severityLevel,
                  }}
                />
              }
            /> */}
          </Box>
        );
      },
    },
    {
      id: 8,
      header: "Messages",
      accessor: "messages",
    },
    {
      id: 9,
      header: "Sessions",
      accessor: "sessions",
    },
    {
      id: 10,
      header: "Usage",
      accessor: "usage",
      cell: (data: any) => {
        return <Image src={data} alt="" width={100} height={35} />;
      },
    },
  ];

  return (
    <>
      <Grid container item xs={12} justifyContent="space-between">
        <Grid
          item
          xs={12}
          md={5.85}
          lg={7.5}
          className="border border-radius bg-white engine-usage"
          sx={styles.GridShadow}
        >
          <Box sx={styles.BoxStyling}>
            <Typography sx={styles.SessionHeader}>
              Traffic last month
            </Typography>
          </Box>
          <Box className="sessionEchart" sx={userStyle.sessionUser}>
            <ReactEcharts option={SESSION_USER_CHART} />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5.85}
          lg={4.4}
          sx={userStyle.SessionEngine}
          className="border border-radius bg-white"
        >
          <Typography variant="h5" mb={4} sx={userStyle.text}>
            Top 5 Active Users
          </Typography>
          {SESSION_GRAPH.map((item: any, i: number) => {
            return (
              <Grid container sx={userStyle.activeUser} key={i.toString()}>
                <Grid xl={8} xs={7}>
                  <Typography>{item.title}</Typography>
                </Grid>
                <Grid xl={4} xs={5}>
                  <Box sx={userStyle.user1}>
                    <Typography>{item.value}</Typography>
                    <ReactEcharts option={item.chart} />
                  </Box>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>

      {/* filters */}

      {/* <Filters
        users={true}
        policies={false}
        engineName={engineName}
        setEngineName={setEngineName}
        startDate={startDate}
        endDate={endDate}
        setDateRange={setDateRange}
        setIsInterface={setIsInterface}
        isInterface={isInterface}
        isStatus={isStatus}
        setIsStatus={setIsStatus}
        setTopicName={setTopicName}
        topicName={topicName}
      /> */}
      <Filters users={true} />

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
      </Box>
    </>
  );
}
