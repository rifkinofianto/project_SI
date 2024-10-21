import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import EachUtils from "../Utils/EachUtils";
import Logo from "../Navbar/main_logo.jpg"



const Navbar = ({ page, aboutRef, contactRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation(); // Ambil lokasi saat ini

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Daftar tautan navigasi
  const navLinks = [
    { to: "/home", label: "Home" }, // Gunakan "/home" untuk halaman utama
    { to: "#about", label: "About", isScroll: true, ref: aboutRef },
    { to: "#contact", label: "Contact", isScroll: true, ref: contactRef },
  ];

  // Fungsi untuk menangani klik link dan scroll
  const handleLinkClick = (item) => {
    // Jika mengklik "Home" dan sudah di halaman itu, lakukan scroll
    if (item.to === "/home" && location.pathname === "/home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (item.isScroll && item.ref?.current) {
      item.ref.current.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(item.to); // Navigasi normal
    }
    setIsMenuOpen(false); // Tutup menu setelah klik
  };

  // Fungsi untuk merender tautan
  const renderLink = (item, index) => (
    <button
      key={index}
      onClick={() => handleLinkClick(item)}
      className={`px-2 py-1 hover:text-color-accent md:text-xl ${
        page.toLowerCase() === item.label.toLowerCase()
          ? "text-color-accent underline"
          : ""
      }`}
    >
      {item.label}
    </button>
  );

  return (
    <nav className="py-4 shadow-color-secondary shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/home" className="text-lg font-bold flex items-center md:gap-5 gap-2">
          <img
            src={Logo}
            alt="logo"
            className="md:h-20 h-16 w-full"
          />
          <h1 className="md:text-3xl text-2xl text-blue-500 flex">
            <p>Style</p>
            <p className="text-color-accent">PLAY</p>
          </h1>
        </Link>

        {/* Tombol toggle untuk mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-black focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Tautan desktop */}
        <div className="hidden md:flex md:text-xl items-center">
          <EachUtils of={navLinks} render={renderLink} />
        </div>
      </div>

      {/* Menu dropdown untuk mobile */}
      <div
        className={`md:hidden transition-all ${isMenuOpen ? "mt-4" : "hidden"}`}
      >
        <div className="flex flex-col space-y-2 mt-2 bg-gray-50 p-4 rounded-md shadow-lg">
          <EachUtils of={navLinks} render={renderLink} />
        </div>
      </div>
    </nav>
  );
};

// Validasi props menggunakan PropTypes
Navbar.propTypes = {
  page: PropTypes.string.isRequired,
  aboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  contactRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default Navbar;
