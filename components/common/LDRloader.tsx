"use client";

import TailspinLoader from "./TailspinLoader";

export default function LDRloader() {
  return (
    <div className="flex items-center justify-center w-full min-h-[200px]">
      <TailspinLoader size="40" color="#0D2E2C" />
    </div>
  );
}
