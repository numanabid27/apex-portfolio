"use client";

import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { Inter } from "next/font/google";
import "./globals.css";
import theme from "./theme";
import { Suspense } from "react";
import { Provider } from "react-redux";
import store from "@/provider/store";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
            </ThemeProvider>
          </StyledEngineProvider>
        </Provider>
      </body>
    </html>
  );
}
