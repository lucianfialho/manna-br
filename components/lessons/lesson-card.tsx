import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Lock } from "lucide-react";

interface LessonCardProps {
  title: string;
  image: string;
  status: "locked" | "current" | "completed";
  onClick?: () => void;
  className?: string;
}

export function LessonCard({
  title,
  image,
  status,
  onClick,
  className
}: LessonCardProps) {
  return (
    <button
      onClick={onClick}
      disabled={status === "locked"}
      className={cn(
        "relative group transition-all duration-200",
        status === "locked" && "opacity-60 cursor-not-allowed",
        className
      )}
    >
      {/* Container da imagem */}
      <div className="relative rounded-[17.2px] overflow-hidden w-[171px] h-[96px]">
        <Image
          src={image}
          alt={title}
          fill
          className={cn(
            "object-cover",
            status === "locked" && "grayscale"
          )}
        />

        {/* Overlay para locked */}
        {status === "locked" && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <Lock className="w-6 h-6 text-white" />
          </div>
        )}
      </div>

      {/* Label com título */}
      <div className="absolute top-0 left-0 right-0 bg-black/40 text-white px-[18px] py-[5.2px] rounded-t-[17.2px] text-sm font-medium">
        {title}
      </div>

      {/* Indicador de current (opcional) */}
      {status === "current" && (
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full border-2 border-white" />
      )}
    </button>
  );
}
