import Link from 'next/link'
import Badge from '@/components/Badge'
import Experience from '@/components/Experience'

export default function Home() {
  return (
    <div
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 sm:items-start">
        <div className="h-full">
          <h1 className="font-extrabold text-4xl">Eduardo Villarreal Caballero</h1>
          <h3 className="font-light text-lg uppercase font-mono">Welcome to my Portfolio</h3>
        </div>
        <div>
          <h1 className="font-extrabold text-4xl my-4">Technologies</h1>
          <div className="flex flex-row items-start gap-2">
            <Badge>JavaScript</Badge>
            <Badge>TypeScript</Badge>
            <Badge>React</Badge>
            <Badge>React Native</Badge>
            <Badge>Redux</Badge>
            <Badge>NodeJs</Badge>
            <Badge>NextJs</Badge>
          </div>
        </div>
        <div className="w-full">
          <h1 className="font-extrabold text-4xl my-4">Experience</h1>
          <ul className="gap-8 flex flex-col">
            <li>
              <Experience company="3Pillar Global" dates="Jul 2022 - Nov 2024" />
            </li>
            <li>
              <Experience company="EPAM Systems" dates="Apr 2022 - Jul 2022" />
            </li>
            <li>
              <Experience company="3Pillar Global" dates="Jul 2019 - Apr 2022" />
            </li>
            <li>
              <Experience company="iTexico" dates="Jul 2019 - Nov 2019" />
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-extrabold text-4xl my-4">Projects</h1>
          <div className="grid grid-cols-3 gap-2">
            <Link href="/projects/course-management"
                  className="border border-white hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
              <div className="h-32 bg-white">Image</div>
              <div className="p-4">
                <p className="cursor-pointer font-bold">Course Management App</p>
              </div>
            </Link>
            <Link href=""
                  className="border border-white hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
              <div className="p-4">
                <a className="cursor-pointer font-bold">Inventory App</a>
              </div>
              <div className="h-32 bg-white">Image</div>
            </Link>
            <Link href=""
                  className="border border-white hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
              <div className="h-32 bg-white">Image</div>
              <div className="p-4">
                <a className="cursor-pointer font-bold">ToDo App</a>
              </div>
            </Link>
            <Link href=""
                  className="border border-white hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer">
              <div className="h-32 bg-white">Image</div>
              <div className="p-4">
                <a className="cursor-pointer font-bold">Goals App</a>
              </div>
            </Link>

          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        ekishid - Portfolio | Developed with NextJS
      </footer>
    </div>
  )
}
