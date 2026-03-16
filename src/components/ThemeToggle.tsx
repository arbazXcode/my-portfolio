import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LiaDownloadSolid } from "react-icons/lia";
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          window.open(
            "https://drive.google.com/file/d/1aEhxteCMtzoHeU1H_I1TuJ3oXusTW7O6/view?usp=drive_link",
            "_blank",
          )
        }
        className="fixed  top-6 right-24 z-50 bg-background/80 backdrop-blur-sm border-2 border-gray-800"
      >
        Resume <LiaDownloadSolid />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="fixed top-6 right-6 z-50 bg-background/80 backdrop-blur-sm border border-gray-800"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
