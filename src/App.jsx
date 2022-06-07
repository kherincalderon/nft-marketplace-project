import { useEffect } from "react";
import feather from "feather-icons";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
