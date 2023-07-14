import { SiGithub, SiNetlify, SiVercel } from '@icons-pack/react-simple-icons'
import React from 'react'

const Proyects = () => {
  return (
    <section className='flex flex-col px-2'>
      <article className='flex flex-col md:flex-row border-2 rounded-lg mx-auto mb-5'>
        <div className='p-2 rounded-lg bg-slate-800'>
          <img
            className='w-auto p-5 m-auto rounded-md sm:max-w-[30rem]'
            src='./rent-ify.png'
            alt='home de rentify'
            title='Rent-ify'
          />
        </div>
        <div className='m-3 max-m-auto max-w-md'>
          <h3 className='text-2xl mb-2'>Rent-ify</h3>
          <p className='my-4 mr-2 italic text-sm'>
            Plataforma de renta de productos de uso cotidiano y/o ocasional
            (todo lo que se quiera probar pero no comprar).
          </p>
          <p className='my-8 mr-2'>
            Me desempeñé en la gestión del backend y en la pasarela de pago con
            MercadoPago.
          </p>
          <div className='m-3 flex flex-row justify-end '>
            <div className='flex gap-4 rounded-lg p-3 bg-slate-800'>
              <a href='https://github.com/HauroEnojado/pf-rentify-backend'>
                <SiGithub className='m-1 w-8 h-auto fill-black hover:scale-150 transform duration-200' />
              </a>
              <a href='https://pf-rentify-frontend.vercel.app/'>
                <SiVercel className='m-1 w-8 h-auto fill-white hover:scale-150 transform duration-200' />
              </a>
            </div>
          </div>
        </div>
      </article>
      <article className='flex flex-col md:flex-row border-2 rounded-lg mx-auto mb-5'>
        <div className='p-2 rounded-lg bg-slate-800'>
          <img
            className='w-auto p-5 m-auto rounded-md sm:max-w-[30rem]'
            src='./pi-videogames.png'
            alt='home de rentify'
            title='Rent-ify'
          />
        </div>
        <div className='m-3 max-m-auto max-w-md'>
          <h3 className='text-2xl mb-2'>PI-Videogames</h3>
          <p className='my-4 mr-2 italic text-sm'>
            Proyecto individual hecho en el bootcamp de Soy Henry, se me pido
            realizar un buscador/visualizador de videojuegos, con las
            funcionalidades basicas para una busqueda con filtro, agregar juegos
            y otros detalles
          </p>
          <p className='my-8 mr-2'>
            Aqui aprendi el uso de React, Redux y sequelize, administrando un
            backend que servia como medio para gestionar una base de datos y la
            API de{' '}
            <a
              className='underline hover:text-yellow-100 transform duration-200'
              href='https://rawg.io/'
            >
              RAWG
            </a>
            .
          </p>
          <div className='m-3 flex flex-row justify-end '>
            <div className='flex gap-4 rounded-lg p-3 bg-slate-800'>
              <a href='https://github.com/HauroEnojado/Videogames'>
                <SiGithub className='m-1 w-8 h-auto fill-black hover:scale-150 transform duration-200' />
              </a>
              <a href='https://videogames-pi-soy-henry.netlify.app/'>
                <SiNetlify className='m-1 w-8 h-auto fill-[#00C7B7] hover:scale-150 transform duration-200' />
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Proyects
