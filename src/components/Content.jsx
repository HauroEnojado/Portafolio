import React from 'react'
import Proyects from './Proyects'
import Contact from './Contact'
import Knowledge from './Knowledge'

const Content = () => {
  return (
    <main className='bg-gray-900 py-4 px-10 my-4 rounded-lg'>
      <article className='p-2 m-auto'>
        <h2>Hola, bienvenido</h2>
        <p className='mb-3'>
          Me llamo victor javier, soy un desarrollador fullstack Junior
        </p>
        <p className='mb-3'>
          Mi enfoque se basa en la simplicidad, la practicidad y la creación de
          interfaces intuitivas y atractivas. He trabajado en proyectos
          individuales y en equipo, adquiriendo experiencia en tecnologías como
          JavaScript, Express, React, Redux, Tailwind CSS, PostgreSQL y
          Sequelize.
        </p>
        <p className='mb-3'>
          Mi compromiso con el aprendizaje constante me ha llevado a seguir
          líderes en la industria a través de plataformas como Twitch y Medium,
          manteniéndome actualizado con las últimas tendencias y mejores
          prácticas. Soy reconocido por mi enfoque proactivo, mi capacidad de
          adaptación rápida y mis habilidades de comunicación efectivas.
        </p>
        <p className='mb-3'>
          Estoy comprometido con la excelencia en el diseño y desarrollo de
          sitios web y estoy emocionado de seguir creciendo y contribuyendo en
          el campo del desarrollo web.
        </p>
      </article>
      <Proyects />
      <Knowledge />
      <Contact />
    </main>
  )
}

export default Content
