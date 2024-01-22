import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/config/config.scss";
import { Description } from "./pages/Description.page";
import { Header } from "./components/Header";
import { Home } from "./pages/Home.page";

const App = () => {
   return (
      <Router>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/region/:regionid" element={<Home />} />
            <Route path="/region/:regionid/:searchcontent" element={<Home />} />
            <Route path="/description/:codeCountry" element={<Description />} />
         </Routes>
      </Router>
   );
};

export default App;
