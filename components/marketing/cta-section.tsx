import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-20 px-fluid-sm md:px-fluid-lg bg-primary/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Comece sua jornada hoje
        </h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Milhares de pessoas já estão aprendendo. É grátis para começar e você pode cancelar a qualquer momento.
        </p>
        <Button size="lg" className="text-lg px-8 py-6 h-auto" asChild>
          <Link href="/auth/signup">Criar Conta Gratuita</Link>
        </Button>
        <p className="text-sm text-muted-foreground mt-4">
          Sem cartão de crédito necessário
        </p>
      </div>
    </section>
  );
}
