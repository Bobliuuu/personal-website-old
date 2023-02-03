import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import forestImg from '../public/forest.jpg'

export default function Intro() {
  return (
    <div
      className="section flex flex-col h-screen items-center justify-center"
      id="home"
    >
      <div>
        <h1 className="flex font-bold text-black sm:text-[2.5vw] text-[1.3rem] overflow-hidden border-solid my-0 mx-auto">
          Hey, I'm Jerry Zhu 👋! I'm a &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </h1>
        <span className="flex font-bold text-black sm:text-[2.5vw] text-[1.3rem] overflow-hidden border-solid my-0 mx-auto">
          <br />
          <Typewriter 
            words={['software developer.', 'machine learning engineer.', 'cybersecurity and web3 enthusiast.', 'competitive programmer.']}
            loop={false}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </div>
    </div>
  );
}