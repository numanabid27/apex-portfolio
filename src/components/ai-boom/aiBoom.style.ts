export const styles = {
    aiEngine: {
        boxShadow: "0px 1px 3px #8080804a",
        marginBottom: { md: "unset", xs: "10px" },
       
    },
    mainGrid : {
        px: "4%",
        mb: 8,
        mt:5
    },
    tabs:{
        ".MuiTabs-flexContainer":{
            gap: "8px",
            marginBottom: "20px",
            "@media screen and (max-width:767px)":{
                overflowX:'scroll'
            },
            "button":{
                border: "1px solid #D0D5DD",
                borderRadius: "30px",
                padding: "0px 17px",
            },
            "button.Mui-selected":{
                background:"#039855",
                color:"#fff",
                border:'1px solid #039855'
            }
        },
    },
    font_700:{
        fontWeight:700,
    },
    repo:{
        fontSize:'14px',
        
        "span":{
            fontWeight:400
        }
    }
}