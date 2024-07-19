"use client";

import { List, ListItem } from "@mui/material";
import { styles } from "./description.style";

export const Description = ({ selectedRow }: any) => {
  return (
    <>
      <List>
        {selectedRow?.description?.map((c: any, i: any) => {
          return (
            <ListItem sx={styles.description} key={i.toString()}>
              {c}
            </ListItem>
          );
        })}
      </List>
    </>
  );
};
