import { HeroImg } from "@/assets/imgs";
import Image from 'next/image';
import { Discount, ArrowUp } from "@/assets/svgs";
import Statisc from '@/components/Statisc';


export default function Hero() {
  return (
    <section className="hero__body grid md:grid-cols-2 gap-y-32 items-center">
      <div className='left-side mt-8'>
        <p className='bg-discount-gradient p-2 w-fit flex items-center flex-wrap gap-2 rounded-2xl'>
          <Discount />
          <span className='text-white'>20%</span> DISCOUNT FOR <span className='text-white'>1 MONTH</span> ACCOUNT</p>
        <div className='relative w-fit'>
          <h1>
            The Next <span className='text-gradient block'>Generation</span> Payment Method.
          </h1>
        </div>
        <p className='my-12 text-lg max-w-[480px] font-light'>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.
        </p>
        <button className='w-full flex items-center justify-center md:w-fit p-4 text-xl bg-blue-gradient  rounded-full'>
          Get Started
          <ArrowUp />
        </button>
      </div>
      <Image alt="Main-img" src={HeroImg} priority={true} />
    </section>
  )
}
