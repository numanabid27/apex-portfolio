"use client";

import FeedbackDialog from "@/common/components/feedback-dailog/feedback-dialog.component";
import { styles } from "@/common/styles/global.style";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import useAuthenticatedNav from "../../use-authenticated-nav.hook";
import setting from "@/common/assets/images/settings.svg";
import support from "@/common/assets/images/contact_support.svg";
import notification from "@/common/assets/images/grey-bell.svg";
import search from "@/common/assets/images/grey-search.svg";
import Image from "next/image";

/**
 * Renders the Feedback  Component
 * @returns the Feedback from user
 */

function Feedback() {
  const { feedbackModal, setFeedbackModal } = useAuthenticatedNav();

  return (
    <Box sx={styles.FeedbackMain}>
      <Box className="searchBox">
        <Image src={search} alt="" />
        <TextField type="search" id="standard-basic" placeholder="Search" variant="standard" />
      </Box>
      <Image src={notification} alt="" />
      <Image src={support} alt="" />
      <IconButton className="feedback-main" onClick={() => setFeedbackModal(true)}>
        <TextsmsOutlinedIcon
          className="feedback-icon"
          
        />

        
      </IconButton>
      <FeedbackDialog
          feedbackModal={feedbackModal}
          setFeedbackModal={setFeedbackModal}
        />
      <Image src={setting} alt="" />
    </Box>
  );
}

export default Feedback;
