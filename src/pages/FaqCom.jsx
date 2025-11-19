import React, { useState } from 'react';
import '../css/faq.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FaqCom() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");

    const [errors, setErrors] = useState({});

   

    const handleNameChange = (e) => {
        const value = e.target.value;
        setname(value);

        if (!value.trim()) {
            setErrors((prev) => ({ ...prev, name: "Please enter Name" }));
        } else {
            setErrors((prev) => ({ ...prev, name: "" }));
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setemail(value);

        if (!value.trim()) {
            setErrors((prev) => ({ ...prev, email: "Please enter email" }));
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            setErrors((prev) => ({ ...prev, email: "Please enter valid email address" }));
        } else {
            setErrors((prev) => ({ ...prev, email: "" }));
        }
    };

    const handleSubjectChange = (e) => {
        const value = e.target.value;
        setsubject(value);

        if (!value.trim()) {
            setErrors((prev) => ({ ...prev, subject: "Please enter subject" }));
        } else {
            setErrors((prev) => ({ ...prev, subject: "" }));
        }
    };

    const handleMessageLive = (e) => {
        const value = e.target.value;

        if (value.length <= 200) {
            setmessage(value);

            if (!value.trim()) {
                setErrors((prev) => ({
                    ...prev,
                    message: "Please enter message ",
                }));
            } else {
                setErrors((prev) => ({ ...prev, message: "" }));
            }
        }
    };

    // =========================
    // SUBMIT VALIDATION
    // =========================

    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!name.trim()) {
            errors.name = 'Please enter Name';
            isValid = false;
        }
        if (!email.trim()) {
            errors.email = 'Please enter email';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Please enter valid email address';
            isValid = false;
        }
        if (!subject.trim()) {
            errors.subject = 'Please enter subject';
            isValid = false;
        }
        if (!message.trim()) {
            errors.message = 'Please enter message is required only < 200 only';
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            let newData = {
                name, email, subject, message
            }
            console.log("newData", newData);
        }
    };

    return (
        <div className='backimge mt-4'>
            <Container>
                <Row>
                    <Col lg={7} md={12} sm={12} className='mt-5'>
                        <h3 className='title'>FAQ of customer</h3>
                        <p className='parafaq mb-5'>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                            architecto beatae vitae dicta sunt explicabo.
                        </p>

                        <div className="d-flex justify-content-center mb-5">
                            <div className="progress" style={{ height: "5px", width: "50%" }}>
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

                        <div id="accordionExample">
                            {/* card1 */}
                            <button
                                className="btn btn_custom fixed_btn"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Is there free parking?
                            </button>
                            <div className="collapse show" id="collapseOne" data-parent="#accordionExample">
                                <div className="card card-body card_data">
                                    No, cell phones aren’t permitted on the ropes and trampoline areas due to safety reasons.
                                </div>
                            </div>

                            {/* card2 */}
                            <button
                                className="btn btn_custom collapsed mt-5"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Can I bring my cell phone on the trampoline or ropes course?
                            </button>
                            <div className="collapse" id="collapseTwo" data-parent="#accordionExample">
                                <div className="card card-body card_data">
                                    No, cell phones aren’t permitted on the ropes and trampoline areas due to safety reasons.
                                </div>
                            </div>

                            {/* card3 */}
                            <button
                                className="btn btn_custom collapsed mt-5"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsethree"
                                aria-expanded="false"
                                aria-controls="collapsethree"
                            >
                                Do you have a nursing station?
                            </button>
                            <div className="collapse" id="collapsethree" data-parent="#accordionExample">
                                <div className="card card-body card_data">
                                    No, cell phones aren’t permitted on the ropes and trampoline areas due to safety reasons.
                                </div>
                            </div>

                            {/* card4 */}
                            <button
                                className="btn btn_custom collapsed mt-5"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapsefour"
                                aria-expanded="false"
                                aria-controls="collapsefour"
                            >
                                When should I arrive before my scheduled attraction?
                            </button>
                            <div className="collapse" id="collapsefour" data-parent="#accordionExample">
                                <div className="card card-body card_data">
                                    Comfortable athletic clothing and grip socks are recommended.
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={5} md={12} sm={12} className='mt-5 mb-3'>
                        <div className="card card_faq custom-triangle">
                            <div className="card-body mt-5 mb-5">
                                <h3 className='title_req'>Request A Quote</h3>
                                <p className='parafaq mb-5'>
                                    Fill all information details to consult with us to get services from us
                                </p>

                                <Container className='Formstart'>
                                    <div className='container'>
                                        <form onSubmit={handleSubmit}>

                                            {/* NAME */}
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control custom-input"
                                                    placeholder="Enter Name"
                                                    value={name}
                                                    onChange={handleNameChange}
                                                />
                                                {errors.name && <span className="error text-danger">{errors.name}</span>}
                                            </div>

                                            {/* EMAIL */}
                                            <div className="form-group ">
                                                <input
                                                    type="email"
                                                    className="form-control custom-input"
                                                    placeholder="Enter Email"
                                                    value={email}
                                                    onChange={handleEmailChange}
                                                />
                                                {errors.email && <span className="error text-danger">{errors.email}</span>}
                                            </div>

                                            {/* SUBJECT */}
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control custom-input"
                                                    placeholder="Enter Subject"
                                                    value={subject}
                                                    onChange={handleSubjectChange}
                                                />
                                                {errors.subject && <span className="error text-danger">{errors.subject}</span>}
                                            </div>

                                            {/* MESSAGE */}
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control custom-input"
                                                    placeholder="Enter message"
                                                    value={message}
                                                    onChange={handleMessageLive}
                                                />
                                                {errors.message && <span className="error text-danger">{errors.message}</span>}
                                                <div>{message.length} / 200</div>
                                            </div>

                                            <div className="text-center">
                                                <button type="submit" className="send_btn">
                                                    SEND
                                                </button>
                                            </div>
                                        </form>
                                    </div>
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
