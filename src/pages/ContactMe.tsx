const ContactMe = (): React.ReactElement => {
  return (
    <div>
      <h2>Comunicate conmigo</h2>
      <form style={{ display: 'flex', justifyContent: 'center' }}>
        <fieldset
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            minWidth: '10rem',
            maxWidth: '12rem'
          }}
        >
          <legend>Enviame un email</legend>
          <label htmlFor='name'>Nombre:</label>
          <input type='text' id='name' autoComplete='off' />
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' autoComplete='off' />
          <label htmlFor='message'>Mensaje:</label>
          <textarea
            style={{ width: '10.3rem', height: '5rem' }}
            id='message'
            autoComplete='off'
          />
        </fieldset>
      </form>
    </div>
  )
}

export default ContactMe
