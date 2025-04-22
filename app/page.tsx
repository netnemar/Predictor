'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Features from './components/Features';
import Logo from './components/Logo';
import Stats from './components/Stats';
import Button from './components/Button';
import GridBackground from './components/GridBackground';
import BubbleEffect from './components/BubbleEffect';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <GridBackground />
      
      <nav className="fixed w-full p-6 flex justify-between items-center z-50 bg-black/50 backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <span className="text-2xl font-serif">Predictor</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="https://x.com/predictoorxyz" className="hover:text-gray-300 transition-colors" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </Link>
          <Link href="https://github.com" className="hover:text-gray-300 transition-colors">GITHUB</Link>
          <Link href="/docs" className="hover:text-gray-300 transition-colors">DOCS</Link>
          <Button href="/get-started">GET STARTED →</Button>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center">
        <BubbleEffect />
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl relative z-10"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/20 backdrop-blur-sm"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                AI-Powered Market Analysis
              </span>
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-tight mb-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
              >
                Predict Markets
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
              >
                With Precision
              </motion.span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl backdrop-blur-sm"
            >
              Advanced AI-driven market analysis engine—predicting trends and detecting opportunities with multi-model precision. 
              Leverage cutting-edge analytics to forecast market movements, analyze patterns, and stay ahead of the curve.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/get-started">GET STARTED</Button>
              <Button href="/terminal" variant="secondary">OPEN TERMINAL</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Stats />
      <Features />

      <section className="relative py-24 overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ready to Start Predicting?
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands of traders using AI-powered market predictions to stay ahead of the game.
            </p>
            <Button href="/get-started">Start Free Trial →</Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 