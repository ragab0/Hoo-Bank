"use client";
import { useState } from "react";
import Logo from "@/assets/svgs/logo";
import "./Header.css";
import Link from "next/link";

const links = [
  {
    name: "home",
  },{
    name: "about us",
    link: "about",
  },{
    name: "features",
  },{
    name: "solution",
  },
]

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center gap-14 mt-8 mb-4 relative z-10">
        <Link href="#">
          <Logo height={32} />
        </Link>
        {/* <span className=" lg:hidden ms-auto p-2 hover:opacity-80 rotate-90" onClick={() => setIsOpen(true)}>|||</span> */}
        <nav>
          <ul className={`menu hidden md:flex justify-between items-center gap-14 ${isOpen ? "opened": ""}`} onClick={() => setIsOpen(false)}>
            {links.map(({name, link}, i) => (
              <li key={i}>
                <Link href={"#" + (link || name)} className='p-2 cursor-pointer'>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
    </header>
  )
}
