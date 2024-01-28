import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Description } from "./pages/Description.page";
import { Header } from "./components/header/Header";
import { Home } from "./pages/Home.page";
import { ThemeProvider } from "./provider/Theme.provider";

const App = () => {
   return (
      <Router>
         <ThemeProvider>
            <Header />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route
                  path="/description/:codeCountry"
                  element={<Description />}
               />
            </Routes>
         </ThemeProvider>
      </Router>
   );
};

export default App;
