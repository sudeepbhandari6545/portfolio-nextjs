import Image from 'next/image'
import React from 'react'
import disney from '../public/assets/projects/disney.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const Disney = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={disney}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Disney Clone</h2>
          <h3>React JS / style component / Vercel</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="text-3xl">Overview</h2>
          <p>
            This app was built using React JS and is hosted on Vercel. Users are
            able to search online marketplace for lodging, primarily homestays
            for vacation rentals, and tourism activities. You will be able to
            view information as well as the specific location of the property
            integrated with the Google Maps API.
          </p>
          <a
            href="https://github.com/sudeepbhandari6545/disney-clone"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://github.com/sudeepbhandari6545/disney-clone"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Styled components
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="cursor-pointer bg-blue-600 w-[70px] text-white text-center p-2 rounded-md">
            Back
          </p>
        </Link>
      </div>
    </div>
  )
}

export default Disney
