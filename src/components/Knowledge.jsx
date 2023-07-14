import {
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiNetlify,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiSequelize,
  SiTypescript,
  SiVercel
} from '@icons-pack/react-simple-icons'
import React from 'react'

const Knowledge = () => {
  return (
    <section className='flex flex-col flex-wrap p-2'>
      <article className='mx-auto mb-5 border-2 rounded-md p-3'>
        <h3 className='text-2xl mb-3'>Tecnologias</h3>
        <div className='flex flex-row flex-wrap justify-around'>
          <div className='flex justify-center items-center hover:bg-yellow-800 p-2 rounded-md hover:scale-125 hover:text-white transform duration-200'>
            <SiJavascript className='fill-[#F7DF1E] bg-black' />
          </div>
          <div className='flex justify-center items-center hover:bg-cyan-800 p-2 rounded-md hover:scale-125 hover:text-white transform duration-200'>
            <SiReact className='fill-[#61DAFB]' />
          </div>
          <div className='flex justify-center items-center hover:bg-purple-800 p-2 rounded-md hover:scale-125 hover:text-white transform duration-200'>
            <SiRedux className='fill-[#764ABC]' />
          </div>
          <div className='flex justify-center items-center hover:bg-cyan-800 p-2 rounded-md hover:scale-125 hover:text-white transform duration-200'>
            <SiSequelize className='fill-[#52B0E7]' />
          </div>
          <div className='flex justify-center items-center hover:bg-green-800 p-2 rounded-md hover:scale-125 hover:text-white transform duration-200'>
            <SiNodedotjs className='fill-[#339933]' />
          </div>
          <div className='flex justify-center items-center hover:bg-teal-800 p-2 rounded-md hover:scale-125 hover:text-white transform duration-200'>
            <SiNetlify className='fill-[#00C7B7]' />
          </div>
          <div className='flex justify-center items-center hover:bg-gray-800 p-2 rounded-md hover:scale-125 hover:text-white transform duration-200'>
            <SiVercel className='fill-[#FFFFFF]' />
          </div>
          <div className='flex justify-center items-center hover:bg-sky-800 p-2 rounded-md hover:scale-125 hover:text-white transform duration-200'>
            <SiPostgresql className='fill-[#4169E1]' />
          </div>
          <div className='flex justify-center items-center hover:bg-green-800 p-2 rounded-md hover:scale-125 hover:text-white transform duration-200'>
            <SiGit className='' />
          </div>
          <div className='flex justify-center items-center hover:bg-gray-600 p-2 rounded-md hover:scale-125 hover:text-white transform duration-200'>
            <SiGithub className='fill-black' />
          </div>
        </div>
      </article>
      <article className='mb-5 border-2 rounded-md p-3'>
        <h3 className='text-2xl mb-5'>Aprendiendo</h3>
        <div className='flex flex-row flex-wrap justify-around'>
          <div className='flex justify-center items-center hover:bg-blue-800 p-2 rounded-md hover:scale-125 hover:text-white transform duration-200'>
            <SiTypescript className='fill-[#3178C6] bg-white rounded-sm' />
          </div>
          <div className='flex justify-center items-center hover:bg-orange-800 p-2 rounded-md hover:scale-125 hover:text-white transform duration-200'>
            <SiFigma className='fill-[#F24E1E]' />
          </div>
        </div>
      </article>
    </section>
  )
}

export default Knowledge
