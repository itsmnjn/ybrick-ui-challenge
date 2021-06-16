import React from 'react'
import ReactionButton from './components/ReactionButton'

const App: React.FC = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-50">
      {/* post box */}
      <div className="rounded shadow bg-white p-4 bg-white flex flex-col w-2/5">
        {/* title and flair */}
        <div className="flex-col flex mb-2">
          <h1 className="mr-3 text-xl font-semibold mb-2">
            GME is the only meme stock not mooning. Here's why.
          </h1>

          <div className="py-1 px-2 bg-gray-100 text-gray-600 rounded-xl border self-start flex-initial">
            <h6 className="text-xs">Opinion 👽</h6>
          </div>
        </div>

        {/* body */}
        <div className="text-sm border-b pt-2 pb-4">
          <p className="mb-2">
            I think whats happening is the HFs are trying to close their short
            positions on the cheaper stocks first. Its too expensive to close
            the shorts on GME. GME will be the last to get shorts covered due to
            the enormous expense.
          </p>

          <p className="mb-2">
            Their plan is for us to be like: "dang, everything got short
            squeezed except for GME, that must mean they already closed their
            positions in January, im just gonna sell all my shares now".
          </p>

          <p className="mb-2">
            They are so desperate to make us sell that they are taking a loss on
            all the other stocks. This is their last chance to make us sell
            before the shareholders meeting.
          </p>

          <p className="mb-3 font-bold">
            BUY AND HODL AND JUST DIAMOND HAND! WE GOT THIS!
          </p>

          {/* total reactions */}
          <div className="flex flex-row items-center">
            {/* reaction icons */}
            <div className="flex flex-row mr-2">
              <img src="./icons/star.svg" alt="Star" className="w-5" />
              <img
                src="./icons/up.svg"
                alt="Up"
                className="w-5"
                style={{ marginLeft: -2 }}
              />
              <img
                src="./icons/haha.svg"
                alt="Haha"
                className="w-5"
                style={{ marginLeft: -2 }}
              />
            </div>

            {/* reaction text */}
            <h2 className="text-sm font-medium text-gray-400">
              You and 2,332 others
            </h2>
          </div>
        </div>

        {/* reaction and comment buttons */}
        <div className="flex flex-row pt-4 relative">
          <ReactionButton className="mr-2" />

          {/* comment button */}
          <div className="px-2 py-1 rounded-xl flex flex-row items-center hover:bg-gray-50 transition cursor-pointer">
            <img
              src="./icons/comment.svg"
              className="w-5 mr-2"
              alt="speech bubble"
            />
            <p className="text-base select-none">Comment</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
