"use client";

import * as React from "react";
import Image from "next/image";
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
      {/* Streak - Icon extraído do Manna via DevTools */}
      <div className="flex items-center gap-[6.4px]">
        <Image
          src="/imgs/learn/streak_icon.svg"
          alt="streak"
          width={24}
          height={24}
        />
        <span className="text-base font-normal text-foreground">{streak}</span>
      </div>

      {/* Points - Icon extraído do Manna via DevTools */}
      <div className="flex items-center gap-[6.4px]">
        <Image
          src="/imgs/learn/points_icon_manna_on.svg"
          alt="points"
          width={24}
          height={24}
        />
        <span className="text-base font-normal text-foreground">{points}</span>
      </div>

      {/* Hearts - Icon extraído do Manna via DevTools */}
      <div className="flex items-center gap-[6.4px]">
        <Image
          src="/imgs/learn/icon_heart_off.svg"
          alt="hearts"
          width={24}
          height={24}
        />
        <span className="text-base font-normal text-foreground">{hearts}</span>
      </div>
    </div>
  );
}
