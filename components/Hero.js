import { HeroImg } from "@/assets/imgs";
import Image from 'next/image';
import { Discount } from "@/assets/svgs";
import GetStarted from "./GetStarted";


export default function Hero() {
  return (
    <section className="hero__body grid md:grid-cols-2 gap-y-32 items-center">
      <div className='left-side mt-8'>
        <p className='bg-discount-gradient p-2 w-fit flex items-center flex-wrap gap-2 rounded-2xl'>
          <Discount />
          <span className='text-white'>20%</span> DISCOUNT FOR <span className='text-white'>1 MONTH</span> ACCOUNT</p>
        <div>
          <h1>
            The Next 
            <span className='text-gradient flex items-center'>
              Generation
              <GetStarted />
            </span>
            Payment Method.
          </h1>
        </div>
        <p className='my-12 text-lg max-w-[480px] font-light'>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.
        </p>
      </div>
      <div className={`flex justify-center items-end md:my-0 my-10 relative`}>
        <Image alt="hero-img" className="w-[100%] h-[100%] relative z-[5]" src={HeroImg} priority={true} />
        <div className="absolute z-[0] w-[40%] h-[35%] opacity-100 top-0 filter-[900px]" />
        <div className="absolute z-[1] w-[80%] h-[80%] opacity-100 rounded-full bottom-40" />
      </div>
    </section>
  )
}