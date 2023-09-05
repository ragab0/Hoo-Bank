import HomePage from '@/pages/home/HomePage';
import AboutPage from '@/pages/about/AboutPage';
import FeaturesPage from '@/pages/features/FeaturesPage';
import Footer from '@/components/Footer';
import SolutionPage from '@/pages/solution/SolutionPage';


export default function Home() {
  return (
    <main id='home' className='container'>
      <HomePage />
      <AboutPage />
      <FeaturesPage />
      <SolutionPage />
      <Footer />
    </main>
  )
}
