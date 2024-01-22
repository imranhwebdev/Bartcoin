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
    const btnLink = "#presale_coundDown_box";
    const btnSvg = <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
    <path d="M14.5 11.4298V12.6798C14.5 12.9631 14.596 13.2008 14.788 13.3928C14.98 13.5848 15.2173 13.6805 15.5 13.6798C15.7833 13.6798 16.021 13.5838 16.213 13.3918C16.405 13.1998 16.5007 12.9625 16.5 12.6798V9.02979C16.5 8.74645 16.404 8.50912 16.212 8.31779C16.02 8.12645 15.7827 8.03045 15.5 8.02979H11.85C11.5667 8.02979 11.3293 8.12579 11.138 8.31779C10.9467 8.50979 10.8507 8.74712 10.85 9.02979C10.85 9.31312 10.946 9.55079 11.138 9.74279C11.33 9.93479 11.5673 10.0305 11.85 10.0298H13.075L8.7 14.4048C8.51667 14.5881 8.425 14.8175 8.425 15.0928C8.425 15.3681 8.51667 15.6055 8.7 15.8048C8.9 16.0048 9.13767 16.1048 9.413 16.1048C9.68833 16.1048 9.92567 16.0048 10.125 15.8048L14.5 11.4298ZM12.5 22.0298C11.1167 22.0298 9.81667 21.7671 8.6 21.2418C7.38333 20.7165 6.325 20.0041 5.425 19.1048C4.525 18.2048 3.81267 17.1465 3.288 15.9298C2.76333 14.7131 2.50067 13.4131 2.5 12.0298C2.5 10.6465 2.76267 9.34645 3.288 8.12979C3.81333 6.91312 4.52567 5.85479 5.425 4.95479C6.325 4.05479 7.38333 3.34245 8.6 2.81779C9.81667 2.29312 11.1167 2.03045 12.5 2.02979C13.8833 2.02979 15.1833 2.29245 16.4 2.81779C17.6167 3.34312 18.675 4.05545 19.575 4.95479C20.475 5.85479 21.1877 6.91312 21.713 8.12979C22.2383 9.34645 22.5007 10.6465 22.5 12.0298C22.5 13.4131 22.2373 14.7131 21.712 15.9298C21.1867 17.1465 20.4743 18.2048 19.575 19.1048C18.675 20.0048 17.6167 20.7175 16.4 21.2428C15.1833 21.7681 13.8833 22.0305 12.5 22.0298Z" fill="black"/>
  </svg>;

  const countTitle = "PRESALE STARTS IN";

  const [countdownDate] = useState(new Date('Jan 21, 2024 00:04:00').getTime());
  const [state, setState] = useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
  });
  useEffect(() => {
    const interval = setInterval(() => setNewTime(), 1000);
    return () => clearInterval(interval);
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
  const dollarSign =  <svg xmlns="http://www.w3.org/2000/svg" width="53" height="89" viewBox="0 0 53 89" fill="none">
  <path d="M47.2989 32.0393L47.3 32.0383C48.8936 30.5036 49.6564 28.5071 49.6564 26.1923C49.6564 22.8081 47.9703 19.9878 44.9417 17.7611C42.2139 15.7075 38.7016 14.3297 34.4811 13.5617V12.3723C34.4811 9.07628 33.7988 6.32501 32.1764 4.38173C30.5107 2.38661 28.0741 1.5 25.1564 1.5C21.8487 1.5 19.0244 2.84809 16.7585 5.42475L15.5061 6.84885L17.1804 7.73957C18.3198 8.34575 19.0722 9.53753 19.0722 11.8957V13.7723C14.6015 14.7864 10.865 16.6384 7.93025 19.377C4.66753 22.4215 3.02749 26.2641 3.02749 30.799C3.02749 34.2268 4.29905 37.2845 6.748 39.9213L6.75972 39.9339L6.77173 39.9463C9.16835 42.4106 12.0274 44.4424 15.3326 46.0478L15.3326 46.0479L15.3414 46.052C18.5708 47.5949 21.7746 49.0583 24.9527 50.4423L24.961 50.4458C28.0816 51.7825 30.6748 53.2816 32.7629 54.9304L32.7783 54.9426L32.7941 54.9544C34.7949 56.4506 35.5911 58.0055 35.5911 59.6306C35.5911 61.2747 34.9132 62.5778 33.3873 63.6426L33.3791 63.6483L33.371 63.6542C31.8716 64.7305 29.6645 65.3584 26.579 65.3584C23.5243 65.3584 21.2298 64.828 19.5842 63.8919C17.976 62.947 17.488 61.9908 17.488 61.0603C17.488 59.8599 17.9284 58.8501 18.9012 57.954L20.1827 56.7734L18.8247 55.6817C16.5116 53.8221 14.0295 52.8091 11.4038 52.8091C8.90952 52.8091 6.69346 53.5834 4.82905 55.1447L4.81942 55.1528L4.80994 55.161C2.87154 56.8402 2 59.2368 2 62.0928C2 65.2238 3.64383 67.9674 6.49799 70.3193L6.51057 70.3297L6.52337 70.3398C9.17866 72.4326 12.5373 73.9572 16.543 74.9582V76.5483C16.543 79.8656 17.2165 82.6322 18.8192 84.5879C20.4687 86.6007 22.888 87.5 25.7887 87.5C29.1434 87.5 31.9591 86.1549 34.1336 83.5448L35.3129 82.1292L33.6875 81.2615C32.7092 80.7392 31.9519 79.5543 31.9519 76.9455V75.6207C37.0623 74.7716 41.438 72.8248 45.024 69.7434C48.9668 66.3555 51 62.1378 51 57.1684C51 53.5075 49.7258 50.2037 47.2467 47.3041C44.9004 44.499 42.0284 42.2331 38.6475 40.5058C35.4596 38.8508 32.2442 37.3285 29.0014 35.9391C25.9059 34.5386 23.274 33.1242 21.0947 31.6997C19.0712 30.2914 18.4364 29.0485 18.4364 28.0191C18.4364 26.8624 18.971 25.8801 20.4497 25.0309C22.0025 24.1393 24.0684 23.6416 26.7371 23.6416C29.4881 23.6416 31.3493 24.1504 32.5219 24.963L32.5316 24.9698L32.5414 24.9763C33.88 25.8731 34.2474 26.6852 34.2474 27.3837C34.2474 28.5625 34.0576 29.3983 33.7722 29.972L33.2067 31.1085L34.2341 31.8542C36.3642 33.4001 38.6969 34.2053 41.201 34.2053C43.634 34.2053 45.7345 33.5431 47.2989 32.0393Z" fill="#FED403" stroke="black" stroke-width="3"/>
                                    </svg>;
  const now = 37;
  const [reverseOrder, setReverseOrder] = useState(false);

  const handleToggleOrder = () => {
    setReverseOrder(!reverseOrder);
  };



  const fixedMultiplier = 8733.00;

  const [inputNumber1, setInputNumber1] = useState("");
  const [inputNumber2, setInputNumber2] = useState("");

  const handleInputChange1 = (event) => {
    const number = parseFloat(event.target.value);
    setInputNumber1(isNaN(number) ? "" : number);
    setInputNumber2(isNaN(number) ? "" : (number * fixedMultiplier).toFixed(2));
  };

  const handleInputChange2 = (event) => {
    const number = parseFloat(event.target.value);
    setInputNumber2(isNaN(number) ? "" : number);
    setInputNumber1(
      isNaN(number) ? "" : (number === 0 ? 0 : number / fixedMultiplier).toFixed(2)
    );
  };


    return(
        <section className="banner" id="hero">
            <figure className="cloud1">
                <img src={cloud1} alt="" />
            </figure>
            <figure className="hero_middle_img d-none d-lg-block">
                <img src={hero_m_img} alt="" />
            </figure>
            <div className="banner-wrapper">
                <Container>
                    <Row className='align-items-center'>
                        <Col lg={7}>
                            <div className="banner-content">
                                <h1>SPRINGFIELD AND <span>{dollarSign} BART</span></h1>
                                
                                <figure className="cloud2">
                                    <img src={cloud2} alt="" />
                                </figure>
                                <figure className="cloud3">
                                    <img src={cloud3} alt="" />
                                </figure>
                                <p>{desc}</p>
                                <a href={btnLink} className="boxed__btn">{btnTxt} {btnSvg}</a>
                                
                                <figure className="hero_middle_small_device_img d-lg-none mt-4">
                                    <img src={hero_m_img} alt="" />
                                </figure>
                            </div>
                        </Col>
                        <Col lg={5}>
                            <div className="banner-right mt-5 mt-lg-0">
                                <div className="count__down">
                                    <div className="count_down_box_hook"></div>
                                    <div className="conut_down_box" id="presale_coundDown_box">
                                        {state > 0 
                                            ? 
                                                <div className="frist_step">
                                                    <div className="count_down_numbers text-center mb-3">
                                                        <div className="count_down_num_box">
                                                            <h5>{countTitle}</h5>
                                                            <div className="countDown_box  d-flex justify-content-center">
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
                                                                    <span>SECONDS</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            : 
                                            <div>
                                            <div className="count_down_numbers text-center mb-3">
                                                <h5>{countTitle}</h5>
                                                <div className="countDown_box  d-flex justify-content-center">
                                                    <div className="single_items day">
                                                        <h3>{state.days > 0 ? state.days : '00'}</h3>
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
                                                        <span>SECONDS</span>
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
                                                <div className="progress_bar mt-3 mb-3">
                                                    <div className="p_content d-flex align-items-center justify-content-between">
                                                        <p>Presale Sold</p>
                                                        <span>37%</span>
                                                    </div>
                                                    <ProgressBar now={now}/>
                                                </div>

                                                <div className={`amount-container ${reverseOrder ? 'reverse' : ''}`}>
                                                    <div className="amount pay">
                                                        <div className="am_top d-flex align-items-center justify-content-between">
                                                            <p>Amount in SOL you pay:</p>
                                                            <span><img src={solar_walletlinear} alt="" />0.00 SOL</span>
                                                        </div>
                                                        <div className="amount_box d-flex align-items-center justify-content-between">
                                                            <div className="left d-flex gap-2">
                                                                <img src={sol} alt="" />
                                                                <span>SOL</span>
                                                            </div>
                                                            <div className="right">
                                                                <span>
                                                                <input type="number" name="inputNumber1"
                                                                            id="inputNumber1"
                                                                            placeholder="0"
                                                                            value={inputNumber1}
                                                                            onChange={handleInputChange1}/>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <figure className="middle_reverse mt-3 mb-1 pb-1" onClick={handleToggleOrder}>
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
                                                                <span>
                                                                <input
                                                                        type="number"
                                                                        name="inputNumber2"
                                                                        id="inputNumber2"
                                                                        placeholder="0"
                                                                        value={inputNumber2}
                                                                        onChange={handleInputChange2}
                                                                        />
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <a href="#" className="boxed__btn d-block text-center mt-3">Connect Wallet</a>
                                            </div>
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
