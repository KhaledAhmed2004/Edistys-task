import { useState, useEffect } from "react";
import { FaAngleDown, FaBars, FaTimes, FaGlobe } from "react-icons/fa";
import Button from "../ui/Button";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setIsScrolled(currentScrollY > 50);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-3 lg:px-12">
        {/* Logo */}
        <img
          src={
            isScrolled
              ? "https://cdn.sanity.io/images/6jywt20u/production/70e2228631883a893695c64b637b99dc8661871c-171x28.svg?auto=format"
              : "https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?auto=format"
          }
          alt="Drive Now Logo"
          className="h-6 w-auto"
        />

        {/* Desktop Menu */}
        <DesktopMenu isScrolled={isScrolled} />

        {/* Contact Us Button (Hidden on Mobile) */}
        <Button
          className={`hidden rounded-md border px-6 py-2 transition-all lg:flex ${
            isScrolled
              ? "border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
              : "border-white text-white hover:bg-white hover:text-gray-900"
          }`}
        >
          Contact Us
        </Button>

        {/* Mobile Menu Button */}
        <button
          className={`p-2 lg:hidden ${isScrolled ? "text-blue-500" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <MobileMenu isMenuOpen={isMenuOpen} isScrolled={isScrolled} />
    </div>
  );
};

const DesktopMenu: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => {
  return (
    <ul
      className={`hidden items-center space-x-8 lg:flex ${isScrolled ? "text-blue-500" : "text-white"}`}
    >
      <li className="group relative cursor-pointer p-4">
        <p className="flex items-center gap-1 group-hover:text-blue-400">
          Solutions <FaAngleDown />
        </p>
        <Dropdown isScrolled={isScrolled} />
      </li>
      <li className="cursor-pointer p-4 hover:text-blue-400">Services</li>
      <li className="cursor-pointer p-4 hover:text-blue-400">About Us</li>
      <li className="p-4">
        <button
          className={`flex items-center gap-2 rounded-full border px-4 py-2 ${
            isScrolled
              ? "border-blue-500 text-blue-500 hover:text-blue-400"
              : "border-white text-white hover:text-gray-300"
          }`}
        >
          <FaGlobe /> EN <FaAngleDown />
        </button>
      </li>
    </ul>
  );
};

const Dropdown: React.FC<{ isScrolled: boolean }> = ({ isScrolled }) => (
  <ul
    className={`absolute left-0 mt-2 hidden w-40 space-y-2 rounded-md bg-white p-2 shadow-md group-hover:block ${
      isScrolled ? "text-blue-500" : "text-gray-900"
    }`}
  >
    <li className="rounded-md p-2 hover:bg-gray-200">AnyCaaS</li>
    <li className="rounded-md p-2 hover:bg-gray-200">AnyBaaS</li>
    <li className="rounded-md p-2 hover:bg-gray-200">AnyPaaS</li>
  </ul>
);

const MobileMenu: React.FC<{ isMenuOpen: boolean; isScrolled: boolean }> = ({
  isMenuOpen,
  isScrolled,
}) => {
  return (
    <ul
      className={`flex w-full flex-col items-center bg-gray-900 shadow-md transition-all lg:hidden ${isMenuOpen ? "block" : "hidden"} ${isScrolled ? "text-blue-500" : "text-white"}`}
    >
      <li className="w-full border-b border-gray-700 p-4 text-center hover:bg-gray-800">
        Solutions
      </li>
      <li className="w-full border-b border-gray-700 p-4 text-center hover:bg-gray-800">
        Services
      </li>
      <li className="w-full border-b border-gray-700 p-4 text-center hover:bg-gray-800">
        About Us
      </li>
      <li className="w-full p-4 text-center">
        <Button className="w-full rounded-md border border-blue-500 px-6 py-2 text-blue-500 transition-all hover:bg-blue-500 hover:text-white">
          Contact Us
        </Button>
      </li>
    </ul>
  );
};
