import React, { useRef } from "react";
import { ImCopy } from "react-icons/im";
import Marquee from "react-fast-marquee";
import x from "../assets/x.svg";
import logo from "../assets/logo.png";

const BabyX = () => {
  const copy = useRef(null);
  return (
    <section className="w-full pt-16 bg-black" id="BabyX">
      <div
        id="about-wrapper"
        className="container grid gap-16 grid-cols-1 lg:grid-cols-2 justify-between items-center"
      >
        <article className="flex flex-col gap-5">
          <h1 className="text-white about-text flex items-center gap-6 text-5xl font-Header">
            MEET DOGFACE
          </h1>

          <p className=" text-white about-text text-2xl font-Header leading-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique,
            sequi! Eum qui quos earum dicta.
          </p>
          <div
            onClick={async () => {
              let previous = copy.current.innerHTML;
              let copying = await navigator.clipboard.writeText("0x0000");
              copy.current.innerHTML = "Ca Copied";
              setTimeout(() => {
                copy.current.innerHTML = `COPY CA `;
              }, 3000);
            }}
            className="w-[215px] cursor-pointer h-[54px] px-8 py-4 bg-white rounded shadow border border-amber-300 justify-center items-center gap-2.5 inline-flex"
          >
            <div
              ref={copy}
              className="text-black flex justify-center items-center gap-3 text-base font-bold leading-snug tracking-tight"
            >
              COPY CA <ImCopy />
            </div>
          </div>
        </article>
        <img src={logo} alt="" className="mx-auto about-image animate-spin" />
      </div>
    </section>
  );
};

export default BabyX;
