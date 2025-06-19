import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import hero from "../assets/hero.jpg";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import './hero.css'

const Hero = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const logoRefs = useRef([]);

  useEffect(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: -30,
      duration: 1,
      delay: 0.2,
    });

    gsap.from(paragraphRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      delay: 0.5,
    });

    gsap.from(buttonRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      delay: 0.8,
    });

    gsap.from(imageRef.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      delay: 0.4,
    });

    logoRefs.current.forEach((logo, i) => {
      gsap.from(logo, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 1 + i * 0.2,
      });
    });
  }, []);

  return (
    <div  className="px-10 mt-20 py-16 flex flex-col">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div>
          <h1
            ref={headingRef}
            className="text-[2.5rem] md:text-[4rem] font-bold leading-tight"
          >
            <span className="text-[3rem] md:text-[4.5rem] font-extrabold text-[#003566] block">
              Don’t Just Build Websites
            </span>
            <span className="text-[3rem] md:text-[4.5rem] font-extrabold text-[#003566] block">
              We Build Businesses
            </span>
          </h1>
          <p ref={paragraphRef} className="text-lg italic ml-2 mt-2">
            Full-Spectrum Web, App, Marketing & BPO Services That Drive Results.
          </p>
          <button  ref={buttonRef} className="group mt-3 sm:ml-0 ml-3 relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-400 p-[3px] text-white shadow-lg transition-transform duration-300 active:scale-90">
  <span className="flex w-full h-full items-center justify-center rounded-md bg-[#05062d] px-6 py-4 text-lg font-semibold transition-colors duration-300 group-hover:bg-transparent">
  <a href="#contact"> Start Project</a> 
  </span>
</button>

        </div>

        <img
          ref={imageRef}
          src={hero}
          alt="hero"
          className="max-w-full w-[500px] object-cover"
        />
      </div>

      {/* Partner Logos */}
      <div className="mt-16">
        <ul className="p-4 flex justify-evenly flex-wrap gap-6">
          {[logo1, logo2, logo3, logo4, logo5].map((logo, i) => (
            <li key={i}>
              <img
                src={logo}
                alt={`logo${i}`}
                ref={(el) => (logoRefs.current[i] = el)}
                className="w-28"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
