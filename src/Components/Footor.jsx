import React from "react";
import logotext from "../assets/logotext.png";

const Footor = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl flex flex-wrap items-center   justify-between gap-10">
        <div>
          <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
          <p className="text-sm leading-relaxed">
            #130 Plaza 289, First Floor,<br />
            Q Block, Commercial Lane,<br />
            Phase 2, DHA, Lahore.
          </p>
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

        {/* Navigation */}
        <div className="flex flex-col gap-2 text-center">
          <h2 className="text-3xl font-semibold mb-3">Quick Links</h2>
          <a onClick={() => window.scrollTo({top:0, behavior:"smooth"})} className="hover:text-gray-300 cursor-pointer">Home</a>
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#services" className="hover:text-gray-300">Services</a>
          <a href="#clients" className="hover:text-gray-300">Clients</a>
          <a href="#team" className="hover:text-gray-300">Team</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>

          <img src={logotext} alt="Company Logo" className=" w-70 object-contain hidden md:block " />
       
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-sm text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Green Knight. All rights reserved.
      </div>
    </footer>
  );
};

export default Footor;
