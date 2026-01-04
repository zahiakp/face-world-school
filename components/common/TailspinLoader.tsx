"use client";

import { useEffect, useState } from "react";

// Define the custom element for TypeScript properly for React 19
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "l-tailspin": {
        size?: string | number;
        stroke?: string | number;
        speed?: string | number;
        color?: string | number;
      };
    }
  }
}

interface TailspinLoaderProps {
  size?: string | number;
  stroke?: string | number;
  speed?: string | number;
  color?: string | number;
}

export default function TailspinLoader({
  size = "40",
  stroke = "5",
  speed = "0.9",
  color = "#0D2E2C",
}: TailspinLoaderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    async function init() {
      const { tailspin } = await import("ldrs");
      tailspin.register();
    }
    init();
  }, []);

  if (!isMounted) return null;

  return (
    <div className="flex items-center justify-center">
      <l-tailspin
        size={size}
        stroke={stroke}
        speed={speed}
        color={color}
      ></l-tailspin>
    </div>
  );
}
