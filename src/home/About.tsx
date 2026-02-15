type Props = {
  navigate: (page: string) => void
}

export default function About({ navigate }: Props) {
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen mb-0 mt-0 pb-5 pt-5 m-5 gap-5 select-none">
      <div className="col-start-1 col-end-13 row-start-3 row-end-8 flex flex-col items-center justify-center text-center">
        <p>my anxiety might be chronic</p>
        <p>but this ass is iconic</p>
        <br />
        <button
          className="cursor-pointer transition-transform duration-75 hover:rotate-3"
          onClick={() => navigate("home")}
        >
          go home
        </button>
      </div>
    </div>
  )
}
