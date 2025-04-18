import React from "react";

export function Button({ children, className = "", variant = "default", ...props }) {
  const baseStyle =
    variant === "outline"
      ? "border border-black text-black bg-transparent"
      : "bg-black text-white";

  return (
    <button
      className={`px-4 py-2 rounded ${baseStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
