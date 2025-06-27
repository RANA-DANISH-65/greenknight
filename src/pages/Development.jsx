import React from "react";
import appimg from "../assets/appdev.png";

const Development = () => {
  const data = [
    {
      title: "Front-end",
      items: ["HTML", "CSS", "JavaScript", "React", "Vue"],
    },
    {
      title: "Back-end",
      items: ["Node.js", "Laravel", "PHP", "Django"],
    },
    {
      title: "CMS Development",
      items: ["WordPress", "Shopify", "Webflow"],
    },
    {
      title: "Database Integration",
      items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Hosting & Security",
      items: ["Hosting", "SSL Security", "Performance Optimization"],
    },
  ];
  const mobileData = [
    {
      title: "Native & Cross-platform",
      items: ["iOS", "Android", "Flutter", "React Native"],
    },
    {
      title: "UI/UX Design",
      items: [
        "Optimized for mobile experience",
        "Responsive layouts",
        "Smooth interactions",
      ],
    },
    {
      title: "API Integration",
      items: [
        "Real-time functionality",
        "3rd-party APIs",
        "Custom backend connectivity",
      ],
    },
    {
      title: "Deployment",
      items: [
        "App Store submission",
        "Google Play publishing",
        "Launch support",
      ],
    },
    {
      title: "Maintenance & Upgrades",
      items: ["Bug fixing", "Version updates", "Ongoing testing"],
    },
  ];

  return (
    <div>
      <div className="bg-gray-900 w-full lg:relative min-h-screen flex flex-col items-center justify-center text-center  py-25 ">
        {/* Title */}
        <h1 className="text-white font-bold   text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-10">
          Website <br /> App Development
        </h1>

        {/* Image */}
        <img
          src={appimg}
          alt="App Development"
          className="w-[90%] sm:w-[80%] md:w-[60%] lg:w-[70%] xl:w-[60%] max-w-[800px] h-auto object-contain mt-10"
        />
      </div>

      <div className="mt-10 text-center flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold text-gray-900">Web Development</h1>
        <p className="text-lg text-600 w-[50%]">
          From responsive business websites to complex web portals, we create
          custom web solutions that are fast, secure, and aligned with your
          brand. Whether it's frontend, back-end, or full-stack, we handle it
          all.
        </p>
      </div>
      <div className="flex mt-20 mb-10 flex-wrap justify-center gap-6">
        {data.map((section, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-md rounded-xl p-6 w-64 hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-bold text-white mb-3">
              {section.title}
            </h3>
            <ul className="text-white space-y-1 pl-5 list-disc">
              {section.items.map((item, idx) => (
                <li key={idx} className="text-sm leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <div className="bg-gray-900 w-full  flex flex-col items-center justify-start text-center mb-10 p-10">
          <h1 className="lg:text-8xl md:text-7xl text-5xl text-white font-bold">
            Mobile App <br /> Development
          </h1>
          <div className="flex flex-wrap mt-10 justify-center gap-6">
            {mobileData.map((section, index) => (
              <div
                key={index}
                className="bg-gray-700 shadow-md rounded-xl p-6 w-64 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {section.title}
                </h3>
                <ul className="text-white space-y-1 pl-5 list-disc">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-left leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
