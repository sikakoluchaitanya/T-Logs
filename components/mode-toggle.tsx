"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Moon, Sun, Check } from "lucide-react";

interface Theme {
  name: string;
  color: string;
}

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  
  const themes: Theme[] = [
    { name: "dark", color: "bg-gray-900" },
    { name: "cupcake", color: "bg-pink-200" },
    { name: "synthwave", color: "bg-purple-700" },
    { name: "retro", color: "bg-yellow-800" },
    { name: "luxury", color: "bg-gray-800" },
    { name: "dracula", color: "bg-purple-900" },
    { name: "autumn", color: "bg-orange-700" },
    { name: "business", color: "bg-business" },
    { name: "lemonade", color: "bg-yellow-400" },
    { name: "winter", color: "bg-blue-200" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button  
          size="icon"
          className="relative w-10 h-10 hover:bg-accent hover:text-accent-foreground"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform duration-200 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-200 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-40 min-w-[8rem] mt-2"
      >
        {themes.map((themeOption) => (
          <DropdownMenuItem
            key={themeOption.name}
            onClick={() => setTheme(themeOption.name)}
            className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-accent"
          >
            <div className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full ${themeOption.color}`} />
              <span className={theme === themeOption.name ? "font-medium" : ""}>
                {themeOption.name.charAt(0).toUpperCase() + themeOption.name.slice(1)}
              </span>
            </div>
            {theme === themeOption.name && (
              <Check className="h-4 w-4" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}