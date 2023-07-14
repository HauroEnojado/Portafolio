import React from 'react'
const Contact = () => {
  return (
    <form className='p-2 box-border'>
      <fieldset className='flex flex-col mx-auto mb-5 border-2 rounded-md p-3'>
        <legend className='text-2xl'>Informacion</legend>
        <label htmlFor='email'>Correo:</label>
        <input
          className='bg-gray-400 rounded-md placeholder:pl-1 placeholder:text-black'
          placeholder='ingrese su email'
          type='email'
          name='email'
          id='email'
        />
        <label htmlFor='msg'>Mensaje:</label>
        <textarea
          name='msg'
          id='msg'
          className='bg-gray-400 rounded-md placeholder:pl-1 placeholder:text-black'
          placeholder='Dejeme su mensaje...'
        />
      </fieldset>
    </form>
  )
}
export default Contact
