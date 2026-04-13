'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const shapes = [
  { name: 'Round', icon: '○' },
  { name: 'Pear', icon: '💧' },
  { name: 'Princess', icon: '□' },
  { name: 'Emerald', icon: '▭' },
  { name: 'Marquise', icon: '⬬' },
  { name: 'Oval', icon: '⬭' },
  { name: 'Radiant', icon: ' rectangle' },
  { name: 'Heart', icon: '♡' },
  { name: 'Cushion', icon: '▢' },
  { name: 'Asscher', icon: '⬚' },
];

interface ShapeGridProps {
  selected: string[];
  onChange: (shapes: string[]) => void;
}

export default function ShapeGrid({ selected, onChange }: ShapeGridProps) {
  const toggleShape = (name: string) => {
    if (selected.includes(name)) {
      onChange(selected.filter(s => s !== name));
    } else {
      onChange([...selected, name]);
    }
  };

  return (
    <div className="space-y-4">
      <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Diamond Shape</label>
      <div className="grid grid-cols-5 gap-2">
        {shapes.map((shape) => {
          const isActive = selected.includes(shape.name);
          return (
            <motion.button
              key={shape.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toggleShape(shape.name)}
              className={cn(
                "flex flex-col items-center justify-center p-3 border transition-all space-y-2 group",
                isActive 
                  ? "bg-accent/5 border-accent text-accent" 
                  : "bg-white border-stone-100 text-stone-400 hover:border-accent/30 hover:text-stone-600"
              )}
            >
              <span className="text-xl group-hover:scale-110 transition-transform">{shape.icon}</span>
              <span className="text-[9px] uppercase tracking-tighter font-medium">{shape.name}</span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
