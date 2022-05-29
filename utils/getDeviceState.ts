import axios from '../node_modules/axios/index'
import { DeviceState } from './../types/device-state'

/**
 * Get device state from Netpie
 * @returns The device state
 */
export const getDeviceState = async (): Promise<DeviceState> => {
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
