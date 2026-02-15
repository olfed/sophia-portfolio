import { useEffect, useRef } from "react"

interface MouseTooltipProps {
  text: string
}

export default function MouseTooltip({ text }: MouseTooltipProps) {
  const tooltipRef = useRef(null)

  useEffect(() => {
    if (!text) return
    const tooltipEl = tooltipRef.current
    if (!tooltipEl) return
    let animationFrameId: number
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      if (tooltipEl) {
        tooltipEl.style.transform = `translate(${e.clientX + 15}px, ${e.clientY + 15}px)`
      }
    }
    const onMouseMove = (e: { clientX: number; clientY: number }) => {
      animationFrameId = requestAnimationFrame(() => handleMouseMove(e))
    }
    window.addEventListener("mousemove", onMouseMove)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [text])

  return (
    <div
      ref={tooltipRef}
      className="fixed pointer-events-none bg-amber-50 text-sm px-2 py-1 rounded shadow-lg z-50 transition-all duration-75"
      style={{ top: 0, left: 0 }}
    >
      {text}
    </div>
  )
}
