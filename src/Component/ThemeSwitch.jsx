"use client";

import { useTheme } from "next-themes";
import { Icon } from "@gravity-ui/uikit";
import { Sun, Moon } from "@gravity-ui/icons";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🔥 main fix

  return (
    <button
      onClick={() =>
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }
      className="p-2 rounded bg-gray-200 dark:bg-gray-800"
    >
      <Icon
        data={resolvedTheme === "dark" ? Sun : Moon}
        size={20}
      />
    </button>
  );
}