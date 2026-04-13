'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Diamond, Filter, MoreVertical, ExternalLink, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import api from '@/lib/api';

export default function MerchantDiamondsPage() {
  const [diamonds, setDiamonds] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDiamonds = async () => {
      try {
        const response = await api.get('/diamonds');
        setDiamonds(response.data.data); // Laravel pagination structure
      } catch (err) {
        console.error('Failed to fetch diamonds', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDiamonds();
  }, []);
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-serif">Stone Inventory</h1>
          <p className="text-stone-400 text-sm">Manage your professional diamond listings.</p>
        </div>
        <Link 
          href="/dashboard/diamonds/new"
          className="flex items-center space-x-2 bg-foreground text-background px-6 py-3 uppercase tracking-widest text-[10px] font-bold hover:bg-stone-800 transition-colors self-start"
        >
          <Plus className="w-4 h-4" />
          <span>List New Diamond</span>
        </Link>
      </div>

      {/* Filter Bar */}
      <div className="flex items-center space-x-4 pb-6 border-b border-stone-100 overflow-x-auto">
        <div className="flex items-center space-x-2 px-4 py-2 bg-stone-50 border border-stone-100 rounded text-[10px] uppercase tracking-wider text-stone-500 font-medium whitespace-nowrap">
          <Filter className="w-3 h-3" />
          <span>All Shapes</span>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-stone-50 border border-stone-100 rounded text-[10px] uppercase tracking-wider text-stone-500 font-medium whitespace-nowrap">
          <span>Availability: All</span>
        </div>
        <div className="flex-1" />
        <p className="text-[10px] uppercase tracking-widest text-stone-400 font-medium">{diamonds.length} Stones Listed</p>
      </div>

      {/* Inventory Table */}
      <div className="bg-white border border-stone-100 shadow-sm overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <Loader2 className="w-8 h-8 text-stone-200 animate-spin" />
            <p className="text-[10px] uppercase tracking-widest text-stone-400">Loading catalog...</p>
          </div>
        ) : diamonds.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <div className="p-4 bg-stone-50 rounded-full">
              <Diamond className="w-8 h-8 text-stone-300" />
            </div>
            <p className="text-sm font-serif">No stones listed yet</p>
            <Link href="/dashboard/diamonds/new" className="text-[10px] uppercase tracking-widest text-accent font-bold">List your first stone</Link>
          </div>
        ) : (
          <table className="w-full text-left">
            <thead className="bg-stone-50/50 border-b border-stone-100">
              <tr>
                <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Stone / Shape</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">4Cs</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Price</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-stone-400 font-bold">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-50">
              {diamonds.map((stone, i) => (
                <motion.tr 
                  key={stone.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="group hover:bg-stone-50/30 transition-colors"
                >
                  <td className="px-6 py-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-stone-100 rounded flex items-center justify-center text-stone-400">
                        <Diamond className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium tracking-tight whitespace-nowrap">{stone.shape}</p>
                        <p className="text-[10px] text-stone-400 tracking-tighter uppercase font-bold">#{stone.certificate_no || stone.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-6 font-mono text-xs text-stone-600">
                    {stone.carat}ct {stone.color}/{stone.clarity} - {stone.cut}
                  </td>
                  <td className="px-6 py-6">
                    <span className="text-sm font-semibold tracking-tight">${Number(stone.price).toLocaleString()}</span>
                  </td>
                  <td className="px-6 py-6">
                    <span className={`text-[10px] uppercase tracking-tighter px-2 py-1 font-bold ${
                      stone.status === 'available' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
                    }`}>
                      {stone.status}
                    </span>
                  </td>
                  <td className="px-6 py-6 text-right">
                    <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-stone-400 hover:text-foreground"><ExternalLink className="w-4 h-4" /></button>
                      <button className="p-2 text-stone-400 hover:text-foreground"><MoreVertical className="w-4 h-4" /></button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
