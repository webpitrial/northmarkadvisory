import AboutHero from "@/components/About/Hero";
import AdvisoryPhilosophy from "@/components/About/Philosophy/philosophy";
import Focus from "@/components/About/Focus";
import FAQ from '@/components/Home/FAQs'
import CTA from "@/components/CTA";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AdvisoryPhilosophy />
      <Focus />
      <FAQ />
      <CTA />
    </main>
  );
}
