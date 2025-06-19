import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCode } from "react-icons/fa";
import { MdOutlineCampaign } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import web from "../assets/web.jpg";
import marketing from "../assets/marketing.webp";
import accounting from "../assets/accounting.jpg";
import bpo from "../assets/bpo.png";

const serviceDetails = {
  Development: {
    title: "Development Services",
    description:
      "We build scalable web and mobile applications using modern technologies to bring your digital ideas to life. From UI/UX to full-stack development, we deliver top-tier solutions.",
    button: "Explore Development",
    image: web,
    route: "/development",
  },
  Marketing: {
    title: "Marketing Services",
    description:
      "Our data-driven marketing strategies ensure maximum reach and ROI. From SEO to social media campaigns, we grow your brand visibility effectively.",
    button: "Explore Marketing",
    image: marketing,
    route: "/marketing",
  },
  Accounting: {
    title: "Accounting Services",
    description:
      "We provide accurate bookkeeping, payroll, and financial reporting to keep your business compliant and financially healthy with precision and clarity.",
    button: "Explore Accounting",
    image: accounting,
    route: "/accounting",
  },
  BPO: {
    title: "BPO Services",
    description:
      "Outsource your non-core tasks to our expert team. We provide 24/7 customer support, data entry, and back-office services to enhance your productivity.",
    button: "Explore BPO",
    image: bpo,
    route: "/bpo",
  },
};

const Services = () => {
  const [active, setActive] = useState("Development");
  const navigate = useNavigate();

  const handleExplore = () => {
    const route = serviceDetails[active].route;
    navigate(route);

    // Smooth scroll to top after route change
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100); // slight delay to allow page transition/render
  };

  return (
    <div id="services" className="mt-20">
      <div className="text-center flex flex-col items-center">
        <h1 className="text-6xl font-extrabold text-gray-800">Our Services</h1>
        <h3 className="text-lg w-[50%] mt-2 text-gray-600">
          WE ROAR WITH SUCCESS, DELIVERING THE TROINN. THROUGH VERSATILE
          DEVELOPMENT, MARKETING, ACCOUNTING, AND BPO SERVICES
        </h3>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 text-gray-800 text-xl font-semibold items-center justify-center flex-wrap py-10">
        {Object.keys(serviceDetails).map((key) => (
          <div
            key={key}
            className={`flex items-center gap-2 cursor-pointer ${
              active === key &&
              "text-white bg-gray-900 p-5 rounded-full scale-105"
            }`}
            onClick={() => setActive(key)}
          >
            {key === "Development" && <FaCode />}
            {key === "Marketing" && <MdOutlineCampaign />}
            {key === "Accounting" && <GiReceiveMoney />}
            {key === "BPO" && <RiTeamLine />}
            <span>{key.toUpperCase()}</span>
          </div>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="bg-gray-900 p-8 rounded-xl shadow-md max-w-3xl mx-auto text-center transition-all duration-500">
        <h2 className="text-3xl font-bold text-gray-200 mb-4">
          {serviceDetails[active].title}
        </h2>
        <p className="text-gray-400 mb-6">
          {serviceDetails[active].description}
        </p>
        <button
          onClick={handleExplore}
          className="p-3 rounded bg-gray-500 text-white font-semibold hover:bg-gray-600"
        >
          {serviceDetails[active].button}
        </button>
      </div>
    </div>
  );
};

export default Services;
