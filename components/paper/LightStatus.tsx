import { FC } from 'react'
import Paper from './base'

const LightStatusPaper: FC<{ value?: boolean }> = ({ value }) => {
  return (
    <Paper
      img="/paper_light_status.png"
      title="LIGHT"
      value={value ? 'ON' : 'OFF'}
    ></Paper>
  )
}

export default LightStatusPaper
