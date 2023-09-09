import React from "react";
import logo from "../assets/logo.png";
import Marquee from "react-fast-marquee";
import baby from "../assets/baby.svg";
const Hero = () => {
  return (
    <section
      className="pt-20 w-full min-h-screen bg-gradient-to-b from-[#793C99] to-black"
      id="hero"
    >
      <div className="container flex flex-col justify-center items-center gap-6">
        <h1 className="text-white text-center flex items-center gap-4 hero-text text-6xl font-Header  font-normal ">
          MEET DOGFACE
        </h1>
        <p className="max-w-[493px] text-center hero-text text-white text-xl font-normal leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, saepe.
        </p>
        <a
          href="https://t.me/"
          className="w-[199px] hero-text h-[57px] pb-[3px] bg-white rounded-full justify-center items-center inline-flex"
        >
          <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-[#793C99] rounded-full shadow justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-base font-bold leading-snug tracking-tight ">
              JOIN US
            </div>
          </div>
        </a>
        <img
          src={logo}
          className="animate-bounce hero-image mt-16 max-w-[250px]"
          alt="hero"
        />
      </div>
      <Marquee className="w-full mt-10 bg-[#793C99] flex">
        <div className="w-full  pt-8 pb-[30px] gap-4 justify-center items-center grid grid-cols-6 px-3 overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-white rounded-full" />
            <div className="text-white text-3xl font-normal font-Header">
              Launch on Uniswap
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-white rounded-full" />
            <div className="text-white text-3xl font-normal font-Header">
              CG/CMC Listings
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-white rounded-full" />
            <div className="text-white text-3xl font-normal font-Header">
              1,000+ Holders
            </div>
          </div>{" "}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-white rounded-full" />
            <div className="text-white text-3xl font-normal font-Header">
              Dextool trending
            </div>
          </div>{" "}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-white rounded-full" />
            <div className="text-white text-3xl font-normal font-Header">
              Twitter/Telegram marketing
            </div>
          </div>{" "}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-white rounded-full" />
            <div className="text-white text-3xl font-normal font-Header">
              Community Partnerships
            </div>
          </div>
        </div>
        <div className="w-full  pt-8 pb-[30px] gap-4 justify-center items-center grid grid-cols-6 px-3 overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-white rounded-full" />
            <div className="text-white text-3xl font-normal font-Header">
              10,000+ Holders
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-white rounded-full" />
            <div className="text-white text-3xl font-normal font-Header">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Deserunt, aspernatur.
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-white rounded-full" />
            <div className="text-white text-3xl font-normal font-Header">
              High Tier CEX Listings
            </div>
          </div>{" "}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-white rounded-full" />
            <div className="text-white text-3xl font-normal font-Header">
              Viral Worldwide
            </div>
          </div>{" "}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-white rounded-full" />
            <div className="text-white text-3xl font-normal font-Header">
              Multiple T1 CEX Listings
            </div>
          </div>{" "}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-white rounded-full" />
            <div className="text-white text-3xl font-normal font-Header">
              100,000+ Holders
            </div>
          </div>
        </div>
        <div className="w-full  pt-8 pb-[30px] gap-8 justify-center items-center grid grid-cols-6 px-3 overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-white rounded-full" />
            <div className="text-white text-3xl font-normal font-Header">
              More To Be Announced
            </div>
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default Hero;
