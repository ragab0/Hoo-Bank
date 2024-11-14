export default function TryService() {
  return (
    <section
      data-aos="flip-up"
      className="bg-black-gradient p-6 md:p-24 grid md:grid-cols-[1fr_auto] gap-12 justify-between items-center rounded-2xl bg-slate-500
      mt-mainMarginHalf
      "
    >
      <div>
        <h2 className="mb-6">Let’s try our service now!</h2>
        <p className=" max-w-md">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <button
        className="btn-primary w-fit md:justify-self-end"
        aria-label="Start now!"
      >
        Get Started
      </button>
    </section>
  );
}
