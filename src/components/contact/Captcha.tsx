import React, { useEffect, useState } from "react";

interface CaptchaProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export function Captcha({ value, onChange, error }: CaptchaProps) {
  const [challenge, setChallenge] = useState("");

  const generateChallenge = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    setChallenge(`${num1} + ${num2}`);
  };

  useEffect(() => {
    generateChallenge();
  }, []);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Please solve: {challenge} = ?
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        placeholder="Enter the result"
      />
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
