export const SessionTimeStyle = {
  SessionTimeMain: {
    display: "flex",
    justifyContent: "space-between",
    borderBottom:'1px solid #EAECF0',
    paddingBottom: "17px"
  },

  SessionOvertimeBoxComponent: {
    color: "#344054",
    fontWeight: 500,
    display: "flex",
    height: "50px",
    alignItems: "center",
    marginTop:'15px',
    gap:'10px',
    "@media screen and (max-width:767px)":{
      flexDirection:"row"
    }
  },
  SessionOverTimeBox: {
    fontSize: "51px",
    flexDirection: { sm: "unset", xs: "column" },
    "@media screen and (max-width:1600px)":{
      fontSize: "36px",
    }
  },

  SessionTrendingValue: {
    color: "#039855",
    backgroundColor: "#ecfdf3",
    borderRadius: "16px",
    display: "flex",
    padding: "4px 10px",
    fontSize: "12px",
    marginLeft: "2px",
    width:'fit-content'
  },
  SessionOverTimeData: {
    fontSize: { sm: "42px", xs: "29px" },
  },
  TrendingIcon: {
    color: "#039855",
    marginRight: "4px",
    fontSize: "18px",
  },
  SessionUser: {
    color: "#344054",
    fontWeight: 600,
    fontSize: "16px",
  },
  Letterspacing: {
    letterSpacing: "-2px",
  },
  SessionUserData: {
    color: "#344054",
    fontWeight: 500,
    display: "flex",
    height: "50px",
    alignItems: "center",
  },
  SessionUserValue: {
    color: "#667085",
    display: "flex",
    fontSize: "12px",
    padding: "4px",
  },
  DashboardChart: {
    height: "160px",
    width: "100%",
    "& .echarts-for-react": {
      margin: "0 0 0 -34px",
      width: "120%",
    },
  },
  engineOverTime : { 
    width: { sm: "100%", xs: "100%" },
    "svg":{
      color:"#344054"
    }
  },
  SessionText: {
    color: "#344054",
    fontWeight: 500,
  },
  "@media screen and (min-width: 1600px)": {
    dashboardChart: {
      "& .echarts-for-react": {
        width: "119%",
        margin: "0px 0 0 -9%",
        "[@media screen and (max-width: 900px)]": {
          width: "109%",
          margin: "0 auto",
        },
        "[@media screen and (max-width: 767px)]": {
          width: "115%",
          margin: "0 0 0 -17px",
        },
      },
    },
  },
  increaseSession:{
    color:"#667085",
    fontSize:"13.11px"
  }
};
