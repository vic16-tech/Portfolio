import { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaExclamationCircle,
  FaCoffee,
} from "react-icons/fa";
import "../index.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email required";
    if (!formData.number.trim()) newErrors.number = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }
    // Reset form on success
    setFormData({ name: "", email: "", number: "", message: "" });
    setErrors({});
  };

  const inputStyles = (field) =>
    `w-full bg-transparent text-white placeholder-gray-400 pl-10 pr-4 py-3 border ${
      errors[field] ? "border-red-500 shake" : "border-cyan-500"
    } rounded-md focus:outline-none focus:ring-2 ${
      errors[field] ? "focus:ring-red-400" : "focus:ring-cyan-400"
    }`;

  return (
    <div className="bg-gray-900 min-h-screen p-6 transition-colors duration-500">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 max-w-xl mx-auto text-white"
        noValidate
      >
        {/* Name Field */}
        <div className="relative">
          <FaUser className="absolute top-3.5 left-3 text-cyan-400" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className={inputStyles("name")}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <div className="text-red-500 mt-1 text-sm flex items-center gap-1">
              <FaExclamationCircle /> {errors.name}
            </div>
          )}
        </div>

        {/* Email Field */}
        <div className="relative">
          <FaEnvelope className="absolute top-3.5 left-3 text-cyan-400" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className={inputStyles("email")}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <div className="text-red-500 mt-1 text-sm flex items-center gap-1">
              <FaExclamationCircle /> {errors.email}
            </div>
          )}
        </div>

        {/* Phone Number Field */}
        <div className="relative">
          <FaPhone className="absolute top-3.5 left-3 text-cyan-400" />
          <input
            type="tel"
            name="number"
            placeholder="Your Phone Number"
            className={inputStyles("number")}
            value={formData.number}
            onChange={handleChange}
            inputMode="numeric"
            pattern="[0-9]*"
          />
          {errors.number && (
            <div className="text-red-500 mt-1 text-sm flex items-center gap-1">
              <FaExclamationCircle /> {errors.number}
            </div>
          )}
        </div>

        {/* Message Field */}
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="w-full bg-transparent text-white placeholder-gray-400 p-4 border border-cyan-500 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
          value={formData.message}
          onChange={handleChange}
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 cursor-pointer text-white py-3 px-6 rounded-md flex items-center justify-center gap-3 font-semibold transition"
        >
          Send Message <FaPaperPlane />
        </button>

        {/* Buy Me a Coffee Button */}
        <a
          href="https://www.buymeacoffee.com/victor"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 rounded-md font-semibold transition flex items-center justify-center gap-2"
        >
          <FaCoffee /> Buy Me a Coffee
        </a>
      </form>
    </div>
  );
};

export default ContactForm;
