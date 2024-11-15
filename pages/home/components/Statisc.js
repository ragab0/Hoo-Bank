import { statics } from "@/assets/data/data";

export default function Statisc() {
  return (
    <section className=" mt-mainMarginHalf">
      <ul className="btns flex justify-evenly max-lg:flex-col max-lg:items-center gap-y-8">
        {statics.map(({ number, text }, i) => (
          <li
            key={i}
            className="flex items-center gap-5"
            data-aos="fade-right"
            data-aos-delay={i * 100}
          >
            <h4 className=" text-[40px]">{number}</h4>
            <span className="text-gradient text-xl text-mainClr">{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
