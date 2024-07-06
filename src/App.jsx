import Navbar from "./components/navbar/Navbar";
import Crafts from "./pages/Crafts";
import Cuisine from "./pages/Cuisine";
import Festivals from "./pages/Festivals";
import History from "./pages/History";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/festivals" element={<Festivals />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/crafts" element={<Crafts/>}/>
        <Route path="/history" element={<History/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
