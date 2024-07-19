import React, { useState } from "react";
import { Autocomplete, Box, Chip, Grid, TextField, Typography } from "@mui/material";
import CustomTable from "@/common/components/custom-table/custom-table.component";
import { styles } from "../../session-explore.style";
import useFiles from "./use-file.hook";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";
import { FileStyle } from "./file.style";
import Image from "next/image";
import Filters from "../filters/filter.component";
import useFilterPolicy from "@/components/create-policy/use-createPolicies.hook";

export default function Files() {
  const {
    setOpenModal,
    setSelectedRow,
    finalData,
    handleSearch,
    searchQuery,
    allOptions,
    handleAutocompleteChange,
  } = useFiles();

  const SESSION_EXPLORE_TABLE_HEADER = [
    { id: 1, header: "#", accessor: "id" },
    { id: 2, header: "Filename", accessor: "fileName" },
    {
      id: 3,
      header: "File type",
      accessor: "fileType",
      cell: (data: any) => {
        return <Image src={data} alt="" width={28} height={35} />;
      },
    },
    {
      id: 4,
      header: "# interactions",
      accessor: "intraction",
    },
    {
      id: 5,
      header: "# Users",
      accessor: "users",
    },
    {
      id: 6,
      header: "Sensitivity",
      accessor: "sensitivity",
      cell: (data: any) => {
        return (
          <>
            <Chip
              label={data}
              sx={{
                ...FileStyle.severityChip,
                color:
                  data === "Medium"
                    ? Colors.darkBrown
                    : data === "None"
                    ? Colors.textGreen
                    : data === "Confidential"
                    ? Colors.textHigh
                    : data === "Highly Confidential"
                    ? Colors.darkBrown
                    : "",
                bgcolor:
                  data === "Medium"
                    ? Colors.primaryWhite
                    : data === "None"
                    ? Colors.primaryGreen
                    : data === "Confidential"
                    ? Colors.defaultWhite
                    : data === "Highly Confidential"
                    ? Colors.secondaryWhite
                    : "",
                p: 0,
              }}
              icon={
                <CircleIcon
                  sx={{
                    fill:
                      data === "Medium"
                        ? `${Colors.orange} !important`
                        : data === "Confidential"
                        ? Colors.circleHigh
                        : data === "None"
                        ? Colors.circleLow
                        : data === "Highly Confidential"
                        ? Colors.darkBrown
                        : `${Colors.defaultBrown} !important`,

                    ...FileStyle.severityLevel,
                  }}
                />
              }
            />
          </>
        );
      },
    },
    {
      id: 7,
      header: "Path",
      accessor: "path",
    },
  ];

  return (
    <>
      {/* search */}
      <Box sx={styles.searchBox} className="sesson-search">
        <Typography sx={styles.searchText}>
          Try searching using keywords, session id, engine, user, date range,
          contains issues
        </Typography>
        <Box sx={styles.searchInner} className="session-search-input">
          <Box sx={styles.searchIcon}>
            {/* <Image src={search} alt="" /> */}
          </Box>
          <Autocomplete
            options={allOptions}
            value={searchQuery}
            onChange={handleAutocompleteChange}
            style={{ flexGrow: "1" }}
            renderInput={(params: any) => (
              <TextField
                {...params}
                size="small"
                type="search"
                placeholder="Search by session id or free text"
                sx={styles.searchInput}
                onChange={handleSearch}
                value={searchQuery}
              />
            )}
          />
        </Box>
      </Box>
      {/* filter */}
      <Filters users={false} />
      <Box sx={styles.sessionTableRow}>
        <CustomTable
          rows={finalData}
          column={SESSION_EXPLORE_TABLE_HEADER}
          setOpenModal={setOpenModal}
          isSwitch={false}
          setSelectedRow={setSelectedRow}
          isTableHead={true}
          isPagination={true}
        />
      </Box>
    </>
  );
}
