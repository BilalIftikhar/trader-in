import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2c2c2c] text-white">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/logo.jpeg"
            alt="Trade In Logo"
            width={120}
            height={70}
            className="mb-4"
            priority
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            Trade In offers a wide range of windows & doors designs for both
            home and office — adding elegance and efficiency to your space.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <FiMapPin className="mt-1 text-lg" />
              <span>
                21 km Green Cap <br />
                Housing Society Near Ibrahim Mosque
                <br />
                Gajjumatah Lahore.
              </span>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="tel:+923009353298"
                className="flex items-center gap-2 text-inherit hover:underline"
              >
                <FiPhone /> +92 347 7163038
              </a>
            </li>

            <li className="flex items-center gap-2">
              <FiMail /> sajid@tradeinupvc.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl text-gray-300">
            <a href="#" className="hover:text-white">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
      <div className="fixed bottom-6 right-4 z-50">
        <a
          href="https://wa.me/923009353298"
          target="_blank"
          rel="noopener noreferrer"
          title="Chat on WhatsApp"
        >
          <button className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8" // Increased size here
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </button>
        </a>
      </div>
    </footer>
  );
}
