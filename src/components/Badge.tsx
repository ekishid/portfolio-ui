import { type ReactNode } from 'react'
interface Props {
  children: ReactNode
}
export default function Badge(props: Props) {
  const {
    children
  } = props
  return (
    <div className="border-white border rounded-full px-3 py-1 w-min text-nowrap hover:scale-105 duration-300 ease-in-out transition-all text-xs font-extrabold">
      {children}
    </div>
  )
}