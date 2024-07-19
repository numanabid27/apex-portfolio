"use client";

import AUTH from "@/common/constants/auth.constant";
import "@/app/graph.css";
import EngineDetail from "@/components/engines/components/engine-detail/engine-detail-component";
import AuthenticatedNav from "@/common/components/authenticated-nav/authenticated-nav.component";




export default function Home() {
  return<>
    <AuthenticatedNav />
    <EngineDetail  />
  </>;
}
