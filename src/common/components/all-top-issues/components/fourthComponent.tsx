import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { styles } from "../allTop-issues.style";

export const FourthComponent = ({ paramsFlag }: any) => {
  return (
    <Box sx={styles.customBox}>
      <Link
        href={
          paramsFlag
            ? {
                pathname: "/issues",
                query: {
                  user: "Apexchat1",
                },
              }
            : {
                pathname: "/issues",
              }
        }
        style={styles.linkStyle}
      >
        <Typography sx={{ fontSize: "14px !important", color: "#344054" }}>
          HuggingFace OpenAssistant
          <span style={{ color: "#1570EF" }}> CodeLlama v10 </span>
          <span>has </span>
          <span style={{ fontWeight: 700 }}>
            three new vulnerabilities discovered
          </span>
          <span
            style={{ color: "#98A2B3", fontSize: "14px", marginLeft: "13px" }}
          >
            2 hours ago{" "}
          </span>
        </Typography>
      </Link>
    </Box>
  );
};
