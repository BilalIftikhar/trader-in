// components/Header.js
"use client";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiSearch, FiChevronDown } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import Image from "next/image";
export default function Header() {
  return (
    <div className="min-h-screen flex flex-col bg-[#383838]">
      {/* Top info bar */}
      <div className="w-full bg-[#343434] text-gray-200 text-[13px] h-8 flex items-center justify-between px-10">
        <div className="flex gap-6 items-center">
          <span className="flex items-center gap-1">
            <FiPhone className="text-[15px]" /> +92 300 9353298
          </span>
          <span className="flex items-center gap-1">
            <MdLocationOn className="text-[16px]" /> 21 km Green Cap Housing Society Near
            Ibrahim Mosque Gajjumatah Lahore.
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="flex items-center gap-1">
            <FiMail /> sajid@tradeinupvc.com
          </span>
          <FaFacebook className="mx-1 cursor-pointer" />
          <FaInstagram className="mx-1 cursor-pointer" />
        </div>
      </div>
      {/* Navbar */}
      <div className="w-full bg-[#d4d4d4] h-24 flex items-center px-10 shadow-sm justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* Placeholder logo (SVG) */}
          <div className="relative z-10 rounded-md overflow-hidden shadow-lg">
            <Image
              src="/logo.jpeg"
              alt="logo "
              width={70}
              height={70}
              className="object-cover rounded-md bg-white"
              priority
            />
            {/* outlined box */}
          </div>
          <div className="flex flex-col text-[15px] leading-5">
            <span className="font-bold text-sm text-[#212121] tracking-wider">
              TRADE IN
            </span>
            <span className="text-[11px] text-[#313131] -mt-0.5">
              ALUMINIUM • UPVC • GLASS
            </span>
          </div>
        </div>
        {/* Menu */}
        <div className="flex items-center gap-6 font-semibold text-[#353535] relative">
          <a href="/" className="hover:text-black">
            Home
          </a>
          <a href="about" className="hover:text-black">
            About Us
          </a>

          {/* Product Dropdown */}
          <div className="relative group">
            {/* Trigger Button */}
            <div className="flex items-center hover:text-black cursor-pointer">
              Product <FiChevronDown className="ml-1 mt-0.5 text-sm" />
            </div>

            {/* Dropdown */}
            <div
              className="absolute top-full left-0  w-[300px] bg-white shadow-lg rounded-md p-4 
                  opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                  transition-opacity duration-200 z-50"
            >
              {/* Turkish Brands */}
              <div>
                <h4 className="font-bold text-sm text-gray-700 mb-2">
                  Turkish Brands
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    <a href="/wintech" target="_blank" className="hover:underline">
                      Wintech
                    </a>
                  </li>
                  <li>
                    <a href="/adopen" target="_blank" className="hover:underline">
                      Adopen
                    </a>
                  </li>
                  <li>
                    <a href="/asaspen" target="_blank" className="hover:underline">
                      Asaspen
                    </a>
                  </li>
                  <li>
                    <a href="/yaghmurpen" target="_blank" className="hover:underline">
                      Yaghmurpen
                    </a>
                  </li>
                  <li>
                    <a href="/aKpen" target="_blank" className="hover:underline">
                      AKpen
                    </a>
                  </li>
                </ul>
              </div>

              {/* German Brands */}
              <div className="mt-4">
                <h4 className="font-bold text-sm text-gray-700 mb-2">
                  German Brands
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    <a href="/aluplast" target="_blank" className="hover:underline">
                      Aluplast
                    </a>
                  </li>
                  <li>
                    <a href="/veka" target="_blank" className="hover:underline">
                      Veka
                    </a>
                  </li>
                  <li>
                    <a href="/schuco" target="_blank" className="hover:underline">
                      Schuco
                    </a>
                  </li>
                </ul>
              </div>

              {/* Pakistani Brands */}
              <div className="mt-4">
                <h4 className="font-bold text-sm text-gray-700 mb-2">
                  Pakistani Brands
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>
                    <a href="/pamp" target="_blank" className="hover:underline">
                      Pamp
                    </a>
                  </li>
                  <li>
                    <a href="/buraq" target="_blank" className="hover:underline">
                      Buraq
                    </a>
                  </li>
                  <li>
                    <a href="/skypen" target="_blank" className="hover:underline">
                      Skypen
                    </a>
                  </li>
                  <li>
                    <a href="/garmentech" target="_blank" className="hover:underline">
                      Garmentech
                    </a>
                  </li>
                  <li>
                    <a href="/europrofile" target="_blank" className="hover:underline">
                      Europrofile
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <a href="/contact" className="hover:text-black">
            Contact Us
          </a>

        </div>
      </div>
      {/* Hero Section */}
      <section className="flex-1 flex justify-center items-center px-10 py-20 relative overflow-x-clip">
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
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full mx-auto z-10">
          {/* Left content */}
          <div className="flex-1 max-w-xl text-white">
            <div className="mb-2 tracking-widest text-xs text-gray-300 font-bold uppercase">
              Trade In
            </div>
            <h1
              className="font-bold text-5xl md:text-6xl leading-tight mb-4"
              style={{ fontFamily: "Orbitron, Geist, sans-serif" }}
            >
              The Futurist
              <br />
              Windows & Doors
            </h1>
            <div className="w-3/4 h-0.5 bg-gray-400 mb-6"></div>
            <p className="mb-8 text-lg text-gray-200">
              Trade In offers a vast range of windows & doors designs for the
              home and office that are sure to add grace to your space.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-4 bg-[#dadada] text-[#2b2b2b] font-semibold py-3 px-8 rounded-sm hover:bg-gray-300 transition shadow text-base"
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
          <div className="relative min-w-[350px]">
            {/* Accent rectangles and lines */}
            <div className="absolute -top-7 -left-7 w-[340px] h-[340px] bg-[#aaa2a2] opacity-30 rounded-md -z-10" />
            {/* Modern home image */}
            <div className="relative z-10 rounded-md overflow-hidden shadow-lg">
              <Image
                src="/home2.jpg"
                alt="Modern house"
                width={450}
                height={450}
                className="object-cover rounded-md bg-white"
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
              className="absolute bottom-2 left-0 text-white tracking-widest text-lg font-bold select-none"
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
