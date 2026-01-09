declare module '@studio-freight/lenis' {
  export interface LenisOptions {
    smooth?: boolean;
    lerp?: number;
    direction?: 'vertical' | 'horizontal' | 'both';
    wrapper?: HTMLElement | string | null;
    content?: HTMLElement | string | null;
    smoothWheel?: boolean;
    smoothTouch?: boolean;
    wheelMultiplier?: number;
    touchMultiplier?: number;
    duration?: number | ((distance: number) => number);
    easing?: (t: number) => number;
    infinite?: boolean;
    [k: string]: any;
  }

  export default class Lenis {
    constructor(options?: LenisOptions);
    raf(time: number): void;
    update(): void;
    on(event: string, cb: (...args: any[]) => void): void;
    off(event: string, cb?: (...args: any[]) => void): void;
    start(): void;
    stop(): void;
    scrollTo(target: number | string | HTMLElement, options?: { offset?: number; immediate?: boolean; duration?: number; easing?: (t:number)=>number }): void;
    destroy(): void;
  }
}
