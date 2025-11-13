import React from 'react';
import '../css/faq.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FaqCom() {
    return (
        <div className='backimge mt-5 ' >
            <Container>
                <Row>
                    <Col lg={6} md={12} sm={12} className='mt-5'>
                        <h3 className='title'>FAQ of customer</h3>
                        <p className='parafaq mb-5'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <div className="d-flex justify-content-center mb-5">
                            <div className="progress" style={{ height: "5px", width: "80%" }}>
                                <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: "50%", backgroundColor: "#FFC422" }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                ></div>
                            </div>
                        </div>



                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header accordion_header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button
                                            className="btn  btn-block text-left"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Is there free parking?
                                        </button>
                                    </h2>
                                </div>

                                <div
                                    id="collapseOne"
                                    className="collapse show"
                                    aria-labelledby="headingOne"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body card_data">
                                        No, cell phones aren’t permitted on the ropes and
                                        trampoline areas due to safety reasons.
                                        We do have a cell phone storage area to put them in or
                                        you can get a locker to store your phone.
                                    </div>
                                </div>
                            </div>

                            <div className="card mt-3">
                                <div className="card-header accordion_header" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button
                                            className="btn btn-link btn-block text-left collapsed"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            Can I bring my cell phone on the trampoline or ropes course?
                                        </button>
                                    </h2>
                                </div>
                                <div
                                    id="collapseTwo"
                                    className="collapse"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body card_data">
                                        No, cell phones aren’t permitted on the ropes and
                                        trampoline areas due to safety reasons.
                                        We do have a cell phone storage area to put them in or
                                        you can get a locker to store your phone.
                                    </div>
                                </div>
                            </div>

                            <div className="card mt-3">
                                <div className="card-header accordion_header" id="headingthree">
                                    <h2 className="mb-0">
                                        <button
                                            className="btn btn-link btn-block text-left collapsed"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#collapsethree"
                                            aria-expanded="false"
                                            aria-controls="collapsethree"
                                        >
                                            Do you have a nursing station?
                                        </button>
                                    </h2>
                                </div>
                                <div
                                    id="collapsethree"
                                    className="collapse"
                                    aria-labelledby="headingthree"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body card_data">
                                        No, cell phones aren’t permitted on the ropes and
                                        trampoline areas due to safety reasons.
                                        We do have a cell phone storage area to put them in or
                                        you can get a locker to store your phone.
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3 mb-3">
                                <div className="card-header accordion_header" id="headingfour">
                                    <h2 className="mb-0">
                                        <button
                                            className="btn btn-link btn-block text-left collapsed"
                                            type="button"
                                            data-toggle="collapse"
                                            data-target="#collapsefour"
                                            aria-expanded="false"
                                            aria-controls="headingfour"
                                        >
                                            When should I arrive before my scheduled attraction?
                                        </button>
                                    </h2>
                                </div>
                                <div
                                    id="collapsefour"
                                    className="collapse"
                                    aria-labelledby="headingfour"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body card_data">
                                        No, cell phones aren’t permitted on the ropes and
                                        trampoline areas due to safety reasons.
                                        We do have a cell phone storage area to put them in or
                                        you can get a locker to store your phone.
                                    </div>
                                </div>
                            </div>

                        </div>

                    </Col>

                  <Col lg={6} md={12} sm={12} className='mt-5 mb-3'>
                        <div className="card card_faq custom-triangle">
                            <div className="card-body mt-5 mb-5">
                                <h3 className='title'>Request A Quote</h3>
                                <p className='parafaq mb-5'>
                                    Fill all information details to consult with us to
                                    get services from us
                                </p>
                                <Container className='Formstart '>
                                    <form>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control custom-input"
                                                placeholder="Enter Name"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control custom-input"
                                                placeholder="Enter Email"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control custom-input"
                                                placeholder="Enter Subject"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <textarea
                                                className="form-control custom-input"
                                                placeholder="Enter Message"
                                                rows="3"
                                            />
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="send_btn">
                                                SEND
                                            </button>
                                        </div>
                                    </form>
                                </Container>

                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>

        </div>
    );
}

export default FaqCom;
