import { CurrentSeriesCard } from "@/components/lessons/current-series-card";
import { LessonPath } from "@/components/lessons/lesson-path";
import { StatsHeader } from "@/components/lessons/stats-header";
import { BottomNavigation } from "@/components/lessons/bottom-navigation";

// Mock data - depois virá do banco de dados
const mockLessons = [
  {
    id: "1",
    title: "João 1",
    image: "https://placehold.co/171x96/1CB0F6/FFF?text=João+1",
    status: "completed" as const,
  },
  {
    id: "2",
    title: "João 2",
    image: "https://placehold.co/171x96/FEC800/FFF?text=João+2",
    status: "current" as const,
  },
  {
    id: "3",
    title: "João 3",
    image: "https://placehold.co/171x96/CCCCCC/666?text=João+3",
    status: "locked" as const,
  },
  {
    id: "4",
    title: "João 4",
    image: "https://placehold.co/171x96/CCCCCC/666?text=João+4",
    status: "locked" as const,
  },
  {
    id: "5",
    title: "João 5",
    image: "https://placehold.co/171x96/CCCCCC/666?text=João+5",
    status: "locked" as const,
  },
  {
    id: "6",
    title: "João 6",
    image: "https://placehold.co/171x96/CCCCCC/666?text=João+6",
    status: "locked" as const,
  },
];

export default function LicoesPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
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
