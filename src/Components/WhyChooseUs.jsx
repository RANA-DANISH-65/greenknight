import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const points = [
    {
      name: "Reduced Costs",
      description:
        "Lower your operational expenses by outsourcing to Green Knight, allowing you to allocate resources more efficiently and boost profit margins.",
    },
    {
      name: "Flexibility and Scalability",
      description:
        "Easily scale your operations up or down with our flexible solutions designed to grow alongside your business demands and goals.",
    },
    {
      name: "Specialized Industry Knowledge",
      description:
        "Leverage our deep expertise across multiple industries to receive tailored solutions that meet your sector-specific challenges and needs.",
    },
    {
      name: "Expert Management and Support Staff",
      description:
        "Our skilled management and support teams ensure smooth operations, quick resolutions, and consistent service delivery for your business.",
    },
    {
      name: "Cost Management Tools",
      description:
        "Gain access to custom dashboards and tracking tools that provide transparency and control over costs, helping you stay within budget.",
    },
    {
      name: "Quality Monitoring and Control",
      description:
        "We maintain high standards through continuous quality checks, process reviews, and performance optimization to ensure service excellence.",
    },
    {
      name: "Access to the Latest Technology",
      description:
        "Stay ahead of the curve with cutting-edge tools, platforms, and automation solutions integrated seamlessly into your business processes.",
    },
    {
      name: "Service 24/7/365",
      description:
        "Our round-the-clock availability ensures uninterrupted support and service delivery, no matter the time zone or business hour.",
    },
  ];

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "bounce.out",
          duration: 1,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play reverse restart none",
          },
        }
      );
    });
  }, []);

  return (
    <div
      ref={sectionRef}
      id="why"
      className="px-6 md:px-16 py-20 bg-gray-900 text-[#2D3748]"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#00BFA6]">
          Why Choose Us
        </h1>
        <p className="text-lg text-[#cecece] mt-4">
          Outsourcing your business processes to Green Knight can deliver
          significant benefits
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {points.map((point, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className="bg-[#4a5759] rounded-xl p-6 border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h2 className="text-xl font-bold mb-2 text-[#00BFA6]">
              {point.name}
            </h2>
            <p className="text-sm text-white">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
