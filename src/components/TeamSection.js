// components/TeamSection.js
"use client";
import Link from "next/link";

export default function TeamSection() {
  return (
    <section className="relative md:mx-30 my-30 py-10 bg-zinc-800 text-white">
      {/* Background overlay with dark opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/team-bg.jpg')",
          opacity: 0.3,
        }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-wider text-amber-300 text-sm sm:text-base mb-2 sm:mb-3">
            WE ARE ONE TEAM
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            We are a Professional Team!
          </h2>

          <div className="text-center">
            <p className="text-sm sm:text-base md:text-md mb-6 leading-relaxed">
              is proud to boast a team of exceptionally talented and dedicated
              individuals who consistently strive to elevate our company to new
              heights of success within the competitive window, door, and glass
              industry. Moreover, our team works tirelessly to ensure that every
              project we undertake is executed with precision and excellence. In
              addition, our dedicated team, with their diverse specializations,
              is committed to providing top-notch service while ensuring
              customer satisfaction at every step. As a result, we guarantee
              both quality and professionalism in everything we do.
            </p>

            <div className="mt-8 sm:mt-10">
              <Link href="/contact">
                <span className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-gray-300 text-gray-800 text-sm sm:text-base font-medium rounded hover:bg-gray-400 transition duration-300 cursor-pointer">
                  Contact us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
