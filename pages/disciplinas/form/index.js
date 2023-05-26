import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { set, useForm } from 'react-hook-form'
import axios from 'axios'

const index = () => {
  const { push } = useRouter()
  const { register, handleSubmit } = useForm()
  function salvar(dados) {
    axios.post('/api/disciplinas', dados)
  
  }
  return (
    <Pagina titulo="Formularios">
      <Form.Group controlId='nome' className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control placeholder="Nome do curso" {...register('nome')} />
      </Form.Group>
      <Form.Group className="mb-3" controlId='curso'>
        <Form.Label>Duração</Form.Label>
        <Form.Control placeholder="Nome do curso" {...register('curso')} />
      </Form.Group>
     
      <div className='text-center'>
        <Button variant='success' href='/cursos' onClick={handleSubmit(salvar)}>salvar</Button>
        <Button variant='danger' href='/cursos' >voltar</Button>
      </div>



    </Pagina>
  )
}

export default index
