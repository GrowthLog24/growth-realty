interface CardProps {
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
}

export function Card({ children, variant = "light", className = "" }: CardProps) {
  const baseStyles = "p-8 md:p-10 rounded-[2px] transition-all duration-[320ms] ease-out";

  const variantStyles = {
    dark: "card-dark",
    light: "card-light",
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </div>
  );
}
