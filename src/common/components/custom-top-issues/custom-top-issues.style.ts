export const topStyles = {
  topIssuesTitle: {
    color: "#344054",
    fontWeight: 600,
    padding: "13px 0px 10px",
    fontSize:'23.31px',
    "@media screen and (max-width:1600px)":{
      fontSize:'18px',
    }
  },
  link: {
    textDecoration: "none",
    cursor: "pointer",
  },
  toIssuesData: {
    padding: "6px 12px 6px 0px",
  },
  topIssuesitem: {
    borderTop: "1px solid #eaecf0",
    display:"flex",
    alignItems:"flex-start",
    boxShadow: "0px 1px 5px 0px #00000026",
    gap: "15px",
    borderRadius:"10px",
    padding:"20px 22px",
    justifyContent:"space-between",
    flexDirection:"column",
    "&:hover": {
      backgroundColor: "#f9fafb",
    },
    "@media screen and (max-width:1440px)":{
      padding:"22px 16px",
    },
    "@media screen and (max-width:1200px)":{
      padding:"15px 16px",
      gap: "9px",
    },
    "@media screen and (max-width:767px)":{
      flexDirection:"column",
      alignItems:"flex-start"
    }
  },
  TopIssuesDesc: {
    margin: "12px 12px 12px 0px",
    display: "flex",
    alignItems: "center",
    "@media screen and (max-width:1440px)" : {
      margin: "6px 12px 7px 0px",
    },
    "@media screen and (max-width:1200px)" : {
      margin: "0px 12px 0px 0px",
    },
  },
  arrowIcon: {
    marginRight: "10px",
  },
  topIssuesBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    height: { sm: "30px", xs: "unset" },
  },
  topIssuesValue: {
    display: "block",
    color: "#344054",
    fontSize: "14px",
    fontWeight: 500,
    marginInline: "4px",
  },
  arrowImg: {
    color: "#027a48",
    fontSize: "15px",
  },
  chipsBox: {
    marginLeft: "20px",
  },
  codeChip: {
    marginLeft: "8px",
    borderRadius: "4px",
  },
  buttonGrid: {
    alignItems: "center",
    borderTop: "1px solid #eaecf0",
    padding: "13px 3px 3px",
  },
  topIssuesBtns: {
    margin: "8px",
    padding: "0px",
    paddingInline: " 8px",
    textTransform: "inherit",
    color: "#667085",
    fontSize: "14px",
    border: "1px solid #d0d5dd",
  },
  grid:{
    marginTop:'18px',
    "@media screen and (max-width:1440px)" : {
      marginTop:'14.5px',
    },
  },
  overviewLevel : {
    borderRadius : "5px",
    padding : "0px 10px !important",
    border:'none',
    color:"#344054",
    fontSize:"17px !important",
    "& .MuiChip-avatar":{
      marginRight : "0px"
    },
    ".MuiChip-label":{
      "@media screen and (max-width:1440px)" : {
        paddingLeft:'6px',
        paddingRight:'8px'
      },
    },
    ".MuiChip-avatar":{
      "@media screen and (max-width:1440px)" : {
        width:'16px',
        height: "16px"
      },
    },
    "@media screen and (max-width:1800px)" : {
      fontSize:"12px !important",
      padding : "0px 10px !important",
    },
  },
  countRow : {
    display:"flex",
    alignItems:"center",
    gap:"15px",
    marginRight:"20px",
    "@media screen and (max-width:1820px)" : {
      gap:"7px"
    }
  },
  countText : {
    color:"#344054",
    fontSize:"17px",
    fontWeight:700,
    paddingTop:'4px',
    "@media screen and (max-width:1820px)" : {
      fontSize:"14px",
    },
  },
  "@media screen and (max-width:1100px)" : {
    countRow :{
      gap:"7px"
    }
  },
 
};
