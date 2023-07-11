import React from 'react'

const Corner = ({ }) => {
  return (
    <>
      <div className='relative top-0 left-0 w-[16rem] overflow-hidden inline-block z-[1]'>
        <div className='h-[16rem] rotate-45 -translate-x-[8rem] -translate-y-[8rem] transform origin-center bg-gradient-to-b from-white via-cyan-400 to-blue-700'></div>
      </div>
      {props.children}
      <div className='relative bottom-0 right-0 w-[16rem] overflow-hidden inline-block z-[1]'>
        <div className='h-[16rem] rotate-45 translate-x-[8rem] translate-y-[8rem] transform origin-center bg-gradient-to-b from-white via-cyan-400 to-blue-700'></div>
      </div>
    </>
  )
}

export default Corner
