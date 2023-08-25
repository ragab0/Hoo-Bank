import Header from '@/components/header/Header';
import HeroImg from "@/assets/imgs/robot.png";
import Image from 'next/image';
import Link from 'next/link';
import Discount from '@/assets/svgs/Discount';
import ArrowUp from '@/assets/svgs/arrow-up';
import Statisc from '@/components/Statisc';

export default function Hero() {
  return (
    <div className='hero-page'>
      <Header />
      <div className='hero__body grid md:grid-cols-2 gap-y-32 items-center'>
        <div className='left-side mt-8'>
          <p className='bg-discount-gradient p-2 w-fit flex items-center flex-wrap gap-2 rounded-2xl'>
            <Discount />
            <span className='text-white'>20%</span> DISCOUNT FOR <span className='text-white'>1 MONTH</span> ACCOUNT</p>
          <div className='relative w-fit'>
            <h1>
              The Next <span className='text-gradient block'>Generation</span> Payment Method.
            </h1>
          </div>
          <p className='my-12 text-xl texter max-w-[480px]'>
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
            We examine annual percentage rates, annual fees.
          </p>
          <button className='w-full flex items-center md:w-fit p-4 text-xl text-secondary border-secondary border-4 rounded-full'>
            Get Started
            <ArrowUp fill="#00f6ff" />
          </button>
        </div>
        <Image alt="Main-img" src={HeroImg} priority={true} />
      </div>
      <Statisc />
    </div>
  )
}