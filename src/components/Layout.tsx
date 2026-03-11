import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Magnetic } from "./Magnetic";
import logo from "../assets/fenx.png";
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Book Demo", path: "/book-demo" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isScrolled ? "py-4 glass border-b-white/5 bg-bg-navy/80" : "py-8 bg-transparent"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Magnetic strength={0.2}>
          <Link to="/" className="flex items-center gap-3 group relative">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
             <img src={logo} alt="FenX AI Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-bold tracking-tighter">FenX <span className="text-white">AI</span></span>
          </Link>
        </Magnetic>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Magnetic key={link.path} strength={0.1}>
              <Link 
                to={link.path} 
                className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 relative group ${location.pathname === link.path ? "text-white" : "text-slate-400 hover:text-white"}`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-px bg-white"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            </Magnetic>
          ))}
          <Magnetic strength={0.3}>
            <Link to="/book-demo" className="cta-button px-6 py-3 bg-white text-black font-bold rounded-full text-[11px] uppercase tracking-widest hover:bg-slate-200 transition-all duration-500 shadow-xl shadow-white/5">
              Get Started
            </Link>
          </Magnetic>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/5 overflow-hidden absolute top-full left-0 w-full bg-bg-navy/95 backdrop-blur-xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-widest ${location.pathname === link.path ? "text-white" : "text-slate-400"}`}
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/book-demo" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-white text-black font-bold rounded-xl text-center uppercase tracking-widest text-xs"
              >
                Book Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="py-32 border-t border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-16 mb-24">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center overflow-hidden">
                <img src={logo} alt="FenX AI Logo" />
              </div>
              <span className="text-xl font-bold tracking-tighter">FenX AI</span>
            </Link>
            <p className="text-slate-500 max-w-sm mb-10 font-light leading-relaxed">
              Building the next generation of autonomous business systems. Intelligent automation that scales with you.
            </p>
            <div className="flex gap-6">
              {/* Social placeholders */}
              {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                <Magnetic key={social} strength={0.2}>
                  <div className="text-slate-500 hover:text-white cursor-pointer transition-colors font-bold text-[10px] tracking-widest uppercase relative group">
                    {social}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                  </div>
                </Magnetic>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Ecosystem</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-light">
              <li><Link to="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-primary transition-colors">Services</Link></li>
              <li><Link to="/products" className="hover:text-brand-primary transition-colors">Products</Link></li>
              <li><Link to="/blog" className="hover:text-brand-primary transition-colors">Blog</Link></li>
              <li><Link to="/book-demo" className="hover:text-brand-primary transition-colors">Book Demo</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Industries</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-light">
              <li><Link to="/industries/real-estate-ai" className="hover:text-brand-primary transition-colors">Real Estate</Link></li>
              <li><Link to="/industries/healthcare-ai" className="hover:text-brand-primary transition-colors">Healthcare</Link></li>
              <li><Link to="/industries/ecommerce-ai" className="hover:text-brand-primary transition-colors">E-commerce</Link></li>
              <li><Link to="/industries/education-ai" className="hover:text-brand-primary transition-colors">Education</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Company</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-light">
              <li><a href="#" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Case Studies</a></li>
              <li><Link to="/admin" className="hover:text-brand-primary transition-colors">Admin Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">Legal</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-light">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
          <p>© 2026 FenX AI. All rights reserved.</p>
          <p>Built for the future of business.</p>
        </div>
      </div>
    </footer>
  );
};
