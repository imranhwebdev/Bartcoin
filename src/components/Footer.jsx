import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from '../assets/img/footer-logo.png'
import herosociallogo1 from '../assets/img/hero-social-logo-1.svg'
import footerSocialIcon5 from '../assets/img/footer-social-icon5.png'
import footerSocialIcon6 from '../assets/img/footer-social-icon6.png'
import footerSocialIcon8 from '../assets/img/footer-social-icon8.png'
export default function Footer(){
    return(
        <footer className="footer text-center">
           <Container>
            <Row className='justify-content-center'>
                <Col lg={8}>
                    <div className="footer-top text-center">
                        <a href="/" className='footer-logo'>
                            <figure>
                                <img src={FooterLogo} alt="" />
                            </figure>
                        </a>
                        <p>This means of course that we are setting a few “rules” for Phase 1 of Osaka Protocol (Phase 2 to be revealed shortly) , which emulate the original rules of Shiba Inu.</p>
                        <div className='footer-social-logos'>
                            <ul>
                                <li><a href="/"> <FaTwitter /> </a></li>
                                <li><a href="/"> <FaPaperPlane /> </a></li>
                                <li><a href="/"><img src={herosociallogo1} alt="" /></a></li>
                                <li><a href="/"> <FaMediumM /> </a></li>
                                <li><a href="/"><img src={footerSocialIcon5} alt="" /></a></li>
                                <li><a href="/"><img src={footerSocialIcon6} alt="" /></a></li>
                                <li><a href="/"> <FaDiscord /> </a></li>
                                <li><a href="/"><img src={footerSocialIcon8} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
           </Container>
           <div className="footer-bottom">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6} className='text-start'>
                        <p>Copyright © 2023 verus. All rights reserved.</p>
                    </Col>
                    <Col lg={6}>
                        <ul>
                            <li>Call us: <a href="tel:(973)547-9994">(973)547-9994</a></li>
                            <li>Email:  <a href="mailto:info@oska.win.com">info@oska.win.com</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
           </div>
        </footer>
    )
}