"use client";

import AUTH from "@/common/constants/auth.constant";
import { AppBar, Box, Container, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { ReactNode } from "react";
import "../app/globals.css";
import Private from "./private.component";
import { styles } from "@/common/styles/global.style";
import logo from "@/common/assets/images/logo.svg"
import Image from "next/image";

/**
 * Return the component according to it's type
 * @param {component, type} props component and type of the component
 * @returns component
 */
export default function Auth({
  component,
  type,
}: {
  component: ReactNode;
  type: string;
}) {
  switch (type) {
    case AUTH.PUBLIC:
      return (
        <div>
          {" "}
          <AppBar position="static" sx={styles.AppbarMainHeader}>
            
            <Box mt={3} mb={3}>
              <Image src={logo} width={135} height={38} alt="" />
            </Box>
          </AppBar>
          <Container className="main-container" maxWidth={false}>
            {component}
          </Container>
        </div>
      );
    case AUTH.PRIVATE:
      return <Private component={component} />;
  }
}

Auth.propTypes = {
  component: PropTypes.element.isRequired,
  type: PropTypes.string,
};
