import React, { useEffect, useState } from 'react';

const ScrollTopButton = () => {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleScroll = () => {
    const offset = 100;
    const scrollPos = window.scrollY || document.documentElement.scrollTop;

    if (scrollPos > offset) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const progressPath = document.querySelector('.scroll-top path');
    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;

    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      'stroke-dashoffset 10ms linear';

    const updateProgress = () => {
      const scroll =
        window.scrollY || window.scrollTop || document.documentElement.scrollTop;

      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      );

      const windowHeight = Math.max(
        document.documentElement.clientHeight,
        window.innerHeight || 0
      );

      const height = docHeight - windowHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };

    updateProgress();

    window.addEventListener('scroll', () => {
      updateProgress();
      handleScroll();
    });

    return () => {
      window.removeEventListener('scroll', () => {
        updateProgress();
        handleScroll();
      });
    };
  }, []);

  return (
    <button
      className={`btn-toggle-round scroll-top js-scroll-top ${
        isButtonActive ? 'is-active' : ''
      }`}
      type="button"
      title="Scroll to top"
      onClick={scrollToTop}
    >
      <svg className="progress-circle" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-up"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="18" y1="11" x2="12" y2="5" />
        <line x1="6" y1="11" x2="12" y2="5" />
      </svg>
    </button>
  );
};

export default ScrollTopButton;
