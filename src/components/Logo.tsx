import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  showSubtitle?: boolean;
}

export const TRANSPARENT_EMBLEM_SRC = '/assets/aistudio/logo_emblem_transparent.png';
export const TRANSPARENT_FULL_SRC = '/assets/aistudio/logo_transparent.png';

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'color',
  size = 'md',
  showText = true,
  showSubtitle = true
}) => {
  const emblemSizes = {
    sm: 'h-9 w-auto',
    md: 'h-12 sm:h-13 w-auto',
    lg: 'h-16 sm:h-18 w-auto',
    xl: 'h-24 sm:h-28 w-auto'
  };

  const textSizes = {
    sm: 'text-sm sm:text-base',
    md: 'text-base sm:text-lg md:text-xl',
    lg: 'text-xl sm:text-2xl',
    xl: 'text-2xl sm:text-3xl'
  };

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Transparent Brand Emblem (No black background) */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src={TRANSPARENT_EMBLEM_SRC}
          alt="Emblema JUVENTUDE DIGITAL 360°"
          className={`${emblemSizes[size]} object-contain drop-shadow-xs transition-transform duration-200 hover:scale-105`}
          loading="eager"
        />
      </div>

      {/* Prominent Text Lockup: JUVENTUDE DIGITAL 360° in highlighted colors */}
      {showText && (
        <div className="flex flex-col justify-center leading-none select-none">
          <div className={`font-black tracking-tight ${textSizes[size]} flex items-center gap-1.5 flex-wrap`}>
            <span className={isLight ? 'text-white' : 'text-[#123A70]'}>
              JUVENTUDE
            </span>
            <span className={isLight ? 'text-[#22c55e]' : 'text-[#159447]'}>
              DIGITAL
            </span>
            <span className="inline-flex items-center px-1.5 py-0.5 rounded-md font-black text-white bg-gradient-to-r from-[#E53935] to-[#FFC928] shadow-xs text-xs sm:text-sm">
              360°
            </span>
          </div>

          {showSubtitle && (
            <div className="flex items-center gap-1.5 mt-1">
              <span className={`text-[10px] font-bold tracking-wider uppercase ${isLight ? 'text-[#FFC928]' : 'text-[#159447]'}`}>
                Zambézia
              </span>
              <span className={`text-[10px] ${isLight ? 'text-neutral-500' : 'text-neutral-300'}`}>•</span>
              <span className={`text-[10px] font-semibold tracking-wider uppercase ${isLight ? 'text-neutral-400' : 'text-neutral-500'}`}>
                Moçambique
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
