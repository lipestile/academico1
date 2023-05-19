import Pagina from '@/components/Pagina'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { AiFillPlusCircle } from 'react-icons/ai';
import {BsFillTrashFill} from 'react-icons/bs';

const index = () => {
  
  const[cursos, setCursos] = useState([])
  
  
  useEffect(()=>{
    setCursos(getall())
  },[])

  function getall(){
    return JSON.parse(window.localStorage.getItem('cursos')) || []
  }


  function excluir(id){
    const itens = getall()
    itens.splice(id, 1)
    window.localStorage.setItem('cursos', JSON.stringify(itens))
    setCursos(itens)
  }

  return (

<Pagina titulo="Cursos">
    <Link href="cursos/form" className='mb-2 btn btn-primary'>
        <AiFillPlusCircle className='m-2'/>Nova</Link>

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
        {cursos.map((item, i) =>(
          <tr key={i}>
            <td><BsFillTrashFill onClick={()=>excluir(i)} className='text-danger'/></td>
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
