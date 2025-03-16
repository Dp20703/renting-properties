import React from 'react'
import Header from '../Common/Header';
import Banner from '../Common/Banner';
import Footer from '../Common/Footer';
import { Link } from 'react-router-dom';

const Properties = () => {
    return (
        <div>
            <Header />
            <Banner title={"Our Properties"} pageName={"properties"} />
            <Main />
            <Footer />
        </div>
    )
}

function Main() {

    return (
        <>
            <section className="grids-3 m-auto" id="properties" style={{ width: "75%" }}>
                <div id="grids3-block" className="py-5">
                    <div className="container py-md-3">

                        <div className="row">
                            <div className="grids3-info col-lg-4 col-md-6">
                                <Link id="link" to="/properties-single">
                                    <img src="assets/images/g7.jpg" className="img-fluid" alt="" />
                                </Link>
                                <p>Rent</p>
                                <div className="info-bg">
                                    <h5>
                                        <Link id="link" to="/properties-single">Bodakdev, Ahmedabad, Gujarat</Link>
                                    </h5>
                                    <ul>
                                        <li><span className="fa fa-bed"></span> 4 Beds</li>
                                        <li><span className="fa fa-bath"></span> 3 Baths</li>
                                        <li><span className="fa fa-share-square-o"></span> 1800 sq ft</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grids3-info col-lg-4 col-md-6 mt-md-0 mt-5">
                                <Link id="link" to="/properties-single">
                                    <img src="assets/images/g8.jpg" className="img-fluid" alt="" />
                                </Link>
                                <p>Rent</p>
                                <div className="info-bg">
                                    <h5>
                                        <Link id="link" to="/properties-single">Jubilee Hills, Hyderabad, Telangana</Link>
                                    </h5>
                                    <ul>
                                        <li><span className="fa fa-bed"></span> 3 Beds</li>
                                        <li><span className="fa fa-bath"></span> 2 Baths</li>
                                        <li><span className="fa fa-share-square-o"></span> 1500 sq ft</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grids3-info col-lg-4 col-md-6 mt-lg-0 mt-5">
                                <Link id="link" to="/properties-single">
                                    <img src="assets/images/g9.jpg" className="img-fluid" alt="" />
                                </Link>
                                <p>Rent</p>
                                <div className="info-bg">
                                    <h5>
                                        <Link id="link" to="/properties-single">Koramangala, Bangalore, Karnataka</Link>
                                    </h5>
                                    <ul>
                                        <li><span className="fa fa-bed"></span> 4 Beds</li>
                                        <li><span className="fa fa-bath"></span> 3 Baths</li>
                                        <li><span className="fa fa-share-square-o"></span> 2000 sq ft</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grids3-info col-lg-4 col-md-6 mt-5">
                                <Link id="link" to="/properties-single">
                                    <img src="assets/images/g10.jpg" className="img-fluid" alt="" />
                                </Link>
                                <p>Rent</p>
                                <div className="info-bg">
                                    <h5>
                                        <Link id="link" to="/properties-single">Salt Lake, Kolkata, West Bengal</Link>
                                    </h5>
                                    <ul>
                                        <li><span className="fa fa-bed"></span> 5 Beds</li>
                                        <li><span className="fa fa-bath"></span> 3 Baths</li>
                                        <li><span className="fa fa-share-square-o"></span> 2500 sq ft</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grids3-info col-lg-4 col-md-6 mt-5">
                                <Link id="link" to="/properties-single">
                                    <img src="assets/images/g11.jpg" className="img-fluid" alt="" />
                                </Link>
                                <p>Rent</p>
                                <div className="info-bg">
                                    <h5>
                                        <Link id="link" to="/properties-single">Viman Nagar, Pune, Maharashtra</Link>
                                    </h5>
                                    <ul>
                                        <li><span className="fa fa-bed"></span> 2 Beds</li>
                                        <li><span className="fa fa-bath"></span> 1 Bath</li>
                                        <li><span className="fa fa-share-square-o"></span> 1300 sq ft</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grids3-info col-lg-4 col-md-6 mt-5">
                                <Link id="link" to="/properties-single">
                                    <img src="assets/images/g12.jpg" className="img-fluid" alt="" />
                                </Link>
                                <p>Rent</p>
                                <div className="info-bg">
                                    <h5>
                                        <Link id="link" to="/properties-single">Civil Lines, Jaipur, Rajasthan</Link>
                                    </h5>
                                    <ul>
                                        <li><span className="fa fa-bed"></span> 4 Beds</li>
                                        <li><span className="fa fa-bath"></span> 3 Baths</li>
                                        <li><span className="fa fa-share-square-o"></span> 2200 sq ft</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );


}

export default Properties