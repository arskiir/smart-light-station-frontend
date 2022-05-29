import { FC } from 'react'
import Paper from './base'

const MotionPaper: FC<{ value?: number }> = ({ value }) => {
  return <Paper img="/paper_motion.png" title="MOTION" value={value}></Paper>
}

export default MotionPaper
