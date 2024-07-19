export const styles = {
    search_box : {
        border:"1px solid #D0D5DD",
        margin : "35px auto 16px",
        maxWidth : "800px",
        display:"flex",
        alignItems:"center",
        borderRadius:"8px",
        padding:"6px 16px",
        "& .MuiInputBase-root::before" : {
            borderBottom : "none"
        },
        "& .MuiInputBase-root::after" : {
            borderBottom : "none !important"
        },
        "& .MuiInputBase-root:hover::before" : {
            borderBottom : "none !important"
        }
    },
    input : {
        width:"100%",
        padding: "0 0 0 10px",
    },
    search_text : {
        textAlign:"center",
        color:"#344054"
    },
    clound_box :{
      padding:"58px 0px"
    },
    searchChip : {
        backgroundColor:"#ECFDF3",
        color:"#027A48",
        padding:"6px 10px",
        borderRadius:"6px",
        display:"flex",
        alignItems:"center"
    },
    searchChip_text : {
        fontSize:"12px",
        fontWeight:600,
    },
    searchRow : {
        display:"flex",
        width:"fit-content",
        gap:"6px",
        marginLeft:"6px"
    },
    cross : {
        fontSize:"18px",
        marginLeft:"5px",
        cursor:"pointer"
    },
    tableBox : {
        margin: "48px auto 0",
        maxWidth: "1351px",
        padding: "0 15px",
    },
}