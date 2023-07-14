import React from 'react'
import Proyects from './Proyects'
import Contact from './Contact'
import Knowledge from './Knowledge'

const Content = () => {
  return (
    <main className='bg-gray-900 py-4 px-10 my-4 rounded-lg'>
      <Knowledge />
      <hr className='border-dashed border-2 my-4' />
      <Proyects />
      <hr className='border-dashed border-2 my-4' />
      <Contact />
    </main>
  )
}

export default Content
