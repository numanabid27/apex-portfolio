"use client";

import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { MESSAGE_DATA } from "../session-explorer/components/messages/message.constant";
import { Rows } from "../policies/policies.constant";

export default function useFilterPolicy() {
  const [engineName, setEngineName] = useState<any>("");
  const [tags, setTags] = useState<any>("");
  const [actions, setActions] = useState("");
  const [severity, setseverity] = useState("");
  const [isTopic, setIsTopic] = useState<any>("");
  const [isStatus, setIsStatus] = useState("");
  const [isSentiment, setisSentiment] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>();
  const [dateShow, setDateShow] = useState<any>();
  const [finalData, setFinalData] = useState<any>(Rows);
  const [searchQuery, setSearchQuery] = useState<any>("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [isBuilder, setIsBuilder] = useState(false);
  const [isPolicyName, setIsPolicyName] = useState("");
  const [PolicyAction, setPolicyAction] = useState("");
  const [workFlow, setWokFlow] = useState("")
  const [value, setIsValue] = useState<any>(0);

  const [session, setSession] = useState<any>("All Engines");
  const SessionHandler = (event: any) => {
    setSession(event.target.value as string);
  };

  const dateHandler = (newDate: any) => {
    const formatter: any = dayjs(newDate).format("MMM D, YYYY h:mm A");
    setDateRange(formatter);
  };

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
  };

  // const filterData = () => {
  //   const filteredData = Rows.map((item: any) => {
  //     if (isStatus === "") {
  //       return item;
  //     } else {
  //       let filterArray = item?.policiesMainData?.filter((filter: any) => {
  //         return filter?.headerAssets === isStatus;
  //       });
  //       let finalFilterData = { ...item, policiesMainData: filterArray };
  //       return finalFilterData;
  //     }
  //   });
  //   console.log("filteredData", filteredData);
  //   return filteredData;
  // };

  const filterData = () => {
    const filteredData = Rows.map((item: any) => {
      let filterArray = item?.policiesMainData?.filter((filter: any) => {
        // Check for isStatus
        const isStatusMatch =
          isStatus === "" || filter?.headerAssets === isStatus;

        // Check for engineName
        const engineNameMatch =
          engineName === "" ||
          (Array.isArray(filter?.engines) &&
            filter.engines.some((engine: any) => engine.text === engineName));

        // Check for tags
        const tagsMatch =
          tags === "" ||
          filter?.integration?.some((integration: any) => integration === tags);

        // Check for actions
        const actionsMatch = actions === "" || filter?.action === actions;

        // Check for severity
        const severityMatch =
          severity === "" || filter?.headerSeverityevel === severity;

        // Return true if all conditions match
        return (
          isStatusMatch &&
          engineNameMatch &&
          tagsMatch &&
          actionsMatch &&
          severityMatch
        );
      });

      let finalFilterData = { ...item, policiesMainData: filterArray };
      return finalFilterData;
    });

    console.log("filteredData", filteredData);
    return filteredData;
  };


  
  
  useEffect(() => {
    setFinalData(filterData());
  }, [isStatus, severity, engineName, actions, tags]);

  const handleClearAll = () => {
    setIsStatus("");
    setseverity("");
    setEngineName("");
    setActions("");
    setTags("");
  };

  const handleAutocompleteChange = (e: any, newValue: any) => {
    setSearchQuery(newValue);
  };

  return {
    engineName,
    setEngineName,
    setActions,
    actions,
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
    startDate,
    endDate,
    setDateRange,
    handleSearch,
    searchQuery,
    handleAutocompleteChange,
    value,
    setseverity,
    severity,
    isStatus,
    setIsStatus,
    setTags,
    tags,
    setIsBuilder,
    isBuilder,
    isTopic,
    setIsTopic,
    setisSentiment,
    isSentiment,
    setIsPolicyName,
    isPolicyName,
    PolicyAction,
    setPolicyAction,
    workFlow,
    setWokFlow
  };
}
