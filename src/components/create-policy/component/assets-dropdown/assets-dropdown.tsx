import { Box, Button, IconButton } from "@mui/material";
import Image from "next/image";
import { styles } from "./assetsDropdown.style";
import downArrow from "@/common/assets/images/downs.svg";
import useCreatePolicies from "../severityLevel/use-severity.hook";
import tick from "@/common/assets/images/tick.svg";

const AssetsDropdown = ({ title, img, ltr, onItemClick, data }: any) => {
  const { handleClick, isHide, handleClicked, isValue, dropdownRef } =
    useCreatePolicies();

  const handleItemClick = (item: any) => {
    handleClicked(item);
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <>
      <Box ref={dropdownRef}>
        <Button sx={styles.dropdwonButton} onClick={handleClick}>
          {isValue ? (
            <Box display="flex" alignItems="center" gap="10px">
              {isValue.actionImg && (
                <>
                  {!ltr && (
                    <Image src={isValue.actionImg} alt={isValue.label} />
                  )}
                </>
              )}
              {isValue.label.length > 9
                ? isValue.label.slice(0, 9) + "..."
                : isValue.label}
              <Image src={downArrow} alt="Down Arrow" />
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
            {data?.map((item: any, i: number) => (
              <Button
                key={i.toString()}
                sx={[
                  styles.typography,
                  isValue && isValue.label === item.label && styles.selected,
                ]}
                onClick={() => handleItemClick(item)}
              >
                <>
                  <Box display="flex" alignItems="center" gap="10px">
                    {item.actionImg && (
                      <Image src={item.actionImg} alt={item.label} />
                    )}
                    {item.label}
                  </Box>
                  {isValue && isValue.label === item.label && (
                    <Image src={tick} alt="Selected" />
                  )}
                </>
              </Button>
            ))}
          </Box>
        )}
      </Box>
    </>
  );
};

export default AssetsDropdown;
