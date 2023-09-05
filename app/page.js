import Footer from '@/components/Footer';
import About from '@/pages/about/About';
import Companies from '@/components/Companies';
import TryService from '@/components/TryService';
import Features from '@/pages/features/Features';
import HomePage from '@/pages/home/Home';


export default function Home() {
  return (
    <main id='home' className='container'>
      <HomePage />
      <About />
      <Features />
      <Companies />
      <TryService />
      <Footer />
    </main>
  )
}
