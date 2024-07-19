"use client";

import AuthenticatedNav from "@/common/components/authenticated-nav/authenticated-nav.component";
import AUTH from "@/common/constants/auth.constant";
import CreatePolicy from "@/components/create-policy/createPolicy.component";
import { useParams, useSearchParams } from "next/navigation";

export default function Home() {
  const searchParam = useSearchParams();
  const id = searchParam.get("id");
  return (
    <div>
      <AuthenticatedNav />
      <CreatePolicy id={id}/>
    </div>
  );
}
