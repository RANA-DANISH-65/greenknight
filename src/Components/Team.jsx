import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import ceo from "../assets/ceo.png";
import coo from "../assets/coo.jpg";
import director from "../assets/director.png";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const sectionRef = useRef();
  const headingRef = useRef();
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animate heading
    gsap.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        // markers: true,
        toggleActions: "play reverse play reverse",
      },
      onComplete: () => {
        // Animate each card one after another
        gsap.to(cardRefs.current, {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          delay: 0.2,
          duration: 1,
          ease: "power2.out",
        });
      },
    });
  }, []);

  const teamData = [
    { img: ceo, name: "Shakir Ali", role: "CEO & Founder" },
    { img: coo, name: "Mughees Raza", role: "COO & Co-Founder" },
    { img: director, name: "Naeem Bhukari", role: "Director Operations" },
  ];

  return (
    <div id="team" ref={sectionRef} className="lg:mt-20 px-10 py-20 bg-gray-50">
      <div
        ref={headingRef}
        className="text-center mb-12 opacity-0 translate-y-10 transition-all"
      >
        <h1 className="text-5xl font-extrabold text-gray-800">Our Team</h1>
        <h3 className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          Meet the minds driving innovation, growth, and operational excellence at Green Knight.
        </h3>
      </div>

      <div className="flex items-center justify-center gap-10 flex-wrap">
        {teamData.map((member, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="text-center bg-white p-6 rounded-xl shadow-md w-72 hover:shadow-xl transition-all opacity-0 translate-y-10"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-60 h-60 object-cover rounded mb-4 mx-auto"
            />
            <h3 className="text-2xl font-semibold text-gray-900">{member.name}</h3>
            <h5 className="text-lg text-gray-600">{member.role}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
