import React, { useState } from "react";
import CreatePolicy from "../create-policy/createPolicy.component";
import Policies from "../policies/policies.component";
import { Box, Grid } from "@mui/material";
import Link from "next/link";
import { ButtonComponent } from "@/common/components/button/button";
import AddIcon from "@mui/icons-material/Add";
import importImg from "@/common/assets/images/import.svg";
import exportImg from "@/common/assets/images/export.svg";
import switchGraph from "@/common/assets/images/switchGraph.svg";
import {styles} from "./policy.style";

export const PolicyPage = () => {
  const [isPolicy, setIsPolicy] = useState(false);

  return (
    <>
      <Grid container mb={6} mt={6} sx={styles.grid}>
        <Grid sm={4} xs={12} mb={{ sm: 0, xs: 3 }}>
          <Link href="#" className="addButton">
            <AddIcon />
            New policy
          </Link>
        </Grid>
        <Grid sm={8} xs={12}>
          <Box
            display="flex"
            gap="10px"
            justifyContent={{ sm: "flex-end", xs: "flex-start" }}
            flexDirection={{ sm: "row", xs: "column" }}
          >
            <ButtonComponent
              title="Switch Policy"
              handleClick={() => {
                setIsPolicy(!isPolicy);
              }}
              icon={switchGraph}
            />
            <ButtonComponent title="Import company policy" icon={importImg} />
            <ButtonComponent title="Export" icon={exportImg} />
          </Box>
        </Grid>
      </Grid>


      {isPolicy ? <Policies /> : <CreatePolicy />}
    </>
  );
};
