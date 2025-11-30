import React from "react";
import HeaderBar from "../../components/HeaderBar";
import Footer from "../../components/Footer";

function page() {
  return (
    <>
      <HeaderBar />
      <section className="w-full px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Left: Text Content */}
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Welcome To Win Craft UPVC: Your Destination for Modern Windows and
              Doors
            </h1>
            <div className="w-16 h-1 bg-gray-300 mb-6"></div>
            <p className="text-gray-700 text-base mb-6 leading-relaxed">
              At Win Craft UPVC, we take pride in offering a premium selection
              of modern windows and doors that seamlessly blend style with
              durability. Designed to meet the highest standards of quality and
              performance, our products not only enhance the aesthetic appeal of
              your space but also ensure long-lasting functionality. With a
              strong commitment to excellence and innovation, we&apos;ve built a
              reputation as a trusted provider of stylish and reliable window
              and door solutions.
            </p>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">
              Discover the Latest Designs:
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Our diverse range of window and door designs is tailored to suit
              every style and preference. Whether you prefer sleek, minimalist
              aesthetics or bold, contemporary statements, we offer solutions
              that complement any home. From expansive panoramic windows that
              welcome natural light to secure, stylish door systems, Win Craft
              UPVC delivers the ideal fit for every architectural and interior design
              vision.
            </p>
          </div>

          {/* Right: Image */}
          <div className="md:w-1/2">
            <img
              src="/upvc1.jpeg" // Place your image in public/window-room.jpg
              alt="Modern Window Room"
              className="w-full rounded-2xl shadow-md"
            />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-24">
        {/* Vision */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src="/white.jpeg" // Place your vision image in public/images
            alt="Vision"
            className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl text-black font-bold mb-2">Vision</h2>
            <div className="w-16 h-1 bg-gray-300 mb-4" />
            <p className="text-gray-600 leading-relaxed">
              To research andintroduce uPVC window anddoor solutions in Pakistan
              meeting international performance standards. Improve quality of
              workmanship through training and standardization and create
              general public awareness on uPVC windows and doors enhancing uPVC
              market share.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
          <img
            src="/upvc2.jpg" // Place your mission image in public/images
            alt="Mission"
            className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl text-black font-bold mb-2">Mission</h2>
            <div className="w-16 h-1 bg-gray-300 mb-4" />
            <p className="text-gray-600 leading-relaxed">
              Our mission is to become the leading provider of uPVC window and
              door solutions in Pakistan by delivering exceptional customer
              satisfaction, utilizing the highest quality performance profiles,
              and integrating innovative hardware into every product. We are
              committed to offering comprehensive solutions that go beyond just
              providing products, ensuring durability, energy efficiency, and
              aesthetic appeal through the use of top-tier materials and
              advanced technology, all while focusing on meeting and exceeding
              our customers' expectations.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full px-6 py-12 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
    {/* Left: Text Content */}
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Offerings</h2>
      <div className="w-16 h-1 bg-gray-300 mb-6"></div>
      <p className="text-base text-gray-700 mb-4 leading-relaxed">
        We are committed to delivering top-quality uPVC window and door solutions, backed by over 13 years of industry experience. We use the highest quality German uPVC profiles and imported hardware. From preliminary advice to fabrication and installation, our focus is on personal commitment, workmanship, and ensuring your satisfaction.
      </p>
      <p className="text-base text-gray-700 mb-4 leading-relaxed">
        Our simple 4-step process—Survey & Design, Fabrication & Delivery, Installation & Maintenance, and Post-Sale Service—ensures a smooth experience from start to finish.
      </p>
      <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-2">Our Services Include:</h3>
      <ul className="list-disc pl-5 text-gray-700">
        <li>uPVC Window & Door Solutions</li>
        <li>uPVC Conservatories/Sunrooms</li>
        <li>Architectural Glazing</li>
        <li>Stained Glass & Decorative Glasswork</li>
        <li>Beveled Glass</li>
      </ul>
    </div>

    {/* Right: Image */}
    <div className="md:w-1/2">
      <img
        src="/A1.jpeg" // Replace with your actual image
        alt="uPVC Solutions"
        className="w-full rounded-2xl shadow-md"
      />
    </div>
  </div>
</section>
<section className="w-full px-6 py-12 bg-gray-50">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
    {/* Left: Image */}
    <div className="md:w-1/2">
      <img
        src="/A2.jpeg" // Replace with actual image
        alt="uPVC Benefits"
        className="w-full rounded-2xl shadow-md"
      />
    </div>

    {/* Right: Text Content */}
    <div className="md:w-1/2">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose uPVC?</h2>
      <div className="w-16 h-1 bg-gray-300 mb-6"></div>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li><strong>Safe and Secure:</strong> Multi-point locking hardware for superior safety.</li>
        <li><strong>Energy Efficient:</strong> Excellent thermal insulation reduces heating/cooling costs.</li>
        <li><strong>Noise Reduction:</strong> Keeps your home peaceful even near busy roads.</li>
        <li><strong>Low Maintenance:</strong> No sanding or painting needed—easy to clean.</li>
        <li><strong>Weather Resistant:</strong> Withstands extreme conditions without fading or warping.</li>
      </ul>
    </div>
  </div>
</section>

      <Footer />
    </>
  );
}

export default page;
