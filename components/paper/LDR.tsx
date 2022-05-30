import { FC, useEffect, useState } from 'react'
import { DeviceState } from '../../types/device-state'
import Paper from './base'
import { TweenLite } from 'gsap'

const valueObj = {
  value: 1,
}

const LDRPaper: FC<{ value?: DeviceState['LDR'] }> = ({ value = 1 }) => {
  const [tweenValue, setTweenValue] = useState(value)

  useEffect(() => {
    TweenLite.to(valueObj, 0.5, {
      value,
      onUpdate: () => {
        setTweenValue(Math.round(valueObj.value))
      },
    })
  }, [value])

  return <Paper img="/paper_ldr.png" title="LDR" value={tweenValue}></Paper>
}

export default LDRPaper
