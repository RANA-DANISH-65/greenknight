import Navbar from "./Components/Navbar";

import Footor from "./Components/Footor";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Development from "./pages/Development";
import Marketing from "./pages/Marketing";
import Bpo from "./pages/Bop";
import Accounting from "./pages/Accounting";
import AI from "./pages/AI";

const App = () => {
 

  return (
    <>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/development" element={<Development />} />
        <Route path="/marketing" element={<Marketing />} />
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/bpo" element={<Bpo />} />
        <Route path="/ai" element={<AI />} />
      </Routes>
     <Footor/>
    </>
  );
}

export default App