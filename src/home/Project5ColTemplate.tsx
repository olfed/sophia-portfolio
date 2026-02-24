type Props = {
  navigate: (page: string) => void
}

export default function Project5ColTemplate({ navigate }: Props) {
  return (
    <div>
      <div
        className="
      grid 
      grid-cols-5 
      [grid-auto-rows:calc(100vw/7.5)] 
    "
      >
        <div className="bg-amber-300 col-span-5 row-span-2 ">
          <button
            className="cursor-pointer transition-transform duration-75 hover:rotate-3"
            onClick={() => navigate("work")}
          >
            go work
          </button>
          <br />
          <button
            className="cursor-pointer transition-transform duration-75 hover:rotate-3"
            onClick={() => navigate("home")}
          >
            go home
          </button>
          <h1 className="text-9xl">sophias work</h1>
          <h1 className="text-5xl">hire pls...</h1>
        </div>
      </div>
      <div
        className="
      grid 
      grid-cols-5
      [grid-auto-rows:calc(100vw/7)] 
    "
      >
        <div className="bg-red-300 col-span-2 row-span-3"></div>
        <div className="bg-blue-300 col-span-3 row-span-3"></div>
        <div className="bg-green-300 col-span-2 row-span-4"></div>
        <div className="col-span-1 row-span-2"></div>
        <div className="bg-yellow-300 col-span-2 row-span-2"></div>
        <div className="bg-purple-300 col-span-3 row-span-4"></div>
        <div className="bg-pink-300 col-span-2 row-span-4"></div>
        <div className="bg-indigo-300 col-span-2 row-span-3"></div>
        <div className="bg-orange-300 col-span-5 row-span-2"></div>
        <div className="bg-cyan-300 col-span-3 row-span-3"></div>
        <div className="col-span-2 row-span-1"></div>
        <div className="bg-emerald-300 col-span-2 row-span-3"></div>
        <div className="bg-fuchsia-300 col-span-2 row-span-2"></div>
        <div className="bg-gray-300 col-span-3 row-span-4"></div>
        <div className="bg-lime-300 col-span-2 row-span-2"></div>
        <div className="col-span-2 row-span-1"></div>
        <div className="bg-violet-300 col-span-2 row-span-3"></div>
        <div className="bg-rose-300 col-span-3 row-span-5"></div>
        <div className="bg-blue-300 col-span-2 row-span-5"></div>
        <div className="bg-teal-300 col-span-3 row-span-3"></div>
        <div className="bg-sky-300 col-span-5 row-span-2"></div>
      </div>
    </div>
  )
}
