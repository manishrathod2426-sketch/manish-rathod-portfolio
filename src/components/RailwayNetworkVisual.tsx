import React from 'react';
import { Train, Navigation, MapPin } from 'lucide-react';

export const RailwayNetworkVisual: React.FC = () => {
  return (
    <div className="relative w-full h-64 sm:h-80 rounded-xl bg-[#070707] border border-[#FF2638]/30 overflow-hidden flex items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-30" />

      {/* SVG Network of Railway Tracks & Red Illuminated Route Lines */}
      <svg className="w-full h-full absolute inset-0" viewBox="0 0 500 300" fill="none">
        <defs>
          <linearGradient id="railGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#333333" />
            <stop offset="40%" stopColor="#FF2638" />
            <stop offset="70%" stopColor="#FF003C" />
            <stop offset="100%" stopColor="#444444" />
          </linearGradient>

          <filter id="redGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Secondary track lines (Muted) */}
        <path d="M 40 220 C 140 200, 220 260, 320 240 C 380 220, 420 180, 480 200" stroke="#222222" strokeWidth="1.5" strokeDasharray="3 3" />
        <path d="M 60 80 C 120 120, 180 60, 260 110 C 340 160, 400 120, 460 140" stroke="#222222" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Primary Illuminated Express Route Line (Glowing Red) */}
        <path
          d="M 50 150 C 130 90, 210 210, 310 130 C 370 80, 410 160, 460 110"
          stroke="url(#railGrad)"
          strokeWidth="3.5"
          filter="url(#redGlow)"
        />

        {/* Traveling Pulsing Light Particle representing train movement */}
        <circle r="5" fill="#FFFFFF" filter="url(#redGlow)">
          <animateMotion
            path="M 50 150 C 130 90, 210 210, 310 130 C 370 80, 410 160, 460 110"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Station Markers */}
        <g transform="translate(50, 150)">
          <circle r="7" fill="#070707" stroke="#FF2638" strokeWidth="2.5" />
          <circle r="3" fill="#FFFFFF" />
          <text x="-15" y="-14" fill="#999999" fontSize="9" fontFamily="monospace">SBC_BLR</text>
        </g>

        <g transform="translate(180, 168)">
          <circle r="5" fill="#070707" stroke="#FF2638" strokeWidth="2" />
          <circle r="2" fill="#FF2638" />
          <text x="-12" y="-12" fill="#777777" fontSize="8" fontFamily="monospace">UBL_JN</text>
        </g>

        <g transform="translate(310, 130)">
          <circle r="6" fill="#070707" stroke="#FF2638" strokeWidth="2" />
          <circle r="2.5" fill="#FFFFFF" />
          <text x="-15" y="-14" fill="#999999" fontSize="9" fontFamily="monospace">PUNE_JN</text>
        </g>

        <g transform="translate(460, 110)">
          <circle r="8" fill="#FF2638" stroke="#FFFFFF" strokeWidth="2" filter="url(#redGlow)" />
          <circle r="3" fill="#070707" />
          <text x="-25" y="-15" fill="#FFFFFF" fontSize="10" fontFamily="monospace" fontWeight="bold">CSMT_MUM</text>
        </g>
      </svg>

      {/* Floating Holographic Ticket & Status Tag */}
      <div className="absolute top-4 left-4 p-2.5 rounded bg-[#0d0d0f]/90 border border-[#FF2638]/40 backdrop-blur-md font-mono text-[10px] text-zinc-300">
        <div className="flex items-center gap-1.5 text-[#FF2638] font-bold">
          <Train className="w-3 h-3" />
          <span>ROUTE: SOUTH-WEST LINE ACTIVE</span>
        </div>
        <div className="text-zinc-500 text-[9px] mt-0.5">LATENCY: 12ms // REAL-TIME SEATS</div>
      </div>

      <div className="absolute bottom-4 right-4 p-2 rounded bg-[#111111]/90 border border-white/10 font-mono text-[10px] text-zinc-400 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span>TICKET PROTOCOL: VALIDATED</span>
      </div>
    </div>
  );
};
