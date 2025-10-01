import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] text-pink-600 border-t-2 border-pink-600 pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <img src={logo} alt="" className="h-20 w-30 " />
            <h2 className="text-4xl mb-10 font-bold italic">Sangamvivah.com</h2>
            <p className="text-pink-600 mb-3 font-semibold italic text-md">
              At <strong>Sangamvivah</strong>, matchmaking is more than a
              service, it’s our passion. We find joy in uniting souls and take
              pride in every successful bond we help create.
            </p>
            <p className="text-pink-600 mb-3 font-semibold italic text-md">
              With a personalized approach and sincere effort, we make partner
              search easier and more meaningful. Every relationship we build is
              rooted in trust, respect, and a perfect balance of tradition and
              modern values.
            </p>
            <p className="font-semibold text-pink-600  italic text-lg">
              Your happiness is our true success.
            </p>

            {/* Contact Info */}
            <div className="mt-4">
              <h3 className="font-semibold mb-1  italic text-lg">
                Reach Out to Us
              </h3>
              <p className="text-pink-600">
                <span className="font-semibold italic text-lg">
                  For Users: Care@Sangamvivah.com | +91 9315812799
                </span>
              </p>
            </div>
          </div>

          {/* Section 2: Quick Links */}
          <div>
            <h2 className="text-4xl mb-10 font-bold italic">Quick Links</h2>
            <ul className="space-y-2 text-pink-600 font-semibold italic text-lg">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Social Links */}
          <div>
            <h2 className="text-4xl mb-10 font-bold italic">
              Our Social Links
            </h2>
            <div className="flex space-x-4 text-pink-600 text-xl ">
              <a href="#" className="hover:text-gray-800">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-800">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-gray-800">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-t border-white/30" />

        {/* Copyright */}
        <div className="text-center text-sm text-pink-600 border-t border-pink-600 pb-6">
          Sangamvivah.Com ©2025 . All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
