"use client";
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "@/assets/data/data";
import { Logo, Close, Menu } from "@/assets/svgs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header flex justify-between items-center gap-14 mt-4 md:mt-8 mb-4 relative z-10">
      <Link href="#" data-aos="zoom-down">
        <Logo height={32} />
      </Link>

      <nav className="flex">
        <span
          className="md:hidden ms-auto p-2 cursor-pointer"
          onClick={() => setIsOpen((o) => !o)}
          data-aos="fade-in"
          data-aos-delay="200"
        >
          {isOpen ? (
            <Close className="w-5 h-5 active:rotate-90" />
          ) : (
            <Menu className="w-5 h-5 active:rotate-90" />
          )}
        </span>
        <ul
          className={`hidden animate-slideUp md:flex justify-between items-center gap-8 lg:gap-14 gap-y-2
          ${
            isOpen
              ? "max-md:flex sidbar max-md:flex-col max-md:justify-center max-md:absolute top-full right-0 max-md:p-4 max-md:bg-black-gradient rounded-lg"
              : ""
          }`}
          onClick={() => setIsOpen(false)}
        >
          {navLinks.map((name, i) => (
            <li
              key={i}
              data-aos="fade-down"
              data-aos-delay={50 * i}
              data-aos-offset="1"
            >
              <Link
                href={"#" + name.split(" ")[0]}
                className={`p-2 capitalize ${
                  i === 0 ? `text-white font-bold` : ""
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
