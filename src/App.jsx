import { useIcons } from "./hooks";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  // ICONS
  useIcons()

  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
