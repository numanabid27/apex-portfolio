import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { styles } from "../allTop-issues.style";

export const SecondComponent = ({ paramsFlag }: any) => {
  return (
    <Box sx={styles.customBox}>
      <Link
        href={
          paramsFlag
            ? {
                pathname: "/issues",
                query: {
                  user: "GPT 4",
                },
              }
            : { pathname: "/issues" }
        }
        style={styles.linkStyle}
      >
        <Typography className={`${paramsFlag ? "dashboardTopIssue" : "engineTopIssues"}`}>
          
          <span>Prompt injection detected on</span>
          <span style={{ color: "#1570EF" }}> Azure OpenAI General </span>
          <span
            style={{
              backgroundColor: "#F2F4F7",
              color: "#344054 ",
              fontSize: "14px",
              fontWeight: 500,
              padding: "3px 6px",
              borderRadius: "2px",
            }}
          >
            Suspicious Behavior
          </span>
          of Q2 
          <span
            style={{ color: "#98A2B3", fontSize: "14px", display:'block', paddingTop:'9px' }}
          >
            {" "}
            5 hours ago{" "}
          </span>
        </Typography>
      </Link>
    </Box>
  );
};
