"use client";

import { useEffect, useRef, useState } from "react";

export default function useCreatePolicies() {
    const [isHide, setIsHide] = useState(false);
    const [checkedValues, setCheckedValues] = useState<any>([]);
    const [isValue, setIsValue] = useState<any>('');
    const dropdownRef = useRef<any>(null);

    const handleClick = (e: any) => {
        setIsHide((prev) => !prev);
    };

    const handleChange = (label: any) => {
        setCheckedValues((prev: any) =>
        prev.includes(label)
            ? prev.filter((value: any) => value !== label)
            : [...prev, label]
        );
    };
    useEffect(() => {
        checkedValues.length === 0  &&  setIsHide(false) ;
    }, [checkedValues]);

    const handleClicked = (e: any) => {
        setIsValue(e);

    };

    useEffect(() => {
        setIsHide(false);
    }, [isValue]);

    useEffect(() => {
        function handleClickOutside(event:any) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsHide(false);
          }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [dropdownRef]);

    return{
        handleClick,
        handleChange,
        isHide,
        checkedValues,
        setIsHide,
        handleClicked,
        isValue,
        dropdownRef
    }
}
