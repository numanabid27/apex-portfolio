"use client";

import { useState } from "react";

export default function usePolicies() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<any>();
  const [isModel, setIsModel] = useState(false);
  const [isPrompt, setIsPrompt] = useState(false);
  return {
    openModal,
    setOpenModal,
    selectedRow,
    setSelectedRow,
    setIsModel,
    isModel,
    setIsPrompt,
    isPrompt
  };
}
