import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional: Navigation buttons
import "swiper/css/pagination"; // Optional: Pagination dots
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Header from '../Common/Header';
import Footer from '../Common/Footer';
import { Link } from 'react-router-dom';





const Home = () => {
    return (
        <div>

            <Header />
            <Silder />
            <InfoBlock />
            <Specification />
            <PropertyInfo />
            <ContactUs />
            <Testimonials />
            <Footer />
        </div>
    )
}




const Silder = () => {
    return (
        <>
            <section className="w3l-main-slider" id="home">
                <div className="companies20-content">
                    <div className="companies-wrapper" />
                    <div style={{ width: "100%", margin: "auto", padding: "", height: "" }}>
                        <Swiper style={{
                            height: "50%",
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            loop={true}
                        >
                            <SwiperSlide>
                                <div className="item">
                                    <li>
                                        <div className="slider-info banner-view bg bg2" data-selector=".bg.bg2">
                                            <div className="banner-info">
                                                <div className="container">
                                                    <div className="banner-info-bg">
                                                        <h6><span className="fa fa-map-marker" /> Melbourne,Australia</h6>
                                                        <h5>60 Thornley Street, Marrickville, NSW 2204</h5>
                                                        <ul className="banner-ul">
                                                            <li><span className="fa fa-bed" /> 3</li>
                                                            <li><span className="fa fa-bath" /> 3</li>
                                                            <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
                                                        </ul>
                                                        <Link id="link" className="btn btn-secondary btn-theme1" to="/properties"> Check Property</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <li>
                                        <div className="slider-info  banner-view banner-top1 bg bg2" data-selector=".bg.bg2">
                                            <div className="banner-info">
                                                <div className="container">
                                                    <div className="banner-info-bg">
                                                        <h6><span className="fa fa-map-marker" /> Sydney,Australia</h6>
                                                        <h5>60 Thornley Street, Marrickville, NSW 2204</h5>
                                                        <ul className="banner-ul">
                                                            <li><span className="fa fa-bed" /> 3</li>
                                                            <li><span className="fa fa-bath" /> 3</li>
                                                            <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
                                                        </ul>
                                                        <Link id="link" className="btn btn-secondary btn-theme1" to="/properties"> Check Property</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <li>
                                        <div className="slider-info banner-view banner-top2 bg bg2" data-selector=".bg.bg2">
                                            <div className="banner-info">
                                                <div className="container">
                                                    <div className="banner-info-bg">
                                                        <h6><span className="fa fa-map-marker" /> Perth,Australia</h6>
                                                        <h5>60 Thornley Street, Marrickville, NSW 2204</h5>
                                                        <ul className="banner-ul">
                                                            <li><span className="fa fa-bed" /> 3</li>
                                                            <li><span className="fa fa-bath" /> 3</li>
                                                            <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
                                                        </ul>
                                                        <Link id="link" className="btn btn-secondary btn-theme1" to="/properties"> Check Property</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="item">
                                    <li>
                                        <div className="slider-info banner-view banner-top3 bg bg2" data-selector=".bg.bg2">
                                            <div className="banner-info">
                                                <div className="container">
                                                    <div className="banner-info-bg">
                                                        <h6><span className="fa fa-map-marker" /> Melbourne,Australia</h6>
                                                        <h5>60 Thornley Street, Marrickville, NSW 2204</h5>
                                                        <ul className="banner-ul">
                                                            <li><span className="fa fa-bed" /> 3</li>
                                                            <li><span className="fa fa-bath" /> 3</li>
                                                            <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
                                                        </ul>
                                                        <Link id="link" className="btn btn-secondary btn-theme1" to="/properties"> Check Property</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

        </>
    )
}

const InfoBlock = () => {
    return (
        <>
            <section className="w3l-index-block2 py-5">
                <div className="container py-md-3">
                    <div className="heading text-center mx-auto">
                        <h3 className="head">What We Do</h3>
                        <p className="my-3 head"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                            Nulla mollis dapibus nunc, ut rhoncus
                            turpis sodales quis. Integer sit amet mattis quam.
                        </p>
                    </div>
                    <div className="row bottom_grids mt-5 pt-3">
                        <div className="col-lg-4 col-md-6">
                            <div className="s-block p-4">

                                <span className="fa fa-home icon-siz" />
                                <h3 className="my-3">Office Agency</h3>
                                <p className="">Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.</p>
                                <Link id="link" to="/services">Read More <span className="fa fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-sm-0 mt-4">
                            <div className="s-block p-4">

                                <span className="fa fa-university icon-siz" />
                                <h3 className="my-3">Retail Agency</h3>
                                <p className="">Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.</p>
                                <Link id="link" to="/services">Read More <span className="fa fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-lg-0 mt-4">
                            <div className="s-block p-4">

                                <span className="fa fa-hourglass icon-siz" />
                                <h3 className="my-3">Industrial Agency</h3>
                                <p className="">Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.</p>
                                <Link id="link" to="/services">Read More <span className="fa fa-long-arrow-right" /></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4">
                            <div className="s-block p-4">

                                <span className="fa fa-futbol-o icon-siz" />
                                <h3 className="my-3">Property & Asset</h3>
                                <p className="">Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.</p>
                                <Link id="link" to="/services">Read More <span className="fa fa-long-arrow-right" /></Link>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4">
                            <div className="s-block p-4">

                                <span className="fa fa-cubes icon-siz" />
                                <h3 className="my-3">Building Surviying</h3>
                                <p className="">Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.</p>
                                <Link id="link" to="/services">Read More <span className="fa fa-long-arrow-right" /></Link>

                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mt-4">
                            <div className="s-block p-4">

                                <span className="fa fa-area-chart icon-siz" />
                                <h3 className="my-3">Total Investment</h3>
                                <p className="">Lorem ipsum dolor sit amet, cons ectetur adipisicing elit, sed do i eiusmod tempor incididunt.</p>
                                <Link id="link" to="/services">Read More <span className="fa fa-long-arrow-right" /></Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

}

const Specification = () => {
    return (
        <>
            <section className="w3l-specifications-9">
                <div className="main-w3 py-5" id="stats">
                    <div className="container text-center py-md-3 mt-4">
                        <div className="main-cont-wthree-fea row">
                            <div className="grids-speci1 col-lg-3 col-6">
                                <h3 className="title-spe">445</h3>
                                <p>PROPERTIES TO RENT</p>
                            </div>
                            <div className="grids-speci1 midd-eff-spe col-lg-3 col-6">
                                <h3 className="title-spe">350</h3>
                                <p>PROPERTIES FOR SALE</p>
                            </div>
                            <div className="grids-speci1 las-but col-lg-3 col-6  mt-lg-0 mt-4">
                                <h3 className="title-spe">530</h3>
                                <p>PROPERTIES UNDER OFFER</p>
                            </div>
                            <div className="grids-speci1 las-t col-lg-3 col-6  mt-lg-0 mt-4">
                                <h3 className="title-spe">25k </h3>
                                <p>SQARE. FT</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

const PropertyInfo = () => {
    return (
        <>
            <section className="grids-4">
                <div id="grids4-block" className="py-5">
                    <div className="container py-md-3">
                        <div className="heading text-center mx-auto">
                            <h3 className="head">Recently Added Properties</h3>
                            <p className="my-3 head"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
                                Nulla mollis dapibus nunc, ut rhoncus
                                turpis sodales quis. Integer sit amet mattis quam.</p>
                        </div>
                        <div className="row mt-5 pt-3">
                            <div className="grids4-info  col-lg-4 col-md-6">
                                <Link id="link" to="/properties-single"><img src="assets/images/g12.jpg" className="img-fluid" alt="" /></Link>
                                <div className="info-bg">
                                    <h5><Link id="link" to="/properties-single">84 Woodland St. Cocoa</Link></h5>
                                    <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
                                    <ul>
                                        <li><span className="fa fa-bed" /> 4 Beds</li>
                                        <li><span className="fa fa-bath" /> 3 Baths</li>
                                        <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grids4-info col-lg-4 col-md-6 mt-md-0 mt-4">
                                <Link id="link" to="/properties-single"><img src="assets/images/g11.jpg" className="img-fluid" alt="" /></Link>
                                <div className="info-bg">
                                    <h5><Link id="link" to="/properties-single">28 Westport Dr. Warminster</Link></h5>
                                    <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
                                    <ul>
                                        <li><span className="fa fa-bed" /> 3 Beds</li>
                                        <li><span className="fa fa-bath" /> 2 Baths</li>
                                        <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grids4-info col-lg-4 col-md-6 mt-lg-0 mt-4">
                                <Link id="link" to="/properties-single"><img src="assets/images/g10.jpg" className="img-fluid" alt="" /></Link>
                                <div className="info-bg">
                                    <h5><Link id="link" to="/properties-single">32 Pawnee Street Butte</Link></h5>
                                    <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
                                    <ul>
                                        <li><span className="fa fa-bed" /> 4 Beds</li>
                                        <li><span className="fa fa-bath" /> 3 Baths</li>
                                        <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grids4-info  col-lg-4 col-md-6 mt-4">
                                <Link id="link" to="/properties-single"><img src="assets/images/g9.jpg" className="img-fluid" alt="" /></Link>
                                <div className="info-bg">
                                    <h5><Link id="link" to="/properties-single">2 Glen Creek St. Alexandria</Link></h5>
                                    <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
                                    <ul>
                                        <li><span className="fa fa-bed" /> 5 Beds</li>
                                        <li><span className="fa fa-bath" /> 3 Baths</li>
                                        <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grids4-info  col-lg-4 col-md-6 mt-4">
                                <Link id="link" to="/properties-single"><img src="assets/images/g8.jpg" className="img-fluid" alt="" /></Link>
                                <div className="info-bg">
                                    <h5><Link id="link" to="/properties-single">798 Talbot St. Bridgewater</Link></h5>
                                    <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
                                    <ul>
                                        <li><span className="fa fa-bed" /> 2 Beds</li>
                                        <li><span className="fa fa-bath" /> 1 Baths</li>
                                        <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grids4-info  col-lg-4 col-md-6 mt-4">
                                <Link id="link" to="/properties-single"><img src="assets/images/g7.jpg" className="img-fluid" alt="" /></Link>
                                <div className="info-bg">
                                    <h5><Link id="link" to="/properties-single">7240C Argyle St. Lawndale</Link></h5>
                                    <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
                                    <ul>
                                        <li><span className="fa fa-bed" /> 4 Beds</li>
                                        <li><span className="fa fa-bath" /> 3 Baths</li>
                                        <li><span className="fa fa-share-square-o" /> 1200 sq ft</li>
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

const ContactUs = () => {
    return (
        <>

            <section className="w3l-customers-7">
                <div className="customers_sur py-5">
                    <div className="container py-md-3">

                        <div className="customers-top_sur row">
                            <div className="customers-left_sur col-lg-6">
                                <h6></h6>
                                <h4>Common Sense Solutions For All Aspects Of Commercial Property, Development Land.</h4>
                                <Link id="link" to="/contact" className="btn btn-secondary btn-theme1 mt-4" > Contact Us</Link>
                            </div>
                            <div className="customers-middle_sur col-lg-6 mt-lg-0 mt-4">
                                <div className="customers_grid">
                                    <p className="sub-test">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const Testimonials = () => {
    return (
        <>

            <section className="w3l-customers-8" id="testimonials">
                <div className="customers_sur py-5">
                    <div className="container py-md-3">
                        <div className="heading text-center mx-auto">
                            <h3 className="head">Happy Clients</h3>
                            <p className="my-3 head"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                Curae;
                                Nulla mollis dapibus nunc, ut rhoncus
                                turpis sodales quis. Integer sit amet mattis quam.</p>
                        </div>
                        <div className="customers-top_sur row mt-5 pt-3">
                            <div className="customers-left_sur col-md-6">
                                <div className="customers_grid">
                                    <ul className="mb-3">
                                        <li className="rated">
                                            <span className="fa fa-star" />
                                        </li>
                                        <li className="rated">
                                            <span className="fa fa-star" />
                                        </li>
                                        <li className="rated">
                                            <span className="fa fa-star" />
                                        </li>
                                        <li className="rated">
                                            <span className="fa fa-star" />
                                        </li>
                                        <li className="rated">
                                            <span className="fa fa-star" />
                                        </li>
                                    </ul>
                                    <p className="sub-test">Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                    <div className="customers-bottom_sur row">
                                        <div className="custo-img-res col-3">
                                            <img src="assets/images/te2.jpg" alt=" " className="img-responsive" />
                                        </div>
                                        <div className="custo_grid col-9">
                                            <h5>Shane Watson</h5>
                                            <span>Landlord</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="customers-middle_sur col-md-6 mt-md-0 mt-4">
                                <div className="customers_grid">
                                    <ul className="mb-3">
                                        <li className="rated">
                                            <span className="fa fa-star" />
                                        </li>
                                        <li className="rated">
                                            <span className="fa fa-star" />
                                        </li>
                                        <li className="rated">
                                            <span className="fa fa-star" />
                                        </li>
                                        <li className="rated">
                                            <span className="fa fa-star" />
                                        </li>
                                        <li className="rated">
                                            <span className="fa fa-star" />
                                        </li>
                                    </ul>
                                    <p className="sub-test">Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                                    <div className="customers-bottom_sur row">
                                        <div className="custo-img-res col-3">
                                            <img src="assets/images/te3.jpg" alt=" " className="img-responsive" />
                                        </div>
                                        <div className="custo_grid col-9">
                                            <h5>Henry Nicholas</h5>
                                            <span>Client</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Home