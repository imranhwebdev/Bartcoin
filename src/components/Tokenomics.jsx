import { Container, Row, Col } from 'react-bootstrap'
import chart from '../assets/img/chart.png'
function Tokenomics() {
    const title = "Tokenomics";
    const token__lists = [
        {
            title: "Liquidity  Pool",
            subTitle: "35 billion $BART",
            value: "35%"
        },
        {
            title: "Presale",
            subTitle: "30 billion $BART",
            value: "30%"
        },
        {
            title: "Future development",
            subTitle: "20 billion $BART",
            value: "20%"
        },
        {
            title: "Staking  rewards",
            subTitle: "10 billion $BART",
            value: "10%"
        },
        {
            title: "Team",
            subTitle: "5 billion $BART",
            value: "5%"
        },
    ]
  return (
    <section className='tokenomics__area zigzag__bg' id='tokenomics'>
      <Container>
        <Row className='align-items-center'>
            <Col lg={6} className='text-center'>
                <figure className='chartImg'>
                    <img src={chart} alt="" />
                </figure>
            </Col>
            <Col lg={6} className='mt-5 mt-lg-0'>
                <h2>{title}</h2>
                <div className="token__list">
                    {token__lists.map((token__list, index)=>(
                        <div className="single_item d-flex justify-content-between align-items-center mb-4" key={index}>
                            <div className="content">
                                <h5>{token__list.title}</h5>
                                <span>{token__list.subTitle}</span>
                            </div>
                            <div className="value">
                                <span>{token__list.value}</span>
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

export default Tokenomics
