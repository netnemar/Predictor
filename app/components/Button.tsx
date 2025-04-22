import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
}

export default function Button({ href, variant = 'primary', children }: ButtonProps) {
  return (
    <Link href={href}>
      <motion.div
        className={`
          relative overflow-hidden rounded-lg group cursor-pointer
          ${variant === 'primary' 
            ? 'bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 p-[2px]' 
            : 'bg-gradient-to-r from-gray-800 to-gray-900 p-[1px] border border-gray-700'
          }
        `}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className={`
            relative px-8 py-4 rounded-lg flex items-center justify-center
            ${variant === 'primary'
              ? 'bg-gradient-to-r from-blue-900 to-purple-900 group-hover:bg-opacity-0 transition-all duration-300'
              : 'bg-black group-hover:bg-opacity-0 transition-all duration-300'
            }
          `}
        >
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: variant === 'primary'
                ? 'linear-gradient(45deg, rgba(59,130,246,0.3), rgba(147,51,234,0.3))'
                : 'linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
            }}
          />
          
          <motion.span
            className="relative z-10 inline-flex items-center text-lg font-medium text-white"
            initial={false}
            animate={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.2 }}
          >
            {children}
            <motion.svg
              className="ml-2 w-5 h-5 opacity-70 group-hover:opacity-100"
              viewBox="0 0 20 20"
              fill="currentColor"
              initial={false}
              animate={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </motion.svg>
          </motion.span>

          {/* Animated particles */}
          <motion.div
            className="absolute -right-2 top-1/2 w-12 h-12 opacity-0 group-hover:opacity-100"
            initial={{ scale: 0, y: -20 }}
            whileHover={{ scale: 1, y: -30 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute w-2 h-2 bg-blue-400 rounded-full animate-ping" />
            <div className="absolute w-2 h-2 bg-purple-400 rounded-full animate-ping delay-100" style={{ left: '8px' }} />
            <div className="absolute w-2 h-2 bg-blue-300 rounded-full animate-ping delay-200" style={{ left: '16px' }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
} 