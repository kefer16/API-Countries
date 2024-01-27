import { useCallback, useEffect, useState } from "react";
import "../styles/Header.scss";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";

export const Header = () => {
   const [activeDark, setActiveDarck] = useState(false);
   function createSesionMode() {
      const darkMode = false;
      localStorage.setItem("country-theme-mode", JSON.stringify(darkMode));
   }

   function changeSesion(isDark: boolean) {
      localStorage.setItem("country-theme-mode", JSON.stringify(isDark));
   }

   function existMode(): boolean {
      return localStorage.hasOwnProperty("country-theme-mode");
   }

   function getSesionMode(): boolean {
      const value = localStorage.getItem("country-theme-mode") ?? "";
      const parseValue = value === "true";
      return parseValue;
   }

   function aplicateModeHTML(value: boolean) {
      const divRoot: HTMLElement | null = document.getElementById("root");
      if (value) {
         divRoot?.classList.add("dark-mode");
      } else {
         divRoot?.classList.remove("dark-mode");
      }
   }

   const validateTheme = useCallback(() => {
      if (!existMode()) {
         createSesionMode();
      }
      const isDark = getSesionMode();
      const divRoot: HTMLElement | null = document.getElementById("root");
      if (isDark) {
         setActiveDarck(false);
         changeSesion(false);
         divRoot?.classList.remove("dark-mode");
      } else {
         setActiveDarck(true);
         changeSesion(true);
         divRoot?.classList.add("dark-mode");
      }
   }, []);

   useEffect(() => {
      if (existMode()) {
         const value = getSesionMode();
         aplicateModeHTML(value);
      }
   }, []);

   return (
      <header className="background-header container">
         <nav className="header-container container-max">
            <h1 className="header-container-title">Where in the World?</h1>
            <span onClick={validateTheme} className="header-container-mode">
               {activeDark ? (
                  <>
                     <NightsStayRoundedIcon className="header-container-mode-ligth" />
                     Dark Mode
                  </>
               ) : (
                  <>
                     <WbSunnyRoundedIcon className="header-container-mode-darck" />
                     Light Mode
                  </>
               )}
            </span>
         </nav>
      </header>
   );
};
