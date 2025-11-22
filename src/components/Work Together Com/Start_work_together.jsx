import React from 'react'
import '../../css/startworkTogether.css'

import facebookIcon from "../../../src/assets/icons/logos_facebook.png";
import instaIcon from "../../../src/assets/icons/insta.png";
import whatsappIcon from "../../../src/assets/icons/logos_whatsapp-icon.png";
import linkedinIcon from "../../../src/assets/icons/Group.png";
import mailIcon from "../../../src/assets/icons/mail.png";
import serviceLine from '../../imges/services/veritical_service_line.png'


import arra from '../../../src/assets/services/Arrow_8.png'

import { IoIosArrowRoundForward } from "react-icons/io";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Link } from 'react-router-dom';
function Start_work_together() {
    return (
        <>
            <div className='container-fluid '>
                <div class="card-outer-border p-2">

                    <p className='letstart_work_heading pt-2 pl-3'>Let’s Start Work Together</p>
                    <p className='para-work pl-3 '>
                        Please feel free to contact us. We will get back to you with 1-2 business days.<br />
                        Or just call us now.
                    </p>
                    {/* <img src={serviceLine} className='custom_hr_line' /> */}
                    <div class="custom-line"></div>


                    <div className=" sociall social-icons d-flex align-items-center pl-3 mt-5 ">
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

                    <p className='get_quote pl-3 mt-3'>
                        <Link to='/contactus'>GETS A QUOTE <HiOutlineArrowNarrowRight className='get_quote_icon get_quote'/></Link>
                    </p>




                </div>

            </div>

        </>
    )
}

export default Start_work_together
