import Image from "next/image";
import { Card } from "@/assets/imgs";


export default function Deals() {
  return (
    <section className="grid md:grid-cols-2 gap-8 gap-y-16">
      <div className="max-w-[620px]">
        <h2>Find a better card deal in few easy steps.</h2>
        <p className="mt-6 mb-12">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
        <button className="btn-primary">Get Started</button>
      </div>
    <Image alt="Control-billings" src={Card} width={550} />
    </section>
  )
}
