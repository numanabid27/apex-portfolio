"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

// const expectedEmail = "apex@security.ai";
// const expectedPassword = "KYOq1yhDQXRL4J4";
export default function useLogin() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  function handleSubmit() {
    if (
      email === process.env.NEXT_PUBLIC_EMAIL &&
      password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
      localStorage.setItem("user", JSON.stringify({ token: "sdf" }));
      router.push("/");
    } else {
      setError("Incorrect email or password");
    }
  }

  return {
    setEmail,
    setPassword,
    handleSubmit,
    error,
    setError,
  };
}
