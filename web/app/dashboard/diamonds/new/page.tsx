'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Diamond, Info, AlertCircle } from 'lucide-react';
import Link from 'next/link';
import api from '@/lib/api';

const shapes = ['Round', 'Pear', 'Princess', 'Emerald', 'Marquise', 'Oval', 'Radiant', 'Heart', 'Cushion', 'Asscher'];
const colors = ['D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'];
const clarities = ['FL', 'IF', 'VVS1', 'VVS2', 'VS1', 'VS2', 'SI1', 'SI2', 'I1'];
const cuts = ['Excellent', 'Very Good', 'Good', 'Ideal'];

export default function NewDiamondPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    shape: 'Round',
    carat: '',
    color: 'D',
    clarity: 'IF',
    cut: 'Excellent',
    polish: 'Excellent',
    symmetry: 'Excellent',
    fluorescence: 'None',
    lab: 'GIA',
    table_percent: '',
    depth_percent: '',
    certificate_no: '',
    price: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      await api.post('/diamonds', formData);
      router.push('/dashboard/diamonds');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Failed to list diamond. Please check your data.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      <div className="flex items-center justify-between">
        <Link 
          href="/dashboard/diamonds"
          className="flex items-center space-x-2 text-stone-400 hover:text-foreground transition-colors text-[10px] uppercase tracking-widest font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Inventory</span>
        </Link>
      </div>

      <div className="flex flex-col space-y-2">
        <h1 className="text-4xl font-serif">List New Diamond</h1>
        <p className="text-stone-400 text-sm">Enter professional technical specifications for the marketplace.</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-12">
          {error && (
            <div className="bg-red-50 border border-red-100 p-4 flex items-start space-x-3">
              <AlertCircle className="w-4 h-4 text-red-500 mt-0.5" />
              <p className="text-sm text-red-600 font-medium">{error}</p>
            </div>
          )}

          {/* Section 1: Core 4Cs */}
          <section className="space-y-6">
            <div className="flex items-center space-x-2 border-b border-stone-100 pb-2">
              <Diamond className="w-4 h-4 text-accent" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Core 4Cs & Shape</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Shape</label>
                <select 
                  name="shape" 
                  value={formData.shape} 
                  onChange={handleChange}
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none text-sm"
                >
                  {shapes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Carat Weight</label>
                <input 
                  type="number" 
                  name="carat"
                  step="0.001" 
                  value={formData.carat}
                  onChange={handleChange}
                  placeholder="1.02" 
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-sm" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Color</label>
                <select 
                  name="color"
                  value={formData.color}
                  onChange={handleChange}
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none text-sm"
                >
                  {colors.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Clarity</label>
                <select 
                  name="clarity"
                  value={formData.clarity}
                  onChange={handleChange}
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors appearance-none text-sm"
                >
                  {clarities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>
          </section>

          {/* Section 2: Technical Specs */}
          <section className="space-y-6">
            <div className="flex items-center space-x-2 border-b border-stone-100 pb-2">
              <Info className="w-4 h-4 text-accent" />
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Technical Specifications</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Cut Grade</label>
                <select name="cut" value={formData.cut} onChange={handleChange} className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-sm">
                  {cuts.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Polish</label>
                <select name="polish" value={formData.polish} onChange={handleChange} className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-sm">
                  {cuts.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Symmetry</label>
                <select name="symmetry" value={formData.symmetry} onChange={handleChange} className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-sm">
                  {cuts.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Table %</label>
                <input 
                  type="number" 
                  name="table_percent"
                  value={formData.table_percent}
                  onChange={handleChange}
                  placeholder="57" 
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-sm" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Depth %</label>
                <input 
                  type="number" 
                  name="depth_percent"
                  value={formData.depth_percent}
                  onChange={handleChange}
                  placeholder="62" 
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-sm" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Fluorescence</label>
                <select name="fluorescence" value={formData.fluorescence} onChange={handleChange} className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-sm">
                  <option>None</option>
                  <option>Faint</option>
                  <option>Medium</option>
                  <option>Strong</option>
                </select>
              </div>
            </div>
          </section>

          {/* Section 3: Measurements & Lab */}
          <section className="space-y-6">
            <div className="flex items-center space-x-2 border-b border-stone-100 pb-2">
              <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Certification & Identity</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Laboratory</label>
                <select name="lab" value={formData.lab} onChange={handleChange} className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-sm">
                  <option>GIA</option>
                  <option>IGI</option>
                  <option>HRD</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Report Number</label>
                <input 
                  type="text" 
                  name="certificate_no"
                  value={formData.certificate_no}
                  onChange={handleChange}
                  placeholder="GIA 2459..." 
                  className="w-full bg-stone-50 border border-stone-200 px-4 py-3 focus:outline-none focus:border-accent transition-colors text-sm" 
                />
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar: Price & Submit */}
        <div className="space-y-8">
          <div className="bg-stone-50 p-8 border border-stone-100 space-y-6 sticky top-32">
            <div className="space-y-1">
              <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">B2B Base Price (USD)</label>
              <input 
                type="number" 
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="12500" 
                className="w-full bg-white border border-stone-200 px-4 py-4 text-xl font-semibold focus:outline-none focus:border-accent transition-colors" 
              />
            </div>

            <div className="pt-4 border-t border-stone-200 space-y-4">
              <p className="text-[10px] text-stone-400 leading-relaxed uppercase tracking-widest">
                Stones are listed as "Available" by default. 24h holds can be applied via the inventory manager.
              </p>
              
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center space-x-3 bg-foreground text-background py-5 px-4 hover:bg-stone-800 transition-all uppercase tracking-[0.2em] text-[10px] font-bold disabled:opacity-50"
              >
                <span>{isLoading ? 'Processing...' : 'Publish Diamond'}</span>
                {!isLoading && <Save className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
