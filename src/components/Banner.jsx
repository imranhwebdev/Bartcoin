import React, { useState, useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import updownImg from '../assets/img/up_down.svg'
import cloud1 from '../assets/img/hero-cloud-big.png'
import cloud2 from '../assets/img/hero-cloud-small.png'
import cloud3 from '../assets/img/hero-cloud-small.png'
import cloud4 from '../assets/img/hero-cloud-right.png'
import cloud5 from '../assets/img/hero-cloud-big.png'
import sol from '../assets/img/sol.svg'
import bart from '../assets/img/bart_logo.svg'
import solar_walletlinear from '../assets/img/solar_wallet-linear.svg';
import hero_m_img from '../assets/img/hero-m-img.png';
export default function Banner(){
    const desc = "Where the Simpsons token moonshot on Solana!";
    const btnTxt = "BUY NOW";
    const btnLink = "www.google.com";
    const btnSvg = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M14.5 11.4298V12.6798C14.5 12.9631 14.596 13.2008 14.788 13.3928C14.98 13.5848 15.2173 13.6805 15.5 13.6798C15.7833 13.6798 16.021 13.5838 16.213 13.3918C16.405 13.1998 16.5007 12.9625 16.5 12.6798V9.02979C16.5 8.74645 16.404 8.50912 16.212 8.31779C16.02 8.12645 15.7827 8.03045 15.5 8.02979H11.85C11.5667 8.02979 11.3293 8.12579 11.138 8.31779C10.9467 8.50979 10.8507 8.74712 10.85 9.02979C10.85 9.31312 10.946 9.55079 11.138 9.74279C11.33 9.93479 11.5673 10.0305 11.85 10.0298H13.075L8.7 14.4048C8.51667 14.5881 8.425 14.8175 8.425 15.0928C8.425 15.3681 8.51667 15.6055 8.7 15.8048C8.9 16.0048 9.13767 16.1048 9.413 16.1048C9.68833 16.1048 9.92567 16.0048 10.125 15.8048L14.5 11.4298ZM12.5 22.0298C11.1167 22.0298 9.81667 21.7671 8.6 21.2418C7.38333 20.7165 6.325 20.0041 5.425 19.1048C4.525 18.2048 3.81267 17.1465 3.288 15.9298C2.76333 14.7131 2.50067 13.4131 2.5 12.0298C2.5 10.6465 2.76267 9.34645 3.288 8.12979C3.81333 6.91312 4.52567 5.85479 5.425 4.95479C6.325 4.05479 7.38333 3.34245 8.6 2.81779C9.81667 2.29312 11.1167 2.03045 12.5 2.02979C13.8833 2.02979 15.1833 2.29245 16.4 2.81779C17.6167 3.34312 18.675 4.05545 19.575 4.95479C20.475 5.85479 21.1877 6.91312 21.713 8.12979C22.2383 9.34645 22.5007 10.6465 22.5 12.0298C22.5 13.4131 22.2373 14.7131 21.712 15.9298C21.1867 17.1465 20.4743 18.2048 19.575 19.1048C18.675 20.0048 17.6167 20.7175 16.4 21.2428C15.1833 21.7681 13.8833 22.0305 12.5 22.0298Z" fill="black"/>
  </svg>;

  const countTitle = "PRESALE ENDS IN";

  const [countdownDate] = useState(new Date('Jan 23, 2024 10:33:00').getTime());
  const [state, setState] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
  });
  useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    }, []);
    const setNewTime = () => {
        if (countdownDate) {
        const currentTime = new Date().getTime();
        const distanceToDate = countdownDate - currentTime;
        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
            hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
            minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
            seconds = `0${seconds}`;
        }
        
        setState({ days: days, hours: hours, minutes, seconds });
        }
    };

  const tokenSingleItmes = [
    {
        title: "Token Name:",
        value: "BART",
    },
    {
        title: "Presale Price:",
        value: "0.00001",
    },
    {
        title: "Launch Price:",
        value: "0.00003",
    },
    {
        title: "Presale Bonus:",
        value: "15%",
    },
    {
        title: "Max Buy:",
        value: "25 SOL",
    },
    {
        title: "Min Buy:",
        value: "0.5 SOL",
    },
  ];
  const now = 37;
    return(
        <section className="banner">
            <figure className="cloud1">
                <img src={cloud1} alt="" />
            </figure>
            <figure className="hero_middle_img">
                <img src={hero_m_img} alt="" />
            </figure>
            <div className="banner-wrapper">
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={7}>
                            <div className="banner-content">
                                <h1>SPRINGFIELD AND <span>{'$ BART'}</span></h1>
                                
                                <figure className="cloud2">
                                    <img src={cloud2} alt="" />
                                </figure>
                                <figure className="cloud3">
                                    <img src={cloud3} alt="" />
                                </figure>
                                <p>{desc}</p>
                                <a href={btnLink} className="boxed__btn">{btnTxt} {btnSvg}</a>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="banner-right">
                                <div className="count__down">
                                    <div className="count_down_box_hook"></div>
                                    <div className="conut_down_box">
                                        {state.seconds > 0 
                                            ? 
                                                <div>
                                                    <div className="count_down_numbers text-center mb-3">
                                                        <h5>{countTitle}</h5>
                                                        <div className="countDown_box  d-flex justify-content-between">
                                                            <div className="single_items day">
                                                                <h3>{state.days > 0 ? state.days : '0'}</h3>
                                                                <span>Days</span>
                                                            </div>
                                                            <div className="single_items hours">
                                                                <h3>{state.hours > 0 ? state.hours : '00'}</h3>
                                                                <span>Hours</span>
                                                            </div>
                                                            <div className="single_items mins">
                                                                <h3>{state.minutes > 0 ? state.minutes : '00'}</h3>
                                                                <span>Minutes</span>
                                                            </div>
                                                            <div className="single_items secounds">
                                                                <h3>{state.seconds> 0 ? state.seconds : '00'}</h3>
                                                                <span>Secounds</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="countdown_box_bottom">
                                                        <div className="token__list">
                                                            {tokenSingleItmes.map((tokenSingleItme, index)=>(
                                                                <div className="single__item d-flex align-items-center justify-content-between mb-2" key={index}>
                                                                    <p>{tokenSingleItme.title}</p>
                                                                    <span>{tokenSingleItme.value}</span>
                                                                </div>
                                                            ))}
                                                            
                                                        </div>
                                                        <div className="progress_bar mt-3">
                                                            <div className="p_content d-flex align-items-center justify-content-between">
                                                                <p>Presale Sold</p>
                                                                <span>37%</span>
                                                            </div>
                                                            <ProgressBar now={now}/>
                                                        </div>
                                                        <div className="amount pay mb-3">
                                                            <div className="am_top d-flex align-items-center justify-content-between">
                                                                <p>Amount in SOL you pay:</p>
                                                                <span><img src={solar_walletlinear} alt="" /> 0.00 SOL</span>
                                                            </div>
                                                            <div className="amount_box d-flex align-items-center justify-content-between">
                                                                <div className="left d-flex gap-2">
                                                                    <img src={sol} alt="" />
                                                                    <span>SOL</span>
                                                                </div>
                                                                <div className="right">
                                                                    <span>234234234</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <figure className="middle_reverse">
                                                            <img src={updownImg} alt="" />
                                                        </figure>
                                                        
                                                        <div className="amount receive">
                                                            <p>Amount in BART you receive:</p>
                                                            <div className="amount_box d-flex align-items-center justify-content-between mt-2">
                                                                <div className="left d-flex gap-2">
                                                                    <img src={bart} alt="" />
                                                                    <span>BART</span>
                                                                </div>
                                                                <div className="right">
                                                                    <span>2342342342345454</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <a href="#" className="boxed__btn d-block text-center mt-3">Connect Wallet</a>
                                                    </div>
                                                </div>
                                            : 
                                                <div className="count_down_out">
                                                    <h2>Comming Soon</h2>
                                                </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            
            <figure className="cloud4">
                <img src={cloud4} alt="" />
            </figure>
            <figure className="cloud5">
                <img src={cloud5} alt="" />
            </figure>
        </section>
    )
}
