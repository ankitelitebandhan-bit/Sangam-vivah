import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full  top-0 left-0 z-50 ">
      {/* Main Navbar */}
      <nav className="bg-red-100/50 shadow-md border-t-2 border-pink-700 px-4 md:px-10 py-3 flex items-center justify-between">
        {/* Logo Placeholder */}
        <div className="flex items-center space-x-2">
          <div className="">
            <img src={logo} alt="" className="h-20 w-30" />
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-pink-700 font-medium">
          <li>
            <a href="#" className="hover:text-pink-900 hover:underline">
              Home
            </a>
          </li>

          <li>
            <a href="#" className="hover:text-pink-900 hover:underline">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-900 hover:underline">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-900 hover:underline">
              Contact
            </a>
          </li>
        </ul>

        {/* Login Button */}
        <a
          href="#"
          className="hidden md:block bg-pink-700 text-white px-4 py-2 rounded-full hover:bg-pink-800"
        >
          Login
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-pink-700 focus:outline-none"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-white shadow-md md:hidden px-4 py-3 space-y-3 text-pink-700 font-medium">
          <a href="#" className="block">
            Home
          </a>

          <a href="#" className="block">
            About Us
          </a>
          <a href="#" className="block">
            Blogs
          </a>
          <a href="#" className="block">
            Contact
          </a>
          <a
            href="#"
            className="block bg-pink-700 text-white px-4 py-2 rounded-full text-center"
          >
            Login
          </a>
        </div>
      )}
    </header>
  );
}
