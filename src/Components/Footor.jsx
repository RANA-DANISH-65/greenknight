import React from "react";
import logotext from "../assets/logotext.png";

const Footor = () => {
  return (
    <footer className="bg-gray-900 text-white py-5 px-6">
      <div className="max-w-7xl flex flex-wrap items-center   justify-evenly gap-10">
        <div>
          <h2 className="text-2xl font-semibold mb-3">Our Locations</h2>
          <p className="text-sm leading-relaxed">
            <h1 className="text-xl font-semibold my-3">USA Address:</h1>
            2410 San Ramon Valley Blvd #130 San Ramon <br /> CA 94583
            United States
            <h1 className="text-xl font-semibold my-3">Pakistan's Address:</h1>
            #130 Plaza 289, First Floor,
            <br />
            Q Block, Commercial Lane,
            <br />
            Phase 2, DHA, Lahore. <br />
          </p>
        </div>
        <img
          src={logotext}
          alt="Company Logo"
          className=" w-50 object-contain hidden md:block "
        />

        {/* Navigation */}
        <div className="flex flex-col ">
          <h2 className="text-2xl font-semibold">Contact Links</h2>
          <h3>Email:info@greenknight.io</h3>
          <p className="mt-3 text-sm">
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
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-400 mt-8">
        <div className="flex justify-evenly flex-wrap mb-4 gap-2 text-center">
          <a
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-gray-300 text-xl underline cursor-pointer"
          >
            Home
          </a>
          <a href="#about" className="hover:text-gray-300 underline text-xl">
            About
          </a>
          <a href="#services" className="hover:text-gray-300 underline text-xl">
            Services
          </a>
          <a href="#clients" className="hover:text-gray-300 underline text-xl">
            Clients
          </a>
          <a href="#team" className="hover:text-gray-300 underline text-xl">
            Team
          </a>
          <a href="#contact" className="hover:text-gray-300 underline text-xl">
            Contact
          </a>
        </div>
        &copy; {new Date().getFullYear()} Green Knight. All rights reserved.
      </div>
    </footer>
  );
};

export default Footor;
