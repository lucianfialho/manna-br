import { CurrentSeriesCard } from "@/components/lessons/current-series-card";
import { LessonPath } from "@/components/lessons/lesson-path";
import { StatsHeader } from "@/components/lessons/stats-header";
import { BottomNavigation } from "@/components/lessons/bottom-navigation";

// Mock data - imagens reais do Manna extraídas via DevTools
const mockLessons = [
  {
    id: "1",
    title: "John 1",
    image: "https://s.themanna.app/manna/course_cover/light/series1_course1_light.webp",
    status: "completed" as const,
  },
  {
    id: "2",
    title: "John 2",
    image: "https://s.themanna.app/manna/course_cover/light/series1_course2_light.webp",
    status: "current" as const,
  },
  {
    id: "3",
    title: "John 3",
    image: "https://s.themanna.app/manna/course_cover/grey/series1_course3_grey.webp",
    status: "locked" as const,
  },
  {
    id: "4",
    title: "John 4",
    image: "https://s.themanna.app/manna/course_cover/grey/series1_course4_grey.webp",
    status: "locked" as const,
  },
  {
    id: "5",
    title: "John 5",
    image: "https://s.themanna.app/manna/course_cover/grey/series1_course5_grey.webp",
    status: "locked" as const,
  },
];

export default function LicoesPage() {
  return (
    <div className="min-h-screen bg-black pb-20">
      {/* Stats Header */}
      <StatsHeader streak={1} points={210} hearts={0} />

      {/* Main Content */}
      <main className="max-w-md mx-auto">
        {/* Current Series Card */}
        <div className="p-[21.2px]">
          <CurrentSeriesCard
            title="Current Series"
            subtitle="Christ's Life: Gospel Journey"
          />
        </div>

        {/* Lesson Path */}
        <LessonPath lessons={mockLessons} />
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
