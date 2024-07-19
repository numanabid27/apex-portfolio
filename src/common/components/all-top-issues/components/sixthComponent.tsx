import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { styles } from "../allTop-issues.style";

export const SixthComponent = ({ paramsFlag }: any) => {
  return (
    <Box sx={styles.customBox}>
      <Link
        href={
          paramsFlag
            ? {
                pathname: "/issues",
                query: {
                  user: "023fab19-bb0d-44f2-96a6-37a0a1cfc4a0",
                },
              }
            : {
                pathname: "/issues",
              }
        }
        style={styles.linkStyle}
      >
        <Typography className={`${paramsFlag ? "dashboardTopIssue" : "engineTopIssues"}`}>
          <span style={{ fontWeight: 700 }}> 67 violations </span>
          to companys policy detected,
          <span style={{ fontWeight: 700 }}> 49 remediated </span>
          <span
            style={{
              color: "#98A2B3",
              fontSize: "14px",
              display: "block",
              paddingTop: "9px",
            }}
          >
            3 days ago
          </span>
        </Typography>
      </Link>
    </Box>
  );
};
