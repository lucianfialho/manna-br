"use client";

import * as React from "react";
import { LessonCard } from "./lesson-card";
import { cn } from "@/lib/utils";

interface Lesson {
  id: string;
  title: string;
  image: string;
  status: "locked" | "current" | "completed";
}

interface LessonPathProps {
  lessons: Lesson[];
  className?: string;
}

export function LessonPath({ lessons, className }: LessonPathProps) {
  return (
    <div className={cn("relative px-[21.2px] py-8", className)}>
      {/* Path SVG - linha curva conectando as lições */}
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        viewBox="0 0 400 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 100 Q250 150 200 250 Q150 350 250 450 Q350 550 200 650"
          stroke="#84D7FF"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          opacity="0.3"
        />
      </svg>

      {/* Grid de lições */}
      <div className="relative space-y-8">
        {lessons.map((lesson, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={lesson.id}
              className={cn(
                "flex",
                isEven ? "justify-start" : "justify-end"
              )}
            >
              <LessonCard
                title={lesson.title}
                image={lesson.image}
                status={lesson.status}
                onClick={() => console.log(`Clicked ${lesson.title}`)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
