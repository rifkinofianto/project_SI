import Footer from "../Footer";
import PropTypes from "prop-types";
import Navbar from "../Navbar";
import { Outlet } from "react-router-dom"; // Perbaikan import
import { useRef } from "react";

const LayoutUtils = ({ page }) => {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <div className="bg-color-dark text-color-primary min-h-screen">
      <Navbar page={page} aboutRef={aboutRef} contactRef={contactRef}/>
      <main className="container mx-auto px-4 md:my-7 my-3">
        <Outlet />
      </main>
      <Footer aboutRef={aboutRef} contactRef={contactRef}/>
    </div>
  );
};

LayoutUtils.propTypes = {
  page: PropTypes.string.isRequired,
};

export default LayoutUtils;
