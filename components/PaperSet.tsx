import { FC } from 'react'
import { useDeviceState } from '../hooks/useDeviceState'
import LDRPaper from './paper/LDR'
import LightStatusPaper from './paper/LightStatus'
import MotionPaper from './paper/Motion'

export const PaperSet: FC<{ className: string }> = ({ className = '' }) => {
  const state = useDeviceState()

  return (
    <div className={`space-x-12 inline-flex ${className}`}>
      <LDRPaper value={state.LDR}></LDRPaper>
      <LightStatusPaper
        value={state.LightStatus}
        className="mt-12"
      ></LightStatusPaper>
      <MotionPaper value={state.Motion}></MotionPaper>
    </div>
  )
}

export default PaperSet
