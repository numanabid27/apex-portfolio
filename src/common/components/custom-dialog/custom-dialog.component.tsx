import { ModelData } from "@/components/policies/components/model-data/components/model-data/model-data.component";
import { SessionAccordion } from "@/components/session-explorer/components/session-accordion/session-accordion.component";
import CloseIcon from "@mui/icons-material/Close";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import { Box, Dialog, DialogContent, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useState } from "react";
import ModelAccordian from "../model-accordion/model-accordion.component";
import { styles } from "./custom-dialogue.style";
import slack from "@/common/assets/images/slacke.svg"

import Image from "next/image";
import DashboardDrawer from "@/components/dashboard/components/dashboard-accordian/dashboard-accordian.component";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomDialog({
  thead,
  openModal,
  setOpenModal,
  newData,
  selectedRow,
  setIsModel,
  issues,
  isMessage=false,
  modelData,
  setIsPrompt,
  setIsGenerate,
  isGenerate,
  createPolicy
}: any) {
  const [expandValue, setExpandValue] = useState(true);
  return (
    <>
      <BootstrapDialog
        onClose={() => setOpenModal(false)}
        aria-labelledby="customized-dialog-title"
        open={openModal}
        className={`${expandValue ? "demo" : "collapse"} ${issues ? "issuesWidth" : ""} custom-dialogue_class z_index`}
      >
        {
          thead === "session" ?
          <Box sx={styles.sec}>
          <Box
            sx={styles.collapseBtn}
            onClick={() => setExpandValue(!expandValue)}
          >
            {expandValue ? (
              <OpenInFullIcon sx={styles.icon} />
            ) : (
              <CloseFullscreenIcon sx={styles.icon} />
            )}
            <Typography sx={styles.expand}>
              {" "}
              {expandValue ? "Expand" : "Collapse"}
            </Typography>
          </Box>
          <CloseIcon
            onClick={() => {
              setOpenModal(false);
              setExpandValue(true);
            }}
            sx={styles.closeCursour}
          />
        </Box>
        :
        null
        }
        <DialogContent dividers sx={{ padding: "0px !important" }}>
          {thead === "policy" && (
            <ModelData
              selectedRow={selectedRow}
              setIsModel={setIsModel}
              setOpenModal={setOpenModal}
              setIsPrompt={setIsPrompt}
              setIsGenerate={setIsGenerate}
              isGenerate={isGenerate}
              createPolicy={createPolicy}
            />
          )}
          {thead === "session" && <SessionAccordion newData={newData} isMessage={isMessage} />}
          {thead === "issue" && <ModelAccordian modelData={openModal} />}
          {thead === "dashboard" && <DashboardDrawer modelData={modelData} />}
        </DialogContent>
        {thead == "session" && (
          <Grid container spacing={2} sx={styles.policyModel} gap="5px">
            <Grid item xs={8} sm={3.3}>
              <Link href="#" style={styles.btns}>
                <Image src={slack} alt="" width={15} height={15} style={{marginRight:'10px'}} />
                Share to Slack
              </Link>
            </Grid>
            <Grid item xs={8} sm={3.2}>
              <Link href="#" style={styles.btns}>
                <MailOutlineIcon sx={styles.doneIcon} />
                Share to Email
              </Link>
            </Grid>
          </Grid>
        )}
      </BootstrapDialog>
    </>
  );
}
