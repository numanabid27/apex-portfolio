"use client";

import AuthenticatedNav from "@/common/components/authenticated-nav/authenticated-nav.component";
import AUTH from "@/common/constants/auth.constant";
import PromptView from "@/components/policy-prompt/index.component";

export default function Home() {
  return <>
    <AuthenticatedNav />
    <PromptView />
  </>;
}
