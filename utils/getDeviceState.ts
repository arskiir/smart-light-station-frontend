import { DeviceState } from './../types/device-state'

export const getDeviceState = async (): Promise<DeviceState> => {
  // TODO: Implement this function
  return {
    lightStatus: false,
    ldr: Math.round(Math.random() * 100),
    motion: Math.round(Math.random() * 100),
  }
}
