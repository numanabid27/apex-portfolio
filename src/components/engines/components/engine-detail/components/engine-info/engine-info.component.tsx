import { Box, Grid, Typography } from "@mui/material";
import { EngineInfoStyle } from "./engine-info.style";
import {} from "@emotion/styled";
import React from "react";
import Image from "next/image"; // Import the Image component
import LensIcon from "@mui/icons-material/Lens";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";

function EnergyInfo() {
  return (
    <Grid container item lg={12} sx={EngineInfoStyle.mainContent}>
      <Grid
        item
        xl={2.25}
        lg={2.25}
        xs={12}
        md={12}
        sm={12}
        sx={EngineInfoStyle.rightBorder}
      >
        <Typography sx={EngineInfoStyle.title}>Azure OpenAI</Typography>
        <Grid container sx={[EngineInfoStyle.descriptionContainer, EngineInfoStyle.azure]}>
        <img src="/image/Azura_logo_img.png" alt="Azura Img"  />
          <Typography sx={EngineInfoStyle.description}>
            Azure OpenAI General
          </Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xl={2.85}
        lg={2.95}
        xs={12}
        md={12}
        sm={12}
        sx={[EngineInfoStyle.rightBorder, EngineInfoStyle.vulnabrities]}
      >
        <Typography sx={EngineInfoStyle.vulnabrityTitle}>
          2 Vulnerabilities
        </Typography>
        <Grid container>
          <Grid xs={12} lg={6}>
            <Typography sx={EngineInfoStyle.customLabel}>
              CVE-2009-11542
            </Typography>
          </Grid>
          <Grid xs={12} lg={6}>
            <Typography sx={EngineInfoStyle.customLabel}>
              CVE-2009-11542
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xl={1.75}
        lg={1.35}
        xs={12}
        md={12}
        sm={12}
        sx={[EngineInfoStyle.rightBorder, EngineInfoStyle.vulnabrities]}
      >
        <Typography sx={EngineInfoStyle.vulnabrityTitle}>
          Connected to
        </Typography>
        <Grid container>
          <Grid lg={12} xs={12} sx={EngineInfoStyle.socialImages}>
            <Grid container alignItems="flex-end">
         
              <img src="/image/saleforce.png" alt="SaleForce Img"  />
              <img src="/image/drive.png" alt="Drive Img" style={EngineInfoStyle.image2} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        xl={2.35}
        lg={2.5}
        xs={12}
        md={12}
        sm={12}
        sx={[EngineInfoStyle.rightBorder, EngineInfoStyle.vulnabrities]}
      >
        <Typography sx={EngineInfoStyle.vulnabrityTitle}>
          2 apps are based on this model
        </Typography>
        <Typography sx={[EngineInfoStyle.modalTxt, EngineInfoStyle.modalTxt2]}>Company Slackbot</Typography>
        <Typography sx={EngineInfoStyle.modalTxt}>
          Customer service chatbot
        </Typography>
      </Grid>
      <Grid
        item
        xl={1.55}
        lg={1.95}
        xs={12}
        md={12}
        sm={12}
        sx={[EngineInfoStyle.rightBorder, EngineInfoStyle.vulnabrities]}
      >
        <Typography sx={EngineInfoStyle.vulnabrityTitle}>
          Misconfigurations
        </Typography>
        <Typography sx={EngineInfoStyle.warningLabel}>
          <WarningAmberIcon sx={EngineInfoStyle.warningIcon} />
          <span>High risk engine</span>
        </Typography>
      </Grid>
      <Grid
        item
        xl={1.25}
        lg={1}
        xs={12}
        md={12}
        sm={12}
        sx={EngineInfoStyle.vulnabrities}
      >
        <Typography sx={EngineInfoStyle.vulnabrityTitle}>Risk Level</Typography>
        <Typography sx={EngineInfoStyle.DangerLabel}>
          <WarningAmberIcon sx={EngineInfoStyle.DangerIcon} />
          <span>High</span>
        </Typography>
      </Grid>
      <Grid item lg={12} sx={EngineInfoStyle.activeContent}>
        <Grid container>
          <Grid lg={0.9} xl={0.75} sm={12} xs={12} md={12}>
            <Typography
              sx={{ ...EngineInfoStyle.activeLabel, marginTop: "19px" }}
            >
              <LensIcon sx={{ fontSize: "10px", marginRight:"1px" }} /> Active
            </Typography>
          </Grid>
          <Grid lg={1.25} xl={1} sm={12} xs={12} md={12}>
            <Typography
              sx={{
                ...EngineInfoStyle.vulnabrityTitle,
                ...EngineInfoStyle.textSpacing,
              }}
            >
              Model <strong>GPT 4</strong>
            </Typography>
          </Grid>
          <Grid lg={2.5} xl={2} sm={12} xs={12} md={12}>
            <Typography
              sx={{
                ...EngineInfoStyle.vulnabrityTitle,
                ...EngineInfoStyle.textSpacing,
              }}
            >
              Model released on <strong>May 5, 2023</strong>
            </Typography>
          </Grid>
          <Grid lg={4.5} xl={3.5} sm={12} xs={12} md={12}>
            <Typography
              sx={{
                ...EngineInfoStyle.vulnabrityTitle,
                ...EngineInfoStyle.textSpacing,
              }}
            >
              Model Created On{" "}
              <strong>Oct 14, 2023 2:06PM by Azure OpenAI</strong>
            </Typography>
          </Grid>
          <Grid lg={1.85} xl={3.5} sm={12} xs={12} md={12}>
            <Typography
              sx={{
                ...EngineInfoStyle.vulnabrityTitle,
                ...EngineInfoStyle.textSpacing,
              }}
            >
              Deployed On <strong>ApexAPI</strong>
            </Typography>
          </Grid>
          <Grid lg={1} xl={1} sm={12} xs={12} md={12}>
            <Typography sx={EngineInfoStyle.privateLabel}>Private</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default EnergyInfo;
