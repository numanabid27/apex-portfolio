"use client";

import AuthenticatedNav from "@/common/components/authenticated-nav/authenticated-nav.component";
import AUTH from "@/common/constants/auth.constant";
import { SessionWordCloud } from "@/components/session-explorer/components/session-cloud/session-cloud.component";




export default function Home() {
  return<>
  <AuthenticatedNav />
    <SessionWordCloud />
  </>;
}
