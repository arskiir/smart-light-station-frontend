import LDRPaper from '../components/paper/ldr'
import LightStatusPaper from '../components/paper/LightStatus'
import MotionPaper from '../components/paper/Motion'
import { useDeviceState } from '../hooks/useDeviceState'

export default function Home() {
  const { ldr, lightStatus, motion } = useDeviceState()

  return (
    <div className="space-x-10">
      <LDRPaper value={ldr}></LDRPaper>
      <LightStatusPaper value={lightStatus}></LightStatusPaper>
      <MotionPaper value={motion}></MotionPaper>
    </div>
  )
}
