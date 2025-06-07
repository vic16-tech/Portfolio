import { FaPenFancy } from "react-icons/fa";

const Blog = () => {
  return (
    <section className="text-white py-12">
      <h2 className="text-4xl font-bold text-cyan-400 mb-6 text-center flex items-center justify-center gap-3">
        <FaPenFancy /> Blog Posts
      </h2>
      <div className="space-y-6 max-w-3xl mx-auto animate-fade-in">
        <div className="p-6 bg-[#1a1a2e] rounded-lg shadow hover:shadow-cyan-400/20 transition-all group">
          <h3 className="text-xl font-semibold group-hover:text-cyan-400">
            How I Built My Surveillance App from Scratch
          </h3>
          <p className="text-gray-300 mt-2">
            A full breakdown of tech stack, security architecture, and remote integration.
          </p>
        </div>
        <div className="p-6 bg-[#1a1a2e] rounded-lg shadow hover:shadow-cyan-400/20 transition-all group">
          <h3 className="text-xl font-semibold group-hover:text-cyan-400">
            Design for People: The CanvaX Approach
          </h3>
          <p className="text-gray-300 mt-2">
            Simplicity, love, and pixels — how I built a design tool for Jewel and others like her.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;