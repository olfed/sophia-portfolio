import { motion } from "framer-motion"
import React from "react"
type Props = {
  navigate: (page: string) => void
}

type CardProps = {
  color: string
  index: number
  isFront: boolean
  onClick: () => void
  isHovered: boolean
}

const CardTemplate = ({
  color,
  index,
  isFront,
  onClick,
  isHovered,
}: CardProps) => {
  // Base rotation: front card 0, others increasing rotation by index (starting from 1)
  const baseRotate = isFront ? 0 : index * 5

  return (
    <motion.div
      layout="position"
      className="absolute h-full w-full rounded-xl shadow-xl"
      style={{
        background: color,
        zIndex: 100 - index,
      }}
      onClick={onClick}
      initial={false}
      animate={
        isHovered ? { rotate: baseRotate, x: index * 40 } : { rotate: 0, x: 0 }
      }
      transition={{
        layout: { type: "spring", stiffness: 300, damping: 30 },
        type: "spring",
        stiffness: 200,
        damping: 20,
      }}
    />
  )
}

export default function ProjectExperimentalTemplate({ navigate }: Props) {
  const [cards, setCards] = React.useState([
    "red",
    "blue",
    "green",
    "purple",
    "orange",
  ])
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="absolute top-2.5 left-2.5 z-50">
        <button onClick={() => navigate("work")}>go work</button>
        <br />
        <button onClick={() => navigate("home")}>go home</button>
      </div>

      <motion.div
        className="relative w-8/12 h-8/12"
        initial={false}
        animate="initial"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {cards.map((color, index) => {
          const isFront = index === 0
          return (
            <CardTemplate
              key={color}
              color={color}
              index={index}
              isFront={isFront}
              isHovered={isHovered}
              onClick={() => {
                setCards((prev) => {
                  const newCards = [...prev]
                  if (isFront) {
                    // клик по передней → отправляем её назад, следующий вперёд
                    newCards.push(newCards.shift()!)
                  } else {
                    // клик по любой другой → выбранную вперёд, передний уходит назад
                    const clicked = newCards.splice(index, 1)[0]
                    newCards.push(newCards.shift()!)
                    newCards.unshift(clicked)
                  }
                  return newCards
                })
              }}
            />
          )
        })}
      </motion.div>
    </div>
  )
}
