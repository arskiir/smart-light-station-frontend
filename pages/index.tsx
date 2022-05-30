import { useEffect, useState } from 'react'
import PaperSet from '../components/PaperSet'
import { useDeviceState } from '../hooks/useDeviceState'
import { getBgOpacity } from '../utils/getBgOpacity'
import { getStatusText } from '../utils/getStatusText'

export default function Home() {
  const state = useDeviceState({ debug: true })
  const [bgOpacity, setBgOpacity] = useState(getBgOpacity(state.LDR))
  const [statusText, setStatusText] = useState(getStatusText(state))

  useEffect(() => {
    setBgOpacity(getBgOpacity(state.LDR))
    setStatusText(getStatusText(state))
  }, [state])

  return (
    <main className="w-screen min-h-screen overflow-hidden">
      <span
        className={`font-depixel text-5xl absolute z-10 top-[37%] left-1/2 -translate-x-1/2 ${
          bgOpacity > 0.5 ? 'text-white' : 'text-black'
        }`}
      >
        {statusText}
      </span>
      <div
        className="bg-black w-full h-full absolute"
        style={{
          opacity: bgOpacity,
        }}
      ></div>

      <PaperSet
        state={state}
        className="absolute top-1/2 -translate-y-1/5 left-1/2 -translate-x-1/2"
      />
      <img
        src="/lamp.png"
        alt="lamp"
        className="left-1/2 -translate-x-1/2 top-0 absolute"
      />
    </main>
  )
}
