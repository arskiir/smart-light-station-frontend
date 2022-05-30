import axios from '../node_modules/axios/index'
import { DeviceState } from './../types/device-state'

/**
 * Get device state from Netpie
 * @returns The device state
 */
export const getDeviceState = async (debug = false): Promise<DeviceState> => {
  if (debug)
    return {
      LDR: Math.round(Math.random() * 2400),
      LightStatus: Math.random() > 0.5 ? 1 : 0,
      Motion: Math.random() > 0.5 ? 1 : 0,
    }
  const {
    data: { data },
  } = await axios.get<{
    data: DeviceState
  }>('https://api.netpie.io/v2/device/shadow/data', {
    headers: {
      Authorization: `Device ${process.env.NEXT_PUBLIC_deviceId}`,
    },
  })
  return data
}
