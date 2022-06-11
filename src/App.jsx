import { Routes, Route } from "react-router-dom";

import useIcons from "./hooks";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Create from "./pages/Create";

function App() {
  // ICONS
  useIcons();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
