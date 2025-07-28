import { useEffect, useState }from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"; // Corrected to "framer-motion"

import {
  FaArrowRight, FaReact, FaNode, FaFigma, FaHtml5, FaCss3Alt,
  FaGitAlt, FaDatabase, FaUserFriends, FaBriefcase, FaStar,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Corrected X (Twitter) icon import
import {
  SiTailwindcss, SiJavascript, SiFirebase, SiMongodb,
  SiNextdotjs, SiExpress,
} from "react-icons/si";

import ContactForm from "../components/ContactForm";
import BackToTopButton from "../components/BackToTopButton";
import SEO from '../components/SEO'
import "../index.css"; // Ensure Tailwind CSS is correctly imported via this file

// --- Animation Variants (unchanged) ---
const animationVariants = {
  fromLeft: {
    hidden: { opacity: 0, x: -100, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8 } },
  },
  fromRight: {
    hidden: { opacity: 0, x: 100, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.8 } },
  },
  fromBottom: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  },
  jump: {
    hidden: { opacity: 0, y: 100, scale: 0.7 },
    visible: {
      opacity: 1,
      y: [100, -20, 0],
      scale: [0.7, 1.2, 1],
      transition: { duration: 1 },
    },
  },
};

// Animate only once (pure JSX)
const AnimatedOnView = ({ children, variant }) => {
  // Relax threshold (0.1 means 10% visible) and temporarily disable triggerOnce
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true }); // <--- MODIFIED HERE

  return (
    <motion.div
      ref={ref}
      variants={animationVariants[variant]}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

// Tech stack icons (unchanged)
const techIcons = [
  { Icon: FaHtml5, label: "HTML5" },
  { Icon: FaCss3Alt, label: "CSS3" },
  { Icon: SiJavascript, label: "JavaScript" },
  { Icon: FaReact, label: "React" },
  { Icon: SiNextdotjs, label: "Next.js" },
  { Icon: SiTailwindcss, label: "Tailwind" },
  { Icon: FaNode, label: "Node.js" },
  { Icon: SiExpress, label: "Express" },
  { Icon: SiMongodb, label: "MongoDB" },
  { Icon: SiFirebase, label: "Firebase" },
  { Icon: FaDatabase, label: "SQL" },
  { Icon: FaGitAlt, label: "Git" },
  { Icon: FaFigma, label: "Figma" },
];

// Testimonials (unchanged)
const testimonials = [
  {
    name: "Sophia Adams",
    feedback: "Victor's work exceeded expectations. He’s creative, reliable, and fast.",
  },
  {
    name: "Daniel E.",
    feedback: "We loved working with him! The UI/UX is just perfect and smooth.",
  },
  {
    name: "Jewel ❤️",
    feedback: "Victor puts heart into what he builds. His projects always have soul.",
  },
];

const Home = () => {
  return (
    <div className="overflow-x-hidden bg-gray-900">
      {/* SEO COMPONENT (unchanged) */}
      <SEO
        title="Victor Achede | Fullstack Developer, Designer & Founder"
        description="Victor is a passionate fullstack developer, designer, and founder building elegant and impactful digital experiences. Specializing in React, Node.js, Firebase, and modern web design. Open for internships and freelance opportunities."
        ogImage="/og.png"
        ogUrl="https://victor-achede.vercel.app/"
        keywords="Victor Achede, portfolio, fullstack, web developer, React, Node.js, Firebase, Tailwind CSS, UI/UX, freelance, internships, Nigeria, Asuir, founder, entrepreneur"
      />
      {/* Base horizontal padding for smaller screens */}
      <section className="text-white max-w-6xl mx-auto px-4 sm:px-12 md:px-24 flex flex-col gap-24 py-12">

        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <AnimatedOnView variant="fromLeft">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-cyan-500 shadow-lg">
              {/* Ensure Dev.svg is in your public folder or adjust path */}
              <img src="/Dev.svg" alt="Victor" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = "https://placehold.co/256x256/334155/FFFFFF?text=Dev+Image"; }}/>
            </div>
          </AnimatedOnView>

          <div className="flex flex-col items-start max-w-xl gap-6">
            <AnimatedOnView variant="fromRight">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-cyan-400">
                Welcome to <span className="text-white">victor.dev</span>
              </h1>
            </AnimatedOnView>

            <AnimatedOnView variant="fromBottom">
              <p className="text-lg text-gray-300 leading-relaxed">
                I’m Victor — a <b>founder</b>  building high-impact, elegant digital experiences. From full-stack apps to
                creative design, I build with purpose and precision.
              </p>
            </AnimatedOnView>

            {/* Online Indicator and Availability Text */}
            <AnimatedOnView variant="fromBottom">
              <div className="flex items-center gap-2 text-green-400 font-semibold text-base sm:text-lg
                             bg-white/5 rounded-lg border border-white/10 px-3 py-1 shadow-md backdrop-blur-sm">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span>Open for Internships & Freelance</span>
              </div>
            </AnimatedOnView>

            {/* X Handles Section */}
            <AnimatedOnView variant="fromBottom">
              <div className="flex flex-wrap gap-4 mt-4">
                <a
                  href="https://x.com/KiddosNG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full font-semibold transition-all duration-300 text-sm"
                >
                  <FaXTwitter className="h-4 w-4" /> {/* Using FaXTwitter icon from fa6 */}
                  @KiddosNG
                </a>
                <a
                  href="https://x.com/caeint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full font-semibold transition-all duration-300 text-sm"
                >
                  <FaXTwitter className="h-4 w-4" /> {/* Using FaXTwitter icon from fa6 */}
                  @caeint
                </a>
                {/* Add more handles here if needed */}
              </div>
            </AnimatedOnView>

            <AnimatedOnView variant="jump">
              <a
                href="/projects"
                className="inline-flex items-center gap-3 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full font-semibold shadow-md transition-all duration-300"
              >
                See projects <FaArrowRight />
              </a>
            </AnimatedOnView>
          </div>
        </div>

        {/* Tech stack */}
        <div className="text-center space-y-10">
          <AnimatedOnView variant="fromBottom"> {/* <--- UNCOMMENTED AND RE-ENABLED */}
            <h2 className="text-3xl font-bold text-cyan-400">Tech stack</h2>
          </AnimatedOnView> {/* <--- UNCOMMENTED AND RE-ENABLED */}
          {/* Increased horizontal gap for tech icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-8 justify-items-center text-white/70">
            {techIcons.map(({ Icon, label }, idx) => (
              // AnimatedOnView temporarily removed from individual icons for debugging
              <div key={label} className="flex flex-col items-center hover:text-cyan-400 transition duration-300">
                <Icon className="text-3xl xs:text-4xl" />
                <span className="text-sm mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="flex flex-wrap justify-center gap-10 text-center text-white/80">
          <AnimatedOnView variant="fromLeft">
            <div>
              <FaBriefcase className="text-4xl mb-2 text-cyan-400" />
              <p className="text-3xl font-bold">15+</p>
              <p className="text-sm">Projects delivered</p>
            </div>
          </AnimatedOnView>
          <AnimatedOnView variant="fromBottom">
            <div>
              <FaUserFriends className="text-4xl mb-2 text-cyan-400" />
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm">Happy clients</p>
            </div>
          </AnimatedOnView>
          <AnimatedOnView variant="fromRight">
            <div>
              <FaStar className="text-4xl mb-2 text-cyan-400" />
              <p className="text-3xl font-bold">4.0</p>
              <p className="text-sm">Average rating</p>
            </div>
          </AnimatedOnView>
          <AnimatedOnView variant="fromLeft">
            <div>
              <FaGitAlt className="text-4xl mb-2 text-cyan-400" />
              <p className="text-3xl font-bold">100k+</p>
              <p className="text-sm">Lines of code</p>
            </div>
          </AnimatedOnView>
          <AnimatedOnView variant="fromBottom">
            <div>
              <FaReact className="text-4xl mb-2 text-cyan-400" />
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm">Tech stack mastered</p>
            </div>
          </AnimatedOnView>
          <AnimatedOnView variant="fromRight">
            <div>
              <FaDatabase className="text-4xl mb-2 text-cyan-400" />
              <p className="text-3xl font-bold">2+</p>
              <p className="text-sm">Years experience</p>
            </div>
          </AnimatedOnView>
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <AnimatedOnView variant="fromBottom">
            <h2 className="text-3xl font-bold text-cyan-400 text-center">What people say</h2>
          </AnimatedOnView>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            {testimonials.map(({ name, feedback }, i) => (
              <AnimatedOnView key={name} variant={i % 2 === 0 ? "fromLeft" : "fromRight"}>
                <div className="bg-white/5 p-6 rounded-xl border border-white/10 max-w-sm text-sm text-gray-200 backdrop-blur">
                  <p>"{feedback}"</p>
                  <p className="mt-4 text-cyan-400 font-bold">— {name}</p>
                </div>
              </AnimatedOnView>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="mt-32 text-center bg-cyan-600 py-16 px-6 rounded-2xl shadow-lg mx-6">
          <AnimatedOnView variant="jump">
            <h2 className="text-4xl font-bold text-white mb-6 cursor-pointer">Let’s build something wild</h2>
            <a
              href="/contact"
              className="inline-block mt-4 px-6 py-3 bg-white text-cyan-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Contact me
            </a>
          </AnimatedOnView>
        </section>

        <AnimatedOnView variant="fromBottom">
          <ContactForm />
        </AnimatedOnView>

        <BackToTopButton />
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} victor.dev — All rights reserved.
      </footer>
    </div>
  );
};

export default Home;