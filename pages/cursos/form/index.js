import Pagina from '@/components/Pagina'
import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { set, useForm } from 'react-hook-form'

const index = () => {
      const {register, handleSubmit} = useForm()
      function salvar(dados){
        console.log(dados);
        set(ref(db, 'cursos', dados))
      }
  return (
    <Pagina titulo="Formularios">
      <Form.Group controlId='nome' className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control placeholder="Nome do curso" {...register('nome')}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId='duracao'>
        <Form.Label>Duração</Form.Label>
        <Form.Control placeholder="Nome do curso" {...register('duracao')}  />
      </Form.Group>
      <Form.Group controlId='modalidade' className="mb-3">
        <Form.Label>Modalidades</Form.Label>
        <Form.Control placeholder="Nome da modalidade" {...register('modalidade')}/>
      </Form.Group>
     <Button variant='success' onClick={handleSubmit(salvar)}>Salvar</Button>
    </Pagina>
  )
}

export default index
