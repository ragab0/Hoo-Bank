import React from 'react'

export default function BusinessFeature({id, bus: {Logo, heading, desc}}) {
  return (
    <figure className={`${id===1 ? "bg-black-gradient" : ""} hover:bg-black-gradient p-6 px-5 rounded-2xl flex items-center gap-5 mb-5`}>
      <button className="p-3 bg-[#09977C20] rounded-full hover:bg-[#09977d60]">
        <Logo width={40} height={40} />
      </button>
      <figcaption>
        <h4 className="mb-3">{heading}</h4>
        <p>{desc}</p>
      </figcaption>
    </figure>
  )
}
