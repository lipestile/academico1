import Pagina from '@/components/Pagina'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState, } from 'react'
import { Button, Form } from 'react-bootstrap'
import { set, useForm } from 'react-hook-form'

const index = () => {
  const { push, query } = useRouter()
  const { register, handleSubmit, setValue } = useForm()

  useEffect(() => {
    if (query.id) {
      const id = query.id
      const cursos = JSON.parse(window.localStorage.getItem('cursos'))
      const curso = cursos[id]
      setValue('nome', curso.nome)
      setValue('duracao', curso.duracao)
      setValue('modalidade', curso.modalidade)
      for(let atributo in curso){
        setValue(atributo, curso[atributo])
      }
    }
  }, [query.id])





  function salvar(dados) {
    const cursos = JSON.parse(window.localStorage.getItem('cursos')) || []
    cursos.splice(query.id, 1, dados)
    window.localStorage.setItem('cursos', JSON.stringify(cursos))
    push('/cursos')
  }
  return (
    <Pagina titulo="Formularios">
      <Form.Group controlId='nome' className="mb-3">
        <Form.Label>Nome</Form.Label>
        <Form.Control placeholder="Nome do curso" {...register('nome')} />
      </Form.Group>
      <Form.Group className="mb-3" controlId='duracao'>
        <Form.Label>Duração</Form.Label>
        <Form.Control placeholder="Nome do curso" {...register('duracao')} />
      </Form.Group>
      <Form.Group controlId='modalidade' className="mb-3">
        <Form.Label>Modalidades</Form.Label>
        <Form.Control placeholder="Nome da modalidade" {...register('modalidade')} />
      </Form.Group>
      <div className='text-center'>
        <Button variant='success' href='/cursos' onClick={handleSubmit(salvar)}>salvar</Button>
        <Button variant='danger' href='/cursos' >voltar</Button>
      </div>



    </Pagina>
  )
}

export default index
