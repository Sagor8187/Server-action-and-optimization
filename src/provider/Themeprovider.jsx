// app/providers.tsx
"use client";

import { ThemeProvider } from "next-themes";

export function Themerovider({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}