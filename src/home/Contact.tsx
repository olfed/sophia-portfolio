type Props = {
  navigate: (page: string) => void
}

export default function Contact({ navigate }: Props) {
  return (
    <div className="grid grid-cols-12 grid-rows-12 h-screen mb-0 mt-0 pb-5 pt-5 m-5 gap-5 select-none">
      <div className="col-start-1 col-end-13 row-start-3 row-end-8 flex flex-col items-center justify-center text-center">
        <a
          className="transition-transform duration-75 hover:rotate-3"
          href="https://t.me/echinuc"
        >
          tg @echinuc
        </a>
        <a
          className="transition-transform duration-75 hover:-rotate-3"
          href="tel:+79992321336"
        >
          +7 999 232 1336
        </a>
        <a
          className="transition-transform duration-75 hover:rotate-3"
          href="mailto:Echinuc@gmail.com"
        >
          Echinuc@gmail.com
        </a>
        <br />
        <button
          className="cursor-pointer transition-transform duration-75 hover:rotate-3 select-none"
          onClick={() => navigate("home")}
        >
          go home
        </button>
      </div>
    </div>
  )
}
