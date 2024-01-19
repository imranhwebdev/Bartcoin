import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img1 from "../assets/img/token-img1.png";
import img2 from "../assets/img/token-img2.png";
import img3 from "../assets/img/token-img3.png";
import img4 from "../assets/img/token-img4.png";
import cloud from "../assets/img/large-cloud.png";
function Howtobuy() {
  const howtobuyItems = [
    {
      img: img1,
      title: "Click on Buy Button",
      desc: "Ready to invest in the next big thing? Head to our buy section now and grab your share of the $BART coin revolution. Don't miss out on the moon ride!",
    },
    {
      img: img2,
      title: "Connect your Phantom wallet",
      desc: "Connect your wallet to join the meme coin revolution! Seamlessly participate in the fun and wild ride of our community-driven token. Don't miss out!",
    },
    {
      img: img3,
      title: "Ch00se Amount to Buy",
      desc: "Choose the amount to buy and join the meme coin frenzy!",
    },
    {
      img: img4,
      title: "Buy  BART token",
      desc: "Buy $BART token and join the meme revolution! Embrace the laughter, fun and potential gains. Secure your spot in the meme coin world. Hurry up!",
    },
  ]
  return (
    <section className='howtobuy__area' id='howtobuy'>
      <figure className='cloudleft'>
        <img src={cloud} alt="" />
      </figure>
      <Container>
        <Row>
          <Col>
              <div className="section__title text-center mb-5 pb-2">
                <h2>How To Buy <span>$ BART</span> Token</h2>
                <p>Ready to join the meme token craze? Buying meme tokens ls simple! Head to our website and link your Phantom wallet and complete the purchase. Embrace the fun of $BART culture with ease!</p>
              </div>
          </Col>
        </Row>
        <Row>
          {howtobuyItems.map((howtobuyItem, index)=>(
            <Col md={6} key={index} className='mb-4'>
              <div className="howtobuy_single_item text-center">
                <figure>
                  <img src={howtobuyItem.img} alt="" />
                </figure>
                <h4>{howtobuyItem.title}</h4>
                <p>{howtobuyItem.desc}</p>
              </div>
            </Col>
          ))}
          
        </Row>
      </Container>
      <figure className='cloudright'>
        <img src={cloud} alt="" />
      </figure>
    </section>
  )
}

export default Howtobuy
