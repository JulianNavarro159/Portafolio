import { useState, useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetElement = document.querySelector(e.currentTarget.getAttribute('href'));
      const targetPosition = targetElement.getBoundingClientRect().top;
      const startPosition = window.pageYOffset;
      const distance = targetPosition;
      const duration = 1000;
      let start = null;

      window.requestAnimationFrame(step);

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const scrollY = Math.min(progress / duration, 1) * distance;
        window.scrollTo(0, startPosition + scrollY);
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => anchor.addEventListener('click', handleSmoothScroll));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleSmoothScroll));
    };
  }, []);
};
