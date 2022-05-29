import { FC } from 'react'
import { DeviceState } from '../../types/device-state'
import Paper from './base'

const MotionPaper: FC<{ value?: DeviceState['Motion'] }> = ({ value }) => {
  return <Paper img="/paper_motion.png" title="MOTION" value={value}></Paper>
}

export default MotionPaper
