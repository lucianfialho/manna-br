import { StatsHeader } from "@/components/lessons/stats-header";
import { BottomNavigation } from "@/components/lessons/bottom-navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function PerfilPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Stats Header */}
      <StatsHeader streak={1} points={210} hearts={0} />

      {/* Main Content */}
      <main className="max-w-md mx-auto p-4 space-y-6">
        <h1 className="text-3xl font-medium">Meu Perfil</h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">Streak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-medium text-primary">1</span>
                <span className="text-muted">dia</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-xl">XP Total</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-medium text-accent">210</span>
                <span className="text-muted">pts</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Progresso do Curso</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm">Gospel Journey</span>
                <span className="text-sm text-muted">2/6 completo</span>
              </div>
              <Progress value={33} />
            </div>
          </CardContent>
        </Card>

        {/* Conquistas */}
        <Card>
          <CardHeader>
            <CardTitle>Conquistas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 flex-wrap">
              <Badge>Primeira Lição</Badge>
              <Badge variant="secondary">Streak de 1 dia</Badge>
              <Badge variant="outline">200+ XP</Badge>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
