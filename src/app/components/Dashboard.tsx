import React from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { JoyChart } from './JoyChart';
import { Zap, Flame, Rocket, Star, Heart, Target, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const stats = [
  { label: 'Energy Level', value: '98%', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-500/10', border: 'border-orange-500/30' },
  { label: 'Joy Delivered', value: '1,204', icon: Heart, color: 'text-pink-500', bg: 'bg-pink-500/10', border: 'border-pink-500/30' },
  { label: 'Goals Hit', value: '24/25', icon: Target, color: 'text-fuchsia-500', bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-500/30' },
  { label: 'Superstars', value: '12', icon: Star, color: 'text-yellow-400', bg: 'bg-yellow-400/10', border: 'border-yellow-400/30' },
];

const feed = [
  { id: 1, user: 'Alex M.', action: 'crushed the Q3 sales goal! 🎉', time: '2m ago', color: 'text-fuchsia-400' },
  { id: 2, user: 'Design Team', action: 'uploaded the new "Neon Blast" assets.', time: '1hr ago', color: 'text-blue-400' },
  { id: 3, user: 'Sarah J.', action: 'started a new initiative: "Friday Vibes".', time: '3hrs ago', color: 'text-orange-400' },
];

export function Dashboard() {
  const handleIgnite = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#d946ef', '#f97316', '#eab308']
    });
  };

  return (
    <div className="flex flex-col gap-8 pb-12">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[300px] rounded-[2rem] overflow-hidden group"
      >
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1563089145-599997674d42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwYWJzdHJhY3QlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3ODc3MzIzNnww&ixlib=rb-4.1.0&q=80&w=1080" 
          alt="Neon Abstract" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F19]/90 via-[#0B0F19]/60 to-transparent" />
        
        <div className="relative h-full flex flex-col justify-center px-10 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-bold text-white tracking-wide uppercase">System Vitals Optimal</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter">
              Let's make some <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-orange-500 filter drop-shadow-[0_0_10px_rgba(217,70,239,0.5)]">
                magic happen.
              </span>
            </h1>
            
            <button 
              onClick={handleIgnite}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-fuchsia-600 to-orange-500 rounded-2xl font-bold text-white text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(217,70,239,0.6)] cursor-pointer"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Rocket className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
              <span className="relative z-10">Ignite Workspace</span>
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
            className={`p-6 rounded-3xl bg-white/5 backdrop-blur-xl border ${stat.border} hover:bg-white/10 transition-all duration-300 hover:scale-105 group cursor-pointer`}
          >
            <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            <p className="text-white/60 font-medium mb-1">{stat.label}</p>
            <h4 className="text-3xl font-black text-white">{stat.value}</h4>
          </motion.div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <JoyChart />
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-white">Live Pulse</h3>
            <button className="text-fuchsia-400 text-sm font-bold hover:text-fuchsia-300 transition-colors flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 overflow-hidden relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBvZmZpY2UlMjBmdW58ZW58MXx8fHwxNzc4OTY0Mzk4fDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Team Fun" 
              className="w-full h-40 object-cover rounded-2xl mb-6 border border-white/10"
            />
            
            <div className="space-y-4">
              {feed.map((item) => (
                <div key={item.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className={`w-2 h-2 rounded-full mt-2 ${item.color} shadow-[0_0_8px_currentColor]`} />
                  <div>
                    <p className="text-sm text-white/90">
                      <span className="font-bold text-white">{item.user}</span> {item.action}
                    </p>
                    <p className="text-xs text-white/40 mt-1">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
