import { feedbacks } from "@/assets/data/data";
import Feed from "./Feed";

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
        {feedbacks.map((feed, i) => (
          <div
            className=" w-fit mx-auto"
            data-aos="flip-up"
            data-aos-delay={500 + i * 200}
            data-aos-anchor-placement={i !== 0 ? "top-bottom" : undefined}
          >
            <Feed key={i} id={i} feed={feed} />
          </div>
        ))}
      </div>
    </section>
  );
}
