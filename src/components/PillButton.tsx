import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "purple" | "dark" | "outline" | "outline-dark";
  size?: "sm" | "md";
  className?: string;
};

const variants: Record<string, string> = {
  purple: "bg-purple text-white hover:bg-purple-dark",
  dark: "bg-[#0d0d0d] text-white hover:bg-black",
  outline: "bg-transparent text-white border border-white/70 hover:bg-white/10",
  "outline-dark": "bg-transparent text-ink border border-ink/30 hover:bg-ink/5",
};

const sizes: Record<string, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-8 py-4 text-base",
};

export default function PillButton({
  href = "#",
  children,
  variant = "purple",
  size = "md",
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full font-semibold transition-colors duration-200 whitespace-nowrap ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  );
}
