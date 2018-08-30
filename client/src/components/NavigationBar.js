import React from 'react'
import {Nav,Navbar,NavItem,MenuItem}from'react-bootstrap'
import{Link}from'react-router-dom'


export default()=>{
    return(
    <Navbar>
    <Navbar.Header>
        <Navbar.Brand>
        <a href="#">RedDice</a>
        </Navbar.Brand>
    </Navbar.Header>
    <Nav>
        <NavItem eventKey={1} componentClass={Link} href="/" to='/'>Login</NavItem>
        <NavItem eventKey={2} componentClass={Link} href="/signup" to='/signup'>Signup</NavItem>
    </Nav>
    </Navbar>
    )
}