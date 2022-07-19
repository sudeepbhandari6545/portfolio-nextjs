import Image from 'next/image'
import React from 'react'
import Skillbar from 'react-skillbars'
import Html from '../../public/assets/skills/html.png'
import Css from '../../public/assets/skills/css.png'
import Javascript from '../../public/assets/skills/javascript.png'
import ReactImg from '../../public/assets/skills/react.png'
import Tailwind from '../../public/assets/skills/tailwind.png'
import Github from '../../public/assets/skills/github1.png'
import Firebase from '../../public/assets/skills/firebase.png'
import NextJS from '../../public/assets/skills/nextjs.png'
import AWS from '../../public/assets/skills/aws.png'

const Skills = () => {
  const skills = [
    {
      type: 'CSS/HTML',
      level: 95,
      color: { bar: '#3498db', title: { text: '#fff', background: '#2980b9' } },
    },
    {
      type: 'Javascript',
      level: 85,
      color: { bar: '#4288d0', title: { text: '#fff', background: '#124e8c' } },
    },
    {
      type: 'React js',
      level: 75,
      color: { bar: '#2c3e50', title: { text: '#fff', background: '#2c3e50' } },
    },
    {
      type: 'Next Js',
      level: 40,
      color: { bar: '#5a68a5', title: { text: '#fff', background: '#46465e' } },
    },
    {
      type: 'Bootstrap',
      level: 95,
      color: { bar: '#525252', title: { text: '#fff', background: '#333333' } },
    },
    {
      type: 'GitHub',
      level: 75,
      color: { bar: 'black', title: { text: '#111', background: '#fff' } },
    },
    {
      type: 'Hosting',
      level: 80,
      color: { bar: '#2ecc71', title: { text: '#fff', background: '#27ae60' } },
    },
  ]
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Html} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Css} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Firebase} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={NextJS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[75%] mt-20">
          <Skillbar skills={skills} height={40} />
        </div>
      </div>
    </div>
  )
}

export default Skills
