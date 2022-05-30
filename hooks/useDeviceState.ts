import { useEffect, useState } from 'react'
import { DeviceState } from '../types/device-state'
import { getDeviceState } from '../utils/getDeviceState'

interface UseDeviceStateOptions {
  debug?: boolean
  updateInterval?: number
}

/**
 * @param updatePeriod The period in milliseconds to update the device state
 */
export const useDeviceState = (options: UseDeviceStateOptions = {}) => {
  const { debug = false, updateInterval = 1500 } = options

  const [state, setState] = useState<Partial<DeviceState>>({})

  useEffect(() => {
    const interval = setInterval(async () => {
      getDeviceState(debug).then(setState)
    }, updateInterval)

    return () => clearInterval(interval)
  })

  useEffect(() => {
    getDeviceState(debug).then(setState)
  }, [])

  return state
}
