import { motion } from 'framer-motion';

export default function Logo() {
  const lines = Array.from({ length: 12 }, (_, i) => ({
    angle: (i * 360) / 12,
    delay: i * 0.1,
  }));

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-10 h-10 relative"
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="w-full h-full"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Center circle */}
        <motion.circle
          cx="50"
          cy="50"
          r="15"
          fill="white"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          filter="url(#glow)"
        />

        {/* Radiating lines */}
        {lines.map(({ angle, delay }, index) => (
          <motion.g key={index} transform={`rotate(${angle}, 50, 50)`}>
            <motion.line
              x1="50"
              y1="35"
              x2="50"
              y2="20"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: delay,
                ease: "easeInOut"
              }}
            />
            <motion.circle
              cx="50"
              cy="18"
              r="2"
              fill="white"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{
                duration: 1.5,
                delay: delay + 0.3,
                repeat: Infinity,
                repeatDelay: 11,
              }}
            />
          </motion.g>
        ))}

        {/* Rotating outer ring */}
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          strokeDasharray="3,3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          fill="none"
          stroke="white"
          strokeWidth="0.5"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.svg>
    </motion.div>
  );
} 