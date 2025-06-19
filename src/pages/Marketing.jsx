import React from "react";
import marketingImg from "../assets/marketing.png";
const Marketing = () => {
  const services = [
    {
      title: "Daily/Weekly Content Creation",
      description:
        "Fresh, engaging content tailored to your brand's voice and audience.",
    },
    {
      title: "Organic & Paid Strategy",
      description:
        "Balanced growth using well-optimized paid ads and organic methods.",
    },
    {
      title: "Audience Growth & Engagement",
      description:
        "Build your followers and keep them engaged with consistent interaction.",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Track performance, measure ROI, and optimize campaigns using real data.",
    },
    {
      title: "Platform Expertise",
      description:
        "Experienced in Facebook, Instagram, LinkedIn & TikTok marketing.",
    },
  ];
  const services2 = [
    {
      title: "Google Ads",
      description:
        "Search, Display & Shopping campaigns for full-funnel reach and results.",
    },
    {
      title: "Facebook & Instagram Ads",
      description:
        "Targeted visual storytelling with Meta's ad suite to drive engagement.",
    },
    {
      title: "Conversion Tracking & A/B Testing",
      description:
        "Track real results and test what works best for your audience.",
    },
    {
      title: "Budget Optimization",
      description: "Smart bidding and spend allocation for maximum ROI.",
    },
    {
      title: "Real-Time Performance Reporting",
      description:
        "Stay updated with live campaign metrics and actionable insights.",
    },
  ];
   const seoServices = [
    {
      title: "Keyword Research & Competitor Analysis",
      description: "Uncover high-ranking opportunities and evaluate competition to build a strong SEO foundation.",
    },
    {
      title: "On-page Optimization",
      description: "Enhance meta tags, content, and site structure for better crawlability and ranking.",
    },
    {
      title: "Link Building & Outreach",
      description: "Earn authority and trust with ethical backlinks and strategic partnerships.",
    },
    {
      title: "Google Tools Integration",
      description: "Monitor and measure performance using Google Search Console & Analytics.",
    },
    {
      title: "Local & Global SEO Strategies",
      description: "Target local listings or scale internationally with geo-optimized campaigns.",
    },
  ];
  return (
    <div className="mt-20">
      <div className="bg-gray-900 w-full lg:relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 md:py-20 lg:py-28">
        <h1 className="text-white font-bold   text-7xl md:text-8xl lg:text-9xl xl:text-8xl leading-tight mb-10">
          Digital <br /> Marketing
        </h1>
        <img
          src={marketingImg}
          alt=""
          className="w-[90%] sm:w-[80%] md:w-[60%] md:mt-10 mt-10 lg:absolute lg:-bottom-[30%] lg:w-[90vw] lg:max-w-[1100px] h-auto max-h-[50vh] object-contain"
        />
      </div>
      <div className="mt-60 text-center flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Social Media Marketing
        </h1>
        <p className="text-lg text-600 w-[50%]">
          At Green Knight, we create engaging and conversionfocused content
          strategies for platforms like Facebook, Instagram, LinkedIn, and
          TikTok. From content calendars to ads and community management, we
          help build loyal online communities and drive traffic to your
          business.
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
          Pay-Per-Click Advertising
        </h1>
        <p className="text-lg text-600 w-[50%]">
          Maximize ROI with laser-targeted ad campaigns on Google Ads, Meta Ads,
          and YouTube. We handle campaign planning, keyword bidding, ad
          copywriting, and performance tracking to help you convert clicks into
          customers.
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
          Search Engine Optimization
        </h1>
        <p className="text-lg text-600 w-[50%]">
          Boost your website’s visibility with our on-page, off-page, and
          technical SEO services. We use white-hat techniques to help your
          business rank higher and attract quality traffic through organic and
          paid search.
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

export default Marketing;
