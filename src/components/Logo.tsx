import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'color';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
  stacked?: boolean;
}

export const OFFICIAL_LOGO_SRC = '/assets/aistudio/IMG-20261024-WA0000_dc5ff260.jpg';

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'color',
  size = 'md',
  showSubtitle = false,
  stacked = false
}) => {
  const imageHeights = {
    sm: 'h-9 w-auto',
    md: 'h-12 w-auto',
    lg: 'h-16 w-auto',
    xl: 'h-24 w-auto'
  };

  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Brand Logo Image uploaded by user */}
      <div className="relative shrink-0 flex items-center justify-center">
        <img
          src={OFFICIAL_LOGO_SRC}
          alt="JUVENTUDE DIGITAL 360° - Tecnologia, Conhecimento e Oportunidades"
          className={`${imageHeights[size]} object-contain rounded-lg shadow-2xs transition-transform duration-200 hover:scale-[1.02]`}
          loading="eager"
        />
      </div>

      {showSubtitle && (
        <div className="hidden sm:flex flex-col justify-center leading-tight">
          <span className={`text-[10px] font-bold tracking-widest uppercase ${isLight ? 'text-[#FFC928]' : 'text-[#123A70]'}`}>
            Província da Zambézia
          </span>
          <span className={`text-[9px] font-semibold tracking-wider uppercase ${isLight ? 'text-neutral-400' : 'text-neutral-500'}`}>
            Moçambique
          </span>
        </div>
      )}
    </div>
  );
};
