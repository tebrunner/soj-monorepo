import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'motion/react';

const data = [
  { name: 'Mon', joyLevel: 4000, energy: 2400 },
  { name: 'Tue', joyLevel: 3000, energy: 1398 },
  { name: 'Wed', joyLevel: 5000, energy: 6800 },
  { name: 'Thu', joyLevel: 8780, energy: 3908 },
  { name: 'Fri', joyLevel: 9890, energy: 4800 },
  { name: 'Sat', joyLevel: 12390, energy: 3800 },
  { name: 'Sun', joyLevel: 13490, energy: 4300 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f172a]/90 backdrop-blur-md border border-fuchsia-500/50 p-4 rounded-xl shadow-[0_0_15px_rgba(217,70,239,0.3)]">
        <p className="text-white font-bold mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            <span className="font-semibold uppercase tracking-wider">{entry.name}:</span> {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export function JoyChart() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="w-full h-[350px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex justify-between items-center mb-6 relative z-10">
        <div>
          <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-orange-400">
            Weekly Joy Index
          </h3>
          <p className="text-white/60 text-sm">Company morale & energy levels</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-fuchsia-500 shadow-[0_0_10px_#d946ef]" />
            <span className="text-xs text-white/80 font-medium">Joy Level</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_10px_#f97316]" />
            <span className="text-xs text-white/80 font-medium">Energy</span>
          </div>
        </div>
      </div>

      <div className="w-full h-[250px] relative z-10">
        <ResponsiveContainer width="100%" height="100%" minWidth={1} minHeight={1}>
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient key="joy-gradient" id="colorJoy" x1="0" y1="0" x2="0" y2="1">
                <stop key="joy-stop-1" offset="5%" stopColor="#d946ef" stopOpacity={0.4}/>
                <stop key="joy-stop-2" offset="95%" stopColor="#d946ef" stopOpacity={0}/>
              </linearGradient>
              <linearGradient key="energy-gradient" id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                <stop key="energy-stop-1" offset="5%" stopColor="#f97316" stopOpacity={0.4}/>
                <stop key="energy-stop-2" offset="95%" stopColor="#f97316" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid key="grid" strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
            <XAxis key="xaxis" dataKey="name" stroke="rgba(255,255,255,0.5)" tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} axisLine={false} tickLine={false} />
            <YAxis key="yaxis" stroke="rgba(255,255,255,0.5)" tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} axisLine={false} tickLine={false} />
            <Tooltip key="tooltip" content={<CustomTooltip />} />
            <Area key="area-joy" type="monotone" dataKey="joyLevel" stroke="#d946ef" strokeWidth={3} fillOpacity={1} fill="url(#colorJoy)" />
            <Area key="area-energy" type="monotone" dataKey="energy" stroke="#f97316" strokeWidth={3} fillOpacity={1} fill="url(#colorEnergy)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
