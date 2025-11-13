import React from 'react';
import Card from 'react-bootstrap/Card';
import '../css/vission.css';
import vission_img from '../../public/assets/vission_mission_img/vission.png';
import mission_img from '../../public/assets/vission_mission_img/mission.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function VissionMission() {
    return (
        <>
            <Container fluid>
                <Row className="row-equal-height">
                    <Col lg={6} md={12} sm={12}>
                        <p className='card_name'>VISION</p>
                        <Card className='card_vission'>
                            <Card.Body>
                                <div className='vissionpara d-flex align-items-center'>
                                    <p>We deliver ethical, innovative solutions that meet client needs and respect the environment.</p>
                                    <img src={vission_img} className="vision-image" alt="Vision" />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <p className='card_name namecard'>MISSION</p>
                        <Card className='card_mission'>
                            <Card.Body>
                                <div className='missionpara d-flex align-items-center'>
                                    <img src={mission_img} className="vision-image" alt="Mission" />
                                    <p>We strive to build an ecosystem that fuels our clients’ growth through continuous improvement, integrity, reliability, responsibility, and passion in everything we do.</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </>
    );
}

export default VissionMission;


