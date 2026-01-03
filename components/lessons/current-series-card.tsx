import * as React from "react";
import { cn } from "@/lib/utils";

interface CurrentSeriesCardProps {
  title: string;
  subtitle: string;
  onClick?: () => void;
  className?: string;
}

export function CurrentSeriesCard({
  title,
  subtitle,
  onClick,
  className
}: CurrentSeriesCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full bg-gray-200 text-gray-600 rounded-2xl p-6 text-left transition-all hover:bg-gray-300",
        className
      )}
    >
      <div className="space-y-2">
        <p className="text-sm font-medium">{title}</p>
        <h2 className="text-lg font-medium leading-tight">{subtitle}</h2>
      </div>
    </button>
  );
}
