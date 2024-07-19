import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export default function useSetting() {
  const [show, SetShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [personName, setPersonName] = useState<string[]>([]);
  const [selectedNames, setSelectedNames] = useState([]);
  const [age, setAge] = useState("");
  const [chips, setChips] = useState(["Apple", "Banana", "Cherry"]);
  const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard"];
  const [inputValue, setInputValue] = useState("");

  const HandlePassword = () => {
    SetShow(!show);
  };

  const handleClickOpen = (item: any) => {
    setOpen(true);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  const enableChnage = (event: any) => {
    setAge(event.target.value as string);
  };

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  return {
    SetShow,
    show,
    HandlePassword,
    open,
    selectedItem,
    handleClickOpen,
    handleClose,
    handleChange,
    names,
    personName,
    enableChnage,
    setSelectedNames,
    selectedNames,
    chips,
    setChips,
    inputValue,
    handleInputChange,
    setOpen,
  };
}
