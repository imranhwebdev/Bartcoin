import { React, useState } from 'react'
import {Container} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/img/site-logo.svg'
import { Link, animateScroll as scroll} from 'react-scroll'

export default function Header(){
    const [fix, setFix] = useState(false)
    function setFixed(){
                if(window.scrollY >= 392){
                    setFix(true)
                }else{
                    setFix(false)
                }
            }
            window.addEventListener("scroll", setFixed)
         return(
        <header className={fix ? 'heading fixed' : 'heading'}>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="/"  spy={true} smooth={true} offset={50} duration={500} >Home</Link>
                        <Link to="about" spy={true} smooth={true} offset={-100} duration={500} >About</Link>
                        <Link to="tokenomics" spy={true} smooth={true} offset={-100} duration={500} >Tokenomics</Link>
                        <Link to="howtobuy" spy={true} smooth={true} offset={-100} duration={500} >How to buy</Link>
                        <Link to="roadmap" spy={true} smooth={true} offset={-100} duration={500} >Roadmap</Link>
                    </Nav>
                    <a href="#" className='inline__btn'>BUY NOW</a>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}