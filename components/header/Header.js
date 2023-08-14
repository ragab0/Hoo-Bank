import Image from "next/image";
import Logo from "@/assets/svgs/logo";

const links = [
  {
    name: "home",
  },{
    name: "what is GPT?",
    link: "GPT",
  },{
    name: "open AI",
    link: "open_ai"
  },{
    name: "studies",
  },{
    name: "library",
  },
]

export default function Header() {
  return (
    <header className="container text-lg flex items-center gap-16 mt-12">
        <a href="#">
          <Logo width={100} />
        </a>
        <div className='menu flex w-full justify-between items-center'>
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
