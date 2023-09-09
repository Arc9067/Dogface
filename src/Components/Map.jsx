import React from "react";
import Phase1 from "../assets/phaase1.png";
import Marquee from "react-fast-marquee";

const Map = () => {
  return (
    <section className="w-full pt-16 bgw" id="roadmap">
      <div className="container grid justify-center items-center grid-cols-1 lg:grid-cols-3 gap-16">
        <img src={Phase1} alt="" className="pointer-events-none mx-auto" />
        <img src={Phase1} alt="" className="pointer-events-none mx-auto" />
        <img src={Phase1} alt="" className="pointer-events-none mx-auto" />
      </div>

      <Marquee className="w-full mt-10 bg-white flex">
        <div className="w-full  pt-8 pb-[30px] gap-8 justify-center items-center grid grid-cols-6 px-3 overflow-hidden font-Header">
          <a href="" className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">Uniswap</div>
          </a>
          <a href="" className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">Dextool</div>
          </a>
          <a href="" className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">Dexscreener</div>
          </a>{" "}
          <a href="" className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">Telegram</div>
          </a>{" "}
          <a href="" className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">Twitter</div>
          </a>{" "}
          <a href="" className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">Etherscan</div>
          </a>
        </div>
        {/* <div className="w-full  pt-8 pb-[30px] gap-8 justify-center items-center grid grid-cols-6 px-3 overflow-hidden">
          <a href="" className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">Etherscan</div>
          </a>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>{" "}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>{" "}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>{" "}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>
        </div>
        <div className="w-full  pt-8 pb-[30px] gap-8 justify-center items-center grid grid-cols-6 px-3 overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>{" "}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>{" "}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>{" "}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>
        </div>
        <div className="w-full  pt-8 pb-[30px] gap-8 justify-center items-center grid grid-cols-6 px-3 overflow-hidden">
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>{" "}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>{" "}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>{" "}
          <div className="flex items-center gap-4">
            <div className="w-6 h-6 relative bg-black rounded-full" />
            <div className="text-black text-3xl font-normal">TOKENOMICS</div>
          </div>
        </div> */}
      </Marquee>
    </section>
  );
};

export default Map;
