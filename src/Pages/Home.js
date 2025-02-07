import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Optional: Navigation buttons
import "swiper/css/pagination"; // Optional: Pagination dots
import { Navigation, Pagination, Autoplay } from "swiper/modules";



const Home = () => {
    return (
        <div>
            <Silder />
        </div>
    )
}
const Silder = () => {
    return (
        <>
            <section className="w3l-main-slider" id="home">
                <div className="companies20-content">
                    <div className="companies-wrapper" />
                    <div style={{ width: "100%", margin: "auto", padding: "", height: "1000px" }}>
                        <Swiper style={{ height: "50%" }}
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
                                                        <a className="btn btn-secondary btn-theme1" href="properties.html"> Check Property</a>
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
                                                        <a className="btn btn-secondary btn-theme1" href="properties.html"> Check Property</a>
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
                                                        <a className="btn btn-secondary btn-theme1" href="properties.html"> Check Property</a>
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
                                                        <a className="btn btn-secondary btn-theme1" href="properties.html"> Check Property</a>
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


export default Home