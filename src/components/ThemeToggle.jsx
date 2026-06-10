import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 flex items-center justify-center text-muted-foreground"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 animate-fade-in" />
      ) : (
        <Sun className="w-5 h-5 animate-fade-in" />
      )}
    </button>
  );
};
