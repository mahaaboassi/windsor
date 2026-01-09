import { useEffect, useState } from "react";
import video from "../assets/videos/video.mp4"

const Hero = () => {
  const [hideOnScroll, setHideOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hide SVG if user scrolls down more than 50px
      setHideOnScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="hero container-layout flex flex-col gap-5 overflow-hidden relative">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full mt-20 object-cover z-0">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={`absolute left-1/2 -translate-x-1/2 bottom-5 z-10 transition-all duration-700 ease-in-out
          ${hideOnScroll ? "opacity-0 translate-y-10" : "opacity-100 animate-bounce"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 50 50" fill="none">
          <rect x="1" y="1" width="48" height="48" rx="24" stroke="#A6CE38" stroke-width="2"/>
          <g clip-path="url(#clip0_2254_1341)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1498 18.8415C7.72252 16.3737 5.57454 19.8836 8.03431 22.3148L21.7654 36.3225C24.0535 38.5592 24.9464 38.5592 27.2345 36.3225L40.9656 22.3148C43.4254 19.8836 41.2774 16.3737 36.8502 18.8415L24.5 25.3472L12.1498 18.8415Z" fill="#A6CE38"/>
          </g>
          <defs>
          <clipPath id="clip0_2254_1341">
          <rect width="35" height="20" fill="white" transform="translate(7 18)"/>
          </clipPath>
          </defs>
          </svg>
      </div>
      
    </section>
  );
};

export default Hero;
