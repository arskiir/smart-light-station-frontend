import LDRPaper from '../components/paper/ldr'
import LightStatusPaper from '../components/paper/LightStatus'
import MotionPaper from '../components/paper/Motion'
import PaperSet from '../components/PaperSet'
import { useDeviceState } from '../hooks/useDeviceState'

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <PaperSet className="absolute top-1/2 -translate-y-1/5 left-1/2 -translate-x-1/2" />
      <img
        src="/lamp.png"
        alt="lamp"
        className="left-1/2 -translate-x-1/2 top-0 absolute"
      />
    </main>
  )
}
