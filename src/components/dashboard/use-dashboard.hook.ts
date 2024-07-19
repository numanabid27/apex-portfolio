"use client";

import { useEffect, useState } from "react";

export default function useDashboard() {
  const [welcomeAlert, setWelcomeAlert] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [session, setSession] = useState<any>("All Models");
  const [isModel, setIsModel] = useState("");

  const SessionHandler = (event: any) => {
    setSession(event.target.value as string);
  };
  
  useEffect(() => {
    console.log("isModel", isModel);
  }, [isModel]);

  return {
    welcomeAlert,
    setWelcomeAlert,
    setOpenModal,
    openModal,
    setIsModel,
    session,
    SessionHandler,
    isModel
  };
}
