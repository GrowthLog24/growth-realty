interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`
        font-display text-[12px] md:text-[13px]
        tracking-[0.35em] uppercase
        text-[var(--color-au)]
        mb-[16px] block
        ${className}
      `}
    >
      {children}
    </span>
  );
}
