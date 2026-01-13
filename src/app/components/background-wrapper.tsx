import { ReactNode, RefObject } from "react";
import { cn } from "../utils/cn";

const GBackground = ({ classNameNya }: { classNameNya?: string }) => {
  return (
    <svg
      className={classNameNya}
      width="100%"
      height="100%"
      viewBox="0 0 1440 1024" // sesuaikan dengan ukuran asli desain
      preserveAspectRatio="none" // biar stretch penuh
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_68_2)">
        <rect width="100%" height="100%" fill="#0B0B0B" />
        <g filter="url(#filter0_f_68_2)">
          <ellipse
            cx="682.5"
            cy="730.5"
            rx="474.5"
            ry="110.5"
            fill="#FF3F3F"
            fillOpacity="0.53"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_68_2"
          x="-705.7"
          y="-293.7"
          width="2776.4"
          height="2048.4"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="456.85"
            result="effect1_foregroundBlur_68_2"
          />
        </filter>
        <clipPath id="clip0_68_2">
          <rect width="100%" height="100%" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export function BackgroundLayer({ children, className, ref }: { children: ReactNode, className?: string, ref?: RefObject<HTMLDivElement | null> }) {
  return (
    <div className="absolute inset-0 w-screen h-screen" ref={ref}>
      {/* SVG background full cover */}
      <GBackground classNameNya="absolute inset-0 w-full h-full" />
      {/* Konten di atas background */}
      <div className={cn(className, 'absolute w-screen h-screen')}>{children}</div>
    </div>
  );
}
