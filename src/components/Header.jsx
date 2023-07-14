import {
  SiGithub,
  SiInstagram,
  SiLinkedin
} from '@icons-pack/react-simple-icons'
import React from 'react'

const Header = () => {
  return (
    <header className='flex flex-row justify-between w-full'>
      <h1 className='flex-1 text-4xl m-auto font-bold hover:text-yellow-500'>
        Victor Javier
      </h1>
      <nav className='flex flex-row flex-wrap justify-around items-center p-1'>
        {/* esto solo servira para poner links a mis redes sociales
        pensa utilizar algunos iconos que esten en blanco y cuando
        pasen el puntero por arriba estos obtengan color */}
        <a
          className='block m-2 hover:bg-white'
          href='https://www.linkedin.com/in/victor-javier-taype'
          target='_self'
          rel='noopener noreferrer'
        >
          <SiLinkedin className='hover:fill-blue-600 hover:scale-150 transform duration-200' />
        </a>
        <a
          className='block m-2  hover:bg-white'
          href='https://www.linkedin.com/in/victor-javier-taype'
          target='_self'
          rel='noopener noreferrer'
        >
          <SiGithub className='hover:fill-black hover:scale-150 transform duration-200' />
        </a>
        <a
          className='block m-2 '
          href='https://www.instagram.com/haurodev/'
          target='_self'
          rel='noopener noreferrer'
        >
          <SiInstagram className='hover:fill-[#E4405F] hover:scale-150 transform duration-200' />
        </a>
      </nav>
    </header>
  )
}

export default Header
