import Hero from '@/pages/hero/Hero';
import Footer from '@/components/Footer';
import About from '@/pages/about/About';
import Companies from '@/components/Companies';
import TryService from '@/components/TryService';
import Features from '@/pages/features/Features';

export default function Home() {
  return (
    <main id='home' className='container'>
      <Hero />
      <About />
      <Features />
      <Companies />
      <TryService />
      <Footer />
    </main>
  )
}
