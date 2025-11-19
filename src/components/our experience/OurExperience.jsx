import React from 'react'
import '../../css/our_experince.css'
import expe_img1 from '../../../src/assets/ourExperince/ourExp_img1.png'
import charches from '../../../src/assets/ourExperince/Churches.png'
import sports from '../../../src/assets/ourExperince/Sport Aarenas and Stadiums.png'
import airport from '../../../src/assets/ourExperince/Airports.png'


import car from '../../../src/assets/ourExperince/cars.png'
import home from '../../../src/assets/ourExperince/Warehouses.png'
import school from '../../../src/assets/ourExperince/school.png'
import hightschool from '../../../src/assets/ourExperince/high_school.png'
import instdustrie from '../../../src/assets/ourExperince/industries.png'
import truck from '../../../src/assets/ourExperince/truck.png'
function OurExperience() {
    return (
        <>
            <p className='ourExperince_title mt-3'>Our Experience</p>

            <div className="container">
                <div className="row mt-3 d-flex align-items-stretch justify-content-center">

                    <div className="col-sm-12 col-md-3 col-lg-6 col-xl-3 mt-3 d-flex">
                        <div className="card expe1 w-100 card-style d-flex flex-column justify-content-center align-items-center">
                            <div className="card-body text-center">
                                <img src={expe_img1} alt="..." className="img-fluid mb-3" />
                                <div className="office-text">Office Spaces</div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-6 col-xl-3 mt-3 d-flex">
                        <div className="card expe2 w-100 card-style d-flex flex-column justify-content-center align-items-center">
                            <div className="card-body text-center">
                                <img src={charches} alt="..." className="img-fluid mb-3" />
                                <span className="office-text">Office Spaces</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-6 col-xl-3 mt-3 d-flex">
                        <div className="card expe1 w-100 card-style d-flex flex-column justify-content-center align-items-center">
                            <div className="card-body text-center">
                                <img src={sports} alt="..." className="img-fluid mb-3" />
                                <span className="office-text">Sport Arenas and Stadiums</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-6 col-xl-3 mt-3 d-flex">
                        <div className="card expe2 w-100 card-style d-flex flex-column justify-content-center align-items-center">
                            <div className="card-body text-center">
                                <img src={airport} alt="..." className="img-fluid mb-3" />
                                <span className="office-text">Airports</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-6 col-xl-3 mt-3 d-flex">
                        <div className="card expe1 w-100 card-style d-flex flex-column justify-content-center align-items-center">
                            <div className="card-body text-center">
                                <img src={car} alt="..." className="img-fluid mb-3" />
                                <div className="office-text">Parking Structures</div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-6 col-xl-3 mt-3 d-flex">
                        <div className="card expe2 w-100 card-style d-flex flex-column justify-content-center align-items-center">
                            <div className="card-body text-center">
                                <img src={home} alt="..." className="img-fluid mb-3" />
                                <span className="office-text">Warehouses</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-6 col-xl-3 mt-3 d-flex">
                        <div className="card expe1 w-100 card-style d-flex flex-column justify-content-center align-items-center">
                            <div className="card-body text-center">
                                <img src={school} alt="..." className="img-fluid mb-3" />
                                <span className="office-text">Schools and Universities</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-6 col-xl-3 mt-3 d-flex">
                        <div className="card expe2 w-100 card-style d-flex flex-column justify-content-center align-items-center">
                            <div className="card-body text-center">
                                <img src={hightschool} alt="..." className="img-fluid mb-3" />
                                <span className="office-text">High-rise Residential Apartments</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-6 col-xl-3 mt-3 d-flex">
                        <div className="card expe1 w-100 card-style d-flex flex-column justify-content-center align-items-center">
                            <div className="card-body text-center">
                                <img src={expe_img1} alt="..." className="img-fluid mb-3" />
                                <div className="office-text">Other Allied Structures</div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-6 col-xl-3 mt-3 d-flex">
                        <div className="card expe2 w-100 card-style d-flex flex-column justify-content-center align-items-center">
                            <div className="card-body text-center">
                                <img src={instdustrie} alt="..." className="img-fluid mb-3" />
                                <span className="office-text">Industrial Structures</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <p className='ourExperince_title mt-5'>Industrial Solutions</p>
            <div className="container">
                <div className="row mt-3 d-flex align-items-stretch justify-content-center">
                    <div className="col-sm-12 col-md-3 col-lg-6 col-xl-3 mt-3 d-flex">
                        <div className="card expe1 w-100 card-style d-flex flex-column justify-content-center align-items-center">
                            <div className="card-body text-center">
                                <img src={expe_img1} alt="..." className="img-fluid mb-3" />
                                <div className="office-text">Energy Power plants</div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-6 col-xl-3 mt-3 d-flex">
                        <div className="card expe2 w-100 card-style d-flex flex-column justify-content-center align-items-center">
                            <div className="card-body text-center">
                                <img src={hightschool} alt="..." className="img-fluid mb-3" />
                                <span className="office-text">Process Plants (Petro /Chemical /Steel /Cement)</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-3 col-lg-6 col-xl-3 mt-3 d-flex">
                        <div className="card expe1 w-100 card-style d-flex flex-column justify-content-center align-items-center">
                            <div className="card-body text-center">
                                <img src={truck} alt="..." className="img-fluid mb-3" />
                                <div className="office-text">Oil & Gas (Onshore /Offshore)</div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default OurExperience
