'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Diamond } from 'lucide-react';
import Link from 'next/link';

interface Stone {
  id: number;
  shape: string;
  carat: string;
  color: string;
  clarity: string;
  cut: string;
  lab: string;
  price: string;
  certificate_no: string;
}

export default function StoneCard({ stone }: { stone: Stone }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="bg-white border border-stone-100 p-6 flex flex-col space-y-6 group hover:shadow-xl hover:shadow-stone-200/50 transition-all cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{stone.lab} Verified</span>
          <h3 className="text-lg font-serif mt-1">{stone.carat}ct {stone.shape}</h3>
        </div>
        <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-300">
          <Diamond className="w-4 h-4" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 border-t border-b border-stone-50 py-4">
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-tighter text-stone-400 font-bold">Color / Clarity</span>
          <span className="text-xs font-semibold">{stone.color} / {stone.clarity}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-tighter text-stone-400 font-bold">Cut Grade</span>
          <span className="text-xs font-semibold">{stone.cut}</span>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="flex flex-col">
          <span className="text-[9px] uppercase tracking-tighter text-stone-400 font-bold">B2B Price</span>
          <span className="text-base font-bold text-foreground overflow-hidden">
            ${parseFloat(stone.price).toLocaleString()}
          </span>
        </div>
        <button className="p-2 text-stone-400 hover:text-accent transition-colors">
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      <div className="pt-4 flex items-center space-x-2">
        <div className="h-1 flex-1 bg-stone-100 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            className="h-full bg-accent/20"
          />
        </div>
        <span className="text-[8px] uppercase tracking-widest font-bold text-accent">Reserve Now</span>
      </div>
    </motion.div>
  );
}
