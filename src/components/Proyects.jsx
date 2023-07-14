import { SiGithub, SiVercel } from '@icons-pack/react-simple-icons'
import React from 'react'

const Proyects = () => {
  return (
    <section className='flex flex-col px-2'>
      <h2 className='text-3xl m-2 ml-0'>Proyectos</h2>
      <article className='flex flex-col md:flex-row border-2 rounded-lg mx-auto mb-5'>
        <div className='px-2 my-2 md:m-5 rounded-lg bg-slate-800'>
          <h3 className='text-2xl mb-2'>Rent-ify</h3>
          <img
            className='max-w-[25rem] rounded-md w-[20rem]'
            src='./rent-ify.png'
            alt='home de rentify'
          />
        </div>
        <div className='m-3 max-m-auto max-w-md'>
          <p className='my-4 mr-2 italic text-sm'>
            Plataforma de renta de productos de uso cotidiano y/o ocasional
            (todo lo que se quiera probar pero no comprar).
          </p>
          <p className='my-8 mr-2'>
            Me desempeñé en la gestión del backend y en la pasarela de pago con
            MercadoPago.
          </p>
          <div className='m-3 flex flex-row justify-end '>
            <div className='flex rounded-lg bg-slate-800'>
              <a href='https://github.com/HauroEnojado/pf-rentify-backend'>
                <SiGithub className='m-1 w-10 h-auto hover:fill-black hover:scale-110 transform duration-200' />
              </a>
              <a href='https://pf-rentify-frontend.vercel.app/'>
                <SiVercel className='m-1 w-10 h-auto hover:fill-white hover:scale-110 transform duration-200' />
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Proyects
