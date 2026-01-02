"use client";

import * as React from "react";
import Image from "next/image";
import { Flame, Coins, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsHeaderProps {
  streak?: number;
  points?: number;
  hearts?: number;
  className?: string;
}

export function StatsHeader({
  streak = 0,
  points = 0,
  hearts = 0,
  className
}: StatsHeaderProps) {
  return (
    <div className={cn(
      "flex items-center justify-end gap-4 px-4 py-3 bg-white border-b border-accent/20",
      className
    )}>
      {/* Streak */}
      <div className="flex items-center gap-[6.4px]">
        <Flame className="w-6 h-6 text-orange-500" fill="currentColor" />
        <span className="text-base font-normal text-foreground">{streak}</span>
      </div>

      {/* Points */}
      <div className="flex items-center gap-[6.4px]">
        <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center">
          <Coins className="w-4 h-4 text-white" />
        </div>
        <span className="text-base font-normal text-foreground">{points}</span>
      </div>

      {/* Hearts */}
      <div className="flex items-center gap-[6.4px]">
        <Heart
          className={cn(
            "w-6 h-6",
            hearts > 0 ? "text-red-500 fill-red-500" : "text-gray-300"
          )}
        />
        <span className="text-base font-normal text-foreground">{hearts}</span>
      </div>
    </div>
  );
}
