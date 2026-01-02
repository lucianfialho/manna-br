import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="min-h-screen bg-gradient-warm flex items-center justify-center px-fluid-sm md:px-fluid-lg py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
          O Duolingo para Estudos Bíblicos
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Aprenda a Bíblia de forma divertida e gamificada, sem pressão.
          Lições interativas, progresso personalizado e muito mais.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" asChild>
            <Link href="/auth/signup">Começar Agora</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/auth/signin">Já tenho conta</Link>
          </Button>
        </div>

        {/* Métricas sociais */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-foreground">1M+</p>
            <p className="text-muted-foreground mt-2">Lições completadas</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-foreground">95%</p>
            <p className="text-muted-foreground mt-2">Acham mais fácil e divertido</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-primary-foreground">10K+</p>
            <p className="text-muted-foreground mt-2">Estudantes ativos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
