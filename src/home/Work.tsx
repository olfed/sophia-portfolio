type Props = {
  navigate: (page: string) => void
}

export default function Work({ navigate }: Props) {
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen mb-0 mt-0 pb-5 pt-5 m-5 gap-5 select-none">
      <div className="col-start-1 col-end-13 row-start-3 row-end-8 flex flex-col items-center justify-center text-center">
        <button
          className="cursor-pointer transition-transform duration-75 hover:rotate-3"
          onClick={() => navigate("home")}
        >
          go home
        </button>
      </div>
      <div
        onClick={() => navigate("project-spacefull-template")}
        className="cursor-pointer col-span-1 row-span-1 row-start-9 col-start-5 place-self-center w-30 h-20 bg-fuchsia-300 transition-transform duration-75 hover:rotate-3"
      ></div>
      <div
        onClick={() => navigate("project-spacefull-template")}
        className="cursor-pointer col-span-1 row-span-1 row-start-4 col-start-3 place-self-center w-15 h-35 bg-lime-300 transition-transform duration-75 hover:-rotate-3"
      ></div>
      <div
        onClick={() => navigate("project-spacefull-template")}
        className="cursor-pointer col-span-1 row-span-1 row-start-2 col-start-8 place-self-center w-30 h-30 bg-red-300 transition-transform duration-75 hover:rotate-3"
      ></div>
      <div
        onClick={() => navigate("project-template")}
        className="cursor-pointer col-span-1 row-span-1 row-start-7 col-start-7 place-self-center w-35 h-15 bg-yellow-300 transition-transform duration-75 hover:-rotate-3"
      ></div>
      <div
        onClick={() => navigate("project-kanye-template")}
        className="cursor-pointer col-span-1 row-span-1 row-start-11 col-start-10 place-self-center w-20 h-30 bg-blue-300 transition-transform duration-75 hover:rotate-3"
      ></div>
    </div>
  )
}
