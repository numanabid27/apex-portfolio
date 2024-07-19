"use client";

import AuthenticatedNav from "@/common/components/authenticated-nav/authenticated-nav.component";
import AUTH from "@/common/constants/auth.constant";
import SessionExplorer from "@/components/session-explorer/sessionExplore.component";

function Home() {
  return(
    <>
      <AuthenticatedNav />
      <><SessionExplorer /></>
    </>
  )
}
export default Home;