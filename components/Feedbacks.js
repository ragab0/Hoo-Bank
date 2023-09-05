import { feedbacks } from "@/assets/data/data";
import Feed from "./Feed";

export default function Feedbacks() {
  return (
    <section>
      <div className="my-32 grid md:grid-cols-[auto_1fr] items-center max-md:flex-col gap-4 max-md:text-center">
        <h2 className="md:max-w-[470px]">What people are saying about us</h2>
        <p className="max-w-[450px] mx-auto">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className="flex flex-wrap justify-between gap-8">
        {
          feedbacks.map((feed, i) => (
            <Feed key={i} id={i} feed={feed} />
          ))
        }
      </div>
    </section>
  )
}
