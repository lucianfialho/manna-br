import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Target, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Lições Interativas",
    description: "Aprenda através de lições curtas e envolventes, projetadas para se encaixar na sua rotina diária.",
  },
  {
    icon: Target,
    title: "Progresso Personalizado",
    description: "Acompanhe seu crescimento com métricas detalhadas e veja sua jornada de aprendizado se desenvolver.",
  },
  {
    icon: Trophy,
    title: "Sistema de Recompensas",
    description: "Ganhe XP, conquiste emblemas e mantenha seu streak diário. Aprender nunca foi tão motivador!",
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Conecte-se com outros estudantes, compartilhe insights e cresça junto com uma comunidade engajada.",
  },
];

export function Features() {
  return (
    <section className="py-20 px-fluid-sm md:px-fluid-lg bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Torne seu estudo bíblico divertido
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Mantenha-se motivado, sem pressão. Aprenda no seu ritmo com ferramentas projetadas para o sucesso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-2 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
