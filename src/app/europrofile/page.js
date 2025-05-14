import React from "react";
import HeaderBar from "../../components/HeaderBar";
import Footer from "../../components/Footer";
import Image from "next/image";

function page() {
  return (
    <>
      <HeaderBar />

      {/* Main Content Section */}
      <section className="w-full py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            {/* Left: Image */}
            <div className="md:w-1/2 relative">
              {/* Mobile Image */}
              <div className="block md:hidden w-full h-96 rounded-2xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/white.jpeg"
                  alt="Europrofile uPVC Windows and Doors"
                  width={600}
                  height={384}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Desktop Image */}
              <div className="hidden md:block relative w-full h-[550px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/white.jpeg"
                  alt="Europrofile uPVC Windows and Doors"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Stats - Desktop Only */}
              <div className="absolute -bottom-10 -right-10 bg-gray-800 p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold text-gray-200">
                  German Standards
                </p>
                <p className="text-gray-400">Locally Manufactured</p>
              </div>

              <div className="absolute -top-10 -left-10 bg-black p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-4xl font-bold text-white">
                  Durability First
                </p>
                <p className="text-gray-300">Decades of Reliable Use</p>
              </div>
            </div>

            {/* Right: Text Content */}
            <div className="md:w-1/2 mt-16 md:mt-0">
              <div className="inline-block px-4 py-1 bg-gray-800 text-gray-200 rounded-full text-sm font-medium mb-6">
                MADE IN PAKISTAN
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Europrofile – German Engineering, Pakistani Production
              </h2>

              <div className="w-24 h-1.5 bg-gray-500 rounded-full mb-8"></div>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Europrofile brings German uPVC window and door technology to the
                Pakistani market — offering superior weather sealing, acoustic
                performance, and energy efficiency, all from local manufacturing
                plants.
              </p>

              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Their uPVC systems suit both residential and commercial spaces,
                featuring advanced locking options, custom finishes, and high
                thermal resistance.
              </p>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Whether you're modernizing your home or working on a large-scale
                build, Europrofile offers robust uPVC profiles that meet
                international expectations.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    title: "German Standards",
                    desc: "Designed to meet Euro-class quality benchmarks",
                  },
                  {
                    title: "Sound Insulation",
                    desc: "Keep external noise out",
                  },
                  {
                    title: "Thermal Efficiency",
                    desc: "Maintain indoor temperatures year-round",
                  },
                  {
                    title: "Multiple Designs",
                    desc: "Casement, sliding & tilt-turn available",
                  },
                  {
                    title: "Pakistani Manufacturing",
                    desc: "Reliable local production & service",
                  },
                ].map((feature, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-gray-300"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {feature.title}
                      </p>
                      <p className="text-gray-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className="mt-6 inline-flex items-center px-8 py-4 bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg text-white font-medium shadow-lg">
                Explore Europrofile Options
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-20 bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Trusted by Professionals</h3>

          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
              <div className="flex justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <p className="italic mb-6">
                "We specify Europrofile in mid-to-high-end residential projects.
                They never disappoint."
              </p>
              <p className="font-semibold">- Arif & Co., Islamabad</p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
              <div className="flex justify-center mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <p className="italic mb-6">
                "Solid product, professional team, and consistent supply —
                Europrofile is our go-to."
              </p>
              <p className="font-semibold">- Zahra Construction, Karachi</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default page;
