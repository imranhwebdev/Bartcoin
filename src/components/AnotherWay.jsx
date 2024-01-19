import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import qrcode from '../assets/img/QR-code.svg'
function AnotherWay() {
  return (
    <section className='another_way_area'>
      <Container>
        <Row className='justify-content-center'>
            <Col lg={8} className='text-center'>
                <div className="section__title">
                  <h2>Another Way to Join the Presale</h2>
                  <p>Having trouble with the DApp or want a simpler method? Participate in the
                  $BART presale by sending your chosen SOL amount directly to the address:</p>
               </div>
                <div className="qr_code_box mt-5">
                    <p className='min_max'>(Minimum 0.5 SOL, Maximum 25 SOL).</p>
                    <div className="qr_box_inner d-flex align-items-center gap-5">
                        <figure>
                            <img src={qrcode} alt="" />
                        </figure>
                        <div className="content">
                            <h5>Address</h5>
                            <p>bartcoin.sol</p>
                            <a href="#" className='boxed__btn'>Copy Address</a>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AnotherWay
