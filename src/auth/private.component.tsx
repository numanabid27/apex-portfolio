"use client";

import AuthenticatedNav from "@/common/components/authenticated-nav/authenticated-nav.component";
import { getUser } from "@/common/utils/users.util";
import { Container } from "@mui/material";
import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import { ReactNode, useEffect } from "react";

/**
 * Return the component if access token is verified and return to home page if its not
 * @param {component} props take a component
 * @returns component | redirect to home page
 */
export default function Private({ component }: { component: ReactNode }) {
  const router = useRouter();
  const user: any = getUser();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user]);

  if (!user) {
    return <></>;
  }

  return (
    <div>
      <AuthenticatedNav />
      <Container className="main-container" maxWidth={false}>
        <AuthenticatedNav />
        {component}
      </Container>
    </div>
  );
}

Private.propTypes = {
  component: PropTypes.element.isRequired,
};
