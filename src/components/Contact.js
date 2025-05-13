import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <>
    <section className="w-full py-16 bg-white text-[#1e1e1e]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="uppercase text-sm tracking-widest text-gray-400 font-semibold mb-2">
          Contact Us
        </p>
        <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Address */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-200 p-4 rounded-md mb-4">
              <FiMapPin size={36} className="text-gray-700" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Our Address</h3>
            <p className="text-gray-600">
            21 km Green Cap <br />
            Housing Society Near Ibrahim Mosque<br />
            Gajjumatah Lahore.
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-200 p-4 rounded-md mb-4">
              <FiPhone size={36} className="text-gray-700" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Our Phone</h3>
            <p className="text-gray-600">Mobile number :</p>
            <p className="font-semibold text-gray-800 mt-1">+92 300 9353298
            </p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-gray-200 p-4 rounded-md mb-4">
              <FiMail size={36} className="text-gray-700" />
            </div>
            <h3 className="font-semibold text-lg mb-1">Our Email</h3>
            <p className="text-gray-600">Email:</p>
            <p className="font-medium text-indigo-700 mt-1">
            sajid@tradeinupvc.com
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
