import React from "react";
import { Rocket } from "lucide-react";
import { SquareStack } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center">
      <SquareStack className="h-8 w-8 text-primary-600" />
      <span className="ml-2 text-xl font-bold text-gray-900">RAV</span>
    </div>
  );
}
