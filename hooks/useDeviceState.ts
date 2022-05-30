import { useEffect, useState } from 'react'
import { DeviceState } from '../types/device-state'
import { getDeviceState } from '../utils/getDeviceState'

/**
 * @param updatePeriod The period in milliseconds to update the device state
 */
export const useDeviceState = (updatePeriod: number = 1500) => {
  const [state, setState] = useState<Partial<DeviceState>>({})

  useEffect(() => {
    const interval = setInterval(async () => {
      getDeviceState().then(setState)
      
    }, updatePeriod)

    return () => clearInterval(interval)
  })

  useEffect(() => {
    getDeviceState().then(setState)
  }, [])

  return state
}
