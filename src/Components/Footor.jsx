import React from "react";
import logotext from "../assets/logotext.png";

const Footor = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 flex-wrap">

        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logotext}
            alt="Company Logo"
            className="w-40 object-contain mb-4 md:mb-0"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col">
          <a href="#home" className="hover:text-gray-300 text-md mb-1">Home</a>
          <a href="#about" className="hover:text-gray-300 text-md mb-1">About</a>
          <a href="#services" className="hover:text-gray-300 text-md mb-1">Services</a>
          <a href="#clients" className="hover:text-gray-300 text-md mb-1">Clients</a>
          <a href="#team" className="hover:text-gray-300 text-md mb-1">Team</a>
          <a href="#contact" className="hover:text-gray-300 text-sm mb-1">Contact</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold mb-3">Contact</h2>
          <p className="text-sm">Email: info@greenknight.io</p>
          <p className="text-sm mt-2">
            WhatsApp:{" "}
            <a
              href="https://wa.me/923222777414"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 underline hover:text-green-500"
            >
              +92 322 2777414
            </a>
          </p>
        </div>

        {/* Locations */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Locations</h2>
          <div className="text-sm leading-relaxed">
            <h3 className="text-lg font-semibold mb-1">USA Address:</h3>
            <p>
              2410 San Ramon Valley Blvd #130 <br />
              San Ramon, CA 94583, United States
            </p>
            <h3 className="text-lg font-semibold mt-3 mb-1">Pakistan Address:</h3>
            <p>
              Plaza 289, First Floor, Q Block, <br />
              Commercial Lane, Phase 2, <br />
              DHA, Lahore
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Green Knight. All rights reserved.
      </div>
    </footer>
  );
};

export default Footor;
