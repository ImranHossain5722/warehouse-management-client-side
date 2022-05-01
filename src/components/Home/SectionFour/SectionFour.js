import React from 'react';
import './SectionFour.css'

const SectionFour = () => {
    return (
        <div className=' main-div ' >
            <div className='container mt-5'>
                <div className='row'>
                <span className='pt-5 span-carSale'>Welcome to CarSale</span>
                        <h2 className='popular-h2'>Most Popular </h2>

                    <div className='col-12 col-md-6 col-lg-6 col-xl-6 big-imag' >
                        
                    <h2 className='carName'>Mercedes G Class </h2>

                    </div>
                    <div className= 'col-12 col-md-6 col-lg-6 col-xl-6' >
                        <div className='container'>
                            <div className='row'>
                                <div className='col-12 col-lg-12 col-md-12 col-xl-12 small-divImg1'>
                                <h2 className='carName1'>Toyota 4Runner SUV</h2>
                                </div>
                                <div className='col-12 col-lg-12 col-md-12 col-xl-12 small-divImg2'>
                                <h2 className='carName2'>Toyota 4Runner SUV</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SectionFour;