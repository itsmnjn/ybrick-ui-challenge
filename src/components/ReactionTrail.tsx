import React from 'react'
import { useTrail, a } from '@react-spring/web'

interface ReactionTrailProps {
  reactionsOpacity: number
  reactionsZIndex: number
}

const ReactionTrail: React.FC<ReactionTrailProps> = ({
  reactionsOpacity,
  reactionsZIndex,
  children,
}) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 2.7, tension: 3000, friction: 105 },
    from: { opacity: 0, y: 12 },
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
