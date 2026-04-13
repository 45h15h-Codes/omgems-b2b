'use client';

import { useEffect } from 'react';
import { useSearchStore } from '@/lib/store/useSearchStore';
import ShapeGrid from '@/components/search/ShapeGrid';
import DualRangeSlider from '@/components/ui/DualRangeSlider';
import StoneCard from '@/components/search/StoneCard';
import { Loader2, Search, SlidersHorizontal, ArrowUpDown } from 'lucide-react';

export default function DiamondSearchPage() {
  const { filters, setFilters, results, total, isLoading, fetchResults } = useSearchStore();

  useEffect(() => {
    fetchResults();
  }, [fetchResults]);

  return (
    <div className="min-h-screen bg-[#FDFDFD]">
      {/* Top Search Bar / Summary */}
      <div className="bg-white border-b border-stone-100 sticky top-0 z-20">
        <div className="max-w-[1600px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <h1 className="text-xl font-serif">Diamond Catalog</h1>
            <div className="h-4 w-px bg-stone-200" />
            <span className="text-xs uppercase tracking-widest text-stone-400 font-bold">
              {total.toLocaleString()} Stones Found
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-stone-500 hover:text-foreground transition-colors px-4 py-2 border border-stone-100 rounded-full bg-stone-50">
              <Search className="w-3.5 h-3.5" />
              <span>Reference Search</span>
            </button>
            <div className="h-4 w-px bg-stone-200" />
            <button className="flex items-center space-x-2 text-[10px] uppercase tracking-widest font-bold text-stone-500 hover:text-foreground transition-colors">
              <ArrowUpDown className="w-3.5 h-3.5" />
              <span>Sort: Price Low-High</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto flex">
        {/* Left Sidebar: Filters */}
        <aside className="w-80 border-r border-stone-100 h-[calc(100vh-80px)] overflow-y-auto sticky top-20 p-8 space-y-12 bg-white">
          <div className="flex items-center justify-between">
            <h2 className="text-xs uppercase tracking-[0.2em] font-bold">Refine Results</h2>
            <SlidersHorizontal className="w-4 h-4 text-stone-300" />
          </div>

          <ShapeGrid 
            selected={filters.shape} 
            onChange={(shapes) => setFilters({ shape: shapes })} 
          />

          <DualRangeSlider 
            label="Carat Weight"
            min={0.3}
            max={10}
            step={0.01}
            value={[filters.min_carat || 0.3, filters.max_carat || 10]}
            onValueChange={([min, max]) => setFilters({ min_carat: min, max_carat: max })}
            formatValue={(v) => `${v.toFixed(2)}ct`}
          />

          <DualRangeSlider 
            label="Price Range (USD)"
            min={500}
            max={100000}
            step={100}
            value={[filters.min_price || 500, filters.max_price || 100000]}
            onValueChange={([min, max]) => setFilters({ min_price: min, max_price: max })}
            formatValue={(v) => `$${v.toLocaleString()}`}
          />

          {/* Quick Filters */}
          <div className="space-y-4">
            <label className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">Quick Filters</label>
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => setFilters({ clarity: ['IF', 'FL'] })}
                className="text-[9px] uppercase tracking-widest border border-stone-100 py-3 hover:bg-stone-50 transition-colors"
                >
                Flawless Only
              </button>
              <button 
                onClick={() => setFilters({ cut: ['Excellent', 'Ideal'] })}
                className="text-[9px] uppercase tracking-widest border border-stone-100 py-3 hover:bg-stone-50 transition-colors"
              >
                Top Cut
              </button>
            </div>
          </div>

          <button 
            onClick={() => window.location.reload()}
            className="w-full text-center text-[10px] uppercase tracking-widest text-stone-400 hover:text-accent font-bold pt-4 transition-colors"
          >
            Clear All Filters
          </button>
        </aside>

        {/* Main Content: Results Grid */}
        <main className="flex-1 p-10 bg-stone-50/30">
          {isLoading ? (
            <div className="h-full flex flex-col items-center justify-center space-y-4 py-40">
              <Loader2 className="w-8 h-8 text-accent animate-spin" />
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-stone-400">Updating Catalog...</p>
            </div>
          ) : results.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
              {results.map((stone) => (
                <StoneCard key={stone.id} stone={stone} />
              ))}
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center py-40 text-center">
              <Search className="w-12 h-12 text-stone-200 mb-6" />
              <h3 className="text-xl font-serif">No matching stones found</h3>
              <p className="text-sm text-stone-400 mt-2 max-w-sm">
                Try adjusting your filters or expanding your search range to find the perfect diamond.
              </p>
            </div>
          )}

          {/* Pagination Placeholder */}
          {!isLoading && results.length > 0 && (
            <div className="mt-20 flex justify-center pb-20">
              <button className="bg-foreground text-background px-10 py-5 text-[10px] uppercase font-bold tracking-[0.2em] hover:bg-stone-800 transition-all shadow-xl shadow-stone-200">
                Load More Stones
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
