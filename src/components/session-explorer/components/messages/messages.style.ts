import Colors from "@/common/constants/color.constant";

export const styles = {
    sessionTableRow: {
     width:'100%',
      mt: 8,
      // table: {
      //   tbody: {
      //     tr: {
      //       td: {
      //         "&:nth-child(2)": {
      //           width: "50%",
      //           "@media screen and (max-width:1300px)": {
      //             width: "unset",
      //           },
      //         },
      //       },
      //     },
      //   },
      // },
    },
  
    ebgineBtn: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: { sm: "unset", xs: "column" },
      "& .MuiInput-root": {
        "&:before": {
          borderBottom: "none !important",
        },
      },
      "& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
        borderBottom: "none !important",
      },
    },
    engineUsage: {
      padding: "16px 17px 25px",
      boxShadow: "0px 1px 3px #8080804a",
      marginBottom: { md: "unset", xs: "10px" },
      "& .MuiSelect-select": {
        fontWeight: 500,
      },
    },
    sessionEngineFilter: {
      padding: "8px 10px",
      borderRadius: "8px",
      "& .MuiSelect-select": {
        padding: "0 18px",
      },
    },
    sessionGrpahsRow: {
      px: "3.5%",
      my: 10,
      gap: "9px",
      justifyContent: "space-between",
    },
    searchBox: {
      textAlign: "center",
      padding: { sm: "0 0px 0 20px", xs: "0 0px" },
      width: { sm: "65%", xs: "100%" },
      margin: "auto",
      "& .MuiInputBase-root": {
        borderRadius: "8px",
      },
    },
    searchText: {
      color: "#344054",
      padding: "20px 0px",
    },
    searchInner: {
      border: "1px solid rgba(0, 0, 0, 0.23)",
      borderRadius: "8px",
      padding: "0px 14px",
      display: "flex",
      alignItems: "center",
    },
    searchIcon: {
      marginTop: "5px",
    },
    searchInput: {
      width: "100%",
      color: "#667085",
      fontWeight: 500,
      border: "none",
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
      },
      "& .MuiInputBase-input": {
        color: "#667085",
        fontWeight: 500,
        opacity: "unset",
      },
    },
    session_filters: {
      marginTop: "20px",
      // pl: { sm: "3.5%", xs: "3.4%" },
      // pr: { sm: "3.5%", xs: "6%" },
      marginBottom: "15px",
      marginLeft: "0px",
      gap: { sm: "15px", xs: "5px" },
      "& .MuiSelect-select": {
        padding: "0 0",
        fontSize: "12px !important",
      },
      "& .MuiFormLabel-root": {
        fontSize: "12px",
        fontWeight: 600,
      },
      "& .MuiInputBase-inputAdornedEnd": {
        padding: "14px 11px",
        fontSize: "12px",
      },
      "& .MuiInputBase-adornedEnd": {
        borderRadius: "8px",
      },
      "& .MuiSvgIcon-root": {
        fontSize: "18px",
        position: "unset",
      },
      "& .MuiMenuItem-root": {
        fontSize: " 12px !important",
      },

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
    engineFilter: {
      maxWidth: " unset !important",
      paddingLeft: "0px !important",
      flexBasis: { sm: "unset !important", xs: "100% !important" },
      "& .css-a0md3q-MuiStack-root": {
        flexWrap: " unset",
      },
      ".MuiInputBase-root":{
        display:'flex',
        gap:'10px',
      }
    },
    formControl: {
      width: "100%",
      marginTop: "2px",
    },
    engine: {
      fontSize: "12px",
      top: "-4px"
    },
    chip: {
      color: "#027A48",
      bgcolor: "#ECFDF3",
      borderRadius: "5px",
    },
    userConsistancy: {
      paddingLeft: "0px !important",
      maxWidth: "unset !important",
      flexBasis: { sm: "unset !important", xs: "100% !important" },
      width:'200px'
    },
    userFormControl: {
      paddingTop: "3.1px",
    },
    userText: {
      fontSize: "12px",
    },
    enginItem: {
      fontSize: "12px",
      justifyContent: "space-between",
    },
    iconBtn: {
      padding: "0px",
    },
    closeIcon: {
      fontSize: "16px",
    },
    clearAll: {
      fontSize: "14px",
      color: "#667085",
      cursor: "pointer",
    },
    clearBtnGrid: {
      paddingLeft: "0px !important",
    },
    GridMain: {
      px: "3.5%",
      my: 10,
      gap: "9px",
      justifyContent: "space-between",
    },
    GridShadow: {
      padding: "16px 17px 25px",
      boxShadow: "0px 1px 3px #8080804a",
      marginBottom: { md: "unset", xs: "10px" },
    },
    BoxStyling: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: { sm: "unset", xs: "column" },
      "@media screen and (max-width:1300px)": {
        alignItems: "flex-start",
      },
    },
    SessionHeader: {
      fontWeight: "600",
      fontSize: { sm: "16px", xs: "14px" },
      color: "#344054",
    },
    SessionText: {
      color: "#344054",
      fontWeight: 500,
    },
  
    SessionEngine: {
      // mx: { lg: 2, md: 0 },
      // ml: { lg: 2, md: 1, sm: 0 },
      boxShadow: "0px 1px 3px #8080804a",
      marginBottom: { md: "unset", xs: "10px" },
      padding:'15px 19px',
      overflow:'hidden',
      "h5":{
        color:Colors.primary_101,
        fontWeight:600,
        fontSize:'16px',
        paddingBottom:'10px'
      }
    },
    SessionByEngine: {
      padding: "14px 17px 25px",
      boxShadow: "0px 1px 3px #8080804a",
      marginBottom: { lg: "unset", sm: "10px" },
    },
    SessionTitle: {
      color: "#344054",
      fontWeight: "600",
      fontSize: "16px",
      pb: 8,
      paddingTop: "3px",
      "@media screen and (max-width:1300px)": {
        fontSize: "12px",
      },
    },
    TextStyling: {
      color: "#344054",
      padding: "0px 0px 20px 0px",
    },
    SessionSpan: {
      color: "#344054",
      fontWeight: "600",
      "@media screen and (max-width:1300px)": {
        fontSize: "14px",
      },
    },
    userName: {
      color: "#667085",
    },
    active: {
      paddingBottom: "10px",
    },
    engineOverTime: {
      width: { sm: "32%", xs: "45%" },
    },
  
  
  
  
    // new styling 5-24-2024
    mainGrid : {
      px: "3.5%",
      mb: 8,
      mt:5
    },
    tabs:{
      ".MuiTabs-flexContainer":{
          gap: "8px",
          marginBottom: "20px",
          "button":{
              border: "1px solid #D0D5DD",
              borderRadius: "30px",
              padding: "0px 17px",
          },
          "button.Mui-selected":{
              background:"#039855",
              color:"#fff",
              border:'1px solid #039855'
          }
      },
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
    sessionUser:{
      ".echarts-for-react":{
        "canvas":{
          left: "3.7vw !important",
          width: "68vw !important",
          "@media screen and (max-width:1440px)":{
            left: "1vw !important",
            width: "68vw !important",
          }
        }
      }
    },
    user1:{
      ".echarts-for-react":{
        height: "105px !important",
        "canvas":{
          top: "-93px !important",
          width: "14vw !important",
          left: "33px !important",
          "@media screen and (max-width:1820px)":{
            width: "12.5vw !important",
          },
          "@media screen and (max-width:1440px)":{
            width: "14vw !important",
          }
        }
      }
    },
    queryBuilder:{
      position: "absolute",
      right: "0",
      top: "-67px",
      "@media screen and (max-width:767px)":{
        position: "unset",
        display:'flex',
        justifyContent:'flex-end',
        marginBottom: "20px"
      }
    },
    queryBuilderButton:{
      background:"#039855",
      color:"#FFFFFF",
      borderRadius:'8px',
      fontSize:'14px',
      fontWeight:600,
      textTransform:'capitalize',
      padding:"10.5px 17px",
      "&:hover":{
        background:"#039855",
      }
    },
    queryBuilderSec:{
      background:"#F9FAFB",
      borderRadius:'20px',
      width: "39vw",
      position:" absolute",
      right: "-2px",
      padding:"14px 23px",
      zIndex:'99',
      "@media screen and (max-width:1100px)":{
        width: "57vw",
      },
      "@media screen and (max-width:767px)":{
        width: "100%",
      }
    },
    header:{
      borderBottom:'1px solid #D0D5DD',
      paddingBottom: "16px",
      "h6":{
        color:"#344054",
        fontSize:'14px',
        fontWeight:600
      },

    },
    filterRow:{
      borderBottom: "1px solid #D0D5DD",
      padding:"13px 0",
      ".Mui-selected":{
        background:"#fff !important"
      }
    },
    toggleButton:{
      width:"75px !important",
      height: "40px",
      color:"#344054",
      fontWeight:600,
      fontSize:'14px',
      "&:first-child":{
        borderRadius: "8px 0px 0px 8px"
      },
      "&:last-child":{
        borderRadius: "0px 8px 8px 0px"
      }
    },
    actionSubmit:{
      "button" : {
        fontSize:"14px",
        "@media screen and (max-width:767px)":{
          fontSize:"12px",
          marginTop:'10px'
        },
        "&:first-child":{
          background:'#fff',
          color:"#667085",
          fontWeight:600,
          border: "1px solid #D0D5DD",
          boxShadow: "0px 1px 2px 0px #1018280D",
          textTransform:"capitalize",
          borderRadius:"8px",
          padding:"7px 13px"
        },
        "&:last-child":{
          background:'#027A48',
          color:"#fff",
          fontWeight:600,
          border: "1px solid #027A48",
          boxShadow: "0px 1px 2px 0px #1018280D",
          textTransform:"capitalize",
          borderRadius:"8px",
          padding:"7px 13px"
        }
      }
    },
    delBtns:{
      "svg":{
        color:"#98A2B3",
        cursor : "pointer"
      },
      "img":{
        cursor : "pointer"
      }
    },
    moreSelected:{
      borderRadius: "8px",
      color: "#667085",
      fontWeight: 500,
      border: "1px solid #D1D5DB",
      padding: "8.5px 17px",
      fontSize:" 12px",
      textTransform: "capitalize",
      display: "flex",
      gap: "10px",
      marginTop: "3.1px",
      "@media screen and (max-width:767px)":{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start"
      }
    },
    typography:{
      fontSize:'14px'
    },
    shankyFilter:{
      display:"flex",
      marginTop:"-48px",
      justifyContent:"center"
    },
    filter1:{
      width: "40%",
      justifyContent: "center",
      display: "flex",
    },
    hiring:{
      width: "42%",
      justifyContent: "flex-end",
      display: "flex",
    },
    filter2:{
      width: "28%",
      justifyContent: "flex-start",
      display: "flex",
    },
    filter4:{
      width: "35%",
      justifyContent: "flex-end",
      display: "flex",
    },
    filter5:{
      width: "32%",
      justifyContent: "flex-end",
      display: "flex",
    },
    filter3:{
      width: "30%",
      justifyContent: "flex-start",
      display: "flex",
    },
    engineItem:{
      color: "#344054",
      border: "1px solid #bdbdbd",
      "&:hover": { border: "1px solid #939291" },
      height: "26px",
    },
    topicItem:{
      color: "#1849A9",
      background: "#D1E9FF",
      height: "26px",
      borderRadius: "16px",
      fontSize: "11.59px",
      fontWeight: 700,
      border: "unset",
    }
  };
  