import { FC } from 'react'
import Paper from './base'

const LDRPaper: FC<{ value?: number }> = ({ value }) => {
  return <Paper img="/paper_ldr.png" title="LDR" value={value}></Paper>
}

export default LDRPaper
