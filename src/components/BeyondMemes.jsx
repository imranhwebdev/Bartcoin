import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import cloudImg from '../assets/img/large-cloud.png';
function BeyondMemes() {
    const title = "beyond  memes  new  unlites  await";
    const beyondItems = [
        {
            itemTitle:  "BART Wear",
            itemDesc: "Effortlessly trade $BART tokens on our decentralized exchange.",
        },
        {
            itemTitle:  "BART Raffle",
            itemDesc: "Engage in thrilling raffle events with your $BART tokens.",
        },
        {
            itemTitle:  "Voting",
            itemDesc: "Shape the community's future by participating in important decisions using your $BART.",
        },
        {
            itemTitle:  "Staking  Pool  Wear",
            itemDesc: "Multiply your holdings by staking $BART tokens and earning rewards.",
        },
        {
            itemTitle:  "BART  Bridge",
            itemDesc: "Connect $BART with various blockchains for expanded possibilities.",
        },
        {
            itemTitle:  "Mini  Games",
            itemDesc: "Enjoy entertaining mini-games while earning $BART rewards.",
        },
    ]
  return (
    <section className='beyond_memes_area'>
      <Container>
        <Row className='justify-content-center'>
            <Col md={8}>
                <div className="section__title text-center">
                    <h2>{title}</h2>
                </div>
            </Col>
        </Row>
        <Row className='beyond_inner'>
            <figure className='cloudImg top'>
                <img src={cloudImg} alt="" />
            </figure>
            {beyondItems.map((beyondItem, index)=>(
                <Col sm={6} md={4} key={index} className='mb-3'>
                    <div className="single__beyond__item text-center">
                        <h5>{beyondItem.itemTitle}</h5>
                        <p>{beyondItem.itemDesc}</p>
                    </div>
                </Col>
            ))}
            
            <figure className='cloudImg bottom'>
                <img src={cloudImg} alt="" />
            </figure>
        </Row>
      </Container>
    </section>
  )
}

export default BeyondMemes
