/*eslint-disable react/no-unescaped-entities */
"use client";
import chat from "@/common/assets/images/chat.svg";
import arrowUp from "@/common/assets/images/cherven-up.svg";
import arrowDown from "@/common/assets/images/down_arrow.svg";
import insights from "@/common/assets/images/insights.svg";
import issuesby from "@/common/assets/images/issuesby.svg";
import link from "@/common/assets/images/link.svg";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SouthIcon from "@mui/icons-material/South";
import hub from "@/common/assets/images/hub.svg";
import NorthIcon from "@mui/icons-material/North";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Grid,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { styles } from "./model-accordion.style";
import useModalAccordion from "./use-modal-accordion.hook";
import ReactEcharts from "echarts-for-react";
import EastIcon from "@mui/icons-material/East";

function ModelAccordian({ modelData }: any) {
  const { expanded, handleChange } = useModalAccordion();
  const [ishide, setIsHide] = useState(false);
  const [isValue, setIsValue] = useState<any>("New");
  const [isShow, setIsShow] = useState(false);
  const [showCode, setShowCode] = useState(false);
  const [showMore, setShowMore] = useState("");
  const [showShareFile, setShowShareFile] = useState(false);

  const handleClick = () => {
    setIsHide(!ishide);
  };
  const handleList = (itemId: any) => {
    setIsValue(itemId);
  };
  useEffect(() => {
    setIsHide(false);
  }, [isValue]);

  const data = [
    {
      id: 1,
      title: isValue == "New" ? "In progress" : "New",
    },
  ];

  return (
    <Box sx={styles.modelGradient}>
      <Box sx={styles.sideModel}>
        <Typography sx={styles.modelTitle}>{modelData.name}</Typography>

        <Grid container justifyContent="space-between" mt={6} mb={8}>
          <Grid xs={7.5} display="flex" alignItems="center" gap="18px">
            <Box position="relative">
              <Button onClick={handleClick} sx={styles.listBox}>
                <span
                  style={{
                    backgroundColor:
                      isValue === "New"
                        ? "#FACF15"
                        : isValue === "In progress"
                        ? "#2E90FA"
                        : "",
                    marginRight: "10px",
                  }}
                ></span>
                {isValue}
              </Button>
              {ishide && (
                <List sx={styles.list}>
                  {data.map((item: any, i: number) => {
                    return (
                      <ListItem
                        key={i.toString()}
                        onClick={() => handleList(item.title)}
                      >
                        {item.title}
                      </ListItem>
                    );
                  })}
                </List>
              )}
            </Box>
            <Button sx={styles.tune}>Tune Policy</Button>
            <Link href="#">
              <Image src={link} alt="" width={20} height={20} />
            </Link>
          </Grid>
          <Grid xs={4} textAlign="right">
            <Button sx={styles.resolved}>Resolve</Button>
          </Grid>
        </Grid>

        <Accordion
          expanded={expanded.includes("panel1")}
          onChange={handleChange("panel1")}
          className="shadows"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={styles.accordianBg}
          >
            <Typography sx={styles.title}>
              <Image src={hub} alt="" style={styles.icon} />
              Issue map
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={styles.desc}>
            <Box
              sx={
                modelData?.name?.includes(
                  "61 Violations of Company's AI Ethics Standards"
                )
                  ? styles.nodeGraph
                  : modelData?.name?.includes(
                      "Anna Smith uploaded 43 files, including 3 related to HR and candidates' data, and 36 pieces of PII were redacted"
                    )
                  ? styles.nodeGraph2
                  : null
              }
            >
              {modelData.graph && <ReactEcharts option={modelData.graph} />}
            </Box>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel1")}
          onChange={handleChange("panel1")}
          className="shadows"
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            sx={styles.accordianBg}
          >
            <Typography sx={styles.title}>
              <Image src={insights} alt="" style={styles.icon} />
              Insights
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={styles.desc}>
            {modelData?.insights?.map((items: any, i: number) => {
              return (
                <Grid
                  key={i.toString()}
                  container
                  // display="flex"
                  // gap="24px"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={styles.mainBox}
                >
                  <Grid
                    display="flex"
                    gap="10px"
                    alignItems="center"
                    xl={1.1}
                    xs={1.1}
                  >
                    <Image src={items.image} alt="" width={40} height={40} />
                    <Typography>{items.user}</Typography>
                  </Grid>
                  <Grid xl={1.4} xs={1.2}>
                    <Typography sx={styles.label}>Name</Typography>
                    <Typography variant="h6">{items.name}</Typography>
                  </Grid>
                  <Grid xl={1.8} xs={1.6}>
                    <Typography sx={styles.label}>Mesages</Typography>
                    <Box display="flex" alignItems="center" gap="11px">
                      <Typography variant="h6">{items.messages[0]}</Typography>
                      {items.messages && items.messages[1].includes("+") ? (
                        <Image src={arrowUp} alt="" width={15} height={15} />
                      ) : (
                        <Image src={arrowDown} alt="" width={15} height={15} />
                      )}
                      <Typography sx={styles.msg}>
                        {items.messages[1]}
                        <span>from org</span>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xl={1.7} xs={1.6}>
                    <Typography sx={styles.label}>Sessions</Typography>
                    <Box display="flex" alignItems="center" gap="11px">
                      <Typography variant="h6">{items.sessions[0]}</Typography>
                      {items.sessions && items.sessions[1].includes("-") ? (
                        <Image src={arrowDown} alt="" width={15} height={15} />
                      ) : (
                        <Image src={arrowUp} alt="" width={15} height={15} />
                      )}
                      <Typography sx={styles.msg}>
                        {items.sessions[1]}
                        <span>from org</span>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid xl={3.5} xs={4}>
                    <Typography sx={styles.label}>Violations</Typography>
                    <Box display="flex" gap="10px">
                      {items?.vilations?.map((innerItem: any, i: number) => {
                        return (
                          <IconButton sx={styles.iconBtn} key={i.toString()}>
                            <Chip
                              label={
                                <>
                                  <span
                                    style={{
                                      fontWeight: 600,
                                      paddingRight: "5px",
                                    }}
                                  >
                                    {innerItem.value}
                                  </span>
                                  {innerItem.name}
                                </>
                              }
                              sx={{
                                ...styles.severityChip,
                                color:
                                  innerItem.name === "Medium"
                                    ? Colors.brown
                                    : innerItem.name === "Critical"
                                    ? Colors.darkBrown
                                    : innerItem.name === "Low"
                                    ? Colors.textGreen
                                    : innerItem.name === "High"
                                    ? Colors.textHigh
                                    : "",
                                bgcolor:
                                  innerItem.name === "Medium"
                                    ? Colors.primaryWhite
                                    : innerItem.name === "Critical"
                                    ? Colors.secondaryWhite
                                    : innerItem.name === "Low"
                                    ? Colors.primaryGreen
                                    : innerItem.name === "High"
                                    ? Colors.defaultWhite
                                    : "",
                                p: 0,
                              }}
                              icon={
                                <CircleIcon
                                  sx={{
                                    fill:
                                      innerItem.name === "Medium"
                                        ? `${Colors.orange} !important`
                                        : innerItem.name === "Critical"
                                        ? `${Colors.darkBrown} !important`
                                        : innerItem.name === "High"
                                        ? Colors.textHight_102
                                        : innerItem.name === "Low"
                                        ? Colors.circleLow
                                        : `${Colors.defaultBrown} !important`,

                                    ...styles.severityLevel,
                                  }}
                                />
                              }
                            />
                          </IconButton>
                        );
                      })}
                    </Box>
                  </Grid>
                  <Grid xl={2.5} xs={2.2}>
                    <Typography sx={styles.label}>Categories</Typography>
                    <Box display="flex">
                      {items.categories.map((item: any, i: number) => {
                        const isLastItem = i === items.categories.length - 1;
                        return (
                          <Typography fontSize="14px" key={i.toString()}>
                            {item}
                            {!isLastItem && ",\u00A0"}
                          </Typography>
                        );
                      })}
                    </Box>
                  </Grid>
                </Grid>
              );
            })}
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel3")}
          onChange={handleChange("panel3")}
          sx={{ boxShadow: "none" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            sx={styles.accordianBg}
          >
            <Typography sx={styles.title}>
              <Image src={chat} alt="" style={styles.icon} />
              Evidence
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={styles.desc}>
            {modelData?.name?.includes(
              "Github Copilot collected and sent 3 API keys"
            ) ? (
              <>
                <Grid
                  container
                  alignItems="flex-start"
                  sx={styles.evidance_grid}
                >
                  <Grid xs={1.5}>Secrets</Grid>
                  <Grid xs={9}>
                    <Typography variant="h6" pb={2}>
                      api_key_1 = "ABC12345DEF67890GHIJ"
                    </Typography>
                    <Typography variant="h6" pb={2}>
                      api_key_2 = "JKL98765MNO43210PQRS"
                    </Typography>
                    <Typography variant="h6">
                      api_key_3 = "TUV54321WXY09876ZABC"
                    </Typography>
                  </Grid>
                </Grid>
              </>
            ) : modelData?.name?.includes(
                "Github Copilot suggestion for vulnerable package was approved"
              ) ? (
              <>
                <Grid container alignItems="center" sx={styles.evidance_grid}>
                  <Grid xs={1.5}>Package</Grid>
                  <Grid xs={9}>
                    <Typography sx={{ color: "#374151", fontSize: "14px" }}>
                      actinis-django-storages
                    </Typography>
                  </Grid>
                </Grid>
              </>
            ) : modelData?.name?.includes(
                "Strategic decision making session was detected"
              ) ? (
              <>
                <Grid container alignItems="center" sx={styles.evidance_grid}>
                  <Grid xs={12}>Code</Grid>
                  <Grid xs={12} sx={styles.code}>
                    <pre
                      style={{
                        margin: "0px",
                        color: "#374151",
                        height: !showShareFile ? "70px" : "100%",
                        overflow: "hidden",
                      }}
                    >
                      {`
// Example of code accessing strategic data
import StrategicData from 'companydb';
// Function to retrieve strategic documents
function retrieveStrategicDocs(userId) {
    let docs = StrategicData.getDocuments(userId, ['Financial_Projections_Q3_2024.xlsx', 'Market_Analysis_Report.pdf', 'Strategic_Plan_2024.docx']);
    return docs;
}
// Function call example
retrieveStrategicDocs('alex.kim@company.com');
`}
                    </pre>
                    <Button
                      onClick={() => setShowShareFile(!showShareFile)}
                      sx={{
                        color: "#2E90FA",
                        fontSize: "14px",
                        textTransform: "capitalize",
                      }}
                    >
                      {!showShareFile ? "Show less..." : "Show more..."}
                    </Button>
                  </Grid>
                </Grid>
              </>
            ) : modelData?.name?.includes(
                "3 Files repetitively retrieved from your RAG database"
              ) ||
              modelData?.name?.includes(
                "Anna Smith uploaded 43 files, including 3 related to HR and candidates' data, and 36 pieces of PII were redacted"
              ) ? (
              <>
                <Grid container alignItems="center" sx={styles.evidance_grid}>
                  <Grid xs={12} mb={4}>
                    File
                  </Grid>
                  {modelData.files.map((item: any, i: number) => {
                    return (
                      <Grid
                        xs={12}
                        key={i.toString()}
                        display="flex"
                        alignItems="center"
                        gap="10px"
                        mb={3}
                      >
                        <Image
                          src={item.fileImg}
                          alt=""
                          width={25}
                          height={25}
                        />
                        <Typography sx={{ color: "#374151", fontSize: "14px" }}>
                          {item.file}
                        </Typography>
                      </Grid>
                    );
                  })}
                </Grid>
              </>
            ) : modelData?.name?.includes(
                "Unauthorized automatic PR generation by GitHub Copilot Docker extension"
              ) ||
              modelData?.name?.includes(
                "61 Violations of Company's AI Ethics Standards"
              ) ? (
              <></>
            ) : (
              <>
                <Grid container alignItems="center" sx={styles.evidance_grid}>
                  <Grid xs={1.5}>Email</Grid>
                  <Grid xs={9} display="flex" gap="10px">
                    {modelData?.email?.map((item: any, i: number) => {
                      return <Chip label={item} key={i.toString()} />;
                    })}
                  </Grid>
                </Grid>
                <Grid container alignItems="center" sx={styles.evidance_grid}>
                  <Grid xs={1.5}>Credit Card</Grid>
                  <Grid xs={9} display="flex" gap="10px">
                    <Typography variant="h6">
                      1008-****-****-****-9449
                    </Typography>
                  </Grid>
                </Grid>
              </>
            )}
            {modelData?.name?.includes(
              "Anna Smith uploaded 43 files, including 3 related to HR and candidates' data, and 36 pieces of PII were redacted"
            ) && (
              <Grid container alignItems="center" sx={styles.evidance_grid}>
                <Grid xs={1.5}>Email</Grid>
                <Grid xs={9} display="flex" gap="10px">
                  {modelData?.email?.map((item: any, i: number) => {
                    return <Chip label={item} key={i.toString()} />;
                  })}
                </Grid>
              </Grid>
            )}

            <Grid container alignItems="center" sx={styles.evidance_grid}>
              <>
                {modelData.code && (
                  <>
                    <Grid xs={12}>{modelData.propmpt ? "Prompt" : "Code"}</Grid>
                    {(isShow
                      ? modelData.code
                      : modelData.code && [modelData.code[0]]
                    )?.map((item: any, i: number) => {
                      return (
                        <Grid xs={12} sx={styles.code} key={i.toString()}>
                          <pre
                            style={{
                              margin: "0px",
                              color: "#374151",
                              height: showMore === item.id ? "100%" : "70px",
                              overflow: "hidden",
                              marginBottom: "10px",
                            }}
                          >
                            {item.title}

                            {item.ans && <Box>{item.ans}</Box>}
                          </pre>

                          {modelData.propmpt && modelData.propmpt ? null : (
                            <Button
                              onClick={() =>
                                setShowMore(showMore === item.id ? "" : item.id)
                              }
                              sx={{
                                color: "#2E90FA",
                                fontSize: "14px",
                                textTransform: "capitalize",
                              }}
                            >
                              {showMore === item.id
                                ? "Show less..."
                                : "Show more..."}
                            </Button>
                          )}
                        </Grid>
                      );
                    })}
                  </>
                )}
              </>

              {modelData.code && modelData.code.length > 1 ? (
                <Button
                  sx={styles.more}
                  onClick={() => {
                    setIsShow(!isShow);
                  }}
                >
                  {isShow ? (
                    <>
                      Show less Evidence <NorthIcon />
                    </>
                  ) : (
                    <>
                      Show more Evidence <SouthIcon />
                    </>
                  )}
                </Button>
              ) : null}
            </Grid>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded.includes("panel2")}
          onChange={handleChange("panel2")}
          sx={{ boxShadow: "unset !important" }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            sx={styles.accordianBg}
          >
            <Typography sx={styles.title}>
              <Image src={issuesby} alt="" style={styles.icon} />
              Issues Info
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={styles.desc}>
            {modelData &&
            modelData?.name?.includes(
              "Github Copilot collected and sent 3 API keys"
            ) ? (
              <Box sx={styles.issuesInfoBox}>
                <Typography variant="h6">Violations</Typography>
                <Typography variant="h5">4</Typography>
              </Box>
            ) : modelData &&
              modelData?.name?.includes(
                "Github Copilot suggestion for vulnerable package was approved"
              ) ? (
              <Box sx={styles.issuesInfoBox}>
                <Typography variant="h6">Violations</Typography>
                <Typography variant="h5">3</Typography>
              </Box>
            ) : null}
            <Box>
              <Grid
                container
                spacing={2}
                sx={{ ...styles.descText, borderBottom: "1px solid #D0D5DD" }}
              >
                <Grid
                  item
                  sm={5}
                  xs={7}
                  sx={styles.margin}
                  display="flex"
                  alignItems="center"
                  gap="10px"
                >
                  <Typography sx={styles.voilation}>Severity</Typography>
                  <IconButton sx={styles.iconBtn}>
                    <Chip
                      label={modelData.issues && modelData.issues[0]}
                      sx={{
                        ...styles.severityChip,
                        color:
                          modelData.issues && modelData.issues[0] === "Medium"
                            ? Colors.brown
                            : modelData.issues &&
                              modelData.issues[0] === "Critical"
                            ? Colors.darkBrown
                            : modelData.issues && modelData.issues[0] === "Low"
                            ? Colors.textGreen
                            : modelData.issues && modelData.issues[0] === "High"
                            ? Colors.textHigh
                            : "",
                        bgcolor:
                          modelData.issues && modelData.issues[0] === "Medium"
                            ? Colors.primaryWhite
                            : modelData.issues &&
                              modelData.issues[0] === "Critical"
                            ? Colors.secondaryWhite
                            : modelData.issues && modelData.issues[0] === "Low"
                            ? Colors.primaryGreen
                            : modelData.issues && modelData.issues[0] === "High"
                            ? Colors.defaultWhite
                            : "",
                        p: 0,
                      }}
                      icon={
                        <CircleIcon
                          sx={{
                            fill:
                              modelData.issues &&
                              modelData.issues[0] === "Medium"
                                ? `${Colors.orange} !important`
                                : modelData.issues &&
                                  modelData.issues[0] === "Critical"
                                ? `${Colors.darkBrown} !important`
                                : modelData.issues &&
                                  modelData.issues[0] === "High"
                                ? Colors.textHight_102
                                : modelData.issues &&
                                  modelData.issues[0] === "Low"
                                ? Colors.circleLow
                                : `${Colors.defaultBrown} !important`,

                            ...styles.severityLevel,
                          }}
                        />
                      }
                    />
                  </IconButton>
                </Grid>
                <Grid
                  item
                  sm={4}
                  xs={4}
                  sx={styles.margin}
                  display="flex"
                  alignItems="center"
                  gap="10px"
                >
                  <Typography sx={styles.voilation}>Direction</Typography>
                  <Typography sx={styles.appex}>
                    {modelData.issues && modelData.issues[5]}
                  </Typography>
                </Grid>
                <Grid item sm={3} xs={7} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Last event</Typography>
                  <Typography sx={styles.appex}>
                    {modelData.issues && modelData.issues[9]}
                  </Typography>
                </Grid>
                <Grid item sm={5} xs={4} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Name</Typography>
                  <Typography sx={styles.appex}>
                    {modelData.issues && modelData.issues[1]}
                  </Typography>
                </Grid>
                <Grid item sm={4} xs={7} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Users</Typography>
                  <Typography sx={styles.appex}>
                    {modelData.issues && modelData.issues[6]}
                  </Typography>
                </Grid>
                <Grid item sm={3} xs={4} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Last event</Typography>
                  <Typography sx={styles.appex}>
                    {modelData.issues && modelData.issues[10]}
                  </Typography>
                </Grid>
                <Grid item sm={5} xs={8} sx={styles.margin}>
                  <Typography sx={styles.voilation}>
                    Violation category
                  </Typography>
                  {modelData.issues &&
                    modelData.issues[2].map((item: any, i: number) => {
                      const isLastItem = i === modelData.users.length - 1;
                      return (
                        <Typography sx={styles.appex} key={i.toString()}>
                          {item}
                          {!isLastItem && ","}
                        </Typography>
                      );
                    })}
                </Grid>
                <Grid item sm={4} xs={8} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Source</Typography>
                  <Typography sx={styles.appex}>
                    {modelData.issues && modelData.issues[7]}
                  </Typography>
                </Grid>
                <Grid item sm={3} xs={4} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Session ID</Typography>
                  <Typography
                    sx={styles.appex}
                    display="flex"
                    alignItems="center"
                    gap="10px"
                  >
                    {modelData.issues && modelData.issues[11]}
                    <Link
                      href="#"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        color: "#2E90FA",
                        textDecoration: "none",
                      }}
                    >
                      Get all
                      <EastIcon style={{ width: "18px" }} />
                    </Link>
                  </Typography>
                </Grid>

                <Grid item sm={5} xs={8} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Violations</Typography>
                  <Typography
                    sx={styles.appex}
                    display="flex"
                    alignItems="center"
                    gap="10px"
                  >
                    {modelData.issues && modelData.issues[3]}
                    <EastIcon style={{ width: "18px", color: "#2E90FA" }} />
                  </Typography>
                </Grid>
                <Grid item sm={4} xs={8} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Engine</Typography>
                  <Typography sx={styles.appex} display="flex" gap="10px">
                    {modelData.issues &&
                      modelData.issues[8].map((items: any, i: number) => {
                        return (
                          <Chip
                            key={i.toString()}
                            label={items}
                            variant="outlined"
                            sx={{
                              ...styles.severityChip2,
                              color: "#374151",
                              p: 0,
                            }}
                          />
                        );
                      })}
                  </Typography>
                </Grid>
                <Grid item sm={3} xs={4} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Assigned</Typography>
                  <Typography
                    sx={styles.appex}
                    display="flex"
                    alignItems="center"
                    gap="10px"
                  >
                    {modelData.issues && modelData.issues[12]}
                  </Typography>
                </Grid>

                <Grid item sm={5} xs={8} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Sub-Categories</Typography>
                  {modelData.issues &&
                    modelData.issues[4].map((item: any, i: number) => {
                      const isLastItem = i === modelData.users.length - 1;
                      return (
                        <Typography
                          sx={styles.appex}
                          display="flex"
                          alignItems="center"
                          gap="10px"
                          key={i.toString()}
                        >
                          {item}
                          {!isLastItem && ","}
                        </Typography>
                      );
                    })}
                  <EastIcon style={{ width: "18px", color: "#2E90FA" }} />
                </Grid>
                <Grid item sm={4} xs={8} sx={styles.margin}>
                  <Typography sx={styles.voilation}>First event</Typography>
                  <Typography sx={styles.appex}>
                    {modelData.issues && modelData.issues[9]}
                  </Typography>
                </Grid>
                <Grid item sm={3} xs={4} sx={styles.margin}>
                  <Typography sx={styles.voilation}>Status</Typography>
                  <Typography
                    sx={styles.appex}
                    display="flex"
                    alignItems="center"
                    gap="10px"
                  >
                    <IconButton sx={styles.iconBtn}>
                      <Chip
                        label={modelData.issues && modelData.issues[13]}
                        sx={{
                          ...styles.severityChip,
                          color: Colors.textGreen,
                          bgcolor: Colors.primaryGreen,
                          p: 0,
                        }}
                        icon={
                          <CircleIcon
                            sx={{
                              fill: Colors.circleLow,
                              ...styles.severityLevel,
                            }}
                          />
                        }
                      />
                    </IconButton>
                  </Typography>
                </Grid>
              </Grid>

              <Typography variant="h5" sx={styles.tableVoliation}>
                Violations <span>(64)</span>
              </Typography>
              <Box sx={styles.tableBorder}>
                <Table size="small" aria-label="purchases">
                  <TableHead sx={styles.nestedHead}>
                    <TableRow>
                      <TableCell>#</TableCell>
                      <TableCell>Last event</TableCell>

                      {modelData?.name?.includes(
                        "Unauthorized automatic PR generation by GitHub Copilot Docker extension"
                      ) ? (
                        <TableCell>Name</TableCell>
                      ) : (
                        <>
                          <TableCell>Chat</TableCell>
                          <TableCell>Role</TableCell>
                        </>
                      )}

                      <TableCell>Violation Type</TableCell>
                      <TableCell>Severity</TableCell>
                      <TableCell>User Email</TableCell>
                      <TableCell>Session ID</TableCell>
                      <TableCell>Model</TableCell>
                      <TableCell>Source</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody sx={styles.nestedBody}>
                    {modelData.policiesData?.map((items: any) => {
                      return (
                        <TableRow key={items.id} sx={styles.nestedTbody}>
                          <TableCell component="th" scope="row">
                            {items.id}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            <Typography sx={styles.nestedDate}>
                              {items.date}
                            </Typography>
                          </TableCell>
                          <TableCell>{items.chat}</TableCell>
                          {items.role && <TableCell>{items.role}</TableCell>}

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
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
export default ModelAccordian;
