import React from 'react'
import Corner from './decorators/Corner'

const App = () => {
  return (
    <div className='bg-gray-900 w-screen h-screen p-5'>
      <div className='flex flex-row justify-center items-center'>
        <Corner>
          <div className='relative z-10 bg-gray-900 w-full h-full m-1 border-cyan-400 border-2'>
            <header className='box-border flex flex-row justify-between'>
              <h1 className='text-3xl text-cyan-200 pl-4 p-2 font-sans font-bold flex-[1]'>
                Victor Javier
              </h1>
              <nav className='flex justify-around items-center flex-[2] p-1'>
                <a
                  className='block text-white text-center my-1 py-2 px-1 border-2 border-cyan-200 max-w-[5rem] min-w-[4rem] min-h-[2rem] max-h-[3rem] hover:text-cyan-600 transition-colors duration-200'
                  href='#'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  link
                </a>
              </nav>
            </header>
            <main className=''></main>
          </div>
        </Corner>
      </div>
    </div>
  )
}

export default App
