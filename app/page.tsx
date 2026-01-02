import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { Testimonials } from "@/components/marketing/testimonials";
import { CTASection } from "@/components/marketing/cta-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <CTASection />
    </main>
  );
}
