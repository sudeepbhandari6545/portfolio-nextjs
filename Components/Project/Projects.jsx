import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import ProjectItem from './ProjectItem'
import airbnb from '../../public/assets/projects/airbnb.png'
import merodinner from '../../public/assets/projects/merodinner.png'
import linkdin from '../../public/assets/projects/linkdin.png'
import disney from '../../public/assets/projects/disney.png'
const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Airbnb Clone"
            backgroundImg={airbnb}
            projectUrl="/Airbnb"
            tech="React JS"
          />
          <ProjectItem
            title="Merodinner (real project)"
            backgroundImg={merodinner}
            projectUrl="/Merodinner"
            tech="React JS"
          />
          <ProjectItem
            title="Linkidin Clone"
            backgroundImg={linkdin}
            projectUrl="/Linkdin"
            tech="React JS"
          />
          <ProjectItem
            title="Disney Clone"
            backgroundImg={disney}
            projectUrl="/Disney"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects
