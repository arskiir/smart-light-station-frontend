import { FC } from 'react'
import { DeviceState } from '../../types/device-state'
import Paper from './base'

const LightStatusPaper: FC<{ value?: DeviceState['LightStatus'] }> = ({
  value,
}) => {
  return (
    <Paper
      img="/paper_light_status.png"
      title="LIGHT"
      value={value && value === 1 ? 'ON' : 'OFF'}
    ></Paper>
  )
}

export default LightStatusPaper
