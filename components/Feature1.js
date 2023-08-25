import Image from "next/image";
import bill from "@/assets/imgs/bill.png"
import Apple from "@/assets/svgs/apple";
import Google from "@/assets/svgs/google";


export default function Feature1() {
  return (
    <section className="grid md:grid-cols-2 gap-8 gap-y-16">
      <Image alt="img" src={bill} width={550} />
      <div className="md:justify-self-end md:max-w-[470px]">
        <h2>Easily control your billing & invoicing.</h2>
        <p className="mt-6 mb-12">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div>
          <button className=" me-8">
            <Apple />
          </button>
          <button>
            <Google />
          </button>
        </div>
      </div>
    </section>
  )
}
