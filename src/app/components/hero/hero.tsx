import styles from './hero.module.css';
import React, { useState, useEffect } from 'react';

interface ContactProps {
  onContactClick: () => void;
  showContactForm: boolean;
}

const Hero: React.FC<ContactProps> = ({ onContactClick, showContactForm }) => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 350;
      const opacity = 1 - Math.min(scrollPosition / maxScroll, 1);
      setScrollOpacity(opacity);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`z-0 sticky top-0`} style={{ opacity: scrollOpacity }}>
      <h1 className="mb-1 w-full text-left font-mono text-white/30 lg:text-right 2xl:text-lg pt-6 z-0">
        PRESENTED BY <span className="text-white underline">FRANCIS JONES</span>
      </h1>

    <div className='w-full mt-10'>
    <style jsx global>
    {`
      @font-face {
        font-family: 'Trap';
        src: url('../app/assets/fonts/Trap_V1.1/Trap-Black.otf') format('opentype');
        font-weight: normal;
      }
    `}
  </style>
  <svg viewBox="0 0 500 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" className="w-full h-auto">
    <rect width="100%" height="100%" fill="#121417" />
    <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="white"  font-size="85">
      FULLSTACK
    </text>
  </svg>
</div>




      <div className="mt-14 flex flex-col lg:flex-row pr-6">
        <div className="flex flex-col lg:justify-between mb-6">

          <div
            className={`font-mono ${
              showContactForm ? 'text-white/30' : 'text-white'
            } cursor-pointer transition duration-300 ease-in-out`}
            onClick={onContactClick}
          >
            PORTFOLIO {!showContactForm && <span className="ml-1">▼</span>}
          </div>

          <div
            className={`font-mono ${
              showContactForm ? 'text-white' : 'text-white/30'
            } cursor-pointer transition duration-300 ease-in-out`}
            onClick={onContactClick}
          >
            CONTACT {showContactForm && <span className="ml-1">▼</span>}
          </div>
          {/* DOWNLOAD CV Link */}
          <div className="font-mono text-white/30 cursor-pointer transition duration-300 ease-in-out">
            <a
              href="https://drive.google.com/drive/folders/1pFhS2y59YHkBtUkeUvBTtNZfbewKzcao?usp=sharing" 
              download="FrancisJonesCV.pdf" 
              className="font-mono text-white/30 cursor-pointer transition duration-300 ease-in-out"
            >
              DOWNLOAD CV
          </a>

          </div>
        </div>
        <div className="max-w-xl leading-8 space-y-2 tracking-wider ml-auto font-mono md:flex-col md:text-left">
          Stockholm based. Pivoting from a career in healthcare and entrepreneurship
          to pursue a career in tech and problem-solving. Humble, curious and quick to
          learn. <br /> Looking for opportunities for an internship autumn 2024.
        </div>
      </div>
    </header>
  );
};

export default Hero;
