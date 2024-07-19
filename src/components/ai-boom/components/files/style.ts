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
        textAlign:'right',
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
        padding:'9px 18px'
    },
   
    container:{
        background:'#F9FAFB',
        borderBottom: "1px solid rgba(224, 224, 224, 1)",
    },
    grid:{
        borderBottom: "1px solid rgba(224, 224, 224, 1)",
        position:'relative',
        "&:last-child":{
            borderBottom: "unset",
        }
    },
    gridInner:{
        padding: "16px 12px",
        cursor : 'pointer'
    },
    repo_info:{
        fontSize:'14px',
        color:'#374151',
        padding:'10px 14px',
        "span":{
            color:'#007effd6'
        },
        "@media screen and (max-width:767px)":{
            fontSize:"12px",
        }
    }
}