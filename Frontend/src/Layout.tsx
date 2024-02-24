import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MyProvider from "./context/ContextProvider.jsx";

const Layout = () => {
  return (
    <>
      <MyProvider>
        <Header />
        <Outlet />
        <Footer />
      </MyProvider>
    </>
  );
};

export default Layout;
