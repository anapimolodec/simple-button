import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import {useState} from 'react'
import styles from '@/styles/Home.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [ccolor, setCcolor] = useState<string>("");

  function changeColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    setCcolor(randomColor);
  }

  return (
    <div className="flex flex-col justify-center items-center 
                                        w-screen h-screen bg-gray-300">
      <p className="font-mono text-xl text-center"> get a random color &#128071;</p>
        <button className = "rounded-full text-5xl m-4 p-8 shadow-xl" onClick={changeColor} style ={{backgroundColor: "#" + `${ccolor}`}}> &#128079; </button>
    </div>
  )
}