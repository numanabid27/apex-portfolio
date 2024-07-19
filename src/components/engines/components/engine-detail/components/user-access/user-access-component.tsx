import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { UserStyle } from "./user-access-style";

type User = {
  id: number;
  name: string;
  cat: string;
  last_access: string;
};

function UserAccess({ users }: { users: User[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const usersToDisplay = users.slice(startIndex, endIndex);

  return (
    <>
      <Grid container>
        <Typography sx={{ ...UserStyle.title, ...UserStyle.mainContent }}>
          Users with Access (46)
        </Typography>
      </Grid>
      {usersToDisplay.map((user) => (
        <Grid key={user.id} container sx={UserStyle.innerContent}>
          <Grid item lg={5} xl={5.5}>
            <Typography sx={UserStyle.description}>{user.name}</Typography>
          </Grid>
          <Grid item lg={3.55} xl={4.05}>
            <Typography sx={UserStyle.description}>{user.cat}</Typography>
          </Grid>
          <Grid item lg={3.45} xl={2.45}>
            <Typography sx={{ ...UserStyle.description , ...UserStyle}}>
              Last access: <strong>{user.last_access}</strong>
            </Typography>
          </Grid>
        </Grid>
      ))}

      <Grid container sx={UserStyle.paddingSection}>
        <Grid lg={5} sm={3} xs={4}>
          <button
            className="prev"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </Grid>
        <Grid lg={5.5} sm={3} xs={5}>
          <Typography>
            <span className="current">
              {currentPage} Out of {totalPages}
            </span>
          </Typography>
        </Grid>
        <Grid lg={1.5} sm={3} xs={3}>
          <button
            className="next"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </Grid>
      </Grid>
    </>
  );
}

export default UserAccess;
