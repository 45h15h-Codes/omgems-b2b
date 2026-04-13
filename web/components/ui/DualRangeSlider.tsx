'use client';

import * as Slider from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';

interface DualRangeSliderProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: [number, number];
  onValueChange: (value: [number, number]) => void;
  formatValue?: (value: number) => string;
}

export default function DualRangeSlider({
  label,
  min,
  max,
  step,
  value,
  onValueChange,
  formatValue = (v) => v.toString(),
}: DualRangeSliderProps) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">{label}</label>
        <span className="text-[10px] font-medium text-stone-400">
          {formatValue(value[0])} — {formatValue(value[1])}
        </span>
      </div>

      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={value}
        max={max}
        min={min}
        step={step}
        onValueChange={onValueChange as any}
      >
        <Slider.Track className="bg-stone-100 relative grow rounded-full h-[2px]">
          <Slider.Range className="absolute bg-accent rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-4 h-4 bg-white border-2 border-accent rounded-full hover:scale-110 focus:outline-none transition-transform cursor-pointer shadow-sm"
          aria-label="Lower bound"
        />
        <Slider.Thumb
          className="block w-4 h-4 bg-white border-2 border-accent rounded-full hover:scale-110 focus:outline-none transition-transform cursor-pointer shadow-sm"
          aria-label="Upper bound"
        />
      </Slider.Root>
    </div>
  );
}
