
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only render after client-side to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Toggle 
        aria-label="Toggle theme" 
        className="rounded-full p-2 hover:bg-accent transition-colors border border-border bg-background"
      >
        <Sun className="h-5 w-5 text-yellow-500 opacity-0" />
      </Toggle>
    );
  }

  return (
    <Toggle
      pressed={theme === "dark"}
      onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 hover:bg-accent transition-colors border border-border bg-background"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5 text-blue-900" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-500" />
      )}
    </Toggle>
  );
}
