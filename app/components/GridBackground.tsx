import { motion } from 'framer-motion';

export default function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black opacity-90" />
      <div className="absolute inset-0" style={{ 
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Animated lines */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute h-[1px] w-full top-1/4 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform -skew-y-12"
      />
      <motion.div
        initial={{ x: '200%' }}
        animate={{ x: '-100%' }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute h-[1px] w-full top-2/4 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent transform skew-y-12"
      />
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '200%' }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute h-[1px] w-full top-3/4 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent transform -skew-y-12"
      />

      {/* Glowing orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
        className="absolute top-2/3 right-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
      />
    </div>
  );
} 