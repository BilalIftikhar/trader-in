import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiSearch, FiChevronDown } from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import Image from "next/image";

function HeaderBar() {
  return (
    <>
      <div className="flex flex-col ">
        {/* Top info bar */}
        <div className="w-full bg-[#343434] text-gray-200 text-[13px] h-8 flex items-center justify-between px-10">
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1">
              <FiPhone className="text-[15px]" /> +92 300 9353298
            </span>
            <span className="flex items-center gap-1">
              <MdLocationOn className="text-[16px]" /> 21 km Green Cap Housing
              Society Near Ibrahim Mosque Gajjumatah Lahore.
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
            <a href="/about" className="hover:text-black">
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
      </div>
    </>
  );
}

export default HeaderBar;
