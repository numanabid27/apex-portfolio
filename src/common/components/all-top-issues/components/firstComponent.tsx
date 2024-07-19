import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { styles } from "../allTop-issues.style";

export const FirstComponent = ({ paramsFlag }: any) => {
  return (
    <Box sx={styles.customBox}>
      <Link
        style={{ textDecoration: "none", fontSize: "14px" }}
        href={
          paramsFlag
            ? {
                pathname: "/issues",
                query: {
                  user: "annasmith@untitled.com",
                },
              }
            : { pathname: "/issues" }
        }
      >
        <Typography className={`${paramsFlag ? "dashboardTopIssue" : "engineTopIssues"}`}>
          <span style={{ color: "#1570EF" }}>@Anna Smith</span>
          <span> uploaded 43 files to OpenAI </span>
          <span style={{ color: "#F04438" }}> Public </span>
           GPT4,  
          <span style={{ fontWeight: 700 , marginRight: "13px" }}>
             58 contain PII, 3 on HR, candidates data was redacted{" "}
          </span>
          <span
            style={{ color: "#98A2B3", fontSize: "14px", }}
          >
            5 hours ago
          </span>
        </Typography>
      </Link>
    </Box>
  );
};
