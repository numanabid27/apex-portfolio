import Colors from "@/common/constants/color.constant";

export const styles = {
  question: {
    background: "#F2F4F7",
    padding: "20px",
    border: "1px solid #EAECF0",
  },
  answer: {
    background: "#fff",
    padding: "20px",
    border: "1px solid #EAECF0",
  },
  files: {
    alignSelf: "center",
    display: "flex",
    alignItem: "center",
    columnGap: "10px",
    marginTop: "10px",
  },
  fileBtn: {
    color: "#027A48",
    marginTop: "10px",
    fontWeight: "600",
  },
  accordianBg: {
    bgcolor: "#F9FAFB",
    padding: "0 20px",
  },
  title: {
    display: "flex",
    color: "#344054",
    fontWeight: "700",
    alignItems: "center",
    fontSize: "14px",
  },
  icon: {
    marginRight: "10px",
  },
  desc: {
    padding: "0px 25px",
  },
  fontWeight: {
    fontWeight: "600",
  },
  descText: {
    paddingBottom: "10px",
  },
  margin: {
    marginTop: "5px",
    display:"flex",
    alignItems:'center',
    gap:"10px"
  },
  voilation: {
    color: "#667085",
    fontSize: "12px",
  },
  chip: {
    borderRadius: "4px !important",
    height: "26px",
  },
  chipText: {
    fontSize: "12px",
  },
  appex: {
    fontSize: "14px",
  },
  highChip: {
    height: "26px",
    color: "#C4320A",
    bgcolor: "#FFFAEB",
    p: 0,
  },
  circleIcon: {
    color: "#FB6514 !important",
    fontSize: "8px",
    ml: 1,
  },
  terboBox: {
    padding: "23px 20px",
  },
  terboText: {
    fontSize: "12px",
    color: "#344054",
    paddingBottom: "19px",
  },
  terboDesc: {
    fontSize: "16px",
    color: "#344054",
    paddingBottom: "19px",
  },
  paperBox: {
    backgroundColor: "#fff",
    fontFamily: "Courier New, monospace",
    padding: "8px",
    whiteSpace: "pre-wrap",
    borderRadius: "10px",
  },
  paperCode: {
    lineHeight: "2.3",
  },
  codeDesc: {
    fontSize: "16px",
    color: "#344054",
    paddingBottom: "19px",
    paddingTop: "19px",
  },
  mail: {
    fontSize: "12px",
    textDecoration: "none",
    color: "#344054",
    padding: "0px 20px",
  },
  mailBox: {
    marginTop: "10px",
  },

  sideModel:{
    padding:"28px 15px",
   
  },
  modelTitle:{
    color:Colors.primary_101,
    fontSize:'24px', 
    fontWeight:700
  },
  modelGradient:{
    background: "linear-gradient(180deg, rgba(250, 207, 21, 0.25) 0%, rgba(255, 255, 255, 0.25) 7.5%)",
  },
  list : {
    position:'absolute',
    zIndex: 99,
    background: "#fff",
    width: "126px",

    "li" :{
      color:Colors.primary_101,
      fontSize: "14px",
      fontWeight: 600,
      cursor:'pointer',
      textTransform:"capitalize"
    }
  },
  listBox:{
    border: "1px solid #D0D5DD",
    padding: "9px 23px",
    borderRadius: "8px",
    "span":{
      width:'10px',
      height:'10px',
      borderRadius:"50%"
    }
  },
  resolved:{
    background:"#027A48",
    color:"#fff",
    fontSize:'14px',
    fontWeight:600,
    padding: "8px 18px",
    borderRadius: "8px",
    "&:hover":{
      background:"#027A48",
    }
  },
  iconBtn: {
    "&:hover": { backgroundColor: "transparent" },
    pl: 0,
    pr: 0,
  },
  severityChip: {
    height: "25px",
    border: "1px solid transparent",
  },
  severityChip2: {
    height: "25px",
  },
  severityLevel: {
    fontSize: "8px",
    ml: 1,
  },
  box:{
    "&:nth-child(1)":{
      width:"9%"
    },
    "&:nth-child(2)":{
      width:"10%"
    },
    "&:nth-child(3)":{
      width:"13"
    },
    "h6":{
      color:"#374151",
      fontSize:"16px", 
      fontWeight:600
    }
  },
  mainBox:{
    borderBottom: "1px solid #D0D5DD",
    padding:"12px 28px",
    "&:last-child":{
      borderBottom: "unset",
    }
  },
  label:{
    color:"#667085",
    fontSize:'12px',
    fontWeight:400,
    paddingBottom:'4px'
  },
  msg:{
    color:Colors.primary_101,
    fontSize:'14px',
    "span":{
      fontSize:'12px',
      color:"#667085",
      paddingLeft: "5px"
    }
  },
  evidance_grid:{
    borderBottom: "1px solid #D0D5DD",
    padding:"18px 0",
    ".MuiGrid-root":{
      color:"#667085",
      fontSize:'12px',
    },
    ".MuiChip-root":{
      borderRadius: "4px",
      color:"#344054",
      fontSize:'12px',
      fontWeight:600
    },
    "h6":{
      color:"#374151",
      fontSize:'14px',
    },
    "&:last-child":{
      borderBottom: "unset"
    }
  },
  code:{
    boxShadow: "0px 1px 3px 0px #1018281A",
    border:" 1px solid #EAECF0",
    padding:" 0px 16px",
    marginTop: "15px",
    borderRadius: "8px"
  },
  nestedTbody:{
   
    "th":{
        padding:"24px 17px",
        fontSize:'14px',
        color:"#344054"
    }
  },
  nestedHead:{
    background:"#F9FAFB",
    "th":{
      color:'#667085',
      fontSize:'12px',
      fontWeight:500
    }
  },
  nestedDate:{
    fontSize:'14px',
    color:"#667085"
  },
  nestedChip:{
      borderRadius:"4px",
      backgrpund:"#F2F4F7",
      color:"#374151",
      fontSize:'12px',
      fontWeight:500,
      height: "22px",
      "span":{
          padding: "0 9px"
      }
  },
  modelChip:{
    border: "1px solid #EAECF0",
    height: "22px",
    
  },
  tableVoliation:{
    color: Colors.primary_101,
    fontSize:"14px",
    fontWeight:700,
    margin: "24px 0",
    "span":{
      fontWeight:400,
    }
  },
  tune:{
    boxShadow: "0px 1px 2px 0px #1018280D",
    border: "1px solid #D0D5DD",
    color:"#667085",
    fontSize:'14px',
    fontWeight:600,
    textTransform:"capitalize",
    padding: "8px 14px",
    borderRadius:'8px'
  },
  tableBorder:{
    boxShadow: "0px 1px 3px 0px #1018281A",
    border: "1px solid #EAECF0",
    borderRadius: "11px"

  },
  nestedBody:{
    "tr":{
      "&:last-child":{
        "th":{
          borderBottom:'unset !important'
        },
        "td":{
          borderBottom:'unset !important'
        }
      }
    }
  },
  more:{
    color:"#374151",
    fontSize:'14px',
    textTransform:'capitalize',
    display:'flex',
    alignItems:'center', 
    margin: "16px auto 0",
    fontWeight:400,
    gap:'8px',
    "svg":{
      width:'16px',
      color:"#2E90FA"
    }
  },
  issuesInfoBox:{
    paddingTop:'37px',
    "h6":{
      color:"#667085",
      fontSize:'12px',
      fontWeight: 400
    },
    "h5":{
      color:"#374151",
      fontSize:'40px',
      fontWeight: 400,
      borderBottom: "1px solid #D0D5DD",
      paddingBottom:'10px'
    }
  }
};
