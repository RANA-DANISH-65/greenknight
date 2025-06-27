import React from "react";
import aiAgentImg from "../assets/Ai_agent.jpeg";

const AI = () => {
  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-top bg-cover flex items-center justify-start text-white"
      style={{
        backgroundImage: `url(${aiAgentImg})`,
      }}
    >
      <div className="px-6">
        <h1 className="text-3xl md:text-6xl font-bold text-center  bg-opacity-60 px-6 py-4 rounded-xl shadow-lg">
          Intelligence That Works for You
        </h1>
        <p className="px-7 text-lg">
          Empower your business with smart automation, real-time insights, and
          human-like interaction.
        </p>
      </div>
    </div>
  );
};

export default AI;
