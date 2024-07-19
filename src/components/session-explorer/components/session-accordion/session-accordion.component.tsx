import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import useModalAccordion from "@/common/components/model-accordion/use-modal-accordion.hook";
import chat from "@/common/assets/images/chat.svg";
import insights from "@/common/assets/images/insights.svg";
import issuesby from "@/common/assets/images/issuesby.svg";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styles } from "../../../../common/components/model-accordion/model-accordion.style";
import { modelStyle } from "./session-accordion.style";
import user from "@/common/assets/images/circle-user-round.svg";
import panda from "@/common/assets/images/slack.svg";
import right from "@/common/assets/images/move-right.svg";
import msgs from "@/common/assets/images/messages-square.svg";
import users from "@/common/assets/images/user-round.svg";
import saprk from "@/common/assets/images/reply-user.svg";
import { MESSAGES } from "../sessions/session.constant";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import useSessionAccordion from "./use-session-accordion.hook";
import DoneIcon from "@mui/icons-material/Done";

export const SessionAccordion = ({ newData, isMessage }: any) => {
  const { expanded, handleChange } = useModalAccordion();
  const { handleCopy, isCopy } = useSessionAccordion();

  return (
    <Box>
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
            Session info
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={modelStyle.desc2}>
          <Grid container sx={modelStyle.text}>
            <Grid xs={4.5}>
              <Typography variant="h6">Date</Typography>
              <Typography variant="h5">{newData.lastUpdate}</Typography>
            </Grid>
            <Grid xs={4}>
              <Typography variant="h6">Session ID</Typography>
              <Typography variant="h5">{newData.sessionId}</Typography>
            </Grid>
            <Grid xs={3.5}>
              <Typography variant="h6">Connector</Typography>
              <Typography variant="h5">{newData.interface}</Typography>
            </Grid>
            <Grid xs={4.5}>
              <Typography variant="h6">Engine</Typography>
              <Typography variant="h5">{newData.engineType}</Typography>
            </Grid>
            <Grid xs={4}>
              <Typography variant="h6">Context</Typography>
              <Typography variant="h5">{newData.context}</Typography>
            </Grid>
            <Grid xs={3.5}>
              <Typography variant="h6">User</Typography>
              <Typography variant="h5">{newData.mails}</Typography>
            </Grid>
            <Grid xs={4.5}>
              <Typography variant="h6">Title</Typography>
              <Typography variant="h5">{newData.title}</Typography>
            </Grid>
            <Grid xs={4}>
              <Typography variant="h6">Topics</Typography>
              <Box display="flex" gap="10px" sx={modelStyle.chip}>
                {newData.topics.map((item: any, i: number) => {
                  return (
                    <Chip
                      key={i.toString()}
                      icon={
                        <>
                          <Image
                            src={item.img}
                            width={18}
                            height={180}
                            alt=""
                          />
                        </>
                      }
                      label={item.title}
                    />
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
      {isMessage && (
        <>
          {newData.interface.includes("Github Copilot") ? 
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
                  Prompt
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={modelStyle.desc2}>
                {Array.from({ length: 3 }, (_, i: any) => (
                  <>
                    <Box key={i} sx={modelStyle.promptBox}>
                      {i < 2 && (
                        <Box sx={modelStyle.voilationBox}>
                          <Typography variant="h6">
                            <span>3 Violations:</span> Email, Private key{" "}
                          </Typography>
                          <Image src={right} alt="" width={25} height={25} />
                        </Box>
                      )}

                      <Typography sx={modelStyle.promptDate}>
                        <span>15:41:03</span> Sunday 25 March 2024
                      </Typography>
                      <Box sx={modelStyle.promptName}>
                        <Image src={user} alt="" width={20} height={20} />
                        <Typography variant="h6">Sent prompt </Typography>
                      </Box>
                      <Box
                        sx={{
                          ...modelStyle.codeBox,
                          background: "#fff",
                        }}
                      >
                        <pre>
                          {`
  // Import the package here
  import MyPackage from 'my-package';...
                         `}
                        </pre>
                      </Box>

                      <Box sx={modelStyle.promptName}>
                        <Image src={panda} alt="" width={20} height={20} />
                        <Typography variant="h6">Github Copilot</Typography>
                      </Box>
                      <Box
                        sx={{
                          ...modelStyle.codeBox,
                          background: "#475467",
                        }}
                      >
                        <pre style={{ color: "#fff" }}>
                          {`
  // You can then use your package within this API route
  export default function handler(req, res) {...
                         `}
                        </pre>
                      </Box>
                    </Box>
                  </>
                ))}
              </AccordionDetails>
            </Accordion>
            :
            <Accordion
            expanded={expanded.includes("panel1")}
            onChange={handleChange("panel1")}
            className="accordians"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={styles.accordianBg}
            >
              <Typography sx={styles.title}>
                <Image src={msgs} alt="" style={styles.icon} />
                Session messages
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={modelStyle.desc2}>
              {MESSAGES.map((item: any, i: number) => {
                return (
                  <>
                    <Box
                      display="flex"
                      gap="10px"
                      alignItems="flex-start"
                      sx={modelStyle.message}
                    >
                      <Image src={users} alt="" />
                      <Box>
                        <Typography variant="h6" sx={modelStyle.mesg}>
                          {item.userMsg}
                        </Typography>
                        <Typography sx={modelStyle.msgTime}>
                          {item.time}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      display="flex"
                      gap="10px"
                      alignItems="flex-start"
                      sx={modelStyle.receiveBox}
                    >
                      <Image src={saprk} alt="" />
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="flex-start"
                        width="100%"
                        className="chatHeader"
                      >
                        <Box>
                          <Typography variant="h6" sx={modelStyle.mesg}>
                            {item.reply}
                          </Typography>
                          <ul className="msgList">
                            {item.replyList?.map((items: any, i: number) => {
                              return <li key={i.toString()}>{items.list}</li>;
                            })}
                          </ul>

                          <Typography sx={modelStyle.msgTime}>
                            {item.time}
                          </Typography>
                        </Box>
                        <Box sx={modelStyle.copyIcon}>
                          {isCopy === item.id ? (
                            <DoneIcon />
                          ) : (
                            <ContentCopyIcon
                              onClick={() => handleCopy(item.id, item)}
                            />
                          )}
                        </Box>
                      </Box>
                    </Box>
                  </>
                );
              })}
            </AccordionDetails>
            </Accordion>
          }
        </>
      )}
      {!isMessage && (
        <>
          <Accordion
            expanded={expanded.includes("panel1")}
            onChange={handleChange("panel1")}
            className="accordians"
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
            <AccordionDetails sx={modelStyle.desc2}>
              <Typography sx={modelStyle.insites}>
                This user has <span>50 violations</span>
              </Typography>
              <Typography sx={modelStyle.insites}>
                This user has total traffic of <span>2851 prompts</span>
              </Typography>
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
                Prompt
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={modelStyle.desc2}>
              {Array.from({ length: 3 }, (_, i: any) => (
                <>
                  <Box key={i} sx={modelStyle.promptBox}>
                    {i < 2 && (
                      <Box sx={modelStyle.voilationBox}>
                        <Typography variant="h6">
                          <span>3 Violations:</span> Email, Private key{" "}
                        </Typography>
                        <Image src={right} alt="" width={25} height={25} />
                      </Box>
                    )}

                    <Typography sx={modelStyle.promptDate}>
                      <span>15:41:03</span> Sunday 25 March 2024
                    </Typography>
                    <Box sx={modelStyle.promptName}>
                      <Image src={user} alt="" width={20} height={20} />
                      <Typography variant="h6">Sent prompt </Typography>
                    </Box>
                    <Box sx={{ ...modelStyle.codeBox, background: "#fff" }}>
                      <pre>
                        {`
    // Import the package here
    import MyPackage from 'my-package';...
                  `}
                      </pre>
                    </Box>

                    <Box sx={modelStyle.promptName}>
                      <Image src={panda} alt="" width={20} height={20} />
                      <Typography variant="h6">Github Copilot</Typography>
                    </Box>
                    <Box sx={{ ...modelStyle.codeBox, background: "#475467" }}>
                      <pre style={{ color: "#fff" }}>
                        {`
    // You can then use your package within this API route
    export default function handler(req, res) {...
                  `}
                      </pre>
                    </Box>
                  </Box>
                </>
              ))}
            </AccordionDetails>
          </Accordion>
        </>
      )}
    </Box>
  );
};
