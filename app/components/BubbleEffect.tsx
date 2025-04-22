import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function BubbleEffect() {
  const [glitchStyle, setGlitchStyle] = useState({
    clipPath: 'inset(0 0 0 0)',
    transform: 'none',
    opacity: 0.7
  });

  useEffect(() => {
    const generateGlitchStyle = () => {
      const clips = [
        'inset(20% 0 30% 0)',
        'inset(50% 15% 10% 5%)',
        'inset(15% 25% 65% 0)',
        'inset(35% 10% 40% 25%)',
        'inset(0 0 0 0)'
      ];
      
      const transforms = [
        'translateX(-15px) skewX(-15deg)',
        'translateX(15px) skewY(5deg) scaleY(1.2)',
        'translateX(10px) skewX(10deg) scaleX(0.9)',
        'translateX(-20px) skewY(-5deg)',
        'none'
      ];

      const randomClip = clips[Math.floor(Math.random() * clips.length)];
      const randomTransform = transforms[Math.floor(Math.random() * transforms.length)];
      const randomOpacity = Math.random() * 0.3 + 0.5; // от 0.5 до 0.8

      setGlitchStyle({
        clipPath: randomClip,
        transform: randomTransform,
        opacity: randomOpacity
      });
    };

    // Создаем случайные интервалы для более неожиданного эффекта
    const scheduleNextGlitch = () => {
      const randomDelay = Math.random() * 2000 + 500; // от 500мс до 2.5с
      setTimeout(() => {
        generateGlitchStyle();
        scheduleNextGlitch();
      }, randomDelay);
    };

    scheduleNextGlitch();
    return () => {};
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Основной градиент под текстом */}
      <motion.div
        className="absolute left-0 top-[35vh] w-[700px] h-[300px]"
        style={{
          background: 'radial-gradient(circle at center, rgba(100, 149, 237, 0.15) 0%, rgba(100, 149, 237, 0.08) 40%, transparent 70%)',
          filter: 'blur(50px)',
          transform: 'translateZ(0)',
          zIndex: 1
        }}
        animate={{
          x: [-30, 30, -30],
          scale: [1, 1.2, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Дополнительное свечение */}
      <motion.div
        className="absolute left-0 top-[38vh] w-[500px] h-[200px]"
        style={{
          background: 'radial-gradient(circle at center, rgba(135, 206, 250, 0.15) 0%, rgba(70, 130, 180, 0.1) 30%, transparent 70%)',
          filter: 'blur(30px)',
          transform: 'translateZ(0)',
          zIndex: 1
        }}
        animate={{
          x: [20, -20, 20],
          scale: [1.1, 0.9, 1.1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glitch image */}
      <div className="absolute right-0 top-0 w-[45vw] h-screen">
        <motion.div
          className="absolute right-[5%] top-[20%] w-[400px] h-[200px] bg-cover bg-center"
          style={{
            backgroundImage: 'url("/glitch.png")',
            opacity: glitchStyle.opacity,
            clipPath: glitchStyle.clipPath,
            transform: glitchStyle.transform,
            transition: 'all 0.05s linear',
            zIndex: 2
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/60" />
        </motion.div>
      </div>
    </div>
  );
} 