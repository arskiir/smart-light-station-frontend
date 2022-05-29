import { FC } from 'react'
import { DeviceState } from '../../types/device-state'
import Paper from './base'

const LDRPaper: FC<{ value?: DeviceState['LDR'] }> = ({ value }) => {
  return <Paper img="/paper_ldr.png" title="LDR" value={value}></Paper>
}

export default LDRPaper
