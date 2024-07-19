import Colors from "@/common/constants/color.constant";

export const style = {
  createPolicy: {
    px: "4%",
    my: 5,
  },
  createPolicyGrid: {
    padding: "31px 0px 0px",
  },
  label: {
    color: Colors.primary_101,
    fontSize: "14px",
    fontWeight: 500,
  },
  multiSelect: {
    display: "flex",
    alignItems: "center",
    marginTop: "32px",
  },

  iconBtn: {
    "&:hover": { backgroundColor: "transparent" },
    pl: 0,
    pr: 0,
  },
  severityChip: {
    height: "25px",
    border: "1px solid transparent",
    // "&:hover": { border: "1px solid #B54708" },
  },
  severityLevel: {
    fontSize: "8px",
    ml: 1,
  },
  statusChip: {
    height: "25px",
    border: "1px solid transparent",
  },
  engine: {
    "&:hover": { backgroundColor: "transparent" },
    p: 0,
  },
  chip: {
    color: "#667085",
    fontSize: "14px",
    height: "25px",
  },
  header: {
    background: "#F8F9FB",
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 20px",
  },
  typography: {
    color: "#667084",
    fontWeight: 500,
    fontSize: "12px",
    padding: "10px 22px",
  },
  tableRow: {
    background: "#F8F9FB",
  },
  parentRow: {
    background: "#F2F3F6",
    cursor:'pointer',
    ".MuiTableCell-root": {
      padding: "15px 18px",
    },
    "td":{
        "&:nth-child(3)":{
            width:"13%"
        },
        "&:nth-child(4)":{
            width:"13.5%"
        },
        "&:nth-child(5)":{
            width:"13.98%"
        }
    },
    "th":{
        width:"17%",
    }
  },
  type: {
    color: Colors.primary_101,
    fontSize: "14px",
    fontWeight: 700,
  },
  nestedCell: {
    padding: "17px 16px",
  },
  engineCell: {
    color: Colors.primary_101,
    fontSize: "14px",
    fontWeight: 700,
  },
  nestedTableRow: {
    margin: "0 0 0 auto",
    tr: {
        th: {
            width: "15%",
           
        },
        td: {
            "&:nth-child(1)": {
                width: "8%",
                border:'none',
                "@media screen and (max-width:1440px)":{
                    width:"5%",
                }
            },
            "&:nth-child(3)": {
                width: "13%",
            },
            "&:nth-child(4)": {
                width: "14.3%",
            },
            "&:nth-child(5)": {
                width: "12.7%",
            },
            "&:nth-child(6)": {
                width: "25%",
            },
        },
    },
  },
  save: {
    background: "#027947",
    color: "#fff",
    fontSize: "14px",
    fontWeight: 600,
    padding: "8px 46px",
    textTransform: "capitalize",
    marginTop: "32px",
    marginLeft: "auto",
    display: "flex",
    borderRadius: "8px",
    "&:hover": {
      background: "#027947",
    },
  },
  thBorder: {
    tr: {
      "&:last-child": {
        td: {
          borderBottom: "unset",
        },
        th: {
          borderBottom: "unset",
        },
      },
    },
  },
  desc: {
    boxShadow: "0px 1px 2px 0px #1018280D",
    border: "1px solid #CFD4DC",
    padding: "13px 16px",
    borderRadius: "8px",
    marginTop: "24px",
    h6: {
      color: "#374151",
      fontWeight: 600,
      fontSize: "14px",
    },
  },
  integration: {
    border: "1px solid #D5D9EB",
    padding: "0px 1px",
    borderRadius: "28px",
    fontSize: "12px",
    height: "26px",
  },
  deleteBackdrop: {
    position: "fixed",
    zIndex: "999999",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    height: "100%",
    background: "#00000070",
  },
  deleteModel: {
    padding: "22px 28px",
    borderRadius: "8px",
    maxWidth: "658px",
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    height: "fit-content",
    "&:before": {
      background: "#000",
      content: `''`,
      position: "absolute",
    },
    "h5": {
      color: Colors.primary_101,
      fontSize: "16px",
      fontWeight: 700,
    },
    "h6": {
      padding: "22px 0",
      lineHeight: 1.6,
      fontSize: "16px",
      fontWeight: 400,
    },
    button: {
      fontSize: "14px",
      fontWeight: 600,
      textTransform: "capitalize",
      padding: "8px 16px",
      borderRadius: "8px",
    },
  },
  cancel: {
    border: " 1px solid #D0D5DD",
  },
  del:{
    background: "#FEF3F2", 
    color: "#B42318" 
  },
  actionBtn:{
    position:"relative",
    display:"flex",
    justifyContent:"space-between"
  },
  promptBox: {
    borderTop: "1px solid #EAECF0",
    borderBottom: "1px solid #EAECF0",
    margin: "25px 0",
    "h6": {
      fontWeight: 600,
      paddingBottom: "0px !important",
    },

    textarea: {
      border: "1px solid #CFD4DC",
      boxShadow: "0px 1px 2px 0px #1018280D",
      background: "transparent",
      display: "block",
      width: "100%",
      padding: " 9px 18px",
      borderRadius: "8px",
      marginTop: "18px",
      resize: "none",
    },
  },
  bard: {
    background: "#fff",
    display:'flex',
    alignItems:'center',
    padding:" 15px 19px",
    borderRadius: "8px",
    gap:'16px',
    margin:'30px 0px',
    boxShadow: "0px 1px 2px 0px #1018280D"

  },
  voilationBox:{
    background:"#FEF3F2",
    borderRadius:'8px',
    padding: "16px 22px",
    marginBottom: "30px",
    "h4":{
      color:"#D92D20",
      fontSize:'14px',
      fontWeight:500,
      "span":{
        fontWeight:600,
      }
    }
  },
  piBox:{
    paddingTop:'22px',
    "h2":{
      color:"#374151",
      fontSize:'16px',
      fontWeight:600
    }
  },
};
