type Props = {
  navigate: (page: string) => void
}

export default function ProjectKanyeExactCopy({ navigate }: Props) {
  return (
    <div
      className="
      grid 
      grid-cols-7 
      [grid-auto-rows:calc(100vw/7)] 
    "
    >
      <div className="bg-red-300 col-span-2 row-span-3"></div>
      <div className="bg-blue-300 col-span-4 row-span-3"></div>
      <div className="bg-green-300 col-span-4 row-span-2"></div>
      <div className="bg-yellow-300 col-span-3 row-span-3"></div>

      <div className="bg-purple-300 col-span-3 row-span-3"></div>

      <div className="bg-pink-300 col-span-4 row-span-3"></div>

      <div className="bg-indigo-300 col-span-4 row-span-3"></div>
      <div className="bg-orange-300 col-span-3 row-span-3"></div>
    </div>
  )
}
