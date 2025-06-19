import React from "react";
import marketingImg from "../assets/bpoImg.png";

const Bop = () => {
  const services = [
    {
      title: "24/7 Availability",
      description: "Round-the-clock support ensuring your customers are always heard.",
    },
    {
      title: "Live Agents + Chatbots",
      description: "Trained agents paired with intelligent chatbot automation for fast response.",
    },
    {
      title: "Multilingual Support",
      description: "Serve a global audience with language-specific support options.",
    },
    {
      title: "CRM & Helpdesk Integration",
      description: "Seamless connection with Zendesk, Freshdesk, and other CRM tools.",
    },
    {
      title: "Real-Time Lead Capture",
      description: "Instantly convert chats into qualified leads and resolve queries on the spot.",
    },
  ];
  const services2 = [
    {
      title: "Customer Service & Support",
      description:
        "Deliver excellent customer care with trained professionals handling every query with empathy and accuracy.",
    },
    {
      title: "Product Info & Order Handling",
      description:
        "From product inquiries to order processing, ensure a seamless customer experience from start to finish.",
    },
    {
      title: "Technical Support & Troubleshooting",
      description:
        "Provide real-time resolution for technical issues with our expert tech support agents.",
    },
    {
      title: "Appointment Scheduling",
      description:
        "Let customers book, cancel, or reschedule appointments with ease across any channel.",
    },
    {
      title: "CRM Integration & Call Logging",
      description:
        "Sync all conversations with your CRM and maintain complete call history with detailed logs.",
    },
  ];
  const seoServices =  [
    {
      title: "Data Entry & Processing",
      description:
        "Accurate and efficient handling of large data sets to keep your systems up to date.",
    },
    {
      title: "Email & Calendar Management",
      description:
        "Stay organized with timely responses, appointment scheduling, and conflict-free calendar setups.",
    },
    {
      title: "Order & Invoice Management",
      description:
        "Manage order workflows and invoice tracking with error-free, timely processing.",
    },
    {
      title: "File Organization & Formatting",
      description:
        "Structure your documents, spreadsheets, and reports for easy access and professional presentation.",
    },
    {
      title: "Scalable Project Support",
      description:
        "From startups to enterprises, scale your admin needs quickly with trained virtual assistants.",
    },
  ];
  return (
    <div className="mt-20">
<div className="bg-gray-900 w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 md:py-20 lg:py-28">
  {/* Title */}
  <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-10">
    Business <br /> Process Outsourcing
  </h1>

  {/* Image */}
  <img
    src={marketingImg}
    alt="BPO Service"
    className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto max-h-[60vh] object-cover rounded-xl shadow-lg"
  />
</div>

      <div className="lg:mt-70 mt-40 text-center flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Chat Support Services
        </h1>
        <p className="text-lg text-600 w-[50%]">
          Enhance your customer experience with our 24/7 chat support solutions.
          We provide real-time, multilingual live chat services with trained
          agents, supported by AI tools for fast and accurate responses.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 mt-10 mb-10 px-15 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-30 text-center flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold text-gray-900">
      Inbound Call Support
        </h1>
        <p className="text-lg text-600 w-[50%]">
         Our inbound call agents are trained to handle everything
from customer inquiries and tech support to appointment
booking and order tracking. We represent your brand
professionally with empathy and efficiency.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 mt-10 mb-10 px-15 sm:grid-cols-2 lg:grid-cols-3">
        {services2.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-30 text-center flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold text-gray-900">
        Back Office Services
        </h1>
        <p className="text-lg text-600 w-[50%]">
         Streamline your operations with our cost-effective back
office services. From data entry to document processing,
our team ensures speed, accuracy, and confidentiality for
all your backend needs
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 mt-10 mb-10 px-15 sm:grid-cols-2 lg:grid-cols-3">
        {seoServices.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bop;
