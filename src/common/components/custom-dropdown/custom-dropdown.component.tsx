import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  TextField,
  Checkbox,
  Chip,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import CrossIcon from "@/common/assets/images/close.svg";
import { styles } from "./custom-dropdown.style";
import { useCustom } from "./use-custom-dropdown.hook";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import filter from "@/common/assets/images/more-filters.svg";
import calender from "@/common/assets/images/calendar.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

/**
 * Take in dropdownData and return a dropdown
 * @param {dropdownData, searchQuery, setSearchQuery, selectedFilters, setSelectedFilters } props
 * @returns dropdown component
 */

export const CustomDropdown = ({
  dropdownData,
  searchQuery,
  setSearchQuery,
  selectedFilters,
  setSelectedFilters,
  thead,
  setOpenModal,
}: any) => {
  const { handleAutocompleteChange, allOptions } = useCustom({
    setSearchQuery,
  });

  const searchParams = useSearchParams();
  const paramsData = searchParams.get("user");
  useEffect(() => {
    const checkAndSetMatchingItem = () => {
      if (paramsData) {
        const updatedSelectedFilters = { ...selectedFilters };
        dropdownData.forEach((item: any) => {
          if (item.options.includes(paramsData)) {
            updatedSelectedFilters[item.keyValue] = [paramsData];
          }
        });
        setSelectedFilters(updatedSelectedFilters);
        setOpenModal(true);
      }
    };
    checkAndSetMatchingItem();
  }, [paramsData]);

  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <Box sx={styles.searchFilter}>
      <FormControl sx={styles.formControl}>
        <Grid container item sx={styles.filterGrid}>
          <Grid item sm={2} xs={12} sx={styles.datePicker} className="dateRange dateRangeIssue">
            <Image src={calender} alt="" />
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update: any) => {
                setDateRange(update);
              }}
              placeholderText="Last updated"
              
            />
          </Grid>
          {dropdownData?.map((item: any) => (
            <Grid
              item
              key={item.id}
              xs={5.77}
              lg={2}
              sm={3.88}
              sx={{
                flexBasis: {
                  sm: `${item.value.length * 11}px !important`,
                  xs: "100% !important",
                },
              }}
            >
              <FormControl fullWidth>
                <InputLabel sx={styles.label} id={`${item.id}`}>
                  {item.value}
                </InputLabel>
                <Select
                  labelId={`${item.id}`}
                  id={`${item.id}`}
                  label={item.value}
                  value={selectedFilters[item.keyValue] || []}
                  multiple
                  onChange={(e) => {
                    setSelectedFilters({
                      ...selectedFilters,
                      [item.keyValue]: e.target.value,
                    });
                  }}
                  renderValue={(selected) => (
                    <Box
                      sx={{
                        ...styles.selectedCheckText,
                      }}
                    >
                      <Chip
                        label={selected.join(", ")}
                        variant="outlined"
                        sx={{ ...styles.selectedFilter }}
                        deleteIcon={<Image src={CrossIcon} alt="Crossicon" />}
                        onDelete={(e) => {
                          e.stopPropagation();
                          setSelectedFilters({
                            ...selectedFilters,
                            [item.keyValue]: [],
                          });
                        }}
                      />
                    </Box>
                  )}
                  IconComponent={KeyboardArrowDownIcon}
                  sx={styles.options}
                >
                  {item.options.map((items: any) => (
                    <MenuItem key={items} value={items} sx={styles.menuItems}>
                      <Checkbox
                        checked={
                          (selectedFilters[item.keyValue] || []).indexOf(
                            items
                          ) > -1
                        }
                      />
                      <ListItemText primary={items} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          ))}

          
          <Button sx={styles.moreSelected}>
            <Image src={filter} alt="" width={15} height={15} />
            More Filters
          </Button>
        </Grid>

        <Box sx={styles.filterSearch}>
          {thead && (
            <Autocomplete
              options={allOptions}
              value={searchQuery}
              onChange={handleAutocompleteChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className="filter-search"
                  size="small"
                  id="outlined-basic"
                  variant="outlined"
                  placeholder="Search"
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        {searchQuery !== "" && (
                          <CloseIcon
                            className="cursor-pointer"
                            onClick={() => setSearchQuery("")}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                  onChange={(e: any) => setSearchQuery(e.target.value)}
                />
              )}
            />
          )}
        </Box>
      </FormControl>
    </Box>
  );
};
