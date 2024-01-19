import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import whyChooseImg from '../assets/img/why-choose-left-img.png'
import whyChooseImg2 from '../assets/img/why-choose-right-img1.png'
import whyChooseImg3 from '../assets/img/why-choose-right-img2.png'
function WhyChoose() {
    const title = "Why Choose Bart";
    const whychooseItems = [
        {
            img: whyChooseImg2,
            title: "Solana's Speed",
            desc: "Take advantage of Solana's rapid transaction speed as $BART ensures swift and seamless transactions.",
        },
        {
            img: whyChooseImg3,
            title: "Solana's Speed",
            desc: "Take advantage of Solana's rapid transaction speed as $BART ensures swift and seamless transactions.",
        },
    ]
  return (
    <section className='why_choose_area zigzag__bg'>
      <Container>
        <Row>
            <Col lg={5}>
                <figure className='choose_left_img'>
                    <img src={whyChooseImg} alt="" />
                </figure>
            </Col>
            <Col lg={7}>
                <div className="why_choose_content">
                    <h3>{title}</h3>
                    {whychooseItems.map((whychooseItem, index)=>(
                        <div className="single_item d-flex align-items-center gap-4">
                            <figure>
                                <img src={whychooseItem.img} alt="" />
                            </figure>
                            <div className="content">
                                <h5>{whychooseItem.title}</h5>
                                <p>{whychooseItem.desc}</p>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WhyChoose
