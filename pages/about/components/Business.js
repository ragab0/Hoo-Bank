import { business } from "@/assets/data/data";
import BusinessFeature from "./BusinessFeature";

export default function Business() {
  return (
    <section className="buisness-section grid md:grid-cols-2 gap-8 gap-y-16">
      <div className="max-w-[620px] linear-before" data-aos="zoom-in">
        <h2>You do the business, we’ll handle the money.</h2>
        <p className="mt-6 mb-12">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <button className="btn-primary" aria-label="Start now!">
          Get Started
        </button>
      </div>
      <div className="md:justify-self-end md:max-w-[470px]">
        {business.map((bus, i) => (
          <div
            data-aos="fade-in"
            data-aos-delay={500 + i * 200}
            data-aos-anchor-placement={i !== 0 ? "top-bottom" : undefined}
          >
            <BusinessFeature key={i} id={i} bus={bus} />
          </div>
        ))}
      </div>
    </section>
  );
}
