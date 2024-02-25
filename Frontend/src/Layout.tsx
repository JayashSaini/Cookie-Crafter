import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MyProvider from "./context/ContextProvider.jsx";

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <MyProvider>
        <Header isScrolled={isScrolled} />
        <Outlet />
        <Footer />
      </MyProvider>
    </>
  );
};

export default Layout;
