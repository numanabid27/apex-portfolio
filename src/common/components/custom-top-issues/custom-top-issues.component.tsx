"use client";

import bell from "@/common/assets/images/green-bell.svg";
import notification from "@/common/assets/images/notifications.svg";
import good from "@/common/assets/images/verified_user.svg";
import warning from "@/common/assets/images/warning.svg";
import Colors from "@/common/constants/color.constant";
import EastIcon from "@mui/icons-material/East";
import { Box, Chip, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { topStyles } from "./custom-top-issues.style";
import useCustomTopIssues from "./use-custom-top-issues.hook";

function CustomTopIssues({
  title,
  issuesData,
  arrowIcon,
  issueData,
  pathname,
  unread,
  pagination
}: any) {
  const {
    currentItems
  } = useCustomTopIssues({
    issuesData,
  });
  return (
    <Grid item xs={12}>
      <Typography sx={topStyles.topIssuesTitle}>
        {title}
        {unread !== undefined && (
          <span className="unread">{"(" + unread + ")"}</span>
        )}
      </Typography>{" "}
      {
        pagination ?
        <Box>
          {currentItems.map((item: any) => (
              <Link
                key={item.id}
                href={{
                  pathname: pathname,
                  query: {
                    user: item.user,
                  },
                }}
                style={topStyles.link}
              >
                <Box
                  sx={{
                    borderLeft: `4px solid 
                    ${
                      item.notification === 3 ? Colors.primaryOrange 
                      : 
                      item.notification === 2 || item.notification === 1  ? Colors.secondaryGreen 
                      :
                      Colors.primaryRed
                    }` ,
                    ...topStyles.topIssuesitem
                  }}
                  style={issueData && topStyles.toIssuesData}
                  
                >
                  <Box sx={topStyles.TopIssuesDesc}>
                    <Image
                      src={item.icon}
                      alt={item.value}
                      height={25}
                      width={25}
                      style={topStyles.arrowIcon}
                    />
                    <Box sx={topStyles.topIssuesBox}>
                      <Typography
                        className="tertiary-title"
                        sx={topStyles.topIssuesValue}
                      >
                        {item.value}
                      </Typography>
                      {arrowIcon ? <EastIcon sx={topStyles.arrowImg} /> : ""}
                    </Box>
                  </Box>
                  <Box sx={topStyles.countRow}>
                    <Box>
                      {item.res ? (
                        <Chip
                        sx={{ 
                          bgcolor:item.notification === 3 ? Colors.defaultWhite
                          :
                          item.notification === 2 ? Colors.primaryGreen : Colors.secondaryWhite,
                          ...topStyles.overviewLevel
                          }}
                          avatar={<Image src={item.notification !== 2 ? warning : good} alt="" />}
                          label={item.res}
                          variant="outlined"
                        />
                      ) : (
                        null
                      )}
                    </Box>
                    <Box>
                      <Typography sx={topStyles.countText}>{item.notification}</Typography>
                    </Box>
                    <Box>
                      <Image 
                        src={
                          item.notification === 2 ? bell 
                          : 
                          item.notification === 1 ? bell 
                          :
                          notification
                        } alt="" 
                      />
                    </Box>
                  </Box>
                </Box>
              </Link>
          ))}
        </Box>
        :
        <Grid container justifyContent="space-between">
          {issuesData.map((item: any, i:any) => (
            <Grid item xl={5.89} lg={5.9} xs={12} sx={topStyles.grid} key={i.toString()}>
              <Link
                key={item.id}
                href={{
                  pathname: pathname,
                  query: {
                    user: item.user,
                  },
                }}
                style={topStyles.link}
              >
                <Box
                  sx={{
                    borderLeft: `4px solid 
                    ${item.borders}`,
                    ...topStyles.topIssuesitem
                  }}
                  style={issueData && topStyles.toIssuesData}
                  
                >
                  <Box sx={topStyles.TopIssuesDesc}>
                    <Image
                      src={item.icon}
                      alt={item.value}
                      height={25}
                      width={25}
                      style={topStyles.arrowIcon}
                    />
                    <Box sx={topStyles.topIssuesBox}>
                      <Typography
                        className="tertiary-title2"
                        sx={topStyles.topIssuesValue}
                      >
                        {item.value}
                      </Typography>
                      {arrowIcon ? <EastIcon sx={topStyles.arrowImg} /> : ""}
                    </Box>
                  </Box>
                  <Box sx={topStyles.countRow}>
                    <Box>
                      {item.res ? (
                        <Chip
                        sx={{ 
                          bgcolor:item.bgChipColor,
                          ...topStyles.overviewLevel
                          }}
                          avatar={<Image src={item.voilationImg} alt="" />}
                          label={item.res}
                          variant="outlined"
                        />
                      ) : (
                        null
                      )}
                    </Box>
                    <Box marginTop="7px">
                      <Image 
                        src={item.bell} alt="" height={19} width={14}  />
                    </Box>
                    <Box>
                      <Typography sx={topStyles.countText}>{item.notification}</Typography>
                    </Box>
                    
                  </Box>
                </Box>
              </Link>
          </Grid>
          ))}
        </Grid>
      }
     
    </Grid>
  );
}

export default CustomTopIssues;
