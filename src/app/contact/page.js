import React from "react";
import Contact from "../../components/Contact";
import HeaderBar from "../../components/HeaderBar";
import Footer from "../../components/Footer";

const page = () => {
  return (
    <>
      <HeaderBar />
      <Contact />

      {/* Google Map Embed */}
      <section className="w-full h-[400px] my-10 px-4">
        <iframe
          title="Trade In Location"
           src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d54465.9622922311!2d74.29434976209524!3d31.438290408135924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d31.4671104!2d74.3112704!4m5!1s0x3919077738bb031b%3A0xf55d6272254ae7d1!2sGreen%20Cap%20Housing%20Scheme%2C%20Lahore%2C%20Pakistan!3m2!1d31.399473999999998!2d74.3550817!5e0!3m2!1sen!2s!4v1747135124174!5m2!1sen!2s"
          width="100%"
          height="100%"
          className="rounded-xl border-none"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <Footer />
    </>
  );
};

export default page;
