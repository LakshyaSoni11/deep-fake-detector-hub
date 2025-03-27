
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <Link 
          to="/" 
          className="flex items-center gap-2 transition-opacity hover:opacity-80"
          aria-label="Detect AI Hub"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[rgb(230,65,65)] to-[rgb(235,233,108)] flex items-center justify-center text-white font-bold overflow-hidden">
            <span className="text-white font-display text-lg">DA</span>
          </div>
          <span className="font-display text-xl font-semibold tracking-tight">
            Detect<span className="bg-gradient-to-r from-[rgb(230,65,65)] to-[rgb(235,233,108)] bg-clip-text text-transparent">AI</span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <NavLink href="/detect-text">Detect Text</NavLink>
            <NavLink href="/detect-video">Detect Video</NavLink>
          </div>

          <Link 
            to="/detect-text" 
            className="text-sm bg-gradient-to-r from-[rgb(230,65,65)]/10 to-[rgb(235,233,108)]/10 text-[rgb(230,65,65)] font-medium px-4 py-2 rounded-full hover:from-[rgb(230,65,65)] hover:to-[rgb(235,233,108)] hover:text-white transition-all duration-300"
          >
            Try Now
          </Link>
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ 
  href, 
  children 
}: { 
  href: string; 
  children: React.ReactNode 
}) => {
  return (
    <Link 
      to={href} 
      className="font-medium text-base text-charcoal/90 hover:text-[rgb(230,65,65)] transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gradient-to-r after:from-[rgb(230,65,65)] after:to-[rgb(235,233,108)] after:scale-x-0 after:origin-center hover:after:scale-x-100 after:transition-transform after:rounded-full"
    >
      {children}
    </Link>
  );
};

export default Navbar;
