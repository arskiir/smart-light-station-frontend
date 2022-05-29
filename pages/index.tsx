import LDRPaper from '../components/paper/ldr'
import LightStatusPaper from '../components/paper/LightStatus'
import MotionPaper from '../components/paper/Motion'
import { useDeviceState } from '../hooks/useDeviceState'

export default function Home() {
  const { LDR, Motion, LightStatus } = useDeviceState()

  return (
    <div className="space-x-10">
      <LDRPaper value={LDR}></LDRPaper>
      <LightStatusPaper value={LightStatus}></LightStatusPaper>
      <MotionPaper value={Motion}></MotionPaper>
    </div>
  )
}
