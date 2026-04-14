interface TagProps {
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
}

export function Tag({ children, variant = "dark", className = "" }: TagProps) {
  const variantStyles = {
    dark: "bg-[rgba(191,164,111,0.14)] text-[var(--color-al)] border-[rgba(191,164,111,0.25)] hover:bg-[rgba(191,164,111,0.22)] hover:border-[rgba(191,164,111,0.4)]",
    light: "bg-[rgba(10,61,47,0.08)] text-[var(--color-g)] border-[rgba(10,61,47,0.15)] hover:bg-[rgba(10,61,47,0.14)] hover:border-[rgba(10,61,47,0.25)]",
  };

  return (
    <span
      className={`
        inline-block px-4 py-1.5
        text-[12px] font-sans
        rounded-full border
        transition-all duration-300
        ${variantStyles[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
