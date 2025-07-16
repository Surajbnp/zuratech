import { Box, Icon, Link } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import "./App.css";
import Navbar from "./components/Navbar";
import AllRoutes from "./pages/AllRoutes";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";
import StudioNav from "./components/StudioNav";
import ScrollToTop from "./components/ScrollToTop";
import ChatUs from "./components/ChatUs";

function App() {
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  const isStudioRoute = location.pathname === "/studio";

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
    <Box className="App" display="flex" flexDirection="column" minH="100vh">
      <ScrollToTop />
      {isStudioRoute ? (
        <StudioNav />
      ) : (
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
      )}
      <Box>
        <AllRoutes />
      </Box>
      {!isStudioRoute && (
        <Box>
          <Footer />
        </Box>
      )}
      <Box>
        <ChatUs />
      </Box>
    </Box>
  );
}

export default App;
