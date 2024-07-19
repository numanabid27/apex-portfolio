"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { MESSAGE_DATA } from "./message.constant"


export default function useMessage() {
  const [engineName, setEngineName] = useState<any>([]);
  const [topicName, setTopicName] = useState<any>([]);
  const [userName, setUserName] = useState("");
  const [isInterface, setIsInterface] = useState("");
  const [isTopic, setIsTopic] = useState<any>("");
  const [isStatus, setIsStatus] = useState("");
  const [isSentiment, setisSentiment] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>();
  const [dateShow, setDateShow] = useState<any>();
  const [finalData, setFinalData] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState<any>("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [isBuilder, setIsBuilder] = useState(false);

  const [value, setIsValue] = useState<any>(0);
 
  const handleChange = (event: any, newValue: any) => {
    setUserName(event.target.value as string);
    setIsValue(newValue);
  };

  const [session, setSession] = useState<any>("All Engines");
  const SessionHandler = (event: any) => {
    setSession(event.target.value as string);
  };


  const dateHandler = (newDate: any) => {
    const formatter :any= dayjs(newDate).format("MMM D, YYYY h:mm A");
    setDateRange(formatter);
    
  };

  const handleSearch = (e:any) =>{
    setSearchQuery(e.target.value);
  }

  // table filteration like selected row
  const [isClick, setIsClick] = useState("");
  const [selectDrawerValue, setSelectedDrawerValue] = useState();

  useEffect(() => {
    if (selectedRow?.id) {
      const res = finalData.find((item: any) => item.id === selectedRow?.id);
      setSelectedDrawerValue(res);
    } else {
      setSelectedDrawerValue(undefined);
    }
  }, [selectedRow, selectDrawerValue]);

  
  const filterData = () => {
    const filteredData = MESSAGE_DATA.filter((item) => {
      let engineFlag = false;
      let userFlag = false;
      let dateFlag = false;
      let textFlag = false;
      let interfaceFlag = false;
      let statusFlag = false;
      let topicFlag = false;
      let topicsFlag = false;
      let sentimentFlag = false;
  
      if (engineName.length === 0 || engineName.includes(item.topics)) {
        engineFlag = true;
      }

      if (topicName.length === 0 || topicName.includes(item.topics)) {
        topicFlag = true;
      }

      if (isInterface === "" || item.interface === isInterface) {
        interfaceFlag = true;
      }

      // if (isTopic === "" || item.topics === isTopic) {
      //   topicsFlag = true;
      // }
      if (isTopic === "" || item.topics.some((topic: any) => topic.title === isTopic)) {
        topicsFlag = true;
      }
      
      if (isStatus === "" || item.active === isStatus) {
        statusFlag = true;
      }

      if (isSentiment === "" || item.active === isSentiment) {
        sentimentFlag = true;
      }

      // if()
      if (userName === "" || item.mails === userName) {
        userFlag = true;
      }
  
      if (dateRange[0] === null || dateRange[1] === null) {
        dateFlag = true;
      } else {
        const startDate = dayjs(dateRange[0]);
        const endDate = dayjs(dateRange[1]);
        // const itemDate = dayjs(item.time);
        // dateFlag = itemDate.isAfter(startDate) && itemDate.isBefore(endDate);
      }
      const itemText = Object.values(item).join(" ").toLowerCase();
      textFlag = itemText.includes(searchQuery);
  
      return engineFlag && userFlag && dateFlag && textFlag && sentimentFlag && interfaceFlag && statusFlag && topicFlag && topicsFlag;
    });
  
    return filteredData;
  };
  

  useEffect(() => {
    setFinalData(filterData());
   
  }, [engineName, topicName, userName, dateShow, dateRange, searchQuery, isTopic, isSentiment, isInterface, isStatus]);

  const handleClearAll = () => {
    setUserName("");
    setIsInterface("");
    setIsStatus("");
    setisSentiment(""),
    setDateShow(undefined);
    setEngineName([]);
    setTopicName([]);
    setIsTopic('')
    setDateRange([null, null]);
  };


  const handleAutocompleteChange = (e: any, newValue: any) => {
    setSearchQuery(newValue);
  };

  const allOptions: any = [];
  // SESSION_EXPLORE_DATA?.map(({mails,time, engineType, violationCat}: any) => {
  //   const entries = Object.values({mails,time, engineType, violationCat});
  //   entries.forEach((option:any) => {
  //     allOptions.push(option);
  //   });
  // });

  return {
    engineName,
    setEngineName,
    userName,
    handleChange,
    openModal,
    setOpenModal,
    selectedRow,
    setSelectedRow,
    dateHandler,
    finalData,
    SessionHandler,
    session,
    handleClearAll,
    dateShow,
    setUserName,
    startDate,
    endDate,
    setDateRange,
    handleSearch,
    searchQuery,
    handleAutocompleteChange,
    allOptions,
    value,
    setIsInterface,
    isInterface,
    isStatus,
    setIsStatus,
    topicName,
    setTopicName,
    setIsBuilder,
    isBuilder,
    isTopic,
    setIsTopic,
    setisSentiment,
    isSentiment,
    setIsClick,
    isClick

  };
}
