import React, { useState } from 'react'

import ReactionIcon from './ReactionIcon'
import ReactionTrail from './ReactionTrail'

interface ReactionButtonProps {
  className?: string | undefined
}

const ReactionButton: React.FC<ReactionButtonProps> = ({ className }) => {
  let timeout: NodeJS.Timeout

  const [reactionsOpacity, setReactionsOpacity] = useState(0)
  const [reactionsZIndex, setReactionsZIndex] = useState(-1) // use zIndex to fully hide reactions, else they are still *there* and trigger onMouseEnter()
  const [selectedReaction, setSelectedReaction] = useState('Star')

  const onMouseEnter = () => {
    clearTimeout(timeout)
    setReactionsOpacity(1)
    setReactionsZIndex(1)
  }

  const onMouseLeave = () => {
    timeout = setTimeout(() => {
      closeReactions()
    }, 500)
  }

  const closeReactions = () => {
    setReactionsOpacity(0)
    setTimeout(() => setReactionsZIndex(-1), 150) // setting zIndex back to -1 needs delay of 150 ms (default tailwind duration) in order for animation to complete, else element just pops out
  }

  const selectReaction = (reaction: string) => {
    console.log(`Reaction selected: ${reaction}`)
    setSelectedReaction(reaction)
  }

  return (
    <div
      className={`px-2 py-1 rounded-xl flex flex-row items-center hover:bg-gray-50 transition cursor-pointer ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* trail takes care of initial pop-up animation */}
      <ReactionTrail
        reactionsOpacity={reactionsOpacity}
        reactionsZIndex={reactionsZIndex}
      >
        <ReactionIcon
          imgSrc="./icons/star.svg"
          reaction="Star"
          closeReactions={closeReactions}
          selectReaction={selectReaction}
        />
        <ReactionIcon
          imgSrc="./icons/up.svg"
          reaction="Up"
          closeReactions={closeReactions}
          selectReaction={selectReaction}
        />
        <ReactionIcon
          imgSrc="./icons/down.svg"
          reaction="Down"
          closeReactions={closeReactions}
          selectReaction={selectReaction}
        />
        <ReactionIcon
          imgSrc="./icons/cash.svg"
          reaction="Cash"
          closeReactions={closeReactions}
          selectReaction={selectReaction}
        />
        <ReactionIcon
          imgSrc="./icons/wow.svg"
          reaction="Wow"
          closeReactions={closeReactions}
          selectReaction={selectReaction}
        />
        <ReactionIcon
          imgSrc="./icons/haha.svg"
          reaction="Haha"
          closeReactions={closeReactions}
          selectReaction={selectReaction}
        />
      </ReactionTrail>

      {/* selected reaction */}
      <img
        src={`./icons/${selectedReaction.toLowerCase()}.svg`} // svg icons have lowercase names
        className="w-5 mr-2"
        alt={selectedReaction}
      />
      <p className="text-base select-none">{selectedReaction}</p>
    </div>
  )
}

export default ReactionButton
