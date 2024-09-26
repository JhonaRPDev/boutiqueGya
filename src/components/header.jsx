import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero").clientHeight;
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 ${
        isScrolled ? "bg-white text-black" : "bg-transparent text-white"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-center items-center">
        <div className="text-2xl font-bold">
          <a href="">BOUTIQUE GYA</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
