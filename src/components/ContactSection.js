import Image from "next/image";
import { FiMail, FiPhone } from "react-icons/fi";

export default function ContactSection() {
  return (
    <section className="w-full flex flex-col items-center py-16 bg-[#fafafa]">
      <div className="mb-2 tracking-widest text-xs text-gray-400 font-bold uppercase text-center">
        GET QUOTE
      </div>
      <h2
        className="font-bold text-4xl md:text-5xl text-gray-800 mb-10 text-center"
        style={{ fontFamily: 'Orbitron, Geist, sans-serif' }}
      >
        Do You Have Any Questions?<br />
        We&apos;ll Be Happy To Assist!
      </h2>

      {/* Centered container */}
      <div className="flex justify-center w-full">
        <div className="relative w-full max-w-2xl min-h-[300px] rounded-2xl overflow-hidden">
          <Image
            src="/main.jpg"
            alt="Contact Background"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute bottom-6 left-6 bg-white/90 rounded-md shadow px-7 py-5 w-[88%] max-w-[350px] border border-gray-100">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl text-gray-700"><FiMail /></span>
              <div>
                <div className="font-semibold text-sm text-gray-900">Email</div>
                <div className="font-bold text-sm text-black">sajid@tradeinupvc.com</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl text-gray-700"><FiPhone /></span>
              <div>
                <div className="font-semibold text-sm text-gray-900">Call Us</div>
                <div className="font-bold text-md text-black">+92 300 9353298</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
