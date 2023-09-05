import { business } from "@/assets/data/data"
import BusinessFeature from "./BusinessFeature"


export default function Business() {
  return (
    <section className="grid md:grid-cols-2 gap-8 gap-y-16 mb-[160px]">
      <div className="max-w-[620px]">
        <h2>You do the business, we’ll handle the money.</h2>
        <p className="mt-6 mb-12">With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <button className="btn-primary">Get Started</button>
      </div>
      <div className="md:justify-self-end md:max-w-[470px]">
        {
          business.map((bus, i) => (
            <BusinessFeature key={i} id={i} bus={bus} />
          ))
          
        }
      </div>
    </section>
  )
}
