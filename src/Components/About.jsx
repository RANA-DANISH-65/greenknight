import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import about from "../assets/about.jpg";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);
  const imageRef = useRef(null);

useEffect(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.current,
      start: "top 80%",
      end: "bottom 80%",
      scrub: 1,
      pin: false,
    },
  });

  tl.from(textRef.current, {
    x: -100,
    opacity: 0,
    duration: 1,
  })
    .from(
      statsRef.current,
      {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      },
      "-=0.5"
    )
    .from(
      imageRef.current,
      {
        y: 100,
        opacity: 0,
        duration: 1,
      },
      "-=0.75"
    );
}, []);

  return (
    <div id="about" ref={containerRef} className="px-10 md:my-10 lg:my-20 bg-white scroll-mt-20">
      <div className="text-center text-gray-800 mb-10">
        <h1 className="text-[3rem] font-extrabold">About Us</h1>
        <h3 className="text-[1.5rem] text-gray-600">Who We Are</h3>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Text Content */}
        <div ref={textRef} className="flex-1 space-y-6">
          <p className="text-lg text-gray-700">
            Green Knight is a global tech partner delivering custom web & app
            development, digital marketing, accounting, and BPO/KPO solutions.
            We help businesses grow through modern, scalable platforms,
            data-driven marketing, precise financial services, and flexible
            outsourcing. From startups to enterprises, our expert teams craft
            digital experiences, streamline operations, and drive real results
            across industries like healthcare, finance, telecom, and e-commerce.
            With Green Knight, you're not just getting a service,you're gaining
            a strategic partner for lasting success.
          </p>

          {/* Stats Cards */}
          <div
            ref={statsRef}
            className="flex gap-4 text-center flex-wrap justify-center"
          >
            <div className="p-4 bg-gray-900 rounded-xl text-white min-w-[150px]">
              <h3 className="text-lg font-semibold">Projects  Completed</h3>
              <p className="text-2xl font-bold mt-2">50+</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-xl text-white min-w-[150px]">
              <h3 className="text-lg font-semibold">International  Clients</h3>
              <p className="text-2xl font-bold mt-2">20+</p>
            </div>
            <div className="p-4 bg-gray-900 rounded-xl text-white min-w-[150px]">
              <h3 className="text-lg font-semibold">Client  Satisfaction</h3>
              <p className="text-2xl font-bold mt-2">100%</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div ref={imageRef} className="flex-1 mt-10 lg:mt-0">
          <img
            src={about}
            alt="About"
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
