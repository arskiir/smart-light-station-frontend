import { useEffect } from 'react'
import { useDeviceState } from '../hooks/useDeviceState'

export default function Home() {
  const { ldr, lightStatus, motion } = useDeviceState()

  return <h1 className="text-3xl font-bold underline">{ldr}</h1>
}
