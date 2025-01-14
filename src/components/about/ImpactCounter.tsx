import React from 'react';
import { useEffect, useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface CounterProps {
  value: number;
  label: string;
  description: string;
  icon: LucideIcon;
  suffix?: string;
}

export function ImpactCounter({ value, label, description, icon: Icon, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 20;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <Icon className="h-8 w-8 text-primary-600" />
        <div>
          <p className="text-2xl font-bold text-gray-900">
            {count}{suffix}
          </p>
          <p className="text-sm font-medium text-gray-500">{label}</p>
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
}