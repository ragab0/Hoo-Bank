import google from "@/assets/imgs/google.png";
import shopify from "@/assets/imgs/shopify.png";
import slack from "@/assets/imgs/slack.png";
import atlassian from "@/assets/imgs/atlassian.png";
import dropbox from "@/assets/imgs/dropbox.png";
import Image from "next/image";


const companies = [
  {
    name: "google",
    src: google,
  },{
    name: "shopify",
    src: shopify,
  },{
    name: "slack",
    src: slack,
  },{
    name: "atlassian",
    src: atlassian,
  },{
    name: "dropbox",
    src: dropbox,
  },
]

export default function Companies() {
  return (
    <section className="container my-32">
      <ul className="btns flex gap-12 justify-center">
        {
          companies.map(({name, src}, i) => (
            <li key={i} aria-label={name}>
              <Image alt={name} src={src} />
            </li>
          ))
        }
      </ul>
    </section>
  )
}
