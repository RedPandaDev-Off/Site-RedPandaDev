import React, { useEffect } from 'react';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  useEffect(() => {
    gsap.to('#hexagon', {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to('#circle', {
      scale: 1.08,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.3,
    });
    gsap.to('#square', {
      rotation: 45,
      scale: 1.1,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.6,
    });
    gsap.to('#topLeftSquare', {
      rotation: -15,
      x: -10,
      y: -10,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
    gsap.to('#topRightSquare', {
      rotation: 15,
      scale: 1.05,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 0.8,
    });
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg
          id="topLeftSquare"
          className="absolute top-8 left-8 w-20 h-20 glow-shape"
          viewBox="0 0 100 100"
        >
          <rect
            x={10}
            y={10}
            width={80}
            height={80}
            rx={15}
            stroke="#ff6a00"
            strokeWidth={2}
            fill="none"
          />
        </svg>
        <svg
          id="topRightSquare"
          className="absolute top-20 right-20 w-24 h-24 glow-shape"
          viewBox="0 0 100 100"
        >
          <rect
            x={10}
            y={10}
            width={80}
            height={80}
            rx={20}
            stroke="#ff6a00"
            strokeWidth={2}
            fill="none"
          />
        </svg>
        <svg
          id="square"
          className="absolute bottom-32 left-32 w-32 h-32 glow-shape"
          viewBox="0 0 100 100"
        >
          <rect
            x={20}
            y={20}
            width={60}
            height={60}
            stroke="#ff6a00"
            strokeWidth={2}
            fill="none"
          />
        </svg>
        <svg
          id="hexagon"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 glow-shape-strong"
          viewBox="0 0 200 200"
        >
          <polygon
            points="100,20 170,60 170,140 100,180 30,140 30,60"
            stroke="#ff6a00"
            strokeWidth={3}
            fill="none"
          />
          <polygon
            points="100,50 145,75 145,125 100,150 55,125 55,75"
            stroke="#ff6a00"
            strokeWidth={2}
            fill="none"
            opacity={0.7}
          />
        </svg>
        <svg
          id="circle"
          className="absolute top-1/2 right-1/4 w-48 h-48 glow-shape-medium"
          viewBox="0 0 200 200"
        >
          <circle
            cx={100}
            cy={100}
            r={70}
            stroke="#ff6a00"
            strokeWidth={2}
            fill="none"
          />
          <circle
            cx={100}
            cy={100}
            r={50}
            stroke="#ff6a00"
            strokeWidth={1.5}
            fill="none"
            opacity={0.6}
          />
        </svg>
        <div className="absolute top-1/2 right-32 transform -translate-y-1/2">
          <svg
            className="w-64 h-64 glow-shape-medium"
            viewBox="0 0 300 300"
          >
            <rect
              x={10}
              y={10}
              width={280}
              height={280}
              rx={30}
              stroke="#ff6a00"
              strokeWidth={2}
              fill="none"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl">
            🦊
          </div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/50 rounded-full px-6 py-2 mb-8">
            <span className="text-2xl">🔥</span>
            <span className="text-orange-400 font-semibold">Développeur Web Passionné</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            RedPandaDev
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            Transformez vos idées en réalité numérique avec des sites web performants, esthétiques et adaptés à vos besoins.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-orange-500/50"
            >
              Demander un devis
            </a>
            <a
              href="#"
              className="border-2 border-orange-500 text-orange-400 px-8 py-4 rounded-full font-semibold hover:bg-orange-500/10 transition-all"
            >
              Voir mes services
            </a>
          </div>
        </div>
      </div>
      <style>{`
        .glow-shape {
          filter: drop-shadow(0 0 15px rgba(255, 106, 0, 0.6))
                  drop-shadow(0 0 30px rgba(255, 106, 0, 0.4))
                  drop-shadow(0 0 45px rgba(255, 106, 0, 0.2));
        }
        .glow-shape-medium {
          filter: drop-shadow(0 0 20px rgba(255, 106, 0, 0.8))
                  drop-shadow(0 0 40px rgba(255, 106, 0, 0.6))
                  drop-shadow(0 0 60px rgba(255, 106, 0, 0.3));
        }
        .glow-shape-strong {
          filter: drop-shadow(0 0 30px rgba(255, 106, 0, 1))
                  drop-shadow(0 0 60px rgba(255, 106, 0, 0.8))
                  drop-shadow(0 0 90px rgba(255, 106, 0, 0.5));
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
