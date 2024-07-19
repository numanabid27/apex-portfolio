"use client";

import AuthenticatedNav from "@/common/components/authenticated-nav/authenticated-nav.component";
import AUTH from "@/common/constants/auth.constant";
import Issues from "@/components/issues/issues.component";

export default function Home() {
  return<>
    <AuthenticatedNav />
    <Issues />
  </>;
}
