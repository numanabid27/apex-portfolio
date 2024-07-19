"use client";

import AuthenticatedNav from "@/common/components/authenticated-nav/authenticated-nav.component";
import AUTH from "@/common/constants/auth.constant";
import CreatePolicy from "@/components/create-policy/createPolicy.component";
import { PolicyPage } from "@/components/policy/policy";

// export default function Home() {
//   return <Auth component={<CreatePolicy />} type={AUTH.PRIVATE} />;
// }


export default function Home() {
  return <>
    <AuthenticatedNav />
    <PolicyPage />
  </>;
}
