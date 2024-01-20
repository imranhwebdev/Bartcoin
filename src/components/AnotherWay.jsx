import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import qrcode from '../assets/img/QR-code.svg'
function AnotherWay() {
  const [copiedMessageVisible, setCopiedMessageVisible] = useState(false);

  const handleCopyClick = () => {
    // Find the element with the content to copy
    const contentToCopy = document.querySelector('.content p');

    // Create a range and select the text
    const range = document.createRange();
    range.selectNode(contentToCopy);

    // Clear any existing selection and add the new one
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);

    // Execute the copy command
    document.execCommand('copy');

    // Clear the selection
    window.getSelection().removeAllRanges();

    // Show the copied message
    setCopiedMessageVisible(true);

    // Hide the message after a certain duration (e.g., 2 seconds)
    setTimeout(() => {
      setCopiedMessageVisible(false);
    }, 2000);
  };
  return (
    <section className='another_way_area' id="presale">
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
                            <button className='boxed__btn' onClick={handleCopyClick}>{copiedMessageVisible ? 'Copied!' : 'Copy Address'}</button>
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
