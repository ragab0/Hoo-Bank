import airbnb from "@/assets/imgs/airbnb.png";
import binance from "@/assets/imgs/binance.png";
import coinbase from "@/assets/imgs/coinbase.png";
import dropbox from "@/assets/imgs/dropbox.png";
import Image from "next/image";


const companies = [
  airbnb,
  binance,
  coinbase,
  dropbox,
]


export default function Companies() {
  return (
    <section className="my-[100px]">
      <ul className="btns flex justify-evenly max-lg:flex-col max-lg:items-center gap-y-8">
        {
          companies.map((comp, i) => (
            <li key={i} className="flex items-center">
              <button>
                <Image alt={`img-${i}`} src={comp} className=" max-w-[190px]" />
              </button>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
