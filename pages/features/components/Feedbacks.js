import { feedbacks } from "@/assets/data/data";
import Quotes from "@/assets/svgs/quotes";
import Image from "next/image";

export default function Feedbacks() {
  return (
    <section>
      <div
        className="grid md:grid-cols-[auto_1fr] items-center max-md:flex-col gap-4 max-md:text-center linear-before"
        data-aos="fade-in"
      >
        <h2 className="md:max-w-[470px]">What people are saying about us</h2>
        <p className="max-w-[450px] mx-auto">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex flex-wrap justify-between gap-8 mt-mainMarginHalf">
        {feedbacks.map(({ img, name, title, desc }, i) => (
          <div
            className=" w-fit mx-auto"
            data-aos="flip-up"
            data-aos-delay={500 + i * 200}
            data-aos-anchor-placement={i !== 0 ? "top-bottom" : undefined}
          >
            <article
              className={`${
                i === 0 ? "bg-black-gradient" : ""
              } hover:bg-black-gradient max-w-[400px] min-w-[270px] grid grid-rows-[auto_1fr_auto] py-16 px-10 rounded-2xl h-full`}
            >
              <Quotes />
              <p className=" mt-10 mb-8 text-lg text-white">{desc}</p>
              <figure className="flex items-center gap-5">
                <button>
                  <Image alt="img" src={img} width={48} height={48} />
                </button>
                <figcaption>
                  <h4>{name}</h4>
                  <p>{title}</p>
                </figcaption>
              </figure>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}
