import "./Header.scss";
import { useContext, useEffect } from "react";
import { Sun as SunIcon } from "lucide-react";
import { Moon as MoonIcon } from "lucide-react";
import { ThemeContext } from "../../provider/Theme.provider";

export const Header = () => {
   const { isDark, aplicateModeHTML, validateTheme } = useContext(ThemeContext);

   useEffect(() => {
      aplicateModeHTML();
   }, [aplicateModeHTML]);

   return (
      <header className="background-header container">
         <nav className="header-container container-max">
            <h1 className="header-container-title">Where in the World?</h1>
            <span onClick={validateTheme} className="header-container-mode">
               {isDark ? (
                  <>
                     <MoonIcon className="header-container-mode-ligth" />
                     Dark Mode
                  </>
               ) : (
                  <>
                     <SunIcon className="header-container-mode-darck" />
                     Light Mode
                  </>
               )}
            </span>
         </nav>
      </header>
   );
};
