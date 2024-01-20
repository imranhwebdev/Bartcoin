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
  ];
  const dollarSign = <svg xmlns="http://www.w3.org/2000/svg" width="44" height="76" viewBox="0 0 44 76" fill="none">
    <path d="M39.479 26.7207L39.4797 26.7201C40.7877 25.4665 41.4198 23.8341 41.4198 21.9181C41.4198 19.1281 40.0282 16.7912 37.4788 14.9264C35.1271 13.1642 32.0707 11.985 28.3638 11.3419V10.0862C28.3638 7.29604 27.7823 5.01712 26.4469 3.42551C25.0834 1.80026 23.0806 1.06226 20.6319 1.06226C17.8775 1.06226 15.5256 2.17516 13.6266 4.32404L12.7855 5.27576L13.908 5.87002C15.0145 6.45581 15.6879 7.59673 15.6879 9.67821V11.5119C11.7827 12.3593 8.54133 13.9403 6.01152 16.2894C3.26437 18.8403 1.88399 22.0546 1.88399 25.8621C1.88399 28.7207 2.9472 31.2714 5.00892 33.4804L5.01676 33.4888L5.02479 33.497C7.06156 35.5811 9.49317 37.3015 12.3088 38.6624L12.3146 38.6652C15.09 39.9847 17.8433 41.2361 20.5743 42.4196L20.5798 42.4219C23.2829 43.5741 25.5373 44.8698 27.358 46.3003L27.3683 46.3084L27.3788 46.3162C29.1518 47.6357 29.8998 49.0433 29.8998 50.546C29.8998 52.0512 29.2662 53.2509 27.8814 54.2126L27.8814 54.2125L27.8706 54.2202C26.5135 55.1896 24.5464 55.7339 21.8559 55.7339C19.1961 55.7339 17.1658 55.2747 15.6907 54.4392C14.25 53.5973 13.7439 52.6987 13.7439 51.7699C13.7439 50.6604 14.1586 49.7218 15.0516 48.9031L15.9122 48.1143L15.0006 47.3851C13.0502 45.8247 10.9776 44.99 8.79996 44.99C6.72002 44.99 4.88099 45.6308 3.3318 46.9217L3.32538 46.9271L3.31905 46.9326C1.73004 48.3024 1 50.2668 1 52.6539C1 55.2248 2.35312 57.5007 4.7659 59.4792L4.7743 59.4861L4.78284 59.4928C7.07542 61.2909 9.99845 62.5982 13.5119 63.4467V65.0299C13.5119 67.8392 14.0864 70.1321 15.406 71.7345C16.7562 73.3741 18.7437 74.1218 21.1759 74.1218C23.9718 74.1218 26.3129 73.0109 28.1306 70.8398L28.9227 69.8936L27.833 69.3147C26.8546 68.795 26.1879 67.6487 26.1879 65.3699V63.9944C30.6426 63.2968 34.4375 61.6374 37.5337 58.9899C40.8666 56.14 42.5758 52.6055 42.5758 48.438C42.5758 45.3739 41.5058 42.6089 39.4138 40.1744C37.4207 37.8029 34.9804 35.8865 32.1043 34.4243C29.3667 33.01 26.6056 31.7092 23.8212 30.5221C21.1451 29.3174 18.8649 28.0984 16.9731 26.8676C15.1944 25.6365 14.5599 24.4969 14.5599 23.4821C14.5599 22.3723 15.0923 21.4463 16.4361 20.6784C17.8288 19.8825 19.6609 19.4502 21.9919 19.4502C24.3879 19.4502 26.0581 19.8899 27.1361 20.6334L27.1426 20.6378L27.1491 20.6422C28.3484 21.4417 28.7438 22.2139 28.7438 22.9381C28.7438 23.9742 28.5767 24.7364 28.3054 25.2789L27.9253 26.0391L28.6143 26.5368C30.4018 27.8277 32.3492 28.4941 34.4358 28.4941C36.4749 28.4941 38.2011 27.9431 39.479 26.7207Z" fill="#FED41D" stroke="black" stroke-width="2"/>
  </svg>;
  return (
    <section className='howtobuy__area' id='howtobuy'>
      <figure className='cloudleft'>
        <img src={cloud} alt="" />
      </figure>
      <Container>
        <Row>
          <Col>
              <div className="section__title text-center mb-5 pb-2">
                <h2>How To Buy <span>{dollarSign} BART</span> Token</h2>
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
