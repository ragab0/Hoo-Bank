"use client";
import { useState } from "react";
import Logo from "@/assets/svgs/logo";
import "./Header.css";

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
    <header className="container text-lg flex items-center gap-16 mt-12 relative z-10">
        <a href="#">
          <Logo width={100} />
        </a>
        <span className=" lg:hidden ms-auto p-2 hover:opacity-80 rotate-90" onClick={() => setIsOpen(true)}>|||</span>
        <div className={`menu hidden lg:flex w-full justify-between items-center ${isOpen ? "opened": ""}`} onClick={() => setIsOpen(false)}>
          <nav>
            <ul className="btns flex items-center gap-4">
              {links.map(({name, link}, i) => (
                <li key={i}>
                  <a href={"#" + (link || name)} className='capitalize'>{name}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className='user capitalize'>
              <a href='#' className="btn-primary !bg-transparent hover:opacity-80">sign in</a>
              <a href='#' className="btn-primary rounded-2xl">sign up</a>
          </div>
        </div>
    </header>
  )
}
