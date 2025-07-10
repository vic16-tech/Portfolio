import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Importing FaXTwitter from fa6 for the new X icon

const Contact = () => {
  return (
    <section className="text-white py-12">
      <h2 className="text-4xl font-bold text-cyan-400 mb-6 text-center">
        Get In Touch
      </h2>
      <div className="flex flex-col items-center gap-6 animate-fade-in">
        <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
          <FaEnvelope /> <span>victorachede@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
          <FaPhoneAlt /> <span>+234 9040237109</span>
        </div>
        <div className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors">
          <FaXTwitter /> {/* Changed from FaLinkedin to FaXTwitter */}
          <a
            href="https://x.com/achedevictor" // Updated the link to use https://x.com
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            x.com/achedevictor
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
