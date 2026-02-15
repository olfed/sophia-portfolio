import { useEffect, useState } from "react"

type Props = {
  navigate: (page: string) => void
}

interface RandomTextProps {
  texts: string[]
}

const name = [
  "sophia",
  "софья",
  "софiя",
  "sophie",
  "\u03a3\u03bf\u03c6\u03af\u03b1",
  "\u10e1\u10dd\u10e4\u10d8\u10d0",
  "\u053d\u0578\u0586\u0575\u0561",
  "\u05e1\u05d5\u05e4\u05d9\u05d4",
  "\u0938\u094b\u092b\u0940\u093e",
  "\u04e2\u0e0b\u0e1f\u0e40\u0e22\u0e32",
  "\uc18c\ud53c\uc544",
  "\u30bd\u30d5\u30a3\u30a2",
  "\u7d22\u83f2\u5a9a",
]

function RandomText({ texts }: RandomTextProps) {
  const [currentText, setCurrentText] = useState(texts[0])
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>
    const changeText = () => {
      const randomIndex = Math.floor(Math.random() * texts.length)
      setCurrentText(texts[randomIndex])
      const randomDelay = 200 + Math.random() * 500
      timeoutId = setTimeout(changeText, randomDelay)
    }
    timeoutId = setTimeout(changeText, 500)
    return () => clearTimeout(timeoutId)
  }, [])
  return <>{currentText}</>
}

export default function HomePage({ navigate }: Props) {
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen mb-0 mt-0 pb-5 pt-5 m-5 gap-5 select-none">
      <div className="col-start-1 col-end-13 row-start-3 row-end-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl mb-2">{<RandomText texts={name} />}</h1>
        <p>the most beautiful woman in the world</p>
        <p className="text-sm">also a designer</p>
      </div>
      <div className="col-span-1 row-span-1 row-start-9 col-start-5 place-self-center transition-transform duration-75 hover:rotate-3">
        <button className="cursor-pointer" onClick={() => navigate("about")}>
          about me
        </button>
      </div>
      <div className="col-span-1 row-span-1 row-start-4 col-start-3 place-self-center transition-transform duration-75 hover:-rotate-3">
        <button className="cursor-pointer" onClick={() => navigate("contact")}>
          contact
        </button>
      </div>
      <div className="col-span-1 row-span-1 row-start-2 col-start-8 place-self-center transition-transform duration-75 hover:rotate-3">
        <button className="cursor-pointer">behance</button>
      </div>
      <div className="col-span-1 row-span-1 row-start-7 col-start-7 place-self-center transition-transform duration-75 hover:-rotate-3">
        <button className="cursor-pointer" onClick={() => navigate("work")}>
          my work
        </button>
      </div>
      <div className="col-span-1 row-span-1 row-start-11 col-start-10 place-self-center transition-transform duration-75 hover:rotate-3">
        <button className="cursor-pointer">cv</button>
      </div>
    </div>
  )
}
