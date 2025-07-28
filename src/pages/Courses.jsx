// src/pages/Courses.jsx
import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import BackToTopButton from '../components/BackToTopButton';
// C# icon import removed
import { FaSearch, FaPython, FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from 'react-icons/fa';
// C# icon import removed from here too
import { SiCplusplus, SiRedux, SiMongodb, SiFirebase, SiTailwindcss, SiTypescript } from 'react-icons/si';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  const keywords = [
    "Python", "JavaScript", "C++", "HTML", "CSS", // "C#" removed from keywords
    "Redux", "Node.js", "React", "MongoDB", "SQL",
    "Tailwind CSS", "Firebase", "TypeScript", "Django", "Flask"
  ];

  // Dummy Course Data with Prices in Naira (₦)
  const coursesData = [
    {
      id: 'py001',
      icon: FaPython,
      title: 'Python for Beginners',
      description: 'Master the fundamentals of Python programming. Perfect for absolute beginners.',
      price: 25000, // Naira
      keywords: ['Python', 'Beginner', 'Programming']
    },
    {
      id: 'js001',
      icon: FaJs,
      title: 'JavaScript Essentials',
      description: 'Learn core JavaScript concepts, DOM manipulation, and modern syntax.',
      price: 30000,
      keywords: ['JavaScript', 'Frontend', 'Web Development']
    },
    {
      id: 'htcss01',
      icon: FaHtml5, // Using HTML5 icon for both
      title: 'HTML & CSS Fundamentals',
      description: 'Build responsive and beautiful web pages from scratch.',
      price: 20000,
      keywords: ['HTML', 'CSS', 'Frontend', 'Web Design']
    },
    {
      id: 'react01',
      icon: FaReact,
      title: 'React.js Crash Course',
      description: 'Develop dynamic user interfaces with React, Hooks, and Component-based architecture.',
      price: 35000,
      keywords: ['React', 'JavaScript', 'Frontend', 'UI/UX']
    },
    {
      id: 'node01',
      icon: FaNodeJs,
      title: 'Node.js & Express API',
      description: 'Build robust backend APIs with Node.js, Express, and integrate with databases.',
      price: 40000,
      keywords: ['Node.js', 'Express', 'Backend', 'API']
    },
    {
      id: 'redux01',
      icon: SiRedux,
      title: 'Redux State Management',
      description: 'Manage complex application state efficiently with Redux Toolkit.',
      price: 28000,
      keywords: ['Redux', 'React', 'State Management']
    },
    {
      id: 'cpp01',
      icon: SiCplusplus,
      title: 'C++ Basics to OOP',
      description: 'A comprehensive introduction to C++ programming and Object-Oriented Principles.',
      price: 32000,
      keywords: ['C++', 'Programming', 'OOP']
    },
    // C# course object completely removed from here
    {
      id: 'mongo01',
      icon: SiMongodb,
      title: 'MongoDB Database',
      description: 'Learn NoSQL database concepts and how to use MongoDB with Node.js.',
      price: 27000,
      keywords: ['MongoDB', 'NoSQL', 'Database']
    },
    {
      id: 'tailwind01',
      icon: SiTailwindcss,
      title: 'Tailwind CSS Mastery',
      description: 'Rapidly build modern designs with utility-first CSS framework.',
      price: 22000,
      keywords: ['Tailwind CSS', 'CSS', 'Frontend', 'Design']
    },
    {
      id: 'ts01',
      icon: SiTypescript,
      title: 'TypeScript Fundamentals',
      description: 'Add static typing to your JavaScript projects for better scalability and maintainability.',
      price: 31000,
      keywords: ['TypeScript', 'JavaScript', 'Type Safety']
    },
    {
      id: 'firebase01',
      icon: SiFirebase,
      title: 'Firebase for Web',
      description: 'Build full-stack applications quickly using Firebase services like Firestore, Auth, and Storage.',
      price: 33000,
      keywords: ['Firebase', 'Backend', 'Authentication', 'Database']
    }
  ];

  // Filtered courses based on search term
  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex(prevIndex => (prevIndex + 1) % keywords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [keywords.length]);

  // Function to handle course selection (for now, just an alert)
  const handleSelectCourse = (courseId, courseTitle) => {
    alert(`You selected "${courseTitle}" (ID: ${courseId}). Confirmation will be sent to your email later!`);
    // In a real application, you would send this data to a backend endpoint here
  };

  return (
    <div className="overflow-x-hidden bg-gray-900 text-white min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <SEO
        title="Programming Courses | Learn to Code with Victor"
        description="Explore a variety of programming courses designed to help you learn and master coding. Find courses in Python, JavaScript, HTML, CSS, and more."
        ogImage="/og.png"
        ogUrl="https://victor-achede.vercel.app/courses"
        keywords="programming courses, learn code, Python, JavaScript, HTML, CSS, Redux, C++, C#, coding tutorials, online learning, programming education"
      />

      <section className="max-w-6xl mx-auto w-full flex-grow">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-cyan-400 text-center mb-12">
          Master Your Code Journey
        </h1>

        {/* Search Bar Section */}
        <div className="mb-12 relative">
          <input
            type="text"
            placeholder={`Search courses like ${keywords[currentPlaceholderIndex]}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-cyan-500 text-white text-lg placeholder-gray-400 transition duration-300 ease-in-out"
          />
          <FaSearch
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl"
          />
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredCourses.map(course => (
            <div key={course.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:border-cyan-500 transition duration-300 ease-in-out flex flex-col">
              <div className="p-6 flex-grow">
                <div className="text-cyan-400 text-5xl mb-4 text-center">
                  {/* Render the icon component */}
                  <course.icon />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">{course.title}</h3>
                <p className="text-gray-300 text-center text-sm">{course.description}</p>
              </div>
              <div className="bg-gray-700 p-4 flex items-center justify-between">
                <span className="text-white text-xl font-semibold">
                  ₦{course.price.toLocaleString()}
                </span>
                <button
                  onClick={() => handleSelectCourse(course.id, course.title)}
                  className="px-5 py-2 bg-cyan-600 text-white rounded-full font-semibold hover:bg-cyan-700 transition duration-300 ease-in-out"
                >
                  Select Course
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Other Courses Available Soon */}
        <div className="text-center bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-700">
          <h2 className="text-3xl font-bold text-cyan-400 mb-4">More Courses Coming Soon!</h2>
          <p className="text-gray-300 text-lg">
            We are constantly expanding our curriculum to bring you the best in programming education. Stay tuned for exciting new courses in areas like Machine Learning, Data Science, Game Development, and more!
          </p>
          <p className="text-gray-400 text-sm mt-4">
            Follow us on social media for updates!
          </p>
        </div>
      </section>

      <BackToTopButton />
    </div>
  );
};

export default Courses;