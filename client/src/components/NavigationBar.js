import React from 'react'
import {Nav,Navbar,NavItem,MenuItem}from'react-bootstrap'


export default()=>{
    return(
    <Navbar>
    <Navbar.Header>
        <Navbar.Brand>
        <a href="#">RedDice</a>
        </Navbar.Brand>
    </Navbar.Header>
    <Nav>
        <NavItem eventKey={1} href="#">Login</NavItem>
        <NavItem eventKey={2} href="#">Signup</NavItem>
    </Nav>
    </Navbar>
    )
}