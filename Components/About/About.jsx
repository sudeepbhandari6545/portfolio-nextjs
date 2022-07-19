import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            / / Hi there! My name is Sudeep Bhandari
          </p>
          <p className="py-2 text-gray-600">
            I am a student from CITE, Tinkune, Kathmandu. Currently studying
            Bachalor in Computer Application (BCA) learning to improve digital
            customer experience through my college . I am passionate about Web
            and Mobile App Development using JavaScript. I aspire to be a Full
            Front End Web Developer with HTML, CSS, JavaScript, React.js. I love
            continuous learning to improve my skills as well as add new tools
            under my belt. I work well in a team setting and believe in using my
            full potential towards providing better solutions to clients. I love
            learning about new technologies, what problems are they solving and
            How can I use them to build better and scalable products. My vision
            is to make a difference in the world through technology.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="https://www.sudeepbhandari1.com.np/Image/about-image.jpg"
            className="object-cover"
            alt="/"
            width="500px"
            height="700px"
          />
        </div>
      </div>
    </div>
  )
}

export default About
