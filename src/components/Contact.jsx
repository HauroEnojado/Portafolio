import React from 'react'
const Contact = () => {
  return (
    <form className='flex flex-col px-2'>
      <fieldset className='flex flex-col px-10 pb-4 border-2 rounded-xl '>
        <legend className='text-2xl'>Informacion</legend>
        <label htmlFor='email'>Correo:</label>
        <input
          className='bg-gray-400 rounded-md placeholder:pl-1 placeholder:text-yellow-600 '
          placeholder='ingrese su email'
          type='email'
          name='email'
          id='email'
        />
        <label htmlFor='msg'>Mensaje:</label>
        <textarea name='msg' id='msg' />
      </fieldset>
    </form>
  )
}
export default Contact
