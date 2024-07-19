export const styles = {
    voilationChip : {
        color: "#667085", 
        borderRadius: "4px !important", 
        height:"25px",
        "span" : {
            padding:" 0 6px",
        } 
    },
    issueRow :{ 
        mt: 4, 
        mb: 3, 
        px: "3.5%" 
    },
    issuesGrid : { 
        my: 3, 
        px: "3.5%" 
    },
    outgoing : { 
        fontSize: "12px" 
    },
    outgoingBold : {
        fontWeight: 600,
        color: "#344054",
        paddingLeft: "3px",
    },
    chip : {
        color: "#667085",
        border: "1px solid #bdbdbd",
        "&:hover": { border: "1px solid #939291" },
        height: "23px",
    },
    conversationText : { 
        color: "#1570EF", 
        fontSize: "14px" 
    },
    email : { 
        color: "#1570EF", 
        fontSize: "14px" 
    },
    sverityChip : {
        height: "26px",
        border: "1px solid transparent",
        "&:hover": { border: "1px solid #B42318" },
    } ,
    issueGrid : { 
        my: 3, 
        px: "4%" 
    },
    Icon : {
        fontSize: "8px",
        ml: 1,
    },
    leftText:{
        "h6":{
            color:"#374151",
            fotnSize:'24px',textAlign:'center'
        }
    },
    rightText:{
        "h6":{
            color:"#374151",
            fotnSize:'24px',
            textAlign:'center',
            userSelect:'none'
        }
    },
    typography:{
        color:"#98A2B3",
        fontSize:'14px',
        userSelect:'none'
    },
    dangerText:{
        border:" 1px solid #F04438",
        borderRadius: "17px",
        padding: "3px 13px",
        alignItems: "center",
        gap: "6px",
        fontSize:'12px',
        marginBottom: "6px",
        marginLeft:'auto',
        width:'fit-content',
        "span":{
            fontWeight:600
        }
    },
    multiSide:{
        border:'1px solid #12B76A',
        padding:'3px 16px',
        borderRadius:'23px',
        fontSize:'12px',
        width:'fit-content',
        display:"flex",
        alignItems:"center",
        gap:"6px",
        "span":{
            fontWeight:700,
            fontSize:'20px',
        }
    },
    switchBox:{
        cursor: "pointer",
       transform:'scale(1)',
       transition:'1s',
        "@media screen and (max-width:767px)":{
            zoom: 0.34,
            margin: "57px 0"
        }
    },
    openIssue:{
        color:"#98A2B3",
        fontSize:'14px'
    },
    voilation:{
        "span":{
            width: "15px",
            height: "15px",
            borderRadius: "4px",
        },
        "h6":{
            fontSize:'15px',
            fontWeight: 700
        }
    },
    sp:{
        marginTop: "29px"
    },
    voilationTitle:{
        fontSize:'14px'
    },
    switchBox2:{
        transform:'scale(0.4)',
        transformOrigin:"left",
        transition:'1s',
    }
}