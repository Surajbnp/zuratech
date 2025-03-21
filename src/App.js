import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Box
        bg={"transparent"}
        boxShadow={isSticky ? "lg" : "none"}
        position="fixed"
        top={0}
        zIndex={1000}
        width="100%"
        backdropFilter={isSticky ? "blur(10px)" : "none"}
        transition="all 0.3s ease-in-out"
      >
        <Navbar />
      </Box>
      <Box>
        <AllRoutes />
      </Box>
      <Footer />
    </div>
  );
}

export default App;
