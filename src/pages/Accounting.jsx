import React from "react";
import marketingImg from "../assets/accountingImg.jpg";
const Accounting = () => {
  const services = [
    {
      title: "Flexible Bookkeeping",
      description:
        "Daily, weekly, or monthly bookkeeping tailored to your business needs and cash flow cycles.",
    },
    {
      title: "Bank & Credit Card Reconciliation",
      description:
        "Accurately match all transactions and resolve discrepancies to ensure financial clarity.",
    },
    {
      title: "Accounts Receivable & Payable",
      description:
        "Track what you owe and what you're owed — stay ahead with smart AR & AP management.",
    },
    {
      title: "Chart of Accounts Setup",
      description:
        "Create and manage a structured chart of accounts for clean financial reporting.",
    },
    {
      title: "Reporting with QuickBooks, Xero, Wave",
      description:
        "Get real-time insights using tools like QuickBooks, Xero, Wave, and more.",
    },
    {
      title: "Tax-Ready Financials",
      description:
        "Organize financial records throughout the year to simplify tax filing and ensure compliance.",
    },
  ];
  const services2 = [
    {
      title: "Document Review & Verification",
      description:
        "Ensure all documents meet quality and regulatory standards before submission.",
    },
    {
      title: "Financial & Risk Analysis",
      description:
        "Assess applicant profiles, income, debt ratios, and credit to mitigate lending risks.",
    },
    {
      title: "Loan File Processing",
      description:
        "Handle mortgage and insurance loan file submissions from start to finish.",
    },
    {
      title: "Compliance Checks",
      description:
        "Validate documentation for FHA, VA, Fannie Mae, Freddie Mac, and more.",
    },
    {
      title: "Client & Broker Communication",
      description:
        "Maintain seamless coordination with clients, brokers, and third-party agencies.",
    },
    {
      title: "Pipeline Management",
      description:
        "Track and manage multiple loan files through each stage for faster approvals and less bottlenecks.",
    },
  ];

  const seoServices = [
    {
      title: "Excel Automation",
      description:
        "Automate workflows using macros, pivot tables, VLOOKUP, and advanced formulas.",
    },
    {
      title: "Custom Financial Models",
      description:
        "Build tailored financial forecasting and modeling tools for decision-making.",
    },
    {
      title: "Business Dashboards",
      description:
        "Create interactive dashboards for real-time reporting and performance tracking.",
    },
    {
      title: "Spreadsheet Optimization",
      description:
        "Fix errors, reduce file sizes, and enhance speed and accuracy of sheets.",
    },
    {
      title: "System Integration",
      description:
        "Connect Excel with accounting software and databases for seamless data flow.",
    },
    {
      title: "Data Cleaning & Transformation",
      description:
        "Standardize and transform raw data into structured, analysis-ready formats within Excel.",
    },
  ];

  return (
    <div className="mt-10">
      <div className="bg-gray-900 w-full min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 md:py-24 lg:py-28">
        {/* Heading */}
        <h1 className="text-white font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-10">
          Accounting Services
        </h1>

        {/* Image */}
        <img
          src={marketingImg}
          alt="Accounting"
          className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto max-h-[60vh] object-cover rounded-xl shadow-lg"
        />
      </div>

      <div className="mt-10 text-center flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Bookkeeping Services
        </h1>
        <p className="text-lg text-600 w-[50%]">
          Keep your finances organized with our reliable bookkeeping solutions.
          From managing ledgers to reconciling accounts, we ensure your books
          are always accurate, up-to-date, and compliant with international
          standards.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 mt-10 mb-10 px-15 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-30 text-center flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Underwriting Support Services
        </h1>
        <p className="text-lg text-600 w-[50%]">
          We assist lenders, brokers, and insurance firms with professional
          underwriting support. Our team follows detailed checklists and
          regulatory compliance to ensure fast, accurate, and reliable
          documentation and evaluation
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 mt-10 mb-10 px-15 sm:grid-cols-2 lg:grid-cols-3">
        {services2.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-30 text-center flex flex-col items-center gap-4">
        <h1 className="text-5xl font-bold text-gray-900">
          Excel Expertise  Financial Modeling
        </h1>
        <p className="text-lg text-600 w-[50%]">
          Our Excel specialists deliver automation, dashboards, and financial
          models that save time and boost decisionmaking. From complex formulas
          to custom templates, we turn raw data into business insights.
        </p>
      </div>
      <div className="grid gap-8 grid-cols-1 mt-10 mb-10 px-15 sm:grid-cols-2 lg:grid-cols-3">
        {seoServices.map((service, index) => (
          <div
            key={index}
            className="bg-gray-900 shadow-lg rounded-xl p-6 hover:shadow-2xl transition-all"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accounting;
