"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { buttonHover } from "@/lib/animations";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "white" | "green";
  size?: "default" | "large";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const variantStyles = {
  primary: "bg-[var(--green)] hover:bg-[var(--green-dark)] text-white",
  secondary: "bg-[var(--dark)] hover:bg-[#2a2a2a] text-white",
  outline: "bg-transparent border-[1.5px] border-gray-300 hover:border-[var(--dark)] text-[#333]",
  white: "bg-white hover:bg-gray-100 text-[var(--dark)]",
  green: "bg-[var(--green)] hover:bg-[var(--green-dark)] text-white",
};

const sizeStyles = {
  default: "py-[13px] px-[26px] text-[14px]",
  large: "py-[18px] px-[36px] text-[15px]",
};

export default function Button({
  variant = "secondary",
  size = "default",
  children,
  href,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  const baseStyles = cn(
    "inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200 cursor-pointer",
    "tracking-[-0.1px]",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    return (
      <motion.div {...buttonHover}>
        <Link href={href} className={baseStyles}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={baseStyles}
      {...buttonHover}
    >
      {children}
    </motion.button>
  );
}
