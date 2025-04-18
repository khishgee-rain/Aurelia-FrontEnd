import React from "react";

export function Card({ children }) {
  return (
    <div className="bg-black text-white rounded-xl shadow-lg border border-[#333] overflow-hidden">
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-6 md:p-8 lg:p-10 space-y-4">{children}</div>;
}
