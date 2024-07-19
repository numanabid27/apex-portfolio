import Colors from "@/common/constants/color.constant";

export const userStyle = {
  severityLevel: {
    fontSize: "8px",
    ml: 1,
  },
  severityChip: {
    height: "25px",
    border: "1px solid transparent",
    fontWeight: 500,
    fontSize: "14px",
  },
  sessionUser: {
    ".echarts-for-react": {
      canvas: {
        left: "-3vw !important",
        width: "65vw !important",
      },
    },
  },
  typography:{
    fontSize:'14px',
  },
  activeUser:{
    borderBottom: "1px solid #D0D5DD",
    paddingBottom:'9px',
    marginBottom:'15px',
    height:'34px',
    "&:last-child":{
      borderBottom: "unset",
      paddingBottom:'0px',
      marginBottom:'0px',
    }
  },
  user1: {
    ".echarts-for-react": {
      height: "105px !important",
      canvas: {
        top: "-93px !important",
        width: "14vw !important",
        left: "33px !important",
      },
    },
  },
  text:{
    color: "#374151",
    fontWeight: "600",
    fontSize: "16px",
    paddingBottom: "10px"
  },
  SessionEngine: {
    overflow:'hidden',
    ml: { lg: 2, md: 1, sm: 0 },
    boxShadow: "0px 1px 3px #8080804a",
    marginBottom: { md: "unset", xs: "10px" },
    padding:'15px 19px',
    "h5":{
      color:Colors.primary_101,
      fontWeight:600,
      fontSize:'16px',
      paddingBottom:'10px'
    }
  },
};
