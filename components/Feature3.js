import people1 from "@/assets/imgs/people01.png";
import people2 from "@/assets/imgs/people02.png";
import people3 from "@/assets/imgs/people03.png";
import Quotes from "@/assets/svgs/quotes";
import Image from "next/image";


const data = [
  {
    img: people1,
    name: "Herman Jensen",
    title: "Founder & Leader",
    desc: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver."
  },{
    img: people2,
    name: "Steve Mark",
    title: "Founder & Leader",
    desc: "Money makes your life easier. If you're lucky to have it, you're lucky."
  },{
    img: people3,
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    desc: "It is usually people in the money business, finance, and international trade that are really rich."
  },
]


export default function Feature3() {
  return (
    <section className="grid gap-8 gap-y-16">
      <div className="grid md:grid-cols-[auto_1fr] items-center max-md:flex-col gap-4 max-md:text-center">
        <h2 className="md:max-w-[470px]">What people are saying about us</h2>
        <p className="max-w-[450px] mx-auto">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {
          data.map(({img, name, desc, title}, i) => (
            <article key={i} className="bg-black-gradient max-w-[445px] min-w-[300px] grid grid-rows-[auto_1fr_auto] py-16 px-10 rounded-2xl">
              <Quotes />
              <p className=" mt-10 mb-8 text-lg text-white">{desc}</p>
              <figure key={i} className="flex items-center gap-5">
                <button>
                  <Image alt="img" src={img} width={48} height={48} />
                </button>
                <figcaption>
                  <h4>{name}</h4>
                  <p>{title}</p>
                </figcaption>
              </figure>
            </article>
          ))
        }
      </div>
    </section>
  )
}
