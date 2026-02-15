import { useState } from "react"
import MouseTooltip from "./MouseTooltip"

type Props = {
  navigate: (page: string) => void
}

export default function ProjectTemplate({ navigate }: Props) {
  const [tooltipText, setTooltipText] = useState("")
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen mb-0 mt-0 pb-5 pt-5 m-5 gap-5 select-none">
      <div className="col-start-1 col-end-13 row-start-3 row-end-8 flex flex-col items-center justify-center text-center">
        <button
          className="cursor-pointer transition-transform duration-75 hover:rotate-3"
          onClick={() => navigate("work")}
        >
          go work
        </button>
        <button
          className="cursor-pointer transition-transform duration-75 hover:rotate-3"
          onClick={() => navigate("home")}
        >
          go home
        </button>
      </div>
      <div
        onMouseEnter={() => setTooltipText("другая подсказка")}
        onMouseLeave={() => setTooltipText("")}
        className="col-span-4 row-span-12 row-start-1 col-start-1 place-self-center w-full h-full bg-lime-300  "
      ></div>
      <div
        onMouseEnter={() => setTooltipText("люблю тебя, Софья")}
        onMouseLeave={() => setTooltipText("")}
        className="col-span-4 row-span-6 row-start-1 col-start-9 place-self-center w-full h-full bg-fuchsia-300 "
      ></div>
      <div
        onMouseEnter={() => setTooltipText("тырпыр")}
        onMouseLeave={() => setTooltipText("")}
        className="col-span-2 row-span-6 row-start-7 col-start-9 place-self-center w-full h-full bg-red-300  "
      ></div>
      <div
        onMouseEnter={() => setTooltipText("тудасюда")}
        onMouseLeave={() => setTooltipText("")}
        className="col-span-2 row-span-6 row-start-7 col-start-11 place-self-center w-full h-full bg-yellow-300 "
      ></div>
      <div
        onMouseEnter={() => setTooltipText("тавоэтаво")}
        onMouseLeave={() => setTooltipText("")}
        className="col-span-4 row-span-4 row-start-1 col-start-5 place-self-center w-full h-full bg-blue-300 "
      ></div>
      <div className="col-span-4 row-span-7 row-start-6 col-start-5 place-self-center w-full h-full">
        <span className="block w-full text-justify">
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text fucking a lot of text fucking a lot of text
          fucking a lot of text
        </span>
      </div>
      <MouseTooltip text={tooltipText} />
    </div>
  )
}
