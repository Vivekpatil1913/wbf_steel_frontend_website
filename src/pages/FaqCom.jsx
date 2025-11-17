import React, { useState } from 'react';
import '../css/faq.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSearchParams } from 'react-router-dom';

function FaqCom() {

    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [subject, setsubject] = useState("");
    const [message, setmessage] = useState("");

    const [errors, setErrors] = useState({})


    const validateForm = () => {
        let errors = {};
        let isValid = true;

        if (!name.trim()) {
            errors.name = 'Name is required';
            isValid = false;
        }
        if (!email.trim()) {
            errors.email = 'email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'invalid email address';
            isValid = false;
        }
        if (!subject.trim()) {
            errors.subject = 'subject is required';
            isValid = false;
        }
        if (!message.trim()) {
            errors.message = 'message is required only < 200 only';
            isValid = false;
        }



        setErrors(errors);
        return isValid;
    };
    console.log("errors", errors);


    const handleChange = (e) => {
        const text = e.target.value;
        const words = text.trim().split(/\s+/);
        if (words.length <= 200) {
            setmessage(text);
        } else {
            // Limit to first 200 words if exceeded
            setmessage(words.slice(0, 200).join(" "));
        }
    };

    const wordCount = message.trim() === "" ? 0 : message.trim().split(/\s+/).length;

    // 3. Diplay Data Which is store into state and print data into console. (Check Data is proper accepting or Not)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            let newData = {
                name, email, subject, message
            }
            console.log("newData", newData);
        };
    }
    return (
        <div className='backimge mt-5 ' >
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
                            <div
                                className="collapse show"
                                id="collapseOne"
                                data-parent="#accordionExample"  // 👈 ensure it’s part of same group
                            >
                                <div className="card card-body card_data">
                                    No, cell phones aren’t permitted on the ropes and trampoline areas due to safety reasons.
                                    We do have a cell phone storage area to put them in or you can get a locker to store your phone.
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
                            <div
                                className="collapse"
                                id="collapseTwo"
                                data-parent="#accordionExample"  // 👈 same parent
                            >
                                <div className="card card-body card_data">

                                    No, cell phones aren’t permitted on the ropes and
                                    trampoline areas due to safety reasons.
                                    We do have a cell phone storage area to put them in or
                                    you can get a locker to store your phone.                                </div>
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
                            <div
                                className="collapse"
                                id="collapsethree"
                                data-parent="#accordionExample"  // 👈 same parent
                            >
                                <div className="card card-body card_data">

                                    No, cell phones aren’t permitted on the ropes and
                                    trampoline areas due to safety reasons.
                                    We do have a cell phone storage area to put them in or
                                    you can get a locker to store your phone.                                </div>
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
                            <div
                                className="collapse"
                                id="collapsefour"
                                data-parent="#accordionExample"  // 👈 same parent
                            >
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
                                    Fill all information details to consult with us to
                                    get services from us
                                </p>
                                <Container className='Formstart '>
                                    <div className='container'>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control custom-input"
                                                    placeholder="Enter Name"
                                                    value={name}
                                                    onChange={(e) => setname(e.target.value)}
                                                />
                                                {errors.name && <span className="error text-danger">{errors.name}</span>}
                                            </div>
                                            <div className="form-group ">
                                                <input
                                                    type="email"
                                                    className="form-control custom-input "
                                                    placeholder="Enter Email"
                                                    value={email}
                                                    onChange={(e) => setemail(e.target.value)}
                                                />
                                                {errors.email && <span className="error text-danger">{errors.email}</span>}
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control custom-input"
                                                    placeholder="Enter Subject"
                                                    value={subject}
                                                    onChange={(e) => setsubject(e.target.value)}
                                                />
                                                {errors.subject && <span className="error text-danger">{errors.subject}</span>}
                                            </div>

                                            <div className="form-group">
                                                <div className="form-group">
                                                    <input
                                                        type="text"
                                                        className="form-control custom-input"
                                                        placeholder="Enter message"
                                                        value={message}
                                                        onChange={(e) => setmessage(e.target.value)}
                                                    />
                                                    {/* <textarea
                                                        className="form-control custom-input"
                                                        placeholder="Enter Message"
                                                        rows="1"
                                                        maxLength={200}
                                                        value={message}
                                                        onChange={(e) => setmessage(e.target.value)}
                                                    /> */}
                                                    {errors.message && <span className="error text-danger">{errors.message}</span>}
                                                    <div>{message.length} / 200</div>
                                                </div>

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

        </div >
    );
}

export default FaqCom;
