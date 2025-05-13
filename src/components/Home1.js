"use client";
import Image from "next/image";

export default function Home1() {
  return (
    <div className="container mx-auto px-4 py-10 md:py-16 bg-white text-black">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <div className="relative">
            <div className="absolute left-0 right-0 top-40 ">
              <Image
                src="/main.jpg"
                alt="logo "
                width={600}
                height={600}
                className="object-cover rounded-md bg-white"
                priority
              />
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-4xl font-bold text-black mb-4">Trade In</h1>

          <p className="mb-4">
            Welcome to Trade In, WC is becoming a source for innovative, state
            of the art and high-end solution for the building industry in
            Pakistan. Windows are expected to meet high technical performance.
            We are the fabricators ofuPVCwindows and doors meeting international
            quality standards, and use specially designed profiles for local
            climate that are duly tested and certified. Our past 13+ years
            presence in industry has empowered us to gain crucial experience and
            knowledge of the diversity in Pakistani climatic conditions. The
            primegoal of WC is to innovate and create quality solutions that
            enhances the new-era architecture,WC offers wide range of
            custom-made uPVC windows and doors. Our trained team ensures an
            excellent finish and timely execution of projects. WC believes in
            long term relationship with itsclients and strives to offer quality
            solutions that satisfies the aesthetic and performance needs.
          </p>

          <h2 className="text-3xl font-bold text-black mb-4">
            Upgrade Your Space with Trade In Products in Pakistan
          </h2>

          <p className="mb-4">
            When it comes to choosing windows & doors for your home or office in
            Pakistan, Trade In products should be at the top of your
            list. Not only do we offer a wide range of options, including UPVC
            windows and aluminium windows, but Trade In products also
            provide durability,{" "}
            <span className="font-bold">energy efficiency</span>, and aesthetic
            appeal. In addition, we have an extensive range of high-quality
            windows & doors, ensuring that you'll discover the optimal match for
            your space. UPVC windows in Pakistan are especially known for their
            excellent insulation properties, helping to keep your space cool in
            the hot summer months while staying warm during chilly winters.
            Therefore, we encourage you to get in contact with us at your
            earliest convenience to gain further insights into our products and
            services.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-gray-100 rounded-lg p-4 flex items-center">
              <div className="bg-gray-300 rounded-full p-1 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <span>Aluminium Window</span>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 flex items-center">
              <div className="bg-gray-300 rounded-full p-1 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <span>UPVC Window</span>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 flex items-center">
              <div className="bg-gray-300 rounded-full p-1 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <span>Feature Wall Looking Glass</span>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 flex items-center">
              <div className="bg-gray-300 rounded-full p-1 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <span>Shower Cabin</span>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 flex items-center">
              <div className="bg-gray-300 rounded-full p-1 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <span>Curtain Wall & Spider Fitting</span>
            </div>

            <div className="bg-gray-100 rounded-lg p-4 flex items-center">
              <div className="bg-gray-300 rounded-full p-1 mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
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
              <span>Stair Glass & Front Terrace</span>
            </div>
          </div>
        </div>
      </div>

   

     
    </div>
  );
}
