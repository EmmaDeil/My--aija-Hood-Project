// NaijaHoodLogo.jsx
// Default export React component
// Usage: import NaijaHoodLogo from './NaijaHoodLogo';
// <NaijaHoodLogo size={96} className="my-logo" title="NaijaHood" />

import React from 'react';

export default function NaijaHoodLogo({ size = 128, className = '', title = 'NaijaHood logo' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
    >
      <title>{title}</title>

      {/* Definitions: gradients, patterns */}
      <defs>
        <linearGradient id="gGreen" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#1B7A2A" />
          <stop offset="100%" stopColor="#2FC47A" />
        </linearGradient>

        <linearGradient id="gTech" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#00B4D8" />
          <stop offset="100%" stopColor="#6EE7B7" />
        </linearGradient>

        {/* subtle cultural motif — a repeating diamond stripe (inspired by woven textiles) */}
        <pattern id="patternTextile" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="4" height="4" x="0" y="0" fill="rgba(255,255,255,0.12)" />
        </pattern>

        {/* small pixel grid for tech feel */}
        <pattern id="pixelGrid" width="6" height="6" patternUnits="userSpaceOnUse">
          <rect width="2" height="2" fill="#ffffff" opacity="0.22" />
        </pattern>

        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* Outer circular badge */}
      <g filter="url(#softShadow)">
        <circle cx="64" cy="64" r="46" fill="url(#gGreen)" />
      </g>

      {/* Cultural weave layer (subtle) */}
      <circle cx="64" cy="64" r="40" fill="url(#patternTextile)" opacity="0.18" />

      {/* Central emblem: stylized house + leaf + tech pixels */}
      {/* House base (community) */}
      <g transform="translate(0,0)">
        <path
          d="M36 76 L64 52 L92 76 L92 86 L36 86 Z"
          fill="#ffffff"
          opacity="0.95"
        />

        {/* Leaf rising from house (agile / growth) */}
        <path
          d="M64 50 C68 44, 78 40, 80 32 C74 36, 70 36, 64 40 C58 36, 54 36, 48 32 C50 40, 60 44, 64 50 Z"
          fill="url(#gTech)"
          transform="translate(0,-6)"
        />

        {/* Stylized skyline (dots -> tech) */}
        <g transform="translate(78,58)">
          <rect x="0" y="0" width="4" height="4" rx="0.7" fill="#ffffff" opacity="0.9" />
          <rect x="6" y="-2" width="4" height="4" rx="0.7" fill="#ffffff" opacity="0.85" />
          <rect x="12" y="2" width="4" height="4" rx="0.7" fill="#ffffff" opacity="0.75" />
        </g>

        {/* Pixel fade on the left of the emblem for tech-cultural blend */}
        <rect x="36" y="56" width="20" height="8" fill="url(#pixelGrid)" transform="rotate(-12 46 60)" opacity="0.9" />
      </g>

      {/* Border ring with green-white-green nod (flag colors) */}
      <g>
        <circle cx="64" cy="64" r="50" fill="none" stroke="#ffffff" strokeWidth="6" strokeDasharray="0 0" opacity="0.18" />
        {/* Two green arcs to suggest flag stripes (left & right) */}
        <path d="M14 64 A50 50 0 0 1 64 14" stroke="#ffffff" strokeWidth="8" strokeOpacity="0.06" fill="none" />
      </g>

      {/* Wordmark: "NaijaHood" — placed below emblem (keeps SVG self-contained) */}
      <g transform="translate(0,92)">
        <text x="50%" y="0" textAnchor="middle" fontFamily="Inter, Roboto, system-ui, Arial" fontWeight="700" fontSize="16" fill="#07361A">NaijaHood</text>
      </g>
    </svg>
  );
}

/*
Design notes & quick palette:
- Primary gradient: #1B7A2A -> #2FC47A (lush Nigerian green)
- Tech accent gradient: #00B4D8 -> #6EE7B7 (cyan/teal, modern tech feel)
- White for contrast and type
- Cultural motif: subtle textile-inspired pattern and geometric repeats
- Tech motif: small pixel grid and dot elements

If you'd like:
- A plain SVG file (no React wrapper)
- A mono/flat (single-color) version for stamps and favicons
- Variations: circular-only emblem (no text), horizontal lockup (icon left, wordmark right)
*/
