import Image from "next/image";

export default function WindowShowcase() {
  return (
    <section className="w-full flex justify-center bg-[#383838] py-14">
      <div className="w-full max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 flex flex-col items-center md:items-start mb-10 md:mb-0">
            <div className="tracking-widest text-xs text-gray-200 font-bold uppercase mb-2">
              Customize Your
            </div>
            <h2
              className="font-bold text-3xl md:text-4xl text-white mb-5 text-center md:text-left"
              style={{ fontFamily: "Orbitron, Geist, sans-serif" }}
            >
              Home Window
              <br />
              With
              <br />
              Aluminum
              <br />
              Window System
            </h2>
          </div>
          <div className="flex-1 flex md:justify-end justify-center">
            <Image
              src="/white.jpeg"
              alt="Aluminum Window Main"
              width={300}
              height={320}
              className="rounded-md shadow-2xl"
              priority
            />
          </div>
        </div>
        {/* Windows Types */}
        <div className="mt-14 flex flex-wrap justify-center gap-10">
          {/* Casement */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 w-40 h-36 flex items-center justify-center rounded">
              <Image
                src="/casement.jpg"
                alt="Casement Window"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-white text-lg mt-4 text-center">
              Casement
              <br />
              Window
            </span>
          </div>
          {/* Sliding */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 w-40 h-36 flex items-center justify-center rounded">
              <Image
                src="/slid.webp"
                alt="Sliding Window"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-white text-lg mt-4 text-center">
              Sliding
              <br />
              Window
            </span>
          </div>
          {/* Fixed */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 w-40 h-36 flex items-center justify-center rounded">
              <Image
                src="/fixed.jpeg"
                alt="Fixed Window"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-white text-lg mt-4 text-center">
              Fixed
              <br />
              Window
            </span>
          </div>
          {/* Ventilator */}
          <div className="flex flex-col items-center">
            <div className="bg-gray-100 w-40 h-36 flex items-center justify-center rounded">
              <Image
                src="/venti.jpeg"
                alt="Ventilator Window"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-white text-lg mt-4 text-center">
              Ventilator
              <br />
              Window
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
