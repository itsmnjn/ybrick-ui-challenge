import React from 'react'
import { useTrail, a } from '@react-spring/web'

interface ReactionTrailProps {
  reactionsOpacity: number
  reactionsZIndex: number
  setSelectedReaction: React.Dispatch<React.SetStateAction<string>>
  closeReactions: () => void
}

const ReactionTrail: React.FC<ReactionTrailProps> = ({
  reactionsOpacity,
  reactionsZIndex,
  setSelectedReaction,
  closeReactions,
  children,
}) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 3.5, tension: 2000, friction: 100 },
    from: { opacity: 0, y: 15 },
    to: { opacity: 1, y: 0 },
    reset: true,
  })

  return (
    <div
      className="absolute flex p-2 rounded-3xl border shadow bg-white cursor-default transition"
      style={{
        top: -40,
        left: 0,
        opacity: reactionsOpacity,
        zIndex: reactionsZIndex,
      }}
    >
      {trail.map((style, index) => (
        <a.div key={index} style={style}>
          <a.div>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}

export default ReactionTrail
