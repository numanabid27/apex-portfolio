export const PieChartStyle = {
  PieChartStyling: {
    padding: "2px 17px 11px ",
    boxShadow: " 0px 1px 3px #8080804a",
  },
  PieChartStylingDep: {
    padding: "2px 6px 11px ",
    boxShadow: "unset",
    border: "none !important",
  },
  PieHeaderStyling: {
    fontWeight: 600,
    pl: 0,
    paddingTop: "12px",
    color: "#344054",
  },
  PieChartLabel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: 1,
    width: "100%",
    gap:"19px"
  },
  PieLabelStyling: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#667085",
    display: "flex",
    alignItems: "center",
    lineHeight:"1.1",
    "@media screen and (max-width:1600px)":{
      fontSize: "11.5px",
    }
  },
  PiePercentageStyling: {
    fontSize: "14px",
    color: "#667085",
    "@media screen and (max-width:1600px)":{
      fontSize: "11.5px",
    }
  },
  PieChartDataStyling: {
    width: "100%",
    height: "160px",
  },
  active_users: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #EAECF0",
    paddingBottom: "10px",
  },
  active_users_count: {
    color: "#344054",
    fontSize: "42px",
    fontWeight: 500,
    marginRight: "8px",
  },
  active_users_status: {
    color: "#667085",
    fontSize: "14px",
  },
  chartLab:{
    width: "100%"
  },
  icon:{
    marginRight: "10px" 
  }
};
