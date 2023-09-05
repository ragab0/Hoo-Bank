import { ArrowUp } from "@/assets/svgs";
import Link from "next/link";


export default function GetStarted() {
  return (
      <Link href="#about" className="bg-blue-gradient ms-2 lg:ms-[10%] -translate-y-1/3 w-[100px] h-[100px]
      xl:w-[140px] xl:h-[140px] text-xl rounded-full grid grid-cols-1 items-center relative
      max-sm:w-[80px] max-sm:h-[80px] max-sm:text-sm
      animate-bounce hover:!animate-pulse cursor-pointer active:scale-90">
        <span className="text-gradient flex items-center justify-center text-center flex-wrap 
        before:absolute before:top-1 before:left-1 before:w-[calc(100%-8px)] before:h-[calc(100%-8px)] 
        before:bg-primary before:z-[-1] before:rounded-full before:cursor-pointer"
        >
          Get 
          <ArrowUp className="inline-block ms-1" />
          <span className="w-full">Started</span>
        </span>
    </Link>
  )
}