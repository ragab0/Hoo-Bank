import { business } from "@/assets/data/data";

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
        {business.map(({ heading, Logo, desc }, i) => (
          <div
            key={i}
            data-aos="fade-in"
            data-aos-delay={500 + i * 200}
            data-aos-anchor-placement={i !== 0 ? "top-bottom" : undefined}
          >
            <figure
              className={`${
                i === 1 ? "bg-black-gradient" : ""
              } hover:bg-black-gradient p-6 px-5 rounded-2xl flex items-center gap-5 mb-5`}
            >
              <button className="p-3 bg-[#09977C20] rounded-full hover:bg-[#09977d60]">
                <Logo width={40} height={40} />
              </button>
              <figcaption>
                <h4 className="mb-3">{heading}</h4>
                <p>{desc}</p>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
}
