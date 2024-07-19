import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { styles } from "../allTop-issues.style";

export const ThirdComponent = ({ paramsFlag }: any) => {
  return (
    <Box sx={styles.customBox}>
      <Link
        href={
          paramsFlag
            ? {
                pathname: "/issues",
                query: {
                  user: "PII",
                },
              }
            : {
                pathname: "/issues",
              }
        }
        style={styles.linkStyle}
      >
        <Typography className={`${paramsFlag ? "dashboardTopIssue" : "engineTopIssues"}`}>
          Github Copilot returned
          <span style={{ fontWeight: 700 }}> 3 non-public API keys </span>
          and
          <span style={{ fontWeight: 700 }}> 16 malicious packages </span>
           to 32 users - suspicious data was blocked
          <span
            style={{ color: "#98A2B3", fontSize: "14px", display:'block', paddingTop:'9px' }}
          >
            4 days ago
          </span>
        </Typography>
      </Link>
    </Box>
  );
};
