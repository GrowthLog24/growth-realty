interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  withPulse?: boolean;
}

export function Badge({ children, className = "", withPulse = false }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        bg-[var(--color-au)]
        text-white
        text-[10px] font-sans font-medium
        px-[11px] py-[3px]
        rounded-[14px]
        ${className}
      `}
    >
      {withPulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
        </span>
      )}
      {children}
    </span>
  );
}
