"use client";

import { styles } from "@/common/styles/global.style";
import { AppBar, Typography } from "@mui/material";
import AppbarHeader from "./components/appbar-header/appbar-header.component";
import Feedback from "./components/feedback/feedback.component";
import MobileAppbar from "./components/mobile-appbar/mobile-appbar.component";
import Profile from "./components/profile/profile.component";
import { Styles } from "./authenticated-nav.style";
// import logo from "@/common/assets/images/logo.svg";
import Image from "next/image";


/**
 * Renders the Authenticated Navigation Component
 * @returns the navigation bar for authenticated users.
 */

function AuthenticatedNav() {
  return (
    <AppBar position="static" sx={Styles.mainAppbar}>
      <MobileAppbar />
      {/* <Image src={logo} width={135} height={38} alt="" /> */}
      <h4 style={{margin:'0'}}>LGOG</h4>
      <AppbarHeader />
      <Feedback />
      <Profile />
    </AppBar>
  );
}

export default AuthenticatedNav;
