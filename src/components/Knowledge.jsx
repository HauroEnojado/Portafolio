import {
  SiJavascript,
  SiReact,
  SiRedux,
  SiSequelize
} from '@icons-pack/react-simple-icons'
import React from 'react'

const Knowledge = () => {
  return (
    <section className='flex flex-col flex-wrap px-2'>
      <h2 className='text-3xl mb-3'>Conocimientos</h2>
      <article className='h-[10rem]'>
        <h3 className='text-2xl mb-1'>Tecnicos</h3>
        <div className='flex flex-row flex-wrap gap-x-4'>
          <div className='flex justify-center items-center hover:bg-yellow-600 px-2 rounded-md hover:scale-110 hover:text-white transform duration-200 '>
            <SiJavascript className='bg-black' />
            <span className='ml-1 text-2xl text-white'>Javascript</span>
          </div>
          <div className='flex justify-center items-center hover:bg-cyan-600 px-2 rounded-md hover:scale-110 hover:text-white transform duration-200 '>
            <SiReact className='fill-[#61DAFB]' />
            <span className='ml-1 text-2xl text-white'>React.js</span>
          </div>
          <div className='flex justify-center items-center hover:bg-purple-600 px-2 rounded-md hover:scale-110 hover:text-white transform duration-200 '>
            <SiRedux className='fill-[#764ABC]' />
            <span className='ml-1 text-2xl text-white'>Redux.js</span>
          </div>
          <div className='flex justify-center items-center hover:bg-cyan-600 px-2 rounded-md hover:scale-110 hover:text-white transform duration-200 '>
            <SiSequelize className='fill-[#52B0E7]' />
            <span className='ml-1 text-2xl text-white'>Sequelize.js</span>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Knowledge
