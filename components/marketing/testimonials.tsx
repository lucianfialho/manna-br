import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Maria Silva",
    role: "Estudante",
    content: "Finalmente encontrei uma forma de estudar a Bíblia que se encaixa na minha rotina corrida. As lições são curtas, mas muito profundas!",
    rating: 5,
  },
  {
    name: "João Santos",
    role: "Líder de Jovens",
    content: "Uso o Manna BR com meu grupo de jovens. O sistema de gamificação deixa todos super engajados e competindo de forma saudável!",
    rating: 5,
  },
  {
    name: "Ana Costa",
    role: "Professora",
    content: "Como professora de escola dominical, recomendo para todos. A qualidade do conteúdo é excelente e a abordagem é muito didática.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-fluid-sm md:px-fluid-lg bg-gradient-warm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O que nossos alunos dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Junte-se a milhares de pessoas que já transformaram seu estudo bíblico
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
