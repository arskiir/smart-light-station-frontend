import { FC } from 'react'

const Paper: FC<{ title: string; value?: number | string; img: string }> = ({
  title,
  value,
  img,
}) => {
  return (
    <div className="relative inline-block">
      <div className="absolute w-full h-full flex flex-col justify-center items-center gap-y-4">
        <p className="text-4xl whitespace-pre-wrap">{title}</p>
        <p className="text-[#A81D1D] text-5xl">{value ?? '-'}</p>
      </div>
      <img src={img} alt="" className="w-44" />
    </div>
  )
}

export default Paper
