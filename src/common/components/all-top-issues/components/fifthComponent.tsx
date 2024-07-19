import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { styles } from "../allTop-issues.style";

export const FifthComponent = ({ paramsFlag }: any) => {
  return (
    <Box sx={styles.customBox}>
      <Link
        href={
          paramsFlag
            ? {
                pathname: "/issues",
                query: {
                  user: "Critical",
                },
              }
            : {
                pathname: "/issues",
              }
        }
        style={styles.linkStyle}
      >
        <Typography className={`${paramsFlag ? "dashboardTopIssue" : "engineTopIssues"}`}>
          Microsoft Copilot
          <span style={{ fontWeight: 700 }}> shared sensitive finance information </span>
          with
          <span style={{ color: "#1570EF" }}> @Max Bard </span>
          from R&D
          <span
            style={{ color: "#98A2B3", fontSize: "14px", display:'block', paddingTop:'9px' }}
          >
            2 hours ago
          </span>
        </Typography>
      </Link>
    </Box>
  );
};
