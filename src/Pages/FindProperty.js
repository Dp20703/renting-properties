import React from 'react'
import Header from '../Common/Header'
import Banner from '../Common/Banner'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom';

const FindProperty = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Main />
            <Footer />
        </div>
    )
}
function Main() {
    return (
        <>
            <section className="form-16" id="booking" style={{ padding: '0px 140px' }}>
                <div className="form-16-mian py-5">
                    <div className="container py-md-3">
                        <div className="forms-16-top">
                            <div className="form-right-inf">
                                <div className="form-inner-cont">
                                    <h3>Find your next perfect place</h3>
                                    <form action="https://p.w3layouts.com/demosWTR/Freedom/12-02-2020/estate_property-freedom-demo_Free/200993729/web/search-results" method="post" className="signin-form">
                                        <div className="row book-form">
                                            <div className="form-input col-lg-8 col-md-6">
                                                <input type="text" name="" placeholder="Enter Your Keywords..." required />
                                            </div>
                                            <div className="form-input col-lg-4 col-md-6 mt-md-0 mt-3">
                                                <select className="selectpicker">
                                                    <option>Select Location</option>
                                                    <option>Sydney</option>
                                                    <option>Melbourne</option>
                                                </select>

                                            </div>
                                            <div className="form-input col-md-4 mt-3">
                                                <input type="text" name="" placeholder="Max Area (sqft)" required />
                                            </div>
                                            <div className="form-input col-md-4 mt-3">
                                                <select className="selectpicker">
                                                    <option>Property Status</option>
                                                    <option>Lorem Ipsum</option>
                                                    <option>Dolor Sit</option>
                                                </select>

                                            </div>
                                            <div className="form-input col-md-4  mt-3">
                                                <select className="selectpicker">
                                                    <option>Property type</option>
                                                    <option>Doble Bedroom</option>
                                                    <option>Single Bedroom</option>
                                                </select>

                                            </div>
                                            <div className="form-input col-md-4 mt-3">
                                                <select className="selectpicker">
                                                    <option>Select Categories</option>
                                                    <option> Categories-1</option>
                                                    <option> Categories-2</option>
                                                </select>

                                            </div>
                                            <div className="form-input col-md-4  mt-3">
                                                <input type="text" name="" placeholder="Max Price ($)" required />
                                            </div>
                                            <div className="bottom-btn col-md-4  mt-3">
                                                <button className="btn">Search</button>
                                            </div>
                                        </div>



                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default FindProperty