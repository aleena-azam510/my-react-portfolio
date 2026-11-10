import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/* Tighter coordinate set — same topology, less vertical sprawl */
const links = [
  [82, 138, 220, 210], [82, 138, 238, 270], [82, 138, 224, 340],
  [72, 270, 220, 210], [72, 270, 238, 270], [72, 270, 224, 340],
  [104, 402, 220, 210], [104, 402, 238, 270], [104, 402, 224, 340],
  [220, 210, 300, 270], [238, 270, 300, 270], [224, 340, 300, 270],
  [300, 270, 382, 210], [300, 270, 382, 340],
  [382, 210, 516, 138], [382, 210, 528, 270], [382, 210, 496, 402],
  [382, 340, 516, 138], [382, 340, 528, 270], [382, 340, 496, 402],
];

const nodes = [
  [82, 138], [72, 270], [104, 402], [220, 210], [238, 270], [224, 340],
  [382, 210], [382, 340], [516, 138], [528, 270], [496, 402],
];

const packets = [
  { path: 'M82 138 L220 210 L300 270 L382 210 L516 138', delay: 0 },
  { path: 'M72 270 L238 270 L300 270 L382 340 L496 402', delay: 1.1 },
  { path: 'M104 402 L224 340 L300 270 L382 210 L528 270', delay: 2.2 },
];

export default function Scene() {
  const reduced = useReducedMotion();

  return (
    <div className="ai-scene" role="img" aria-label="Animated AI neural network connecting data, machine learning models and software systems">
      <div className="ai-scene-grid" />
      <div className="ai-scene-topline">
        <span className="ai-live-dot" /> SYSTEM ARCHITECTURE
        <span>01 / AI CORE</span>
      </div>

      <svg
        className="ai-network"
        viewBox="0 0 600 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="aiLink" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#8D7BFF" stopOpacity=".1" />
            <stop offset=".5" stopColor="#8D7BFF" stopOpacity=".55" />
            <stop offset="1" stopColor="#61E6E0" stopOpacity=".22" />
          </linearGradient>
          <linearGradient id="aiCore" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#211B50" />
            <stop offset="1" stopColor="#111B35" />
          </linearGradient>
          <filter id="aiGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {links.map(([x1, y1, x2, y2], i) => (
          <motion.path
            key={`link-${i}`}
            d={`M${x1} ${y1} L${x2} ${y2}`}
            stroke="url(#aiLink)"
            strokeWidth="1.1"
            initial={reduced ? false : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.7 }}
            transition={{ duration: 1, delay: reduced ? 0 : i * 0.04, ease: 'easeOut' }}
          />
        ))}

        {packets.map((packet, i) => (
          <g key={`packet-${i}`}>
            <path d={packet.path} stroke="#62E7E0" strokeOpacity=".08" strokeWidth="4" />
            {!reduced && (
              <motion.circle r="3" fill="#8CF8EF" filter="url(#aiGlow)">
                <animateMotion path={packet.path} dur="6s" begin={`${packet.delay}s`} repeatCount="indefinite" />
              </motion.circle>
            )}
          </g>
        ))}

        {nodes.map(([cx, cy], i) => {
          const accent = i < 3 || i > 7;
          return (
            <g key={`node-${i}`}>
              <circle cx={cx} cy={cy} r="9" fill="#171638" stroke={accent ? '#8D7BFF' : '#6FE7DF'} strokeOpacity=".7" />
              <circle cx={cx} cy={cy} r="3" fill={accent ? '#A99BFF' : '#80F0E8'} />
              {!reduced && (
                <motion.circle
                  cx={cx} cy={cy} r="14"
                  stroke={accent ? '#8D7BFF' : '#6FE7DF'}
                  strokeOpacity=".3" strokeWidth="1"
                  animate={{ scale: [0.85, 1.25, 0.85], opacity: [0.5, 0.08, 0.5] }}
                  transition={{ duration: 3.2 + (i % 3) * 0.5, repeat: Infinity, delay: i * 0.14 }}
                />
              )}
            </g>
          );
        })}

        {/* Smaller AI core box */}
        <g filter="url(#aiGlow)">
          <rect x="235" y="215" width="130" height="94" rx="12" fill="url(#aiCore)" stroke="#9B8AFF" strokeOpacity=".85" strokeWidth="1.3" />
          <rect x="243" y="223" width="114" height="78" rx="8" stroke="#A99BFF" strokeOpacity=".18" />
          <path d="M268 248h-10v30h10M332 248h10v30h-10" stroke="#7FEDE4" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M285 270l10-13 8 7 15-18" stroke="#A99BFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="310" cy="246" r="2.5" fill="#7FEDE4" />
          <text x="300" y="296" fill="#E8E4FF" fontSize="9" textAnchor="middle" letterSpacing="2.2" fontFamily="monospace">AI ENGINE</text>
        </g>

        {/* Tighter annotation text */}
        <g fontFamily="monospace" fontSize="8" letterSpacing="1.3" fill="#BDB6E8" opacity=".75">
          <text x="52" y="100">DATA INPUT</text>
          <path d="M53 110h62" stroke="#8D7BFF" strokeOpacity=".5" />
          <text x="452" y="100">MODEL OUTPUT</text>
          <path d="M452 110h82" stroke="#61E6E0" strokeOpacity=".5" />
          <text x="52" y="458">FEATURES</text>
          <text x="452" y="458">PREDICTIONS</text>
        </g>

        <g stroke="#A99BFF" strokeOpacity=".28" strokeDasharray="3 7">
          <path d="M300 62v118M300 342v110M30 270h168M402 270h168" />
        </g>
      </svg>

      <div className="ai-scene-module module-input"><span>01</span><b>DATA</b><small>ingestion</small></div>
      <div className="ai-scene-module module-model"><span>02</span><b>MODEL</b><small>inference</small></div>
      <div className="ai-scene-module module-output"><span>03</span><b>OUTPUT</b><small>intelligence</small></div>

      <div className="ai-scene-footer">
        <span><i /> PYTHON</span>
        <span>NEURAL NETWORK</span>
        <span>RAG / ML</span>
      </div>
    </div>
  );
}
