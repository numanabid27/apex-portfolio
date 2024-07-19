import Colors from "@/common/constants/color.constant";

export const ModalDataStyle = {
  ModalGrid: {
    padding: "20px 27px 21px",
    justifyContent: "space-between",
    "@media screen and (max-width:767px)":{
      padding: "20px 23px 21px",
    }
  },
  ModalTypo: {
    color: Colors.primary_101,
    fontSize: "42px",
    fontWeight: 500,
    paddingBottom:'22px',
    "@media screen and (max-width:767px)":{
      fontSize: "26px",
    }
  },
  ModalDesc:{
    color:'#667084',
    fontWeight: 400,
    "@media screen and (max-width:767px)":{
      fontSize: "14px",
    }
  },  
  ModalSwitch: {
    display: "flex",
    justifyContent: "flex-end",
  },
  ModalHeader: {
    color: "#344054",
    fontSize: "14px",
    marginRight: "10px",
  },
  ModalContainer: {
    padding: "0px 27px 21px",
  },
  ModalGridContainer: {
    paddingBottom: "20px",
  },
  ModalName: {
    color: "#667085",
    fontSize: "12px",
  },

  ModalValue: {
    color: "#344054",
    fontSize: "14px",
  },
  ModalChip: {
    color: "#B54708",
    p: 0,
    height: "26px",
  },
  ModalCircle: {
    color: "#F79009 !important",
    fontSize: "8px",
    ml: 1,
  },
  ModalData: {
    padding: "10px 27px",
  },
  ModalAccordin: {
    marginBottom: "10px",
  },
  groupNames:{
    color:Colors.primary_101,
    fontSize:'14px',
    fontWeight:600
  },
  suggestion:{
    background:"#F4F9FF",
    borderRadius:'10px',
    padding: "35px 23px 13px",
    marginTop: "31px"
  },
  button:{
    color:'#667084',
    fontSize:'12px',
    fontWeight:400
  },
 
  morePolicy:{
    borderTop:"1px dashed #CFD4DC",
    padding:'20px 0 0 20px',
    marginBottom:'20px',
    "@media screen and (max-width:767px)":{
      padding:'20px 0 0 6px',
    },
    "h6":{
      color:Colors.primary_101,
      fontSize:'14px',
      fontWeight:600,
      paddingBottom:"8px"
    },
    "p":{
      color:"#667084"
    },
    "button":{
        background:Colors.primary_100,
        color:'#fff',
        borderRadius:'8px',
        fontSize:'14px',
        fontWeight:600,
        padding: "8px 19px",
        marginTop: "17px",
        textTransform:"capitalize"
    },
    
  },

  delete:{
    padding: "9px 13px",
    borderRadius: "8px",
    color:'#B32218',
    fontSize:'14px',
    fontWeight:600,
    background:'#FEF2F1'
  },

  model:{
    background:"#fff",
    
  },
  run_test:{
    background:"#F4F9FF",
    padding: "27px 19px",
    margin:" 18px 27px 20px",
    borderRadius: "10px",
  },
  promptBox:{
    borderTop:'1px solid #EAECF0',
    borderBottom:'1px solid #EAECF0',
    margin: "25px 0",
    padding: "27px 0",
    "h6":{
      fontWeight: 600,
      paddingBottom:"15px"
    },
    "button":{
      background:"#98A2B3",
      color: "#fff",
      padding: "9px 27px",
      borderRadius: "8px",
      textTransform: "capitalize",
      "&:hover":{
        background:"#98A2B3",
      }
    },
    "textarea":{
      border: "1px solid #CFD4DC",
      boxShadow: "0px 1px 2px 0px #1018280D",
      display:'block',
      width:'100%',
      padding:" 9px 18px",
      borderRadius: "8px",
      marginTop: "27px",
      resize:'none',
      outline:'none'
    },
    
  },
  testBtn:{
    background:"#027947",
    color:"#fff",
    padding: "7px 33px",
    borderRadius: "8px",
    display:'block',
    margin:'0 auto',
    textTransform:"capitalize",
    "&:hover":{
      background:"#027947",
    }
  }
};
