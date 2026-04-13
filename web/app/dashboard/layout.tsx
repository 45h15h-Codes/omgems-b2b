'use client';

import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Diamond, Package, Users, Settings, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', href: '/dashboard' },
  { icon: Diamond, label: 'Diamonds', href: '/dashboard/diamonds' },
  { icon: Package, label: 'Jewellery', href: '/dashboard/jewellery' },
  { icon: Users, label: 'Merchants', href: '/dashboard/merchants' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-stone-100 flex flex-col">
        <div className="p-8 border-b border-stone-50">
          <h1 className="text-xl font-serif tracking-tight">OM GEMS</h1>
          <p className="text-[10px] uppercase tracking-widest text-stone-400 mt-1">Portal</p>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 text-xs uppercase tracking-wider font-medium transition-all group ${
                  isActive 
                    ? 'text-foreground bg-stone-50 border-l-2 border-accent' 
                    : 'text-stone-400 hover:text-foreground hover:translate-x-1'
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-stone-50">
          <button className="flex items-center space-x-3 px-4 py-3 text-xs uppercase tracking-wider font-medium text-stone-400 hover:text-red-500 transition-colors w-full">
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 relative overflow-y-auto">
        <header className="h-20 bg-white border-b border-stone-100 flex items-center justify-between px-10 sticky top-0 z-10">
          <div className="flex items-center space-x-4">
            <span className="text-xs uppercase tracking-widest text-stone-300 font-medium">Main Dashboard</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium">Om Gems Admin</p>
              <p className="text-[10px] text-stone-400 uppercase tracking-tighter">Super Administrator</p>
            </div>
            <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center border border-accent/20">
              <span className="text-accent text-xs font-bold">OA</span>
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="p-10"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
