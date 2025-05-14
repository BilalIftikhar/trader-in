"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);
  const [isDesktop, setIsDesktop] = useState(false);
  
  // Handle responsive behavior
  useEffect(() => {
    if (typeof window === 'undefined') return;
  
    const handleResize = () => {
      const isDesktopView = window.innerWidth >= 1024;
      setIsDesktop(isDesktopView);
  
      if (isDesktopView) {
        setMobileMenuOpen(false);
      }
  
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
      console.log('Width:', window.innerWidth, ' → isDesktop:', isDesktopView);
    };
  
    handleResize();
  
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflowX = 'hidden';
      document.documentElement.style.overflowX = 'hidden';
    };
  }, []);
  
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };
  
  return (
    <div className="flex flex-col">
      {/* Navbar */}
      <header className="bg-[#d4d4d4] shadow-md relative z-30">
        <div className="flex items-center justify-between px-4 md:px-10 h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative z-10 rounded-md shadow-lg">
              <Image
                src="/logo.jpeg"
                alt="logo"
                width={60}
                height={60}
                className="object-cover rounded-md bg-white"
                priority
              />
            </div>
            <div className="flex flex-col text-sm leading-5">
              <span className="font-bold text-[#212121] tracking-wider">
                TRADE IN
              </span>
              <span className="text-[11px] text-[#313131] -mt-0.5">
                ALUMINIUM • UPVC • GLASS
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Show only on screens larger than 1024px */}
          <nav className={`hidden lg:flex items-center gap-6 font-semibold text-[#353535]`}>
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/about" className="hover:text-black transition-colors">About Us</Link>

            {/* Dropdown */}
            <div className="relative group cursor-pointer">
              <div className="flex items-center hover:text-black transition-colors">
                Product <FiChevronDown className="ml-1 mt-0.5 text-sm" />
              </div>
              <div className="absolute top-full left-0 w-[300px] bg-white shadow-lg rounded-md p-4
                opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                transition-all duration-200 z-50">
                
                {/* Turkish Brands */}
                <div>
                  <h4 className="font-bold text-sm text-gray-700 mb-2">Turkish Brands</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><Link href="/wintech" className="hover:underline hover:text-black transition-colors">Wintech</Link></li>
                    <li><Link href="/adopen" className="hover:underline hover:text-black transition-colors">Adopen</Link></li>
                    <li><Link href="/asaspen" className="hover:underline hover:text-black transition-colors">Asaspen</Link></li>
                    <li><Link href="/yaghmurpen" className="hover:underline hover:text-black transition-colors">Yaghmurpen</Link></li>
                    <li><Link href="/aKpen" className="hover:underline hover:text-black transition-colors">AKpen</Link></li>
                  </ul>
                </div>

                {/* German Brands */}
                <div className="mt-4">
                  <h4 className="font-bold text-sm text-gray-700 mb-2">German Brands</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><Link href="/aluplast" className="hover:underline hover:text-black transition-colors">Aluplast</Link></li>
                    <li><Link href="/veka" className="hover:underline hover:text-black transition-colors">Veka</Link></li>
                    <li><Link href="/schuco" className="hover:underline hover:text-black transition-colors">Schuco</Link></li>
                  </ul>
                </div>

                {/* Pakistani Brands */}
                <div className="mt-4">
                  <h4 className="font-bold text-sm text-gray-700 mb-2">Pakistani Brands</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li><Link href="/pamp" className="hover:underline hover:text-black transition-colors">Pamp</Link></li>
                    <li><Link href="/buraq" className="hover:underline hover:text-black transition-colors">Buraq</Link></li>
                    <li><Link href="/skypen" className="hover:underline hover:text-black transition-colors">Skypen</Link></li>
                    <li><Link href="/garmentech" className="hover:underline hover:text-black transition-colors">Garmentech</Link></li>
                    <li><Link href="/europrofile" className="hover:underline hover:text-black transition-colors">Europrofile</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <Link href="/contact" className="hover:text-black transition-colors">Contact Us</Link>
          </nav>

          {/* Mobile Menu Toggle - Show on 1024px and below */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24}  className="text-black" /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Fixed overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
            <div 
              className="absolute right-0 top-0 h-full w-4/5 max-w-xs bg-white shadow-lg py-4 overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-6 pb-4 mb-2 border-b border-gray-200 flex justify-between items-center">
                <span className="font-bold text-gray-800">Menu</span>
                <button onClick={() => setMobileMenuOpen(false)} className="p-1">
                  <FiX size={24} className="text-black" />
                </button>
              </div>
              
              <div className="px-6 py-2 space-y-4">
                <Link 
                  href="/" 
                  className="block py-2 text-gray-800 font-medium hover:text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                
                <Link 
                  href="/about" 
                  className="block py-2 text-gray-800 font-medium hover:text-black"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                
                {/* Accordion sections */}
                <div className="py-2 border-t border-gray-100">
                  <button 
                    onClick={() => toggleSection('turkish')}
                    className="flex justify-between items-center w-full py-2 text-gray-800 font-medium"
                  >
                    <span>Turkish Brands</span>
                    <FiChevronDown className={`transition-transform ${expandedSection === 'turkish' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div className={`pl-4 space-y-2 pt-1  transition-all duration-200 ${
                    expandedSection === 'turkish' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <Link href="/wintech" className="block py-1 text-sm text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Wintech</Link>
                    <Link href="/adopen" className="block py-1 text-sm text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Adopen</Link>
                    <Link href="/asaspen" className="block py-1 text-sm text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Asaspen</Link>
                    <Link href="/yaghmurpen" className="block py-1 text-sm text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Yaghmurpen</Link>
                    <Link href="/aKpen" className="block py-1 text-sm text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>AKpen</Link>
                  </div>
                </div>
                
                <div className="py-2 border-t border-gray-100">
                  <button 
                    onClick={() => toggleSection('german')}
                    className="flex justify-between items-center w-full py-2 text-gray-800 font-medium"
                  >
                    <span>German Brands</span>
                    <FiChevronDown className={`transition-transform ${expandedSection === 'german' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div className={`pl-4 space-y-2 pt-1  transition-all duration-200 ${
                    expandedSection === 'german' ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <Link href="/aluplast" className="block py-1 text-sm text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Aluplast</Link>
                    <Link href="/veka" className="block py-1 text-sm text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Veka</Link>
                    <Link href="/schuco" className="block py-1 text-sm text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Schuco</Link>
                  </div>
                </div>
                
                <div className="py-2 border-t border-gray-100">
                  <button 
                    onClick={() => toggleSection('pakistani')}
                    className="flex justify-between items-center w-full py-2 text-gray-800 font-medium"
                  >
                    <span>Pakistani Brands</span>
                    <FiChevronDown className={`transition-transform ${expandedSection === 'pakistani' ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <div className={`pl-4 space-y-2 pt-1  transition-all duration-200 ${
                    expandedSection === 'pakistani' ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <Link href="/pamp" className="block py-1 text-sm text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Pamp</Link>
                    <Link href="/buraq" className="block py-1 text-sm text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Buraq</Link>
                    <Link href="/skypen" className="block py-1 text-sm text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Skypen</Link>
                    <Link href="/garmentech" className="block py-1 text-sm text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Garmentech</Link>
                    <Link href="/europrofile" className="block py-1 text-sm text-gray-600 hover:text-black" onClick={() => setMobileMenuOpen(false)}>Europrofile</Link>
                  </div>
                </div>
                
                <div className="pt-2 border-t border-gray-100">
                  <Link 
                    href="/contact" 
                    className="block py-2 text-gray-800 font-medium hover:text-black"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section className="bg-[#383838] flex-1 flex justify-center items-center px-4 sm:px-10 py-16 md:py-20 relative ">
        {/* Bottom-left diagonal decorative lines */}
        <div className="absolute left-0 bottom-0 hidden lg:block">
          <svg width="200" height="60" fill="none" viewBox="0 0 200 60">
            <g stroke="#b7b7b7" strokeWidth="3">
              <line x1="10" y1="50" x2="60" y2="10" />
              <line x1="40" y1="50" x2="90" y2="10" />
              <line x1="70" y1="50" x2="120" y2="10" />
              <line x1="100" y1="50" x2="150" y2="10" />
              <line x1="130" y1="50" x2="180" y2="10" />
            </g>
          </svg>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-6xl w-full mx-auto z-10">
          {/* Left content */}
          <div className="flex-1 max-w-xl text-white text-center md:text-left">
            <div className="mb-2 tracking-widest text-xs text-gray-300 font-bold uppercase">
              Trade In
            </div>
            <h1
              className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight mb-4"
              style={{ fontFamily: "Orbitron, Geist, sans-serif" }}
            >
              The Futurist
              <br />
              Windows & Doors
            </h1>
            <div className="w-3/4 h-0.5 bg-gray-400 mb-6 mx-auto md:mx-0"></div>
            <p className="mb-8 text-base sm:text-lg text-gray-200">
              Trade In offers a vast range of windows & doors designs for the
              home and office that are sure to add grace to your space.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-4 bg-[#dadada] text-[#2b2b2b] font-semibold py-3 px-6 sm:px-8 rounded-sm hover:bg-gray-300 transition shadow text-base"
            >
              Contact us{" "}
              <span className="inline-block">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 9h8M9 5l4 4-4 4" />
                </svg>
              </span>
            </a>
          </div>
          
          {/* Right image content */}
          <div className="relative mt-10 md:mt-0 min-w-[280px] sm:min-w-[320px] md:min-w-[350px]">
            {/* Accent rectangles and lines */}
            <div className="absolute -top-7 -left-7 w-[280px] sm:w-[310px] md:w-[340px] h-[280px] sm:h-[310px] md:h-[340px] bg-[#aaa2a2] opacity-30 rounded-md -z-10" />
            
            {/* Modern home image */}
            <div className="relative z-10 rounded-md  shadow-lg">
              <Image
                src="/home2.jpg"
                alt="Modern house"
                width={450}
                height={450}
                className="w-[280px] sm:w-[320px] md:w-[350px] h-[280px] sm:h-[320px] md:h-[350px] object-cover rounded-md bg-white"
                priority
              />
              {/* outlined box */}
              <div className="absolute border-4 border-white -bottom-7 -right-7 w-full h-full pointer-events-none"></div>
            </div>
            
            {/* Slanted accent lines to the right */}
            <div className="absolute top-10 right-[-120px] hidden md:block">
              <svg width="120" height="220" fill="none" viewBox="0 0 120 220">
                <g stroke="#bbbbbb" strokeWidth="7">
                  <line x1="20" y1="0" x2="100" y2="180" />
                  <line x1="40" y1="0" x2="120" y2="180" />
                  <line x1="0" y1="30" x2="80" y2="210" />
                </g>
              </svg>
            </div>
            
            <div
              className="absolute bottom-2 left-0 text-white tracking-widest text-base sm:text-lg font-bold select-none"
              style={{ letterSpacing: "0.13em" }}
            >
              minimalism.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}