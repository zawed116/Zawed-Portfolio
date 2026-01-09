import Lenis from "lenis";

export const initLenis = () => {
  const lenis = new Lenis({
    smoothWheel: true,
    lerp: 0.08,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
};
