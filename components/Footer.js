import Logo from "@/assets/svgs/logo";
import Link from "next/link";
import { socials } from "@/assets/data/data";
import { footerLinks } from "@/assets/data/data";

export default function Footer() {
  return (
    <footer id="library">
      <div className="body flex justify-between flex-wrap gap-8">
        <div>
          <Logo width={266} />
          <p className="max-w-xs mt-8">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        {footerLinks.map(({ heading, items }, i) => (
          <div key={i} className={heading}>
            <h4 className="mb-5">{heading}</h4>
            <ul>
              {items.map((item, j) => (
                <li key={j}>
                  <button className=" text-dimWhite mb-2">{item}</button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 py-10 border-t-2 border-[#3F3E45] flex flex-wrap gap-x-32 gap-y-8 justify-center md:justify-between">
        <p className=" inline-block">&copy; Copyright 2023</p>
        <Link
          href="https://ragab.vercel.app"
          className=" text-white font-bold text-base"
          aria-label="ragab portfolio"
        >
          Made with 🖤 by Ragab;
        </Link>
        <ul className="flex gap-4">
          {socials.map((S, i) => (
            <li key={i}>
              <button className=" text-dimWhite mb-2">
                <S />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
