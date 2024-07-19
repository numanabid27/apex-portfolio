"use client";

import { useEffect, useState } from "react";
import { SESSION_ACCORDION_DATA } from "../../session-explore.constant";

export default function useSessionAccordion() {
  const [itemStates, setItemStates] = useState(
    SESSION_ACCORDION_DATA.map(() => ({ isCopied: false, msg: false }))
  );

  const copyToClipboard = async (e: any, index: any) => {
    try {
      await navigator.clipboard.writeText(e);
      setItemStates((prevStates: any) =>
        prevStates.map((state: any, i: any) =>
          i === index ? { ...state, isCopied: true, msg: true } : state
        )
      );
    } finally {
      setTimeout(() => {
        setItemStates((prevStates) =>
          prevStates.map((state, i) =>
            i === index ? { ...state, isCopied: false, msg: false } : state
          )
        );
      }, 1500);
    }
  };

  const [isCopy, setIsCopy] = useState('');
  const handleCopy = async (id: any,data:any) => {
    try {
      let textToCopy = `${data.reply}\n\n`;
      if(data.replyList && data.replyList.length >= 0){
        data.replyList.forEach((replyItem:any) => {
          textToCopy += `- ${replyItem.list}\n`;
        });
      }
     
      await navigator.clipboard.writeText(textToCopy);
      setIsCopy(id);
    
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  useEffect(() => {
    setTimeout(()=>{
      setIsCopy('')
    }, 1000)
  }, [isCopy])
  

  return {
    itemStates,
    copyToClipboard,
    SESSION_ACCORDION_DATA,
    isCopy,
    handleCopy
  };
}
