import Colors from "@/common/constants/color.constant";

 export const styles = {
    button:{
        border: "1px solid #CFD4DC",
        fontSize: "14px",
        fontWeight: "600",
        borderRadius:'8px',
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "7px 13px",
        color:Colors.primary_101,
        textTransform:'capitalize',
        boxShadow: "0px 1px 2px 0px #1018280D",
        "@media screen and (max-width:600px)":{
            fontSize: "12px",
        }
    }
}   