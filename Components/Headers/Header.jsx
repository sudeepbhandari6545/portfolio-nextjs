import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Header = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-gray-500">
        <Image
          src="https://www.sudeepbhandari1.com.np/Image/logo.png"
          alt="logo"
          width="145"
          height="50"
          className="cursor-pointer"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-white uppercase text-sm font-bold  cursor-pointer">
                home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-white uppercase text-sm font-bold  cursor-pointer">
                about
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-white uppercase text-sm font-bold  cursor-pointer">
                skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-white uppercase text-sm font-bold  cursor-pointer">
                project
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-white uppercase text-sm font-bold  cursor-pointer">
                contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden cursor-pointer" onClick={handleNav}>
            <AiOutlineMenu size={30} className="text-white" />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#555657] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 h-screen ease-in duration-500'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="https://www.sudeepbhandari1.com.np/Image/logo.png"
                alt="logo"
                width="145"
                height="50"
                className="cursor-pointer"
              />
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer bg-white"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-white">
                Let&#39;s build something legendary together
              </p>
            </div>
          </div>
          <div>
            <ul className="">
              <Link href="/">
                <li className="py-4 text-white uppercase text-sm font-bold  cursor-pointer">
                  home
                </li>
              </Link>
              <Link href="/about">
                <li className="py-4 text-white uppercase text-sm font-bold  cursor-pointer">
                  about
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-white uppercase text-sm font-bold  cursor-pointer">
                  skills
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-white uppercase text-sm font-bold  cursor-pointer">
                  project
                </li>
              </Link>
              <Link href="/">
                <li className="py-4 text-white uppercase text-sm font-bold  cursor-pointer">
                  contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="capitalize text-white font-bold">
                let's connect together
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn className="text-white" />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub className="text-white" />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail className="text-white" />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
