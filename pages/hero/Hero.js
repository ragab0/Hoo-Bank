import Header from '@/components/header/Header'
import Image from 'next/image';
import AI from "@/assets/imgs/ai.png";
import People from "@/assets/imgs/people.png";
import "./Hero.css";

export default function Hero() {
  return (
    <section className='hero-section overflow-hidden'>
      <Header />
      <div className='hero__body container grid grid-cols-2 items-center'>
        <div>
          <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1>
          <p className='my-12 text-xl texter'>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
            Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
          </p>
          <div className='flex mb-8'>
            <input type="email" placeholder='Your Email Address' className=' px-8 py-6 text-xl bg-mainSectionDarked placeholder:opacity-50' />
            <button aria-label='Subscribe now!' className='btn-primary'>Get Started</button>
          </div>
          <div>
            <Image alt='people' src={People} className='inline-block me-4' />
            <span className=' text-xs'>1,600 people requested access a visit in last 24 hours</span>
          </div>
        </div>
        <div className='the-img'>
          <Image alt="ai-head" width="100%" src={AI} />
        </div>
      </div>
    </section>
  )
}