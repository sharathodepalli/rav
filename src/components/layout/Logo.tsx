import React from "react";
import { Rocket } from "lucide-react";
import { SquareStack } from "lucide-react";

interface LogoProps {
  isDark?: boolean;
}

export function Logo({ isDark = false }: LogoProps) {
  return (
    <div className="flex items-center">
      <SquareStack
        className={`h-8 w-8 ${isDark ? "text-white" : "text-primary-600"}`}
      />
      <span
        className={`ml-2 text-xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
      >
        SHADES
      </span>
    </div>
  );
}
