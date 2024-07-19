import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { styles } from "./style";
import gemini from "@/common/assets/images/gemini.svg";

export default function PromptView() {
  return (
    <Box sx={styles.container}>
      <Typography variant="h6">Prompt</Typography>
      <Box sx={styles.promptBox}>
        <Box sx={styles.bard}>
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

        <Box sx={styles.voilationBox}>
          <Typography variant="h4">
            <span>1 Violations: </span>
            PII (email)
          </Typography>
          <Box sx={styles.piBox}>
            <Typography variant="h2">PII</Typography>
            <Typography color="#374151" pt={2}>
              Personally identifiable information (PII) is any information
              connected to a specific individual that can be used to uncover
              that individuals identity, such as their social security number,
              full name, email address or phone number.
            </Typography>
          </Box>
          <Box sx={styles.piBox}>
            <Typography variant="h2">Email</Typography>
            <Typography color="#374151" pt={2}>
              Personally identifiable information (PII) is any information
              connected to a specific individual that can be used to uncover
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" gap="10px">
        <Button className="runTest">Run Test</Button>
        <Button className="testBtn">
          Stop
        </Button>
      </Box>
    </Box>
  );
}
