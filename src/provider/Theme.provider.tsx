import { createContext, useState } from "react";

enum VARIABLES_STORAGE {
   THEME = "countries-website-theme-is-dark",
}

export interface Props {
   isDark: boolean;
   aplicateModeHTML: () => void;
   validateTheme: () => void;
}

export const ThemeContext = createContext<Props>({} as Props);

export const ThemeProvider = ({ children }: any) => {
   const [isDark, setIsDark] = useState<boolean>(false);
   function createSesionMode() {
      const darkMode = false;
      localStorage.setItem(VARIABLES_STORAGE.THEME, JSON.stringify(darkMode));
   }

   function changeSesion(isDark: boolean) {
      localStorage.setItem(VARIABLES_STORAGE.THEME, JSON.stringify(isDark));
   }

   function existMode(): boolean {
      return localStorage.hasOwnProperty(VARIABLES_STORAGE.THEME);
   }

   function getSesionMode(): boolean {
      const value = localStorage.getItem(VARIABLES_STORAGE.THEME) ?? "";
      const parseValue = value === "true";
      return parseValue;
   }

   const aplicateModeHTML = () => {
      const value = getSesionMode();
      const divRoot: HTMLElement | null = document.getElementById("root");
      if (value) {
         divRoot?.classList.add("dark-mode");
      } else {
         divRoot?.classList.remove("dark-mode");
      }
   };

   const validateTheme = () => {
      if (!existMode()) {
         createSesionMode();
      }
      const isDark = getSesionMode();
      const divRoot: HTMLElement | null = document.getElementById("root");
      if (isDark) {
         setIsDark(false);
         changeSesion(false);
         divRoot?.classList.remove("dark-mode");
      } else {
         setIsDark(true);
         changeSesion(true);
         divRoot?.classList.add("dark-mode");
      }
   };
   return (
      <ThemeContext.Provider
         value={{
            isDark,
            aplicateModeHTML,
            validateTheme,
         }}
      >
         {children}
      </ThemeContext.Provider>
   );
};
