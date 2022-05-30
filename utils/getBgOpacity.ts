export const getBgOpacity = (ldr?: number, maxLdr = 2400) => {
  if (!ldr) return 0
  const opacity = 1 - ldr / maxLdr
  console.log(opacity)
  if (opacity > 1) {
    return 1
  }
  if (opacity < 0.1) {
    return 0.1
  }
  return opacity
}
