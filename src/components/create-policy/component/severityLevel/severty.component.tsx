import { Box, Button, Chip, IconButton } from "@mui/material";
import Image from "next/image";
import { styles } from "./severity.style";
// import useCreatePolicies from "../../use-createPolicies.hook";
import downArrow from "@/common/assets/images/downs.svg";
import useCreatePolicies from "./use-severity.hook";
import Colors from "@/common/constants/color.constant";
import CircleIcon from "@mui/icons-material/Circle";

const Severity = ({
  title,
  img,
  severity,
  ltr,
  onItemClick,
  policySeverity,
}: any) => {
  const { handleClick, isHide, handleClicked, isValue, dropdownRef } =
    useCreatePolicies();

  const handleItemClick = (label: any) => {
    handleClicked(label);
    if (onItemClick) {
      onItemClick(label);
    }
  };

  return (
    <>
      <Box ref={dropdownRef}>
        <Button sx={styles.dropdwonButton} onClick={handleClick}>
          {isValue ? (
            <Box display="flex" alignItems="center" gap="10px">
              {policySeverity ? (
                <IconButton sx={styles.iconBtn}>
                  <Chip
                    label={isValue}
                    sx={{
                      ...styles.severityChip,
                      color:
                        isValue === "Medium"
                          ? Colors.brown
                          : isValue === "Critical"
                          ? Colors.darkBrown
                          : isValue === "Low"
                          ? Colors.textGreen
                          : isValue === "High"
                          ? Colors.textHigh
                          : "",
                      bgcolor:
                        isValue === "Medium"
                          ? Colors.primaryWhite
                          : isValue === "Critical"
                          ? Colors.secondaryWhite
                          : isValue === "Low"
                          ? Colors.primaryGreen
                          : isValue === "High"
                          ? Colors.defaultWhite
                          : "",
                      p: 0,
                    }}
                    icon={
                      <CircleIcon
                        sx={{
                          fill:
                            isValue === "Medium"
                              ? `${Colors.orange} !important`
                              : isValue === "Critical"
                              ? `${Colors.darkBrown} !important`
                              : isValue === "High"
                              ? Colors.circleHigh
                              : isValue === "Low"
                              ? Colors.circleLow
                              : `${Colors.defaultBrown} !important`,

                          ...styles.severityLevel,
                        }}
                      />
                    }
                  />
                </IconButton>
              ) : (
                <>
                  {!ltr && <Image src={img} alt="" />}
                  {isValue.length > 9 ? isValue.slice(0, 9) + "..." : isValue}
                </>
              )}

              <Image src={downArrow} alt="" />
            </Box>
          ) : (
            <>
              {ltr ? (
                <>
                  {title}
                  <Image src={img} alt="" />
                </>
              ) : (
                <>
                  <Image src={img} alt="" />
                  {title}
                </>
              )}
            </>
          )}
        </Button>
        {isHide && (
          <Box sx={ltr ? styles.dropdownStyle2 : styles.dropdownStyle}>
            {severity?.map((item: any, i: number) => (
              <Button
                key={i.toString()}
                sx={[
                  policySeverity ? styles.typography : styles.typography2,
                  isValue == item.label && styles.selected,
                ]}
                onClick={() => handleItemClick(item.label)}
              >
                {
                  policySeverity ?
                  <IconButton sx={styles.iconBtn}>
                    <Chip
                      label={item.label}
                      sx={{
                        ...styles.severityChip,
                        color:
                          item.label === "Medium"
                            ? Colors.brown
                            : item.label === "Critical"
                            ? Colors.darkBrown
                            : item.label === "Low"
                            ? Colors.textGreen
                            : item.label === "High"
                            ? Colors.textHigh
                            : "",
                        bgcolor:
                          item.label === "Medium"
                            ? Colors.primaryWhite
                            : item.label === "Critical"
                            ? Colors.secondaryWhite
                            : item.label === "Low"
                            ? Colors.primaryGreen
                            : item.label === "High"
                            ? Colors.defaultWhite
                            : "",
                        p: 0,
                      }}
                      icon={
                        <CircleIcon
                          sx={{
                            fill:
                              item.label === "Medium"
                                ? `${Colors.orange} !important`
                                : item.label === "Critical"
                                ? `${Colors.darkBrown} !important`
                                : item.label === "High"
                                ? Colors.circleHigh
                                : item.label === "Low"
                                ? Colors.circleLow
                                : `${Colors.defaultBrown} !important`,

                            ...styles.severityLevel,
                          }}
                        />
                      }
                    />
                  </IconButton>
                  :
                  <>{item.label}</>
                }
                
              </Button>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default Severity;
