import Image from "next/image";
import { HeroImg } from "@/assets/imgs";
import { Discount } from "@/assets/svgs";
import GetStarted from "@/components/GetStarted";

const start = 500;

export default function Header() {
  return (
    <section className="hero__body grid md:grid-cols-2 gap-y-32 items-center">
      <div className="left-side mt-8">
        <p
          className="bg-discount-gradient p-2 w-fit flex items-center flex-wrap gap-2 rounded-2xl"
          data-aos="fade-up"
          data-aos-delay={start}
        >
          <Discount />
          <span className="text-white">20%</span> DISCOUNT FOR{" "}
          <span className="text-white">1 MONTH</span> ACCOUNT
        </p>
        <div>
          <h1
            className="linear-before"
            data-aos="fade-up"
            data-aos-delay={start + 100}
          >
            The Next
            <span className="text-gradient flex items-center">
              Generation
              <GetStarted />
            </span>
            Payment Method.
          </h1>
        </div>
        <p
          className="my-12 text-lg max-w-[480px] font-light"
          data-aos="fade-up"
          data-aos-delay={start + 200}
        >
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div
        className={`img-wrapper flex justify-center items-end md:my-0 my-10 relative`}
        data-aos="fade-in"
        data-aos-delay={start + 600}
      >
        <Image
          alt="hero-img"
          className="relative w-full h-full"
          src={HeroImg}
          priority={true}
        />
        {/* <div className="absolute z-[0] w-[40%] h-[35%] opacity-100 top-0 filter-[900px]" /> */}
        {/* <div className="absolute z-[0] w-[40%] h-[35%] opacity-100 top-0 filter-[900px]" /> */}
        {/* <div className="absolute z-[1] w-[80%] h-[80%] opacity-100 rounded-full bottom-40" /> */}
      </div>
    </section>
  );
}
