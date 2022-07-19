import Link from 'next/link'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineMail,
} from 'react-icons/ai'
import {
  BsFillPersonLinesFill,
  BsFillTelephoneFill,
  BsGithub,
  BsLinkedin,
} from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-[50vh]">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full ">
        <div>
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">
            Contact
          </p>
          <h2 className="py-4">Get In Touch</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 py-10">
          <div className="justify-items-center border-2 border-gray-400 py-5">
            <div className="text-center">
              <BsFillTelephoneFill
                className="mb-6 text-center m-auto"
                size={40}
              />
              <span className="font-bold">9867106545</span>
            </div>
          </div>

          <div className="justify-items-center border-2 border-gray-400 py-5">
            <div className="text-center">
              <MdEmail className="mb-6 text-center m-auto" size={40} />
              <span className="font-bold">sudeepbhandari6545@gmail.com</span>
            </div>
          </div>
          <div className="justify-items-center border-2 border-gray-400 py-5">
            <div className="text-center">
              <BsLinkedin className="mb-6 text-center m-auto" size={40} />
              <span className="font-bold capitalize underline">
                <a href="https://www.linkedin.com/in/sudeep-bhandari-a6b507213/">
                  {' '}
                  sudeep bhandari
                </a>
              </span>
            </div>
          </div>
          <div className="justify-items-center border-2 border-gray-400 py-5">
            <div className="text-center">
              <BsGithub className="mb-6 text-center m-auto" size={40} />
              <span className="font-bold underline">
                <a href="https://github.com/sudeepbhandari6545">
                  Sudeep Bhandari
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
