'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Diamond, ShieldCheck, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      {/* Navigation */}
      <nav className="h-24 px-10 flex items-center justify-between border-b border-stone-100 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-serif tracking-tighter">OM GEMS</h1>
        <div className="hidden md:flex items-center space-x-10 text-[10px] uppercase tracking-[0.2em] font-medium text-stone-500">
          <Link href="/diamonds" className="hover:text-foreground transition-colors">Diamonds</Link>
          <Link href="/jewellery" className="hover:text-foreground transition-colors">Jewellery</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">Our Legacy</Link>
          <Link href="/login" className="px-5 py-2 bg-foreground text-background hover:bg-stone-800 transition-colors">Member Entry</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden px-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 pointer-events-none"
        >
          {/* Circular Gradient for Depth */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px]" />
        </motion.div>

        <div className="max-w-4xl text-center z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold">ESTABLISHED IN 1988</p>
            <h2 className="text-6xl md:text-8xl font-serif leading-[1.1] tracking-tight">
              Curating the <br /> <span className="italic">Exquisite</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-stone-500 max-w-xl mx-auto text-lg font-light leading-relaxed"
          >
            A premier B2B marketplace for GIA certified diamonds and high-end jewellery. Connecting global traders with verified excellence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/login" className="group flex items-center space-x-3 bg-foreground text-background px-10 py-5 uppercase tracking-widest text-[10px] font-bold hover:bg-stone-800 transition-all">
              <span>Enter Marketplace</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Floating Accents */}
        <div className="absolute bottom-10 left-10 text-[10px] text-stone-300 uppercase tracking-widest vertical-rl">
          Om Gems India / Worldwide
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 px-10 bg-stone-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="space-y-4">
            <Diamond className="w-8 h-8 text-accent stroke-[1px]" />
            <h3 className="text-xl font-serif">Verified Stones</h3>
            <p className="text-stone-500 text-sm leading-relaxed">Every diamond in our marketplace comes with verified GIA or IGI certifications, ensuring absolute transparency.</p>
          </div>
          <div className="space-y-4">
            <ShieldCheck className="w-8 h-8 text-accent stroke-[1px]" />
            <h3 className="text-xl font-serif">Secure Inquiries</h3>
            <p className="text-stone-500 text-sm leading-relaxed">Our proprietary RFQ system allows for seamless B2B negotiation with real-time tracking and merchant responses.</p>
          </div>
          <div className="space-y-4">
            <Globe className="w-8 h-8 text-accent stroke-[1px]" />
            <h3 className="text-xl font-serif">Global Reach</h3>
            <p className="text-stone-500 text-sm leading-relaxed">Connecting merchants from Surat and Mumbai to the world, facilitating large-scale diamond trade with ease.</p>
          </div>
        </div>
      </section>
      
      <footer className="py-20 px-10 border-t border-stone-100 text-center space-y-4">
        <h4 className="text-sm font-serif">OM GEMS</h4>
        <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em]">© 2026 Crafted for Professional Traders</p>
      </footer>
    </div>
  );
}
