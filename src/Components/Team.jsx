

import ceo from "../assets/ceo.png";
import coo from "../assets/coo.jpg";
import director from "../assets/director.png";
import projectHead from "../assets/projectHead.png";



const Team = () => {
  const teamData = [
    { img: ceo, name: "Shakir Ahli", role: "CEO & Founder" },
    { img: coo, name: "Mughees Raza", role: "COO & Co-Founder" },
    { img: director, name: "Naeem Bhukari", role: "Director Operations" },
    { img: projectHead, name: "Ali Raza", role: "Designation Manager Operations" },
  ];

  return (
    <div id="team"  className=" px-10 py-15 bg-gray-50 scroll-mt-20">
      <div
  
        className="text-center mb-12 translate-y-10 transition-all"
      >
        <h1 className="text-5xl font-extrabold text-gray-800">Our Team</h1>
        <h3 className="text-lg text-gray-600 mt-2 max-w-3xl mx-auto">
          Meet the minds driving innovation, growth, and operational excellence at Green Knight.
        </h3>
      </div>

      <div className="flex items-center justify-center gap-10 flex-wrap">
        {teamData.map((member, index) => (
          <div
            key={index}
            className="text-center bg-white p-6 rounded-xl shadow-md w-72 hover:shadow-xl transition-all translate-y-10"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-60  object-cover rounded mb-4 mx-auto"
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
