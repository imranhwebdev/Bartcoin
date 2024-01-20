import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import FooterLogo from '../assets/img/site-logo.svg'
import footerMImg from '../assets/img/footer-img.png'
export default function Footer(){
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentYear(new Date().getFullYear());
      }, 1000);
      return () => clearInterval(intervalId);
    }, []);
  const footerSocialItems = [
        {
            socialLink: "https://t.me/bartcoinsol",
            socialImg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M22.0846 3.09663C21.9941 3.01851 21.8841 2.96657 21.7663 2.94641C21.6485 2.92626 21.5274 2.93865 21.4161 2.98226L2.41676 10.4176C2.18567 10.508 1.99015 10.671 1.85957 10.882C1.72899 11.093 1.67039 11.3407 1.69258 11.5878C1.71477 11.835 1.81655 12.0683 1.98263 12.2527C2.14871 12.437 2.37013 12.5626 2.61364 12.6104L7.68739 13.6069V19.2498C7.68749 19.5114 7.76577 19.767 7.91217 19.9838C8.05857 20.2006 8.26642 20.3687 8.50904 20.4665C8.75166 20.5643 9.01797 20.5874 9.27381 20.5328C9.52965 20.4782 9.76334 20.3484 9.94489 20.1601L12.4424 17.5698L16.3405 20.9869C16.5785 21.1975 16.8852 21.3139 17.203 21.3141C17.3418 21.3138 17.4797 21.292 17.6118 21.2494C17.8283 21.1809 18.0231 21.0568 18.1768 20.8895C18.3304 20.7222 18.4375 20.5176 18.4874 20.296L22.2955 3.7407C22.3223 3.62431 22.3168 3.50282 22.2796 3.38933C22.2424 3.27583 22.175 3.17463 22.0846 3.09663ZM2.81707 11.5032C2.81348 11.4935 2.81348 11.4829 2.81707 11.4732C2.82131 11.4699 2.82606 11.4674 2.83114 11.4657L17.8039 5.60445L8.11957 12.5419L2.83114 11.5069L2.81707 11.5032ZM9.13489 19.3782C9.10905 19.405 9.07581 19.4235 9.03941 19.4314C9.00301 19.4392 8.9651 19.4361 8.9305 19.4223C8.89591 19.4085 8.8662 19.3847 8.84517 19.354C8.82413 19.3233 8.81272 19.287 8.81239 19.2498V14.3851L11.5958 16.8226L9.13489 19.3782ZM17.3914 20.0419C17.3845 20.0736 17.3692 20.1029 17.3471 20.1267C17.325 20.1504 17.2969 20.1678 17.2658 20.1769C17.2341 20.1881 17.1999 20.1905 17.1669 20.1839C17.1339 20.1773 17.1033 20.1619 17.0783 20.1394L9.15364 13.1879L20.9061 4.76538L17.3914 20.0419Z" fill="white"/>
        </svg>,
        },
        {
            socialLink: "https://twitter.com/bartcoinsol",
            socialImg: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path d="M18.901 1.65283H22.581L14.541 10.8428L24 23.3458H16.594L10.794 15.7618L4.156 23.3458H0.474L9.074 13.5158L0 1.65383H7.594L12.837 8.58583L18.901 1.65283ZM17.61 21.1438H19.649L6.486 3.73983H4.298L17.61 21.1438Z" fill="white"/>
          </svg>,
        },
    ];

    const menuItems = [
        {
            menuTxt:"home",
            menuLink: "#hero"
        },
        {
            menuTxt:"ABOUT",
            menuLink: "#about"
        },
        {
            menuTxt:"Tokenomics",
            menuLink: "#tokenomics"
        },
        {
            menuTxt:"how to buy",
            menuLink: "#howtobuy"
        },
        {
            menuTxt:"roadmap",
            menuLink: "#roadmap"
        },
    ];
    const footerTitle = "JOIN  BART AND LETS BARK  OUR  WAY TO  CRYPTO  STARDOM  TOGETHER!";
    return(
        <footer className="footer__area text-center">
            <div className="footer__top">
                <Container>
                    <Row>
                        <Col>
                            <h2>{footerTitle}</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="footer__middle_w_bottom">
                <figure className='footerM_Img'>
                    <img src={footerMImg} alt="" />
                </figure>
                <div className="footer__middle">
                    <Container>
                        <Row className='align-items-center'>
                            <Col md={3} className='text-center text-md-left'>
                                <a href="#hero" className='footer_logo'>
                                    <figure>
                                        <img src={FooterLogo} alt="" />
                                    </figure>
                                </a> 
                            </Col>
                            <Col md={6} className='text-center'>
                                <ul className="footer_menu">
                                    {menuItems.map((menuItem, index)=>(
                                        <li><a href={menuItem.menuLink}>{menuItem.menuTxt}</a></li>
                                    ))}
                                </ul>
                            </Col>
                            <Col md={3}>
                                <ul className='social_items text-center text-md-end mt-4 mt-md-0'>
                                    {footerSocialItems.map((footerSocialItem, index)=>(
                                        <li key={index}><a href={footerSocialItem.socialLink}>{footerSocialItem.socialImg}</a></li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="footer_bottom">
                <Container>
                    <Row className='align-items-center'>
                        <Col className='text-center'>
                            <p>©{currentYear} All Rights Reserved $BART Token</p>
                        </Col>
                    </Row>
                </Container>
            </div>
           
           
        </footer>
    )
}