"use client";

import { useEffect, useState } from "react";
import { AIBOOM_TABLE_BOX, AIBOOM_TABLE_DATA } from "./aiBoom.constant";

export default function useAiboom() {
  const [isDetail, setIsDetail] = useState<any>(null);
  const [isColor, setIsColor] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(false);
  const [isClicked, setIsClicked] = useState(null);
  const [value, setIsValue] = useState<any>(0);
  const [repo, setRepo] = useState<any>("");
  const [nestTableData, setNestTableData] = useState<any>(AIBOOM_TABLE_BOX);
  const [selectedFileData, setSelectedFileData] = useState<any>();

  const handleChange = (event: any, newValue: any) => {
    setIsDetail(null);
    setIsValue(newValue);
    if (newValue === 0) {
      setNestTableData(AIBOOM_TABLE_BOX);
      return;
    }
    if (newValue === 1) {
      setNestTableData(AIBOOM_TABLE_DATA);
      return;
    }
  };

  const handleClick = (id: any) => {
    setIsLoading(true)
    const res = nestTableData.find((item: any) => item.id === parseInt(id));
    if (res) {
      setRepo(res.folderName);
      setSelectedFileData(res);
      setIsDetail(res.files); // Set nested files data
      setIsColor(id);
      setTimeout(() => {
        setIsLoading(false);
      }, 400);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isDetail && nestTableData.length > 0) {
      const initialData = nestTableData[0];
      setSelectedFileData(initialData);
      setIsDetail(initialData.files);
      setRepo(initialData.folderName);
      setIsColor(initialData.id);
    }
  }, [value]);

  return {
    isDetail,
    handleClick,
    isLoading,
    hoveredIndex,
    isClicked,
    setHoveredIndex,
    setIsClicked,
    handleChange,
    value,
    repo,
    isColor,
    nestTableData,
    selectedFileData
  };
}
