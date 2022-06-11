import { Routes, Route } from "react-router-dom";

import useIcons from "./hooks";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Single from "./pages/Single";
import Multiple from "./pages/Multiple";

function App() {
  // ICONS
  useIcons();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/create/erc-721" element={<Single />} />
        <Route path="/create/erc-1155" element={<Multiple />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
