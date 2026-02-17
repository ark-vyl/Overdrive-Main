import { ReactNode, RefObject } from "react";
import { cn } from "../utils/cn";

export function BackgroundLayer({ children, className, ref }: { children: ReactNode, className?: string, ref?: RefObject<HTMLDivElement | null> }) {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none" />
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px),
                         linear-gradient(to bottom, #333 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Red Wave Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-0 opacity-60">
        <div className="absolute bottom-0 w-[200%] h-full flex animate-wave">
          <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
             <path fill="rgba(220, 38, 38, 0.2)" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,250.7C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
          <svg className="w-1/2 h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
             <path fill="rgba(220, 38, 38, 0.2)" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,250.7C1120,256,1280,224,1360,208L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Konten di atas background */}
      <div className={cn(className, 'absolute inset-0 w-full h-full z-10 overflow-scroll')}>{children}</div>
    </div>
  );
}
