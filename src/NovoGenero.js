import React, { useState } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

const NovoGenero = () => {
  const [name, setName] = useState('')
  const [success, setSucceess] = useState(false)
  const onChange = evt => {
    setName(evt.target.value)
  }

const save = () => {
  axios
  .post('/api/genres', {
    name
  })
  .then(res =>{
    setSucceess(true)
  })
}

if(success){
 return <Redirect to='/generos' />
}

  return (
    <div className='container'>
      <h1>Novo Genêro</h1> {name}
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Nome</label>
          <input type='text' value={name} onChange={onChange}
          className='form-control' id='name' placeholder='Nome do Genêro'/>
        </div>
        <button type='button' className='btn btn-primary' onClick={save}>Cadastrar Genêro</button>
      </form>
    </div>
  )
}

export default NovoGenero