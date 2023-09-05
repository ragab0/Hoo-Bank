import { aboutBuisnes } from "@/assets/data/data"


export default function AboutHeader() {
  return (
    <section className="grid md:grid-cols-2 gap-8 gap-y-16 mb-[160px]">
      <div className="max-w-[620px]">
        <h2>You do the business, we’ll handle the money.</h2>
        <p className="mt-6 mb-12">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <button className="btn-primary">Get Started</button>
      </div>
      <div className="md:justify-self-end md:max-w-[470px]">
        {
          aboutBuisnes.map(({Logo, heading, desc}, i) => (
            <figure key={i} className="bg-black-gradient p-6 px-5 rounded-2xl flex items-center gap-5 mb-5">
              <div className="p-3 bg-[#09977C20] rounded-full">
                <Logo width={40} height={40} />
              </div>
              <figcaption>
                <h4 className="mb-3">{heading}</h4>
                <p>{desc}</p>
              </figcaption>
            </figure>
          ))
        }
      </div>
    </section>
  )
}
