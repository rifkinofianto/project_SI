import { useState } from "react";
import ButtonOpen from "../Utils/ButtonOpen";
import PropTypes from "prop-types";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
const Footer = ({ aboutRef, contactRef }) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleAbout = () => setIsAboutOpen(!isAboutOpen);
  const toggleLinks = () => setIsLinksOpen(!isLinksOpen);
  const toggleContact = () => setIsContactOpen(!isContactOpen);

  return (
    <footer className="border-t-2 border-color-primary md:pt-12 pt-7">
      <div className="container mx-auto md:flex md:justify-between">
        {/* About Section */}
        <div className="text-justify md:w-1/3 mx-4" ref={aboutRef}>
          <div className="flex items-center gap-3">
            <ButtonOpen handleMenu={toggleAbout} isOpen={isAboutOpen} />
            <h2 className="md:text-2xl text-lg font-bold text-black md:mb-4 mb-2">
              About <span className="text-color-accent">Us</span>
            </h2>
          </div>
          <p
            className={`leading-relaxed ${
              isAboutOpen ? "block" : "hidden"
            } md:block`}
          >
            StylePLAY adalah platform pemesanan tempat penyewaan untuk bermain
            game PS5 dan PC, menawarkan pengalaman gaming terbaik dengan
            peralatan terkini. Pemain dapat dengan mudah memesan ruang game
            favorit mereka secara online, memilih dari berbagai game, dan
            menikmati suasana nyaman untuk bermain. Nikmati serunya bermain game
            bersama teman atau sendiri, dengan layanan yang profesional dan
            fleksibel di Style Play.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="md:text-left md:my-0 my-4 mx-4">
          <div className="flex items-center gap-3">
            <ButtonOpen handleMenu={toggleLinks} isOpen={isLinksOpen} />
            <h2 className="md:text-2xl text-lg font-bold text-black md:mb-4 mb-2">
              Quick <span className="text-color-accent">Links</span>
            </h2>
          </div>
          <ul
            className={`space-y-2 ${isLinksOpen ? "block" : "hidden"} md:block`}
          >
            <li>
              <a
                href="/home"
                className="hover:text-color-accent transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-color-accent transition-colors cursor-pointer">
                About Us
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="hover:text-color-accent transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-color-accent transition-colors cursor-pointer">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="mt-2 mx-4" ref={contactRef}>
          <div>
            <div className="flex items-center gap-3">
              <ButtonOpen handleMenu={toggleContact} isOpen={isContactOpen} />
              <h2 className="md:text-2xl text-lg font-bold text-black md:mb-4 mb-2">
                Contact <span className="text-color-accent">Us</span>
              </h2>
            </div>
            <div
              className={`md:mb-4 mb-2 ${
                isContactOpen ? "block" : "hidden"
              } md:block`}
            >
              <div className="flex items-center gap-3">
                <button className="hover:text-color-accent transition-colors">
                  <FaInstagram size={24} />
                </button>
                <button className="hover:text-color-accent transition-colors">
                  <FaWhatsapp size={24} />
                </button>
                <button className="hover:text-color-accent transition-colors">
                  <FaFacebook size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="md:mt-8 mt-8 py-4 text-center font-bold md:text-xl text-lg">
        <p>
          &copy; {new Date().getFullYear()} Style
          <span className="text-color-accent">PLAY</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  aboutRef: PropTypes.object,
  contactRef: PropTypes.object,
};
export default Footer;
