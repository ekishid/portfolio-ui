'use client'
import { useState } from 'react'
interface Props {
  company: string;
  dates: string;
}
export default function Experience(props: Props) {
  const { company, dates } = props
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <p className="font-extrabold flex items-center justify-between w-full">
        <span>
          {company} |
          <span className="font-extralight uppercase text-xs ms-1">{dates}</span>
        </span>
        <span className="cursor-pointer" onClick={() => setIsOpen(prevState => !prevState)}>{isOpen ? '-' : '+'}</span>
      </p>
      <p>Hey</p>
    </>
  )
}
