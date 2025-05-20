import React from 'react'
import HeaderBar from '../../components/HeaderBar'
import Footer from '../../components/Footer'

function ProductRange() {
  return (
    <>
      <HeaderBar />
      <section class="bg-white py-16 px-4 md:px-16 space-y-24">

        {/* <!-- Our Product Range --> */}
        <div>
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Our Product Range</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* <!-- Product Card --> */}
            <div class="group bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 hover:bg-white cursor-pointer">
              <img src="/products/casement.jpg" alt="Casement Window" class="w-full h-40 object-cover rounded-xl mb-4 transition duration-300 group-hover:scale-105" />
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Casement</h3>
              <p class="text-sm text-gray-600">Mounted window that opens inward or outward using a crank. Used singly or in pairs within a frame.</p>
            </div>

            <div class="group bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 hover:bg-white cursor-pointer">
              <img src="/products/tilt-turn.jpg" alt="Tilt & Turn Window" class="w-full h-40 object-cover rounded-xl mb-4 transition duration-300 group-hover:scale-105" />
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Tilt & Turn</h3>
              <p class="text-sm text-gray-600">Dual-functioning window that tilts inward for ventilation and swings open like a casement.</p>
            </div>

            <div class="group bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 hover:bg-white cursor-pointer">
              <img src="/products/sliding.jpg" alt="Tilt & Slide Window" class="w-full h-40 object-cover rounded-xl mb-4 transition duration-300 group-hover:scale-105" />
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Tilt & Slide</h3>
              <p class="text-sm text-gray-600">Slides on a guide rail with inward tilt ventilation. A modern alternative to Tilt & Turn systems.</p>
            </div>

            <div class="group bg-gray-50 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300 hover:bg-white cursor-pointer">
              <img src="/products/folding.jpg" alt="Bi-Fold Window" class="w-full h-40 object-cover rounded-xl mb-4 transition duration-300 group-hover:scale-105" />
              <h3 class="text-xl font-semibold text-gray-800 mb-2">Bi-Fold</h3>
              <p class="text-sm text-gray-600">2–4 hinged panels fold together, opening up large spaces elegantly and efficiently.</p>
            </div>
          </div>
        </div>

        {/* <!-- Our UPVC Providers --> */}
        <div>
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">Our UPVC Providers</h2>
          <div class="flex flex-wrap justify-center items-center gap-10">
            <img src="/brands/A8.jpeg" alt="Ado Group" class="h-32 grayscale hover:grayscale-0 transition duration-300" />
            <img src="/brands/A4.jpeg" alt="Aluplast" class="h-32 grayscale hover:grayscale-0 transition duration-300" />
            <img src="/brands/A3.jpeg" alt="Kommerling" class="h-32 grayscale hover:grayscale-0 transition duration-300" />
          </div>
        </div>

        {/* <!-- Our Services --> */}
        <div class="py-16 bg-gray-50">
          <h2 class="text-4xl font-bold text-center text-gray-800 mb-14">Our Services</h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">

            {/* <!-- Service Card --> */}
            <div class="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300 text-center">
              <div class="w-14 h-14 mx-auto mb-5 flex items-center justify-center text-white text-xl font-bold rounded-full bg-blue-600 group-hover:scale-110 transition">
                1
              </div>
              <h4 class="text-lg font-semibold mb-2 text-gray-800">Survey & Design</h4>
              <p class="text-sm text-gray-600">Our executive visits your site to measure and suggest the ideal solution tailored to your needs.</p>
            </div>

            <div class="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300 text-center">
              <div class="w-14 h-14 mx-auto mb-5 flex items-center justify-center text-white text-xl font-bold rounded-full bg-blue-600 group-hover:scale-110 transition">
                2
              </div>
              <h4 class="text-lg font-semibold mb-2 text-gray-800">Fabrication & Delivery</h4>
              <p class="text-sm text-gray-600">High-tech machinery and premium materials ensure top-quality products delivered on time.</p>
            </div>

            <div class="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300 text-center">
              <div class="w-14 h-14 mx-auto mb-5 flex items-center justify-center text-white text-xl font-bold rounded-full bg-blue-600 group-hover:scale-110 transition">
                3
              </div>
              <h4 class="text-lg font-semibold mb-2 text-gray-800">Installation & Maintenance</h4>
              <p class="text-sm text-gray-600">Professional installation with one-year free maintenance to ensure seamless operation.</p>
            </div>

            <div class="group bg-white p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition duration-300 text-center">
              <div class="w-14 h-14 mx-auto mb-5 flex items-center justify-center text-white text-xl font-bold rounded-full bg-blue-600 group-hover:scale-110 transition">
                4
              </div>
              <h4 class="text-lg font-semibold mb-2 text-gray-800">Post-sale Service</h4>
              <p class="text-sm text-gray-600">Raise a request anytime and our service team will promptly assist at your doorstep.</p>
            </div>

          </div>
        </div>

        {/* <!-- CTA --> */}
        <div class="text-center pt-12">
          <a href="/contact" class="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-md shadow hover:bg-blue-700 transition">Lets Talk!</a>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default ProductRange