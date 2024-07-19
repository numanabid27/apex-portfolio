export const DashboardStyles = {
  DashboardGrid: {
    paddingLeft: "4vw",
    paddingRight: "3.7vw",
    marginBlock: "20px",
  },
  DashboardSessionMain: {
    padding: "16px 17px 25px",
    marginBlock: "8px",
    boxShadow: "0px 1px 3px #8080804a",
  },
  TopIssuesMain: {
    marginBlock: "12px",
    justifyContent: "space-between",
  },
  EngineManageMain: {
    boxShadow: "0px 1px 3px #8080804a",
  },
  IssuesEnginesGrid: {
    mx: { lg: 0, md: 0 },
    my: 2,
    ml: { lg: 0, md: 1, sm: 0 },
    boxShadow: "0px 1px 3px #8080804a",
    padding:"16px 16px 0px"
  },
  PieHeaderStyling: {
    fontWeight: 600,
    pl: 0,
    color: "#344054",
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
  top_rows: {
    padding: "13px 0px 10px",
    marginBottom:'19px',
    "@media screen and (max-width:1600px)":{
      marginBottom:'14px',
    }
  },
  topText: {
    color: "#344054",
    fontWeight: 600,
    fontSize:'23.21px',
    "@media screen and (max-width:1600px)":{
      fontSize:'18px',

    }
  },
  more_row: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: "18px",
  },
  topbadge: {
    color: "#344054",
    fontSize: "14.28px",
    fontWeight:500,
    textAlign: "right",
    display: "flex",
    justifyContent: "flex-end",
  },
  topIssues:{
    background:"#fff",
    boxShadow: "0px 1px 5px 0px #00000026",
    borderRadius:'10px'
  },
};
