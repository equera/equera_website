import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const fadeInUp = {
  opacity: 0,
  y: 60,
  duration: 1,
  ease: 'power3.out',
};

export const fadeIn = {
  opacity: 0,
  duration: 1,
  ease: 'power3.out',
};

export const staggerChildren = (delay: number = 0.1) => ({
  stagger: delay,
  ease: 'power3.out',
});

export const animateCounter = (
  element: HTMLElement,
  target: number,
  duration: number = 2,
  prefix: string = '',
  suffix: string = ''
) => {
  const obj = { value: 0 };
  gsap.to(obj, {
    value: target,
    duration,
    ease: 'power2.out',
    onUpdate: () => {
      element.textContent = `${prefix}${Math.round(obj.value)}${suffix}`;
    },
  });
};

export const setupScrollAnimations = () => {
  if (typeof window === 'undefined') return;

  const elements = Array.from(
    document.querySelectorAll<HTMLElement>('[data-animate]')
  );

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px',
    }
  );

  elements.forEach((el) => observer.observe(el));
};

// Parallax effect for images
export const setupParallax = () => {
  if (typeof window === 'undefined') return;

  const parallaxElements = document.querySelectorAll<HTMLElement>('[data-parallax]');
  
  parallaxElements.forEach((element) => {
    gsap.to(element, {
      y: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  });
};

// Smooth reveal for images
export const setupImageReveals = () => {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll<HTMLImageElement>('img[loading="lazy"]');
  
  images.forEach((img) => {
    img.addEventListener('load', () => {
      gsap.from(img, {
        opacity: 0,
        scale: 1.1,
        duration: 0.8,
        ease: 'power2.out',
      });
    });
  });
};
