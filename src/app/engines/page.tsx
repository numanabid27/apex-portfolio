"use client";

import AuthenticatedNav from "@/common/components/authenticated-nav/authenticated-nav.component";
import AUTH from "@/common/constants/auth.constant";
import { Engines } from "@/components/engines/engines.component";

export default function Home() {
  return (
    <>
      <AuthenticatedNav />
      <Engines />
    </>
  );
}
