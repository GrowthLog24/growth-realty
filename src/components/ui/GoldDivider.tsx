interface GoldDividerProps {
  className?: string;
  vertical?: boolean;
  withDiamond?: boolean;
}

export function GoldDivider({ className = "", vertical = false, withDiamond = false }: GoldDividerProps) {
  if (vertical) {
    return (
      <div
        className={`w-[1px] h-[44px] bg-[var(--color-au)] opacity-50 mx-auto ${className}`}
      />
    );
  }

  if (withDiamond) {
    return (
      <div className={`flex items-center gap-3 mb-9 ${className}`}>
        <div className="w-[16px] h-[2px] bg-[var(--color-au)]" />
        <div className="w-[6px] h-[6px] bg-[var(--color-au)] rotate-45" />
        <div className="w-[16px] h-[2px] bg-[var(--color-au)]" />
      </div>
    );
  }

  return (
    <div
      className={`w-[44px] h-[2px] bg-[var(--color-au)] mb-9 ${className}`}
    />
  );
}
