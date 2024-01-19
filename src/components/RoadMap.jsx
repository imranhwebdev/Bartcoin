import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import cloudImg from '../assets/img/large-cloud.png';
function RoadMap() {
  const timelineData = [
    {
      phase: {
        tag: 'PHASE 1',
      },
      items: [
            'Launch on Solana', 
            'Website Landing Page',
            'Presale',
        ],
    },
    {
      phase: {
        tag: 'PHASE 2',
      },
      items: [
        'Public Presale', 
        'Dexscreener and Birdseye Update',
        'Build Community',
    ],
    },
    {
      phase: {
        tag: 'PHASE 3',
      },
      items: [
            'Trending on X', 
            'CG CMC Listing',
            'NFT Airdrop'
        ],
    },
  ];

  const TimelineItem = ({ data }) => (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <span className="tag">{data.phase.tag}</span>
        <div className="roadmap_lists">
          {data.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
        <span className="circle" />
      </div>
    </div>
  );

  const Timeline = () =>
    timelineData.length > 0 && (
      <div className="timeline-container">
        {timelineData.map((data, idx) => (
          <TimelineItem data={data} key={idx} />
        ))}
      </div>
    );

  const title = 'ROADMAP';

  return (
    <section className="road__map__area zigzag__bg" id='roadmap'>
    <figure className='cloud_r_Img1'>
      <img src={cloudImg} alt="" />
    </figure>
      <figure className='cloud_r_Img2'>
        <img src={cloudImg} alt="" />
      </figure>
      <Container>
        <Row>
          <Col>
            <div className="section__title text-center">
              <h2>{title}</h2>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="road_map_inner">
              <Timeline />
            </div>
          </Col>
        </Row>
      </Container>
    <figure className='cloud_r_Img3'>
      <img src={cloudImg} alt="" />
    </figure>
      <figure className='cloud_r_Img4'>
        <img src={cloudImg} alt="" />
      </figure>
      <figure className='cloud_r_Img5'>
        <img src={cloudImg} alt="" />
      </figure>
    </section>
  );
}

export default RoadMap;
