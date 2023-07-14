import {
  SiGithub,
  SiInstagram,
  SiLinkedin
} from '@icons-pack/react-simple-icons'
import React from 'react'

const Header = () => {
  return (
    <header className='flex flex-row justify-between w-full'>
      <div className='flex-1'>
        <h1 className='text-3xl p-2 font-bold'>
          Victor Javier<span className='text-[10px] italic'>HauroDev</span>
        </h1>
      </div>
      <nav className='flex flex-row flex-wrap justify-around gap-5 items-center p-1'>
        <a
          className='hover:scale-150 transform duration-200 m-2 hover:bg-white hover:rounded-sm'
          href='https://www.linkedin.com/in/victor-javier-taype'
        >
          <SiLinkedin className='hover:fill-blue-600' />
        </a>
        <a
          className='hover:scale-150 hover:rounded-full transform -translate-y-[.25px] duration-200 m-2 hover:bg-white'
          href='https://www.linkedin.com/in/victor-javier-taype'
        >
          <SiGithub className='hover:fill-black' />
        </a>
        <a
          className='hover:scale-150 transform duration-200 m-2'
          href='https://www.instagram.com/haurodev/'
        >
          <SiInstagram className='hover:fill-[#E4405F]' />
        </a>
      </nav>
    </header>
  )
}

export default Header
