import React from 'react';
import { motion } from 'motion/react';
import { Search, Bell, MessageSquare, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Header() {
  return (
    <motion.header 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-20 w-full flex items-center justify-between px-4 md:px-8 bg-transparent z-40 relative shrink-0"
    >
      <div className="flex-1 max-w-xl hidden md:block">
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-white/40 group-focus-within:text-fuchsia-400 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search projects, people, or docs..." 
            className="w-full bg-white/5 border border-white/10 text-white placeholder-white/40 rounded-full py-3 pl-12 pr-6 outline-none focus:bg-white/10 focus:border-fuchsia-500/50 focus:shadow-[0_0_20px_rgba(217,70,239,0.2)] transition-all duration-300"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-white/60 hover:text-white transition-colors group">
            <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            <MessageSquare className="w-6 h-6 relative z-10" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-orange-500 rounded-full border-2 border-[#0B0F19] shadow-[0_0_8px_rgba(249,115,22,0.8)] z-20" />
          </button>
          
          <button className="relative p-2 text-white/60 hover:text-white transition-colors group">
            <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
            <Bell className="w-6 h-6 relative z-10" />
            <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-fuchsia-500 rounded-full border-2 border-[#0B0F19] shadow-[0_0_8px_rgba(217,70,239,0.8)] z-20" />
          </button>
        </div>

        <div className="w-px h-8 bg-white/10" />

        <button className="flex items-center gap-3 hover:bg-white/5 p-2 pr-4 rounded-full transition-colors border border-transparent hover:border-white/10">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-fuchsia-500 shadow-[0_0_15px_rgba(217,70,239,0.4)]">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwZW5lcmdldGljJTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3R8ZW58MXx8fHwxNzc4OTY0Mzk0fDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Sarah" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left hidden md:block">
            <p className="text-sm font-bold text-white">Sarah Jenkins</p>
            <p className="text-xs text-fuchsia-400 font-medium">Vibe Director</p>
          </div>
          <ChevronDown className="w-4 h-4 text-white/40" />
        </button>
      </div>
    </motion.header>
  );
}
