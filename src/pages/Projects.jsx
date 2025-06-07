import { FaLaptopCode, FaMobileAlt, FaGlobe } from "react-icons/fa";

const projects = [
  {
    title: "Learniverse",
    icon: <FaLaptopCode size={30} />,
    desc: "An AI-powered student learning platform with chat and smart course flow.",
  },
  {
    title: "Victor Surveillance",
    icon: <FaGlobe size={30} />,
    desc: "Custom monitoring dashboard with secure live feeds and remote access.",
  },
  {
    title: "CanvaX",
    icon: <FaMobileAlt size={30} />,
    desc: "A mobile graphics design app Jewel would love — elegant and easy to use.",
  },
];

const Projects = () => {
  return (
    <section className="text-white py-12">
      <h2 className="text-4xl font-bold text-cyan-400 mb-8 text-center">
        Featured Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 animate-fade-in">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-[#1a1a2e] p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition-transform duration-300"
          >
            <div className="text-cyan-400 mb-3">{project.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;