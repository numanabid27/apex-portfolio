export const styles = {
  searchFilter: {
    margin: "20px 0",
    width: "100%",
    "& .css-zzcvco-MuiTypography-root": {
      fontSize: "12px",
    },
    "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select":
      {
        minHeight: "unset",
      },
  },
  formControl: {
    display: "flex",
    flexDirection: { md: "row", sm: "column" },
    justifyContent: "space-between",
  },
  filterGrid: {
    gap: "10px",
    flexWrap: { md: "unset", xs: "wrap" },
    marginBottom: { md: "0px", xs: "10px" },
    width: { lg: "72%", md: "100%" },
  },

  label: {
    fontSize: "12px",
    lineHeight: "1.19",
    fontWeight: 600,
    top: "-3px !important"
  },
  itemText: {
    width: "70px",
    fontSize: "12px",
  },
  options: {
    height: "0px",
    borderRadius: "10px",
    padding: "20px 6px",
    color: "#667085",
    fontWeight: "500",
    "& .MuiSvgIcon-root": {
      position: "unset",
      width: "17px",
      marginLeft: "8px",
    },
  },
  menuItems: {
    fontSize: "14px",
    color: "#1D2939",
    fontWeight: 500,
    justifyContent: "space-between",
  },
  close: {
    fontSize: "16px",
  },
  selected: {
    fontSize: "12px",
    textTransform: "inherit",
    p: 0,
  },
  filterSearch: {
    marginTop: { md: "0px", sm: "10px" },
    textAlign: { md: "unset", xs: "center" },
    borderRadius: "8px",
    "& .MuiInputBase-root": {
      borderRadius: "8px",
    },
  },
  selectedFilter: {
    padding: "2px 4px !important",
    border: "none",
    color: "#027A48",
    background: "#ECFDF3",
    borderRadius: "2px",
  },
  selectedCheckText: {
    width: "100px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    fontSize: "14px",
    position: "relative",
    zIndex: "9999",
  },
  cross: {
    padding: "0px",
  },
  "& .css-f005df-MuiButtonBase-root-MuiMenuItem-root": {
    fontSize: "12px",
  },
  "@media screen and (max-width:820px)": {
    "& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
      width: "50%",
    },
  },

  "@media screen and (max-width:700px)": {
    "& .css-1u3bzj6-MuiFormControl-root-MuiTextField-root": {
      width: "100%",
    },
  },
  moreSelected:{
    borderRadius: "8px",
    color: "#667085",
    fontWeight: 500,
    border: "1px solid #D1D5DB",
    padding: "0 17px",
    fontSize:" 12px",
    textTransform: "capitalize",
    display: "flex",
    gap: "10px",
    "@media screen and (max-width:767px)":{
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      padding:'8.5px 14px',
    }
  },
  datePicker: {
    paddingLeft: "0px !important",
    maxWidth: "unset !important",
    position: "relative",
    "& .MuiInputLabel-shrink": {
      top: "2px",
      margin: "0 0 0 0 !important",
    },
    "& .MuiFormLabel-root": {
      margin: "-2px 0 0 22px",
    },
    "& .MuiInputBase-formControl": {
      flexDirection: "row-reverse",
    },
    "& .MuiTextField-root": {
      minWidth: "unset",
    },
  },
};
