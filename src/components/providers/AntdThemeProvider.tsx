"use client";

import React from "react";
import { App, ConfigProvider } from "antd";

export default function AntdThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0EA5E9", // Sky Blue
          borderRadius: 8,
          fontFamily: "var(--font-sans)",

          colorLink: "#334155", // slate-700
          colorLinkHover: "#0EA5E9", // sky-500
          colorLinkActive: "#0284C7", // sky-600
        },
      }}
    >
      <App component="div" style={{ display: "contents" }}>
        {children}
      </App>
    </ConfigProvider>
  );
}
