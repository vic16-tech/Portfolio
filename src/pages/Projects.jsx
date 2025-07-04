import { FaLaptopCode, FaMobileAlt, FaGlobe } from "react-icons/fa";

const projects = [
  {
    title: "Kiddos",
    icon: <FaLaptopCode size={30} />,
    desc: "An AI-powered student learning platform with chat and smart course flow.",
    url: "https://kiddo-eight-henna.vercel.app/", // Added URL for Learniverse
  },
  {
    title: "Faith Secondary School Website",
    icon: <FaGlobe size={30} />,
    desc: "A website for Faith Secondary School",
    url: "https://faith-secondary-school-app.vercel.app/", // Added URL for Victor Surveillance
  },
  {
    title: "CanvaX",
    icon: <FaMobileAlt size={30} />,
    desc: "A mobile graphics design app Jewel would love — elegant and easy to use.",
    // url: "https:", // Added URL for CanvaX
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
            className="bg-[#1a1a2e] p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-cyan-500/20 transition-transform duration-300 flex flex-col" // Added flex-col to better position the link
          >
            <div className="text-cyan-400 mb-3">{project.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 flex-grow mb-4">{project.desc}</p> {/* Added flex-grow and mb-4 for spacing */}
            {project.url && ( // Conditionally render the link only if a URL exists
              <a
                href={project.url}
                target="_blank" // Opens the link in a new tab
                rel="noopener noreferrer" // Security best practice for target="_blank"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium underline mt-auto self-start" // Styling for the link, mt-auto pushes it to bottom
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
