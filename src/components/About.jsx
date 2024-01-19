import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
export default function About(){
    const desc = "Introducing $BART, the memecoin inspired in Bart Simpson! He Is well-versed in staying cool wthin the De-Fi world. Making waves in the crypto arena, $BART isn't just a currency; it's a meme-orable investment that's howling its way to the moon!";
    return(
        <section className="about__area" id='about'>
            <Container>
                <Row className='justify-content-center'>
                    <Col md={10} className='text-center'>
                        <h2>ABOUT <span>$BART</span> TOKEN</h2>
                        <p>{desc}</p>
                        <a href="#" className='inline__btn mt-5'>BUY NOW</a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
