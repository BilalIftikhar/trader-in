// pages/index.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home1 from "../components/Home1";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import WindowShowcase from "../components/WindowShowcase";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Trade In - Aluminum, UPVC & Glass</title>
        <meta
          name="description"
          content="Trade In offers a vast range of windows & doors designs for the home and office that are sure to add grace to your space."
        />
      </Head>
      <Header />
      <Home1 />
      <TeamSection />

      <section className="w-full flex flex-col items-center py-12 bg-white">
        <div className="mb-2 tracking-widest text-xs text-gray-400 font-bold uppercase text-center">
          What we do?
        </div>
        <h2
          className="font-bold text-4xl md:text-5xl text-gray-800 mb-8 text-center"
          style={{ fontFamily: "Orbitron, Geist, sans-serif" }}
        >
          Our Project
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full px-4 md:px-0">
          {[
            "/h1.jpeg",
            "/home1.jpg",
            "/home2.jpg",
            "/A1.jpeg",
            "/A4.jpeg",
            "/main.jpg",
          ].map((src, idx) => (
            <div
              key={src}
              className="overflow-hidden rounded-xl shadow border bg-gray-100"
            >
              <Image
                src={src}
                alt={`Project ${idx + 1}`}
                width={500}
                height={350}
                className="w-full h-[230px] object-cover transition-transform duration-300 hover:scale-105"
                priority={idx < 3}
              />
            </div>
          ))}
        </div>
        
      </section>
      <WindowShowcase />
      <ContactSection />
      <Footer />
    </div>
  );
}
