export const styles = {
    tableCell:{
        display:'flex',
        alignItems:'center',
        gap:'10px'
    },
    cellData : {
        color:"#374151",
        fontSize:'14px',
        "@media screen and (max-width:767px)":{
            fontSize:"12px",
        }
    },
    cellCommit:{
        color:"#667085",
        fontSize:'14px',
        "@media screen and (max-width:767px)":{
            fontSize:"12px",
        }
    },
    tableContainer:{
        border: "1px solid #EAECF0",
        borderRadius: "10px"
    },
    cellHeader:{
        color:'#667085',
        fontSize:'12px',
        fontWeight:500,
        background:'#F9FAFB',
        padding:'6px 18px'
    },
    tableRow:{
        cursor:'pointer',
        "&:hover":{
            background:'#F2F4F7'
        }
    }
}