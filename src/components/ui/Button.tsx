import { Loader2 } from "lucide-react";
import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  isLoading?: boolean;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  isLoading = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
    secondary:
      "bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500",
    outline:
      "border-2 border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-primary-500",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-base",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        className,
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
      {children}
    </button>
  );
}
