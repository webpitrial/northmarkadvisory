import FeaturedProperty from '@/components/Home/FeaturedProperty'
import Hero from '@/components/Home/Hero'
import Properties from '@/components/Home/Properties'
import Services from '@/components/Home/Services'
import Testimonial from '@/components/Home/Testimonial'
import CTA from "@/components/CTA";


export default function Home() {
  return (
    <main>
      <Hero />
      <Properties />
      <Services />
      <Testimonial />
      <CTA />
    </main>
  )
}
