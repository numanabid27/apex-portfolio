export const styles = {
   
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
    container:{
        borderBottom:'1px solid #EAECF0',
        padding: "23.5px 30px",
        cursor:'pointer',
        "&:last-child":{
            borderBottom:'unset',
        },
        "@media screen and (max-width:1600px)":{
            padding: "21.5px 30px",
        },
        "@media screen and (max-width:767px)":{
            padding: "20px 13px",
        }
    },
    textGrid:{
        "h5":{
            fontSize:'17.29px',
            fontWeight:600,
            color:"#344054",
            minHeight: "49px",
            "@media screen and (max-width:1600px)":{
                fontSize:'14px',
            }
        },
        "h6":{
            fontSize:'17.29px',
            fontWeight:400,
            color:"#98A2B3",
            "@media screen and (max-width:1600px)":{
                fontSize:'14px',
            }
        }
    }
}