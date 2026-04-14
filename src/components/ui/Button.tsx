"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-au)] text-white hover:bg-[#8B6B3A] hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md",
  secondary:
    "bg-[var(--color-g)] text-white hover:bg-[#06291E] hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md",
  outline:
    "bg-transparent border border-[var(--color-au)] text-[var(--color-au)] hover:bg-[var(--color-au)] hover:text-white hover:-translate-y-1 hover:shadow-lg active:translate-y-0 active:shadow-md",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", fullWidth = false, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center
          px-[30px] py-[13px]
          font-sans text-[15px] font-medium
          rounded-[2px]
          transition-all duration-[320ms] ease-out
          disabled:opacity-50 disabled:cursor-not-allowed
          ${variantStyles[variant]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
