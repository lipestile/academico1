import Pagina from '@/components/Pagina'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { AiFillEdit } from 'react-icons/ai';

const index = () => {

  const [disciplinas, setDisciplinas] = useState([])


  useEffect(() => {
    setDisciplinas(getall())
  }, [])

  function getall() {
    return JSON.parse(window.localStorage.getItem('disciplinas')) || []
  }


  function excluir(id) {
    if (confirm('Deseja realmente excluir o registro')) {
      const itens = getall()
      itens.splice(id, 1)
      window.localStorage.setItem('disciplinas', JSON.stringify(itens))
      setDisciplinas(itens)
    }

  }

  return (

    <Pagina titulo="Disciplinas">
      <Link href="disciplinas/form" className='mb-2 btn btn-primary'>
        <AiFillPlusCircle className='m-2' />Nova</Link>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((item, i) => (
            <tr key={i}>
              <td>
                <Link href={'/disciplinas/form/' + i}> <AiFillEdit className='text-primary' /></Link>
               
                <BsFillTrashFill onClick={() => excluir(i)} className='text-danger' />
              </td>
              <td>{item.nome}</td>
              <td>{item.duracao}</td>
              <td>{item.modalidade}</td>
            </tr>
          ))}


        </tbody>
      </Table>
    </Pagina>
  )
}

export default index
