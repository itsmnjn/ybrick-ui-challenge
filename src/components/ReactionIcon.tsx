import React, { useState } from 'react'

interface ReactionIconProps {
  imgSrc: string
  reaction: string
  selectReaction: (reaction: string) => void
  closeReactions: () => void
}

const ReactionIcon: React.FC<ReactionIconProps> = ({
  imgSrc,
  reaction,
  selectReaction,
  closeReactions,
}) => {
  const [hintOpacity, setHintOpacity] = useState(0)

  const onMouseEnter = () => {
    setHintOpacity(100)
  }

  const onMouseLeave = () => {
    setHintOpacity(0)
  }

  return (
    <div
      className="flex flex-row justify-center items-center relative mr-3"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => {
        selectReaction(reaction)
        closeReactions()
      }}
    >
      <p
        className="absolute text-xs self-center rounded-2xl border py-1 px-2 bg-gray-800 text-gray-100 transition"
        style={{ top: -40, opacity: hintOpacity }}
        onMouseEnter={() => setHintOpacity(0)}
        onMouseLeave={() => setHintOpacity(100)}
      >
        {reaction}
      </p>

      <img
        src={imgSrc}
        className="w-8 cursor-pointer transform hover:scale-130 transition duration-200 ease-in-custom active:scale-110"
        alt={reaction}
      />
    </div>
  )
}

export default ReactionIcon
