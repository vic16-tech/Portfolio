import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      // Show button when scrolled near bottom (e.g., last 500px)
      setVisible(scrollPosition > pageHeight - 500);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="
        fixed
        bottom-8
        right-12
        z-50
        w-14 h-14
        rounded-full
        bg-cyan-500 hover:bg-cyan-600
        text-white
        shadow-lg
        flex items-center justify-center
        cursor-pointer
        transition
        animate-bounce
        pointer-events-auto
      "
      style={{ maxWidth: "calc(100vw - 2rem)", maxHeight: "calc(100vh - 2rem)" }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default BackToTopButton;
