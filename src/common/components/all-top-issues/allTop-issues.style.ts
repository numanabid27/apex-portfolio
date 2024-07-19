export const styles = {
  top_issue_row: {
    padding: "7px 20px",
    borderTop: "1px solid #EAECF0",
  },
  top_issue_row2: {
    padding: "26.7px 20px",
    borderTop: "1px solid #EAECF0",

    "&:first-child":{
      borderTop: "unset",
    },
    "@media screen and (max-width:2112px)" : {
      padding: "20.5px 20px",
    },
    "@media screen and (max-width:1600px)" : {
      padding: "12px 20px",
    },
  },
  topIssuesBox:{
    boxShadow: "0px 1px 5px 0px #00000026",
    borderRadius:'8px',
  },
  top_rows: {
    padding: "15px 20px 20px",
  },
  linkStyle: {
    textDecoration: "none",
  },
  topText: {
    color: "#344054",
    fontWeight: 600,
  },
  topbadge: {
    color: "#344054",
    fontSize: "14.28px",
    fontWeight:500,
    textAlign: "right",
    display: "flex",
    justifyContent: "flex-end",
  },
  bold: {
    fontWeight: 700,
  },
  more_row: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "18px",
  },
  badgeBtn: {
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",

    a: {
      border: "1px solid #D0D5DD",
      color: "#344054",
      fontSize: "12px",
      fontWeight: 600,
      textDecoration: "none",
      borderRadius: "8px",
      boxShadow: "0px 0px 2px #80808057",
      padding: "9px 9px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "fit-content",
      img: {
        marginRight: "9px",
      },
      "&:hover": {
        boxShadow: " rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
      "@media screen and (max-width:1600px)": {
        padding: "9px 8px",
      },
    },
    "@media screen and (max-width:767px)": {
      marginTop: "13px",
    },
  },
  customBox: {
    lineHeight: "1.8",
    fontSize: "14px",
  },
  buttonGrid: {
    alignItems: "center",
    borderTop: "1px solid #eaecf0",
    padding: "17px 3px 17px",
    position: "absolute",
    bottom: "0",
    right: "0",
    left: "0",
    "@media screen and (max-width:1199px)": {
      position: "unset",
    },
    "@media screen and (max-width:1380px)": {
      padding: "10px 3px 10px",
    },
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
  topIssuesValue: {
    display: "block",
    color: "#344054",
    fontSize: "14px",
    fontWeight: 500,
    marginInline: "4px",
  },
};
