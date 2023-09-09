import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap/dist/gsap";
import { useEffect, useLayoutEffect } from "react";

export let heroTL = gsap.timeline({
  paused: true,
  delay: 0.5,
});

export function useAnimation(containerRef) {
  const q = gsap.utils.selector(containerRef);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    heroTL.play();

    gsap.from(q(".about-text"), {
      autoAlpha: 0,
      x: 10,
      stagger: .50,
      scrollTrigger: {
        trigger: "#about-wrapper",
        start: "top center",
      },
    });
    gsap.from(q(".about-image"), {
      autoAlpha: 0,
      rotate: '25deg',
      scrollTrigger: {
        trigger: "#about-wrapper",
        start: "top center",
      },
    });
    gsap.from(q(".footer-text"), {
      autoAlpha: 0,
      x: 10,
      stagger: .50,
      scrollTrigger: {
        trigger: "#footer-wrapper",
        start: "top center",
      },
    });
    gsap.from(q(".footer-image"), {
      autoAlpha: 0,
      rotate: '25deg',
      scrollTrigger: {
        trigger: "#footer-wrapper",
        start: "top center",
      },
    });
  }, []);

  useLayoutEffect(() => {
    gsap.set(q(".hero-text"), {
      autoAlpha: 1,
    });
    gsap.set(q(".hero-image"), {
      autoAlpha: 1,
    });
    gsap.set(q(".about-text"), {
      autoAlpha: 1,
    });
    gsap.set(q(".about-image"), {
      autoAlpha: 1,
    });
    gsap.set(q(".footer-text"), {
      autoAlpha: 1,
    });
    gsap.set(q(".footer-image"), {
      autoAlpha: 1,
    });

    heroTL
      .from(q(".hero-text"), {
        autoAlpha: 0,
        y: 10,
        stagger: 0.1,
      })
      .from(
        q(".hero-image"),
        {
          autoAlpha: 0,
          scale: 0.5,
          stagger: 0.1,
          rotate: "12deg",
        },
        "<"
      );
  }, []);
}
