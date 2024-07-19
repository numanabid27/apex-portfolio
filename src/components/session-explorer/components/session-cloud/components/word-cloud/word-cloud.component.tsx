import { Box, Chip, Typography } from "@mui/material";
import { styles } from "./word-cloud.style";
import { WORD_CLOUD } from "./word-cloud.constant";


export const WordCloud = ({handleClick, value}:any) => {
  let uniqueSize = Array.from(new Set(WORD_CLOUD.map((item) => item.size)));
 
  return (
    <Box sx={styles.box}>
      <Box sx={styles.cloud_box}>
        <Typography sx={styles.cloud_text}>Word Cloud</Typography>
        <Box>
          {uniqueSize.map((item, i) => (
            <Box sx={styles.chips_row} key={i.toString()}>
              {WORD_CLOUD.filter((i) => i.size === item).map((it) => (
                <Chip
                  label={it.title}
                  sx={styles.chip}
                  style={{ fontSize: `${it.size}px` }}
                  key={it.id}
                  onClick={() => handleClick(it.title)}
                  disabled={value.includes(it.title)}
                  className={value.includes(it.title) ? "addClass" : "removeClass"}
                />
              ))}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
