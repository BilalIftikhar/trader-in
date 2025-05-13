import React from "react";
import HeaderBar from "../../components/HeaderBar";
import Footer from "../../components/Footer";
import Image from "next/image";

function page() {
  return (
    <>
    <HeaderBar />
    
    {/* Hero Section */}
   
    
    {/* Main Content Section */}
    <section className="w-full py-24 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left: Image with floating elements */}
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-96 md:h-[550px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/witech.jpg"
                alt="Wintech uPVC Windows"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -right-10 bg-gray-800 p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold text-gray-200">60+</p>
              <p className="text-gray-400">Countries Worldwide</p>
            </div>
            
            <div className="absolute -top-10 -left-10 bg-black p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-4xl font-bold text-white">100%</p>
              <p className="text-gray-300">Eco-Friendly</p>
            </div>
          </div>
          
          {/* Right: Text Content */}
          <div className="md:w-1/2 mt-16 md:mt-0">
            <div className="inline-block px-4 py-1 bg-gray-800 text-gray-200 rounded-full text-sm font-medium mb-6">
              TRUSTED IN PAKISTAN
            </div>
            
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Wintech – Setting New Standards in uPVC Systems
            </h2>
            
            <div className="w-24 h-1.5 bg-gray-500 rounded-full mb-8"></div>
            
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Wintech is a globally trusted Turkish brand specializing in the
              production of modern, durable, and energy-efficient uPVC profiles.
              Now available across Pakistan, Wintech sets the benchmark in
              innovation, quality, and environmental sustainability for doors
              and windows.
            </p>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              With a strong global presence and decades of technical expertise,
              Wintech continues to evolve as a leader in the uPVC industry.
              Whether you are building a modern home in Islamabad, renovating a 
              property in Lahore, or managing a commercial project in Karachi, 
              Wintech offers customized solutions that meet both functional and 
              aesthetic demands.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-white">Thermal Insulation</p>
                  <p className="text-gray-400">Perfect for Pakistan's extreme climate conditions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-white">Weather Resistance</p>
                  <p className="text-gray-400">Withstands monsoon rains and summer heat</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-white">Noise Control</p>
                  <p className="text-gray-400">Ideal for urban areas in Pakistani cities</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-white">Low Maintenance</p>
                  <p className="text-gray-400">No rusting during humid seasons</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-white">Modern Aesthetics</p>
                  <p className="text-gray-400">Complements Pakistani architectural styles</p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <button className="mt-6 inline-flex items-center px-8 py-4 bg-gray-800 hover:bg-gray-700 transition-colors rounded-lg text-white font-medium shadow-lg">
              Request a Free Quote
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    
    {/* Testimonial Section */}
    <section className="w-full py-20 bg-black text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold mb-12">Trusted by architects and homeowners across Pakistan</h3>
        
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8">
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
            <div className="flex justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <p className="italic mb-6">"The thermal efficiency of Wintech windows has reduced our cooling costs by 40% during Lahore's summer. A remarkable investment for our property."</p>
            <p className="font-semibold">- Ahmed Khan, Architect</p>
          </div>
          
          <div className="bg-gray-900 rounded-xl p-8 shadow-lg">
            <div className="flex justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <p className="italic mb-6">"Wintech profiles have been our go-to solution for luxury residential projects in Islamabad. Their quality and design versatility are unmatched in the Pakistani market."</p>
            <p className="font-semibold">- Fatima Malik, Developer</p>
          </div>
        </div>
      </div>
    </section>
    
    <Footer />
  </>
  );
}

export default page;
