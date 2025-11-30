'use client';
import Image from "next/image";
import Link from "next/link";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";


function HeaderBar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [expandedSection, setExpandedSection] = useState(null);
    const [isDesktop, setIsDesktop] = useState(false);
    
    
    // Handle sidebar and overflow behavior
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
    <>
      <div className="flex flex-col">
      <header className="bg-[#d4d4d4] shadow-md relative z-30">
        <div className="flex items-center justify-between px-4 md:px-10 h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative z-10 rounded-md  shadow-lg">
              <Image
                src="/upvc.png"
                alt="Win Craft UPVC logo"
                width={60}
                height={60}
                className="object-cover rounded-md bg-black"
                priority
              />
            </div>
            <div className="flex flex-col text-sm leading-5">
              <span className="font-bold text-[#212121] tracking-wider">
                WIN CRAFT UPVC
              </span>
              <span className="text-[11px] text-[#313131] -mt-0.5">
                DOORS • WINDOWS • GLASS
              </span>
            </div>
          </Link>

          {/* Desktop Menu - Show only on lg screens (1024px and up) */}
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

          {/* Mobile Menu Toggle - Show only below lg screens */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} className="text-black" /> : <FiMenu size={24} />}
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
                  <FiX size={24} className="text-black"/>
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
      </div>
    </>
  );
}

export default HeaderBar;
