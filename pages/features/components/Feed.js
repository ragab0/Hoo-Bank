import Quotes from "@/assets/svgs/quotes";
import Image from "next/image";

export default function Feed({ id, feed: { img, name, desc, title } }) {
  return (
    <article
      className={`${
        id === 0 ? "bg-black-gradient" : ""
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
  );
}
