export const EngineInfoStyle = {
  mainContent: {
    padding: "16px 17px 25px",
    marginBlock: "8px",
    boxShadow: "0px 1px 3px #8080804a",
    borderRadius: "8px",
    border: "1px solid #EAECF0",
    position:"relative",
    alignItems:"flex-end"
  },

  title: {
    fontSize: "24px",
    fontWeight: "400",
    color: "#344054",
  },

  descriptionContainer: {
    marginTop: "17px",
  },

  description: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#344054",
    justifyContent: "between",
    marginLeft: "6px",
  },

  rightBorder: {
    borderRight: "1px solid #D0D5DD",
  },
  azure:{
    alignItems:"center",
    display:"flex",
    transform: "translateY(3px)",
  },

  vulnabrities: {
    paddingLeft: "17px",
  },

  vulnabrityTitle: {
    fontSize: "14px",
    fontWeight: "400",
    color: "#344054",
  },

  modalTxt: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#344054",
    marginTop: "6px",
    lineHeight:"1.0"
  },
  modalTxt2:{
    marginBottom:"11px",
  },

  customLabel: {
    padding: "5px",
    borderRadius: "4px",
    background: "#F2F4F7",
    color: "#344054",
    fontSize: "12px",
    fontWeight: "700",
    width: "90%",
    marginTop: "23px",
    textAlign: "center",
  },

  socialImages: {
    marginTop: "17px",
  },

  image2: {
    marginLeft: "15px",
  },

  activeContent: {
    borderTop: "1px solid #D0D5DD",
    marginTop: "20px",
  },
  activeLabel: {
    color: "#039855",
    background: "#ECFDF3",
    borderRadius: "5px",
    padding: "5px",
    justifyContent: "center",
    textAlign:"center"
  },

  textSpacing: {
    marginTop: "24px",
    marginLeft: "30px",
  },

  warningLabel: {
    backgroundColor: "#FEF3F2",
    fontSize: "14px",
    fontWeight: "400",
    color: "#344054",
    padding: "5px 10px",
    borderRadius: "5px",
    marginTop: "26px",
    width: "149px",
  },

  DangerLabel: {
    backgroundColor: "#F04438",
    fontSize: "14px",
    fontWeight: "400",
    color: "#ffffff",
    padding: "5px 15px",
    borderRadius: "5px",
    marginTop: "26px",
    width: "80px",
  },

  warningIcon: {
    fontSize: "14px",
    color: "#F04438",
    marginRight: "4px",
    position: "relative",
    top: "3px",
  },

  DangerIcon: {
    fontSize: "14px",
    color: "#ffffff",
    marginRight: "4px",
    position: "relative",
    top: "3px",
  },

  privateLabel: {
    padding: "4px 15px",
    justifyContent: "center",
    alignItem: "center",
    border: "1px solid #039855",
    color: "#039855",
    fontSize: "14px",
    fontWeight: "500",
    borderRadius: "16px",
    float: "right",
    marginTop: "18px",
  },

  innerContent: {
    width: "100%", // Default width for all screens
    margin: "auto",
    "@media (min-width: 1700px)": {
      // Define styles for large (lg) screens (adjust the breakpoint as needed)
      width: "75%", // Width for large screens
    },
    "@media (min-width: 1900px)": {
      // Define styles for large (lg) screens (adjust the breakpoint as needed)
      width: "65%", // Width for large screens
    },
    "@media (min-width: 2250px)": {
      // Define styles for large (lg) screens (adjust the breakpoint as needed)
      width: "50%", // Width for large screens
    },
    "@media (min-width: 2650px)": {
      // Define styles for large (lg) screens (adjust the breakpoint as needed)
      width: "45%", 
      height: "570px",// Width for large screens
    },
  },
};
