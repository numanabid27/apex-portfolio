import Colors from "@/common/constants/color.constant";

export const modelStyle = {
    text:{
        "h6":{
            color:"#667085",
            fontSize:'12px',
            fontWeight:400,
            paddingBottom:'8px'
        },
        "h5":{
            color:Colors.primary_101,
            fontSize:'14px',
            fontWeight:400,
            marginBottom:" 23px"

        },
    },
    desc2:{
        padding:"23px 25px 0px"
    },
    chip:{
        ".MuiChip-root":{
            fontSize:"11.59px",
            color:"#1849A9",
            fontWeight:700,
            height:'27px',
            background:"#D1E9FF",
            padding:"10px 12px",
            display: "flex",
            gap: "6px"
        },
        "span":{
            padding:"0px"
        }
    },
    insites:{
        color:"#374151",
         fontWeight:400,
        fontSize:"14px",
        paddingBottom: "11px",
        "span":{
            fontWeight:700,
        }
    },
    promptBox:{
        background:"#EAECF0",
        borderRadius:"10px",
        padding: "18px 16px",
        marginBottom: "22px",
        position:"relative"
    },
    promptDate:{
        borderBottom: "1px solid #D0D5DD",
        color:"#374151",
        fontSize:'14px',
        paddingBottom:'11px',
        "span":{
            fontWeight:700
        }
    },
    promptName:{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        margin:" 9px 0",
        "h6":{
            color:"#374151",
            fontSize:'14px',
            fontWeight:500
        }
    },
    codeBox:{
        border: "1px solid #EAECF0",
        boxShadow: "0px 1px 3px 0px #1018281A",
        borderRadius:"8px",
        "pre":{
            margin:'0px',
            color:"#374151",
            fontSize:'14px',
            fontWeight:500,
        }
    },
    voilationBox:{
        background:"#fff",
        borderBottom: "1px solid #D92D20",
        padding: "6px 10px 6px",
        width:'fit-content',
        marginLeft:"auto",
        position: "absolute",
        right: "19px",
        top: "-14px",
        boxShadow: "0px 0px 10px 0px #D92D2026",
        cursor:'pointer', 
        display:'flex',
        alignItems:'center',
        gap:"10px",
        "h6":{
            color:"#D92D20",
            fontWeight:400,
            fontSize:'14px',
            "span":{
                fontWeight:700,
            }
        }
    },
    message:{
        padding:'13px 20px'
    },
    receiveBox:{
        background:"#F2F4F7",
        padding:'13px 20px',
        borderRadius:'8px'
    },
    mesg:{
        color:"#374151",
        fontSize:'14px',
    },
    msgTime:{
        color:"#98A2B3",
        fontSize:'14px',
        paddingTop: "4px"
    },
    copyIcon:{
        cursor:'pointer',
        color:"#98A2B3",
    },
    chatHeader:{
       
        
    }
}
