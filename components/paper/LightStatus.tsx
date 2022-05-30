import { FC } from 'react'
import { DeviceState } from '../../types/device-state'
import Paper from './base'

const LightStatusPaper: FC<{
  value?: DeviceState['LightStatus']
  className: string
}> = ({ value, className = '' }) => {
  return (
    <Paper
      className={className}
      img="/paper_light_status.png"
      title="LIGHT"
      value={value === undefined ? '' : value === 1 ? 'ON' : 'OFF'}
    ></Paper>
  )
}

export default LightStatusPaper
