"use client";

import { useEffect, useState } from "react";
import { SESSION_USER_DATA } from "./session-user.constant";

export default function useUsers() {
  const [engineName, setEngineName] = useState<any>([]);
  const [userName, setUserName] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>();
  const [dateShow, setDateShow] = useState<any>();
  const [finalData, setFinalData] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState<any>("");

  const [value, setIsValue] = useState<any>(0);
 
  const handleChange = (event: any, newValue: any) => {
    setUserName(event.target.value as string);
    setIsValue(newValue);
  };

  const [session, setSession] = useState<any>("All Engines");
  const SessionHandler = (event: any) => {
    setSession(event.target.value as string);
  };

  const handleSearch = (e:any) =>{
    setSearchQuery(e.target.value);
  }

  const filterData = () => {
    const filteredData = SESSION_USER_DATA.filter((item) => {
      let engineFlag = false;
      let userFlag = false;
      let textFlag = false;
  
      if (engineName.length === 0 || engineName.includes(item.violationCat.split(" ")[0])) {
        engineFlag = true;
      }
  
      if (userName === "" || item.mails === userName) {
        userFlag = true;
      }
  
      
      const itemText = Object.values(item).join(" ").toLowerCase();
      textFlag = itemText.includes(searchQuery);
  
      return engineFlag && userFlag  && textFlag;
    });
  
    return filteredData;
  };
  

  useEffect(() => {
    setFinalData(filterData());
   
  }, [engineName, userName, dateShow, searchQuery]);

  const handleClearAll = () => {
    setUserName("");
    setDateShow(undefined);
    setEngineName([]);
  };


  const handleAutocompleteChange = (e: any, newValue: any) => {
    setSearchQuery(newValue);
  };

  const allOptions: any = [];
//   SESSION_USER_DATA?.map(({mails,time, engineType, violationCat}: any) => {
//     const entries = Object.values({mails,time, engineType, violationCat});
//     entries.forEach((option:any) => {
//       allOptions.push(option);
//     });
//   });

  return {
    engineName,
    setEngineName,
    userName,
    handleChange,
    openModal,
    setOpenModal,
    selectedRow,
    setSelectedRow,
    finalData,
    SessionHandler,
    session,
    handleClearAll,
    dateShow,
    setUserName,
    handleSearch,
    searchQuery,
    handleAutocompleteChange,
    allOptions,
    value
  };
}
