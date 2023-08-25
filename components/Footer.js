import Logo from "@/assets/svgs/logo";
import Facebook from "@/assets/svgs/social/facebook";
import Linkedin from "@/assets/svgs/social/linkedin";
import Twitter from "@/assets/svgs/social/twitter";
import Instagram from "@/assets/svgs/social/instagram";


const datas = [
  {
    heading: "Usefull Links",
    items: ["Content", "How it Works", "Create", "Explore", "Terms & Services"]
  },{
    heading: "Community",
    items: ["Help Center", "Partners", "Suggestions", "Blog", "Newsletters"]
  },{
    heading: "Partner",
    items: ["Our Partner", "Become a Partner"]
  },
]


const socials = [
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
]


export default function Footer() {
  return (
    <footer id="library" className="mt-[100px]">
      <div className="body flex justify-between flex-wrap gap-8">
        <div>
          <Logo width={266} />
          <p className="max-w-xs mt-8">A new way to make the payments easy, reliable and secure.</p>
        </div>
        {
          datas.map(({heading, items}, i) => (
            <div className={heading}>
              <h4 key={i} className="mb-5">{heading}</h4>
              <ul>
                {
                  items.map((item, i) => (
                    <li key={i}>
                      <button className=" text-dimWhite mb-2">{item}</button>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
      <div className="mt-10 py-8 border-t-2 border-[#3F3E45] flex justify-between">
        <div>
          <p className=" inline-block">Copyright &copy; 2023/08, Created by</p>
          <h5 className=" inline-block cursor-pointer indent-1">Ragab</h5>
        </div>
        <ul className="flex gap-4">
          {
            socials.map((S, i) => (
              <li key={i}>
                <button className=" text-dimWhite mb-2">
                  <S />
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    </footer>
  )
}
