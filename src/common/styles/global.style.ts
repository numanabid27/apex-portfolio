import Colors from "../constants/color.constant";

export const styles = {
  AppbarMainHeader: {
    bgcolor: "transparent",
    color: "#344054",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    px: "5%",
    boxShadow: "none",
    borderBottom: "1px solid #D0D5DD",
  },
  AppbarTitle: {
    mr: 2,
    fontWeight: 700,
    letterSpacing: { lg: "24px", xs: "13px" },
    color: Colors.primaryHeading,
    textDecoration: "none",
    display: "flex",
    flexGrow: { xs: 1, md: 0 },
  },
  AppbarText: {
      mr: 2,
      display: { xs: "none", md: "flex" },
      fontWeight: 700,
      letterSpacing: "24px",
      color: "#1D2939",
      textDecoration: "none",
      my: 3,
  },
  AppbarHeader: { flexGrow: 1, display: { xs: "flex", md: "none" } },
  AppbarHeaderMain: { flexGrow: 1, display: { xs: "none", md: "flex" } },
  NavbarBox: {
    position: "relative",
    my: 2,
    mx: { lg: 2, xs: 0 },
  },
  AppbarMenu: {
    display: { xs: "block", md: "none" },
  },
  DropdownGrid: {
    gap: "10px",
    flexWrap: { md: "unset", xs: "wrap" },
    marginBottom: { md: "0px", xs: "10px" },
    width: { lg: "72%", md: "100%" },
  },
  FilterSearchBox: {
    marginTop: { md: "0px", sm: "10px" },
    textAlign: { md: "unset", xs: "center" },
  },
  DropdownForm: { flexDirection: { md: "row", sm: "column" } },
  LineChartData: {
    p: 0.5,
    m: 0.2,
    height: "15px",
  },
  PaginationButton: {
    m: 2,
    p: 0,
    px: 2,
    textTransform: "inherit",
    color: "#667085",
    fontSize: "14px",
    border: "1px solid #D0D5DD",
    borderRadius: "8px",
    padding: "5px 17px !important",
  },
  WelcomeAlert: {
    p: 4,
    flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
  },
  WelcomeAlertGrid: {
    display: { sm: "flex", xs: "unset" },
    alignItems: "center",
  },
  WelcomeTextAlign: {
    textAlign: { xs: "center", sm: "start", md: "start" },
  },
  SessionOverTimeText: {
    color: Colors.primary,
    fontWeight: "600",
    fontSize: "23.21px",
    "@media screen and (max-width:1600px)":{
      fontSize: "16px",
    }
  },
  SessionOverTimeBox: {
    fontSize: { sm: "42px", xs: "29px" },
    flexDirection: { sm: "unset", xs: "column" },
  },
  SessionOverTimeData: {
    fontSize: { sm: "42px", xs: "29px" },
  },
  DataFlowText: {
    pb: 4,
    mt: 3,
    bottom: { lg: 217, md: 205 },
  },
  IssuesEnginesGrid: {
    mx: { lg: 2, md: 0 },
    my: 2,
    ml: { lg: 2, md: 1, sm: 0 },
    boxShadow: "0px 1px 3px #8080804a",
  },
  TopIssuesDesc: {
    height: { md: "30px", xs: "unset" },
  },
  TopIssuesDate: {
    flexDirection: { md: "row", sm: "column", xs: "column" },
    alignItems: {
      md: "flex-end",
      sm: "flex-start",
      xs: "flex-start",
    },
    my: 2,
  },
  TopIssuesDateData: {
    color: Colors.secondary,
    mt: 2,
    marginLeft: { md: "unset", xs: "20px" },
  },
  FeedbackMain: {
    display: { xs: "none", md: "flex" },
    alignItems:"center",
    gap:"13px",
    marginRight:"13px"
  },
  checkBox:{
        
    '&.Mui-checked': {
        color: "#31D583 !important" ,
    },
  },
  checkBox2:{
        
    '&.Mui-checked': {
        color: "#027947 !important" ,
    },
  },
  checkboxLabel:{
    border: "1px solid #CFD4DC",
    padding: "11px 32px 11px 11px",
    borderRadius: "8px",
    "span":{
      padding: "0 8px 0 0px",
      fontWeight: 500
    },
    ".MuiCheckbox-root":{
      color:'#98A1B2'
    },
    
  },
  checkboxLabel2:{
    border: "1px solid #31D583",
    background:"#F5FEF9",
    borderRadius: "8px",
    padding: "11px 32px 11px 11px",
    "span":{
      padding: "0 8px 0 0px",
      fontWeight: 500
    },
    ".MuiCheckbox-root":{
      color:'#98A1B2'
    },
  },
  policyChecked:{
    background:"#F2F3F6",
    borderRadius: "8px",
    padding: "11px 32px 11px 11px",
    "span":{
      padding: "0 8px 0 0px",
      fontWeight: 500
    },
    ".MuiCheckbox-root":{
      color:'#027947'
    },
    "@media screen and (max-width:600px)":{
      marginBottom:'10px'
    }
  },
  
};
