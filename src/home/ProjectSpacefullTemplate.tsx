type Props = {
  navigate: (page: string) => void
}

export default function ProjectSpacefullTemplate({ navigate }: Props) {
  return (
    <div className="grid grid-cols-12 auto-rows-fr min-h-screen mb-0 mt-0 pb-5 pt-5 m-5 gap-5 select-none">
      {/* navigation */}
      <div className="col-start-12 col-end-12 row-start-1 row-end-1 flex flex-col items-center justify-center text-center">
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

      {/* FIRST BLOCK */}
      <div className="col-span-6 row-span-11 row-start-2 col-start-1 place-self-center w-full h-full bg-lime-300"></div>

      <div className="col-span-4 row-span-3 row-start-10 col-start-8 place-self-center w-full h-full">
        <span className="place-self-end block w-full h-full align-bottom">
          a lot of text a lot of text a lot of text a lot of text a lot of text
          a lot of text a lot of text a lot of text a lot of text a lot of text
          a lot of text a lot of text a lot of text a lot of text a lot of text
          a lot of text a lot of text a lot of text a lot of text a lot of text
        </span>
      </div>

      {/* EMPTY +2 ROWS */}
      <div className="col-span-12 row-span-3"></div>

      {/* SECOND BLOCK (автоматически станет ниже на +2 строки) */}
      <div className="col-span-6 row-span-11 col-start-1 place-self-center w-full h-full bg-lime-300"></div>

      <div className="col-span-4 row-span-3 col-start-8 place-self-center w-full h-full">
        <span className="place-self-end block w-full h-full align-bottom">
          a lot of text a lot of text a lot of text a lot of text a lot of text
          a lot of text a lot of text a lot of text a lot of text a lot of text
          a lot of text a lot of text a lot of text a lot of text a lot of text
          a lot of text a lot of text a lot of text a lot of text a lot of text
        </span>
      </div>
    </div>
  )
}
