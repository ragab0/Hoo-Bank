const statics = [
  {
    number: "3800+",
    text: "User Active",
  },{
    number: "230+",
    text: "TRUSTED BY COMPANY",
  },{
    number: "$230M+",
    text: "TRANSACTION",
  },
]


export default function Statisc() {
  return (
    <section className="mt-[80px] mb-[180px]">
      <ul className="btns flex justify-evenly max-lg:flex-col max-lg:items-center gap-y-8">
        {
          statics.map(({number, text}, i) => (
            <li key={i} className="flex items-center gap-5">
              <span className=" text-[40px] font-semibold">{number}</span>
              <span className="text-gradient text-xl text-mainClr">{text}</span>
            </li>
          ))
        }
      </ul>
    </section>
  )
}
