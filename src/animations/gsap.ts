import gsap from "gsap";

export const textReveal = (el: HTMLElement) => {
  gsap.fromTo(
    el,
    { y: 120, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
  );
};
