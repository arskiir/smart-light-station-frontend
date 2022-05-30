import { DeviceState } from '../types/device-state'

export const getStatusText = ({
  LightStatus,
  Motion,
}: Partial<DeviceState>): string => {
  if ([LightStatus, Motion].includes(undefined)) return 'Zzz'
  if (LightStatus === 1) return 'Light is ON'
  if (Motion === 1) return "Someone's here..."
  if (Motion === 0) return 'Not a soul in my sight'
  return "I'm all alone..."
}
