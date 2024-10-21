import { Routes, Route, useLocation } from "react-router-dom";
import LayoutUtils from "../Utils/LayoutUtils";
import ContactPage from "../../Pages/ContactPage";
import AboutPage from "../../Pages/AboutPage";
import HomePage from "../../Pages/HomePage";
import LandingPage from "../../Pages/LandingPage";
import SignIn from "../../Pages/Authentication/SignIn";
import SignUp from "../../Pages/Authentication/SignUp";
import DetailBookingPage from "../../Pages/BookingDetails";
import FormBookingPage from "../../Pages/FormBookingPage";
import RatingPage from "../../Pages/RatingPage";

const Layout = () => {
  const location = useLocation();

  const page = location.pathname === "/" ? "Home" : location.pathname.slice(1);
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<LayoutUtils page={page} />}>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking/:path/:id" element={<FormBookingPage />} />
        </Route>
        <Route
          path="/booking/detailsBooking/:nameProduct"
          element={<DetailBookingPage />}
        />
        <Route path="/rating" element={<RatingPage />} />
      </Routes>
    </>
  );
};

export default Layout;
