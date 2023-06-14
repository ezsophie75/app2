import React from 'react'
import PropTypes from 'prop-types'
import style from './NavBar.module.css'
import { Navbar, Container, Nav } from 'react-bootstrap'
import '../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../../../node_modules/bootstrap/dist/js/bootstrap.js'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <div className={style.NavBar} data-testid="NavBar">
      <Navbar bg="light" variant="light">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand href="#home">Home</Navbar.Brand></LinkContainer>
          <Nav className="me-auto">
            {/*    <Link to="/thumbnail">Thumbnail</Link>
            <Link to="/editor">new</Link>
            <Link to="/editor/1">editor id1</Link> */}
            <LinkContainer to="/thumbnail">
              <Nav.Link href="/thumbnail">Thumbnail</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/meme">
              <Nav.Link href="/meme">new</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/meme/1">
              <Nav.Link href="/meme/1">Edit id:1</Nav.Link>
            </LinkContainer>
            {/* <Nav.Link href="#home">Thumbnail</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}
NavBar.propTypes = {
}
export default NavBar