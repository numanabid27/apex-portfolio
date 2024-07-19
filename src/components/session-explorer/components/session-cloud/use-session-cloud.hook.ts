import { useEffect, useState } from "react";
import { SESSION_CLOUD_DATA } from "../session-cloud/session-cloud.constant";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";

export default function useSessionCloud() {
  const [finalData, setFinalData] = useState<any>(false);
  const [engineName, setEngineName] = useState<any>([]);
  const [userName, setUserName] = useState("");
  const [dateRange, setDateRange] = useState([null, null]);
  const [searchQuery, setSearchQuery] = useState<any>("");
  const [dateShow, setDateShow] = useState<any>();
  const [isValue, setValue] = useState<any>([]);
  const searchParams = useSearchParams();
  const paramsData = searchParams.get("user");

  const filterData = () => {
    const filteredData = SESSION_CLOUD_DATA.filter((item) => {
      let engineFlag = false;
      let userFlag = false;
      let dateFlag = false;
      let textFlag = false;

      if (
        engineName.length === 0 ||
        engineName.includes(item.violationCat.split(" ")[0])
      ) {
        engineFlag = true;
      }

      if (userName === "" || item.mails === userName) {
        userFlag = true;
      }

      if (dateRange[0] === null || dateRange[1] === null) {
        dateFlag = true;
      } else {
        const startDate = dayjs(dateRange[0]);
        const endDate = dayjs(dateRange[1]);
        const itemDate = dayjs(item.time);
        dateFlag = itemDate.isAfter(startDate) && itemDate.isBefore(endDate);
      }
      const itemText = Object.values(item).join(" ").toLowerCase();
      textFlag = itemText.includes(searchQuery);

      return engineFlag && userFlag && dateFlag && textFlag;
    });

    return filteredData;
  };

  useEffect(() => {
    filterData();
  }, [engineName, userName, dateShow, dateRange, searchQuery]);

  const handleSearch = (e: any) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query === "") {
      setFinalData(false);
      return;
    }
    const filteredData = SESSION_CLOUD_DATA.filter((item) => {
      let engineFlag = false;
      let userFlag = false;
      let dateFlag = false;
      let textFlag = false;

      if (
        engineName.length === 0 ||
        engineName.includes(item.violationCat.split(" ")[0])
      ) {
        engineFlag = true;
      }

      if (userName === "" || item.mails === userName) {
        userFlag = true;
      }

      if (dateRange[0] === null || dateRange[1] === null) {
        dateFlag = true;
      } else {
        const startDate = dayjs(dateRange[0]);
        const endDate = dayjs(dateRange[1]);
        const itemDate = dayjs(item.time);
        dateFlag = itemDate.isAfter(startDate) && itemDate.isBefore(endDate);
      }
      const itemText = Object.values(item).join(" ").toLowerCase();
      textFlag = itemText.includes(query);

      return engineFlag && userFlag && dateFlag && textFlag;
    });

    setFinalData(filteredData);
  };

  const handleClick = (title: any) => {
    if (title != undefined) {
      if (!isValue.includes(title)) {
        setValue([...isValue, title]);
      }
      const newData = SESSION_CLOUD_DATA.filter((item: any) => {
        const values = Object.values(item);
        return values.some((value: any) =>
          value.toString().toLowerCase().includes(title?.toLowerCase())
        );
      });
      setFinalData(newData);
    }
  };

  useEffect(() => {
    handleClick(paramsData);
  }, [paramsData]);

  const handleClear = (title: any) => {
    const filterData = isValue.filter((i: any) => i !== title);
    if (filterData) {
      setValue(filterData);
    }

    setFinalData(false);
  };

  return {
    handleClear,
    handleClick,
    finalData,
    setFinalData,
    isValue,
    searchQuery,
    handleSearch,
  };
}
