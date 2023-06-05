import styled from 'styled-components'

const ContainerProyects = styled.section`
  display: flex;
  flex-direction: row;

  overflow: scroll;

`

const Proyect = () => {
  return (
    <article>
      <h3>proyecto</h3>
      <p>informacion del proyecto</p>
      <img src='' alt='imagen del proyecto' />
      <div>
        <p>Logos y/o info extra</p>
      </div>
    </article>
  )
}

const Proyects = () => {
  return (
    <div>
      <h2>Proyectos</h2>
      <ContainerProyects>
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
        <Proyect />
      </ContainerProyects>
    </div>
  )
}

export default Proyects
