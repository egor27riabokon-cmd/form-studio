// A tasteful abstract stand-in used only where no licensed photograph was
// available. Deliberately reads as an architectural drawing device (a plan
// grid catching light) rather than a failed attempt at a photorealistic
// building render.
export default function Atmosphere({
  className = "",
  tone = 1,
}: {
  className?: string;
  tone?: 1 | 2 | 3;
}) {
  const tones = [
    "from-[#d9d2c2] via-[#c9c0ab] to-[#8a6f4c]",
    "from-[#cdd0c6] via-[#a9ab9c] to-[#6b6858]",
    "from-[#d6c9bb] via-[#b7a493] to-[#6e5738]",
  ];
  return (
    <div className={`relative overflow-hidden bg-surface-2 ${className}`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${tones[tone - 1]} opacity-60`} />
      <svg className="absolute inset-0 h-full w-full opacity-25" preserveAspectRatio="none">
        <defs>
          <pattern id={`grid-${tone}`} width="48" height="48" patternUnits="userSpaceOnUse">
            <path d="M 48 0 L 0 0 0 48" fill="none" stroke="black" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${tone})`} />
      </svg>
    </div>
  );
}
