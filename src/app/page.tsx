'use client';
import { useState } from 'react';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Home() {
  const [theme, setTheme] = useState<'light'|'dark'>('light');
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center h-dvh p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <FontAwesomeIcon icon={faSun} className={`${theme === 'light' ? 'visible -top-[300px]' : 'invisible -top-[1300px]'} transition-all ease-in-out duration-300 absolute -right-[300px] max-h-[800px] min-h-[800px] text-[rgb(206,206,13,0.4)]`} />
      <FontAwesomeIcon icon={faMoon} className={`${theme === 'dark' ? 'visible -top-[300px]' : 'invisible -top-[1300px]'} transition-all ease-in-out duration-300 absolute -top-[200px] -left-[100px] max-h-[800px] min-h-[800px] rotate-[70deg] text-[rgb(245,245,245,0.4)]`} />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Content
        <button onClick={() => setTheme((prevState) => prevState === 'light' ? 'dark' : 'light')}>Toggle Theme</button>
      </main>
    </div>
  );
}
