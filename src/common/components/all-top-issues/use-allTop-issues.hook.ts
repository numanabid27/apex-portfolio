"use client";

// import { ITEMS_PER_PAGE } from "@/common/constants/global.constant";
import { useState } from "react";

const ITEMS_PER_PAGE = 3;

export default function useTopIssues({ All_TOP_ISSUES }: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = All_TOP_ISSUES.slice(indexOfFirstItem, indexOfLastItem);

  const handleNext = () => {
    if (currentPage * ITEMS_PER_PAGE < All_TOP_ISSUES.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return {
    currentItems,
    handleNext,
    handlePrevious,
    currentPage,
    ITEMS_PER_PAGE,
  };
}
