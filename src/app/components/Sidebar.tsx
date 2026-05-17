import React from 'react';
import { motion } from 'motion/react';
import { Home, Zap, Users, Trophy, Settings, HelpCircle, Activity, Coffee } from 'lucide-react';
import { NavLink } from 'react-router';

const navItems = [
  { icon: Home, label: 'Headquarters', path: '/' },
  { icon: Zap, label: 'Projects', path: '/projects' },
  { icon: Activity, label: 'Pulse', path: '/pulse' },
  { icon: Users, label: 'Squads', path: '/squads' },
  { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
  { icon: Coffee, label: 'Breakroom', path: '/breakroom' },
];

const bottomItems = [
  { icon: Settings, label: 'Settings', path: '/settings' },
  { icon: HelpCircle, label: 'Support', path: '/support' },
];

export function Sidebar() {
  return (
    <motion.aside 
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-64 h-screen fixed top-0 left-0 flex flex-col justify-between bg-[#0B0F19]/80 backdrop-blur-2xl border-r border-white/5 z-50 p-6"
    >
      <div>
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-orange-500 flex items-center justify-center shadow-[0_0_20px_rgba(217,70,239,0.5)]">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
            Shot<span className="text-fuchsia-500">Of</span>Joy
          </h1>
        </div>

        <nav className="flex flex-col gap-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden
                  ${isActive 
                    ? 'text-white bg-white/10 shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]' 
                    : 'text-white/50 hover:text-white hover:bg-white/5'}
                `}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.div 
                        layoutId="activeTab" 
                        className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-fuchsia-500 to-orange-500 shadow-[0_0_10px_rgba(217,70,239,0.8)]"
                      />
                    )}
                    <item.icon className={`w-5 h-5 transition-transform duration-300 group-hover:scale-110 ${isActive ? 'text-fuchsia-400' : ''}`} />
                    <span className="font-semibold">{item.label}</span>
                  </>
                )}
              </NavLink>
            </motion.div>
          ))}
        </nav>
      </div>

      <div className="flex flex-col gap-2">
        {bottomItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className="flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 text-white/50 hover:text-white hover:bg-white/5 group"
          >
            <item.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-semibold">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </motion.aside>
  );
}
