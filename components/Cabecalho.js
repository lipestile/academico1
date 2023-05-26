import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Link from 'next/link';



const Cabecalho = () => {


  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Academico</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/cursos">Cursos</Nav.Link>
            <Nav.Link href="/disciplinas">Disciplinas</Nav.Link>
            <Nav.Link href="#pricing">Alunos</Nav.Link>
            <Nav.Link href="#pricing">Turmas</Nav.Link>
            <Nav.Link href="#pricing">Salas</Nav.Link>
            <Nav.Link href="#pricing">Semestre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Cabecalho