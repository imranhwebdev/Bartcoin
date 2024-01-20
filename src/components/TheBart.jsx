import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import bartImg from '../assets/img/bard-right-img.png'
import cloud from '../assets/img/large-cloud.png'
function TheBart() {
    const title = "THE BART";
    const TheBartLists = [
        {content: "In the heart of Springfield, where Lisa's wisdom met Homer's folly,"},
        {content: "$BART token emerged, a crypto saga so jolly."},
        {content: "A nod to Bart Simpson's mischief, it was born with a grin,"},
        {content: "For a playful, decentralized world, where the fun would begin."},
    ];
    const btnTxt = "BUY NOW";
    const btnLink = "#presale";
  return (
    <section className='theBart_area zigzag__bg'>
      <Container>
        <Row>
            <Col lg={8}>
                <div className="theBart_left_content">
                   <div className="theBart_left_content_inner">
                        <h2>{title}</h2>
                        {TheBartLists.map((TheBartList, index)=>(
                            <li key={index}>{TheBartList.content}</li>
                        ))}
                        <a href={btnLink} className='inline__btn mt-4'>{btnTxt}</a>
                   </div>
                    <figure className='cloud'>
                        <img src={cloud} alt="" />
                    </figure>
                </div>
            </Col>
            <Col lg={4}>
                <figure>
                    <img src={bartImg} alt="" />
                </figure>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default TheBart
