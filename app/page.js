import Hero from '@/pages/hero/Hero';
import Footer from '@/components/footer/Footer';
import Image from 'next/image';
import Companies from '@/components/companies/Companies';
import About from '@/pages/about/About';
import OpenAI from '@/pages/open_ai/OpenAI';
import Cta from '@/components/cta/Cta';
import Studies from '@/pages/studies/Studies';

export default function Home() {
  return (
    <main id='home'>
      <Hero />
      <Companies />
      <About />
      <OpenAI />
      <Cta />
      <Studies />
      <Footer />
    </main>
  )
}
