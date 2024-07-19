"use client";
/*eslint-disable react/no-unescaped-entities */

import * as React from "react";
import { useState } from "react";
import { SETTING } from "./engines.constant";
import { Typography, Grid, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import SettingDialogue from "./components/engines-dialog/engines-dialog.component";
import useSetting from "./use-setting.hook";
import Image from "next/image";
import azure from "@/common/assets/images/azure.svg";
import { styles } from "./engines.style";
import Colors from "@/common/constants/color.constant";
import freezeIcon from "@/common/assets/images/pan_tool.svg";
import Link from "next/link";

export const Engines = () => {
  const { open, selectedItem, handleClickOpen, handleClose, setOpen } =
    useSetting();
  const [settingData, setSettingData] = useState<any[]>(SETTING);

  const updateItemAvailability = (item: any, newAvailability: any) => {
    const updatedSetting = settingData.map((settingItem) => {
      if (settingItem.id === item.id) {
        return { ...settingItem, avilability: newAvailability };
      }
      return settingItem;
    });
    setSettingData(updatedSetting);
  };

  return (
    <Box sx={styles.settig_sec}>
      <Typography sx={styles.title}>
        Onboard and manage your company's engines.
      </Typography>
      <Grid container spacing={2} sx={styles.setting_grid}>
        {settingData.map((item: any) => {
          return (
            <Grid
              item
              xs={12}
              sm={5.8}
              md={3.8}
              lg={2.8}
              key={item.id}
              sx={{
                ...styles.setting_column,
                background: item.color,
                border:
                  item.avilability === "Frozen"
                    ? `1px solid ${Colors.borderRed}`
                    : undefined,
              }}
            >
              <Box sx={styles.main_box}>
                <Box sx={styles.box}>
                  <Link 
                      href={item.links ? 
                        {
                          pathname : `${item.links}`,
                          query: {
                            user: "Azure Marketing",
                          },
                        }
                        :
                        ""
                      }
                 
                    style={styles.box_title} className="box_title">{item.title}
                    </Link>
                  <Typography
                    sx={{
                      color:
                        item.status === "Private" ? Colors.green : Colors.red,
                      border: `1px solid ${
                        item.status === "Private" ? Colors.green : Colors.red
                      }`,
                      ...styles.status,
                    }}
                  >
                    {item.status}
                  </Typography>
                </Box>
                <Box sx={styles.properties_row}>
                  <Image src={item.categoryImg} alt="" />
                  <Typography sx={styles.category}>{item.category}</Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  ...styles.visibility_row,
                  borderColor:
                    item.avilability === "Frozen"
                      ? `${Colors.borderRed}`
                      : undefined,
                }}
              >
                <Typography
                  sx={
                    item.avilability === "Active"
                      ? styles.availability
                      : styles.freezeItem
                  }
                >
                  {item.avilability === "Active" ? (
                    <CircleIcon sx={styles.circularIcon} />
                  ) : (
                    <Image src={freezeIcon} alt="freezeIcon" />
                  )}

                  {item.avilability}
                </Typography>
                <Typography
                  onClick={() => handleClickOpen(item)}
                  sx={styles.property_text}
                >
                  {item.properties}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
      <Typography sx={styles.disable}>Disabled</Typography>

      <Grid container spacing={2} sx={styles.disable_row}>
        <Grid
          item
          xs={12}
          sm={5.8}
          md={3.8}
          lg={2.8}
          sx={styles.disabled_column}
        >
          <Box sx={styles.disableBox}>
            <Box sx={styles.disableBoxRow}>
              <Typography sx={styles.disableTilte}>ChatGPT</Typography>
              <Typography sx={styles.disableStatus}>Private</Typography>
            </Box>
            <Box sx={styles.disable_desc}>
              <Image src={azure} alt="" style={styles.disableImage} />
              <Typography sx={styles.desc}>Azure OpenAI</Typography>
            </Box>
          </Box>

          <Box sx={styles.disbleProperties}>
            <Typography sx={styles.hide}>
              <CircleIcon sx={styles.disableIcon} />
              Disabled
            </Typography>
            <Typography onClick={handleClickOpen} sx={styles.disableModel}>
              Properties
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <SettingDialogue
        handleClose={handleClose}
        open={open}
        setOpen={setOpen}
        selectedItem={selectedItem}
        updateItemAvailability={updateItemAvailability}
      />
    </Box>
  );
};
