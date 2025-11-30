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
          <h1 className="text-4xl font-bold text-black mb-4">
            Win Craft UPVC
          </h1>

          <p className="mb-4">
            Welcome to Win Craft UPVC, the Lahore-based team that delivers
            precision-engineered windows and doors for high-end residential and
            commercial projects. Led by CEO Sajid Ali, we fabricate with
            certified German hardware, tailor every system for Pakistan&apos;s
            diverse climate, and obsess over clean sight lines that elevate
            modern architecture.
          </p>

          <h2 className="text-3xl font-bold text-black mb-4">
            Upgrade Your Space with Win Craft UPVC Products
          </h2>

          <p className="mb-4">
            Whether you&apos;re planning a luxury home or a retail facade, Win
            Craft UPVC provides durable,{" "}
            <span className="font-bold">energy-efficient</span> profiles,
            precision glazing, and bespoke aluminum solutions. Our insulated
            systems keep interiors comfortable through Lahore&apos;s intense
            summers and crisp winters, while our project team guides you from
            survey to installation for a flawless finish.
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
