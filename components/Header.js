"use client";
import { useState } from "react";
import { navLinks } from "@/assets/data/data";
import { Logo, Close, Menu } from "@/assets/svgs";
import Link from "next/link";
import "./Components.css";


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header flex justify-between items-center gap-14 mt-8 mb-4 relative z-10">
        <Link href="#">
          <Logo height={32} />
        </Link>
        <span className=" md:hidden ms-auto p-2 hover:opacity-80 rotate-90 relative z-20" onClick={() => setIsOpen(o => !o)}>
          { isOpen 
            ? <Close className="hidden" /> 
            : <Menu className="-rotate-90" />
          }
        </span>
        <nav>
          <ul className={`menu hidden md:flex justify-between items-center gap-8 lg:gap-14 ${isOpen ? "opened": ""}`} 
              onClick={() => 
              setIsOpen(false)}
          >
            {navLinks.map((name, i) => (
              <li key={i}>
                <Link href={"#" + (name.split(" ")[0])} 
                className={`p-2 capitalize ${i===0 ? `text-white font-bold` : '' }`}>{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
    </header>
  )
}
