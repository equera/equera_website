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

  // Register ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Animate elements with data-animate attribute
  const animateElements = document.querySelectorAll<HTMLElement>('[data-animate]');
  
  animateElements.forEach((element, index) => {
    gsap.from(element, {
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power3.out',
      delay: index * 0.1,
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  });

  // Stagger animations for elements with data-stat-index
  const statElements = document.querySelectorAll<HTMLElement>('[data-stat-index]');
  if (statElements.length > 0) {
    gsap.from(statElements, {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.15,
      scrollTrigger: {
        trigger: statElements[0],
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  }

  // Stagger animations for feature cards
  const featureElements = document.querySelectorAll<HTMLElement>('[data-feature-index]');
  if (featureElements.length > 0) {
    gsap.from(featureElements, {
      opacity: 0,
      y: 40,
      scale: 0.95,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: featureElements[0],
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true,
      },
    });
  }
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
