import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material'
import Image from 'next/image'
import check from "@/common/assets/images/check-check.svg";
import {styles} from "./multiselect.style";
import { actions, multiAction } from '../../createPolicy.constant';
// import useCreatePolicies from '../../use-createPolicies.hook';
import ClearIcon from '@mui/icons-material/Clear';
import useCreatePolicies from '../severityLevel/use-severity.hook';

const MultiSelect = () => {
  
  const {handleClick, handleChange, isHide, checkedValues} = useCreatePolicies();
 
  return (
    <>
      <Box>
        <Button sx={styles.dropdwonButton} onClick={handleClick}>
          {
            checkedValues.length === 0 ?
            <>
              <Image src={check} alt="" />
              Set for all
            </>
            :
            checkedValues.map((item:any, i:any)=>(
                <Typography key={i.toString()} sx={styles.typography2}>
                    {item} 
                    <ClearIcon onClick={() => handleChange(item)} /> 
                </Typography>
            ))
          }
          
        </Button>
        {
          isHide &&
          <Box sx={styles.dropdownStyle}>
            {
              multiAction.map((item:any, i:number)=>(
                <FormControlLabel
                  key={i.toString()}
                  label={<Box sx={styles.checkBoxItems}>
                        <Typography sx={styles.typography}>{item.label}</Typography>
                        
                    </Box>}
                  control={
                    <Checkbox
                      color="success"
                      checked={checkedValues.includes(item.label)}
                      onChange={() => handleChange(item.label)}
                    />
                  }
                />
              ))
            }
          </Box>
        }
        
      </Box>
    </>
  )
}

export default MultiSelect