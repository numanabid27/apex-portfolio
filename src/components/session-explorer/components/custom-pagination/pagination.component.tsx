import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";

export const SessionPagination = ({handlePageChange,currentPage , totalPages}:any) => {
    return (
        <>
            <Grid container alignItems="center" className="session-paginate session-paginate2">
                <Grid lg={5} sm={3} xs={4}>
                <button
                    className="prev"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                </Grid>
                <Grid lg={1.5} sm={3} xs={5} textAlign="center">
                <Typography>
                    <span className="current">
                    {currentPage} Out of {totalPages}
                    </span>
                </Typography>
                </Grid>
                <Grid lg={5.5} sm={3} xs={3} textAlign="right">
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
};
