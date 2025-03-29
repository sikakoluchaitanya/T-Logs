"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "./ui/dropdown-menu";
import { Moon, Sun, CakeIcon, Check, BriefcaseIcon, SnowflakeIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface Theme {
  name: string;
  lightIcon: React.ReactNode;
  darkIcon: React.ReactNode;
  bgLight: string;
  bgDark: string;
  dropdownBgLight: string;
  dropdownBgDark: string;
  textLight: string;
  textDark: string;
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const themes: Theme[] = [
    { 
      name: "cupcake", 
      lightIcon: <CakeIcon className="text-pink-500" />,
      darkIcon: <CakeIcon className="text-pink-300" />,
      bgLight: "bg-gradient-to-br from-pink-100 to-pink-200",
      bgDark: "bg-gradient-to-br from-pink-800 to-pink-900",
      dropdownBgLight: "bg-white/90",
      dropdownBgDark: "bg-gray-900/90",
      textLight: "text-gray-800",
      textDark: "text-gray-100"
    },
    { 
      name: "business", 
      lightIcon: <BriefcaseIcon className="text-gray-900" />,
      darkIcon: <BriefcaseIcon className="text-gray-900" />,
      bgLight: "bg-gradient-to-br from-gray-200 to-gray-300",
      bgDark: "bg-gradient-to-br from-gray-800 to-gray-900",
      dropdownBgLight: "#202020",
      dropdownBgDark: "bg-gray-800/90",
      textLight: "text-gray-800",
      textDark: "text-gray-900"
    },
    { 
      name: "winter", 
      lightIcon: <SnowflakeIcon className="text-blue-500" />,
      darkIcon: <SnowflakeIcon className="text-blue-300" />,
      bgLight: "bg-gradient-to-br from-blue-100 to-blue-200",
      bgDark: "bg-gradient-to-br from-blue-800 to-blue-900",
      dropdownBgLight: "bg-white/90",
      dropdownBgDark: "bg-gray-900/90",
      textLight: "text-gray-800",
      textDark: "text-gray-100"
    }
  ];
  
  if (!isMounted) return null;

  const currentTheme = themes.find(t => t.name === theme) || themes[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button  
          variant="ghost"
          size="icon"
          className="relative w-12 h-12 rounded-full hover:bg-accent/50 transition-all duration-300"
        >
          {isMounted && (
            <>
              <Sun className="h-6 w-6 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0 text-yellow-500" />
              <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100 text-indigo-600" />
            </>
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className={cn(
          "w-64 rounded-xl shadow-2xl border-none p-2 space-y-1",
          "backdrop-blur-md",
          theme === 'dark' ? currentTheme.dropdownBgDark : currentTheme.dropdownBgLight,
          "transition-colors duration-300"
        )}
      >
        {themes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption.name}
            onClick={() => setTheme(themeOption.name)}
            className={cn(
              "flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer",
              "hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200",
              "group",
              theme === themeOption.name 
                ? (theme === 'dark' 
                    ? "bg-gray-800/50 dark:bg-gray-600/50" 
                    : "bg-gray-300/50")
                : ""
            )}
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div 
                  className={cn(
                    "w-6 h-6 rounded-full shadow-md transition-transform duration-200",
                    "dark:hidden", // Only show in light mode
                    themeOption.bgLight,
                    theme === themeOption.name ? "scale-110" : "group-hover:scale-105"
                  )} 
                />
                <div 
                  className={cn(
                    "w-6 h-6 rounded-full shadow-md transition-transform duration-200",
                    "hidden dark:block", // Only show in dark mode
                    themeOption.bgDark,
                    theme === themeOption.name ? "scale-110" : "group-hover:scale-105"
                  )} 
                />
              </div>
              <div className="flex items-center gap-2">
                {theme === themeOption.name ? 
                  (isMounted && (theme === 'dark' ? themeOption.darkIcon : themeOption.lightIcon)) : 
                  themeOption.lightIcon
                }
                <span 
                  className={cn(
                    "text-sm font-medium transition-colors",
                    theme === themeOption.name 
                      ? "font-semibold" 
                      : cn(
                          theme === 'dark' 
                            ? currentTheme.textDark
                            : currentTheme.textLight
                        )
                  )}
                >
                  {themeOption.name.charAt(0).toUpperCase() + themeOption.name.slice(1)}
                </span>
              </div>
            </div>
            {theme === themeOption.name && (
              <Check 
                className={cn(
                  "h-5 w-5 animate-pulse",
                  theme === 'dark' 
                    ? "text-white" 
                    : "text-primary"
                )} 
              />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}