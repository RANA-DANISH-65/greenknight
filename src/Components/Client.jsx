import React, { useEffect, useRef } from "react";
import gsap from "gsap";

// Auto-import all logos from client folder
const images = import.meta.glob("../assets/clients/*.png", {
  eager: true,
  import: "default",
});
const clientLogos = Object.values(images);
const duplicatedLogos = [...clientLogos, ...clientLogos];

const Client = () => {
  const containerRef = useRef();
  const trackRef = useRef();
  const tweenRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 120,
        repeat: -1,
        ease: "linear",
      });

      const track = trackRef.current;

      const handleMouseEnter = () => {
        tweenRef.current?.pause();
      };

      const handleMouseLeave = () => {
        tweenRef.current?.resume();
      };

      track.addEventListener("mouseenter", handleMouseEnter);
      track.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        track.removeEventListener("mouseenter", handleMouseEnter);
        track.removeEventListener("mouseleave", handleMouseLeave);
        tweenRef.current?.kill();
      };
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="clients" className="py-20 mt-20" ref={containerRef}>
      <div className="text-center mb-10">
        <h1 className="text-6xl font-bold text-gray-800">Our Clients</h1>
        <h3 className="text-lg text-gray-600 mt-2">
          Trusted by 39+ industry-leading brands across the globe
        </h3>
      </div>

      <div className="overflow-hidden w-full">
        <div
          ref={trackRef}
          className="flex w-max gap-2 "
          style={{ willChange: "transform" }}
        >
          {duplicatedLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Client ${index + 1}`}
              className="h-16 w-48 object-contain"
              style={{ flexShrink: 0 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Client;
