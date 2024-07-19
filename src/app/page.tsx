"use client";

import AuthenticatedNav from "@/common/components/authenticated-nav/authenticated-nav.component";
import Dashboard from "@/components/dashboard/dashboard.component";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
 return(
  <>
    <AuthenticatedNav />
    <Dashboard />
  </>
 )
}
