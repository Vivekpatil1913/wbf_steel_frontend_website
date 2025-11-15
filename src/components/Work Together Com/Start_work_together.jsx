import React from 'react'
import '../../css/startworkTogether.css'

import facebookIcon from "../../assets/icons/logos_facebook.png";
import instaIcon from "../../assets/icons/insta.png";
import whatsappIcon from "../../assets/icons/logos_whatsapp-icon.png";
import linkedinIcon from "../../assets/icons/Group.png";
import mailIcon from "../../assets/icons/mail.png";

import arra from '../../../public/assets/services/Arrow 8.png'
function Start_work_together() {
    return (
        <>
            <div className='container-fluid '>
                <div class="card-outer-border p-3">

                    <p className='letstart_work_heading pt-3 pl-3'>Let’s Start Work Together</p>
                    <p className='para-work pl-3'>
                        Please feel free to contact us. We will get back to you with 1-2 business days.<br />
                        Or just call us now.
                    </p>
                    <hr className="custom-hr " />

                    <div className="social-icons d-flex align-items-center pl-3 mt-5">
                        <a href="https://www.facebook.com/" className="me-2">
                            <img src={facebookIcon} alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/" className="me-2">
                            <img src={instaIcon} alt="Instagram" />
                        </a>
                        <a href="https://www.whatsapp.com/" className="me-2">
                            <img src={whatsappIcon} alt="WhatsApp" />
                        </a>
                        <a href="https://in.linkedin.com/" className="me-2">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://www.mail.com/">
                            <img src={mailIcon} alt="Mail" />
                        </a>
                    </div>

                    <p className='get_quote pl-3'>
                        GETS A QUOTE <img src={arra} alt="Facebook" className='pl-2' />
                    </p>




                </div>

            </div>

        </>
    )
}

export default Start_work_together
