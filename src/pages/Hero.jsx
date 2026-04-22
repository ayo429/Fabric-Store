import React from "react";
import Navbar from "../shared components/Navbar";
import hero from "/hero-fit.jpg";
import Btn from "../shared components/Btn";
import { Link } from "react-router-dom";
import insta from "/instagramlogo.gif";
import tiktok from "/tiktoklogo.gif";
import whatsapp from "/whatsapplogo.gif";

function Hero() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row items-center bg-[url('/hero-bg.jpg')] bg-cover bg-center min-h-screen md:px-10 py-8 gap-8">

        {/* Left content */}
        <div className="flex flex-col gap-6 w-full md:w-1/2 items-center md:items-start text-center md:text-left">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold tracking-wide leading-snug"
            style={{ fontFamily: "sekuya" }}
          >
            Welcome to the home of impeccable fabrics!
          </h1>

          <div className="btn">
            <Link to="/Products">
              <Btn className="btn-hover-effect hover:scale-90 duration-300 border-2" />
            </Link>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 justify-center md:justify-start">
            <Link>
              <img src={insta} alt="Instagram" width={30} height={30} className="rounded-logo" />
            </Link>
            <Link>
              <img src={whatsapp} alt="WhatsApp" width={30} height={30} className="rounded-logo" />
            </Link>
            <Link>
              <img src={tiktok} alt="TikTok" width={30} height={30} className="rounded-logo" />
            </Link>
          </div>
        </div>

        {/* Hero image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={hero}
            alt="Hero"
            className="w-full object-contain rounded-lg h-[50vh] md:h-[70vh] lg:h-[90vh]"
          />
        </div>

      </div>
    </>
  );
}

export default Hero;