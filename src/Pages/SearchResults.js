import React from 'react'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import Banner from '../Common/Banner'
import { Link } from 'react-router-dom';

const SearchResults = () => {
    return (
        <div>
            <Header />
            <Banner title={"Search Results"} pageName={"search-results"} />
            <Main />
            <Footer />
        </div>
    )
}

function Main() {

    return (
        <>
            <section className="grids-2 m-auto" style={{ width: "75%" }}>
                <div id="grids4-block" className="py-5">
                    <div className="container py-md-3">

                        <div className="row mt-5 pt-3">
                            <div className="grids4-info  col-lg-4 col-md-6">
                                <Link id="link" to="/properties-single"><img src="assets/images/g12.jpg" className="img-fluid" alt="" /></Link>
                                <div className="info-bg">
                                    <h5><Link id="link" to="/properties-single">84 Woodland St. Cocoa</Link></h5>
                                    <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
                                    <ul>
                                        <li><span className="fa fa-bed"></span> 4 Beds</li>
                                        <li><span className="fa fa-bath"></span> 3 Baths</li>
                                        <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grids4-info col-lg-4 col-md-6 mt-md-0 mt-4">
                                <Link id="link" to="/properties-single"><img src="assets/images/g11.jpg" className="img-fluid" alt="" /></Link>
                                <div className="info-bg">
                                    <h5><Link id="link" to="/properties-single">28 Westport Dr. Warminster</Link></h5>
                                    <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
                                    <ul>
                                        <li><span className="fa fa-bed"></span> 3 Beds</li>
                                        <li><span className="fa fa-bath"></span> 2 Baths</li>
                                        <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grids4-info col-lg-4 col-md-6 mt-lg-0 mt-4">
                                <Link id="link" to="/properties-single"><img src="assets/images/g10.jpg" className="img-fluid" alt="" /></Link>
                                <div className="info-bg">
                                    <h5><Link id="link" to="/properties-single">32 Pawnee Street Butte</Link></h5>
                                    <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
                                    <ul>
                                        <li><span className="fa fa-bed"></span> 4 Beds</li>
                                        <li><span className="fa fa-bath"></span> 3 Baths</li>
                                        <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grids4-info  col-lg-4 col-md-6 mt-4">
                                <Link id="link" to="/properties-single"><img src="assets/images/g9.jpg" className="img-fluid" alt="" /></Link>
                                <div className="info-bg">
                                    <h5><Link id="link" to="/properties-single">2 Glen Creek St. Alexandria</Link></h5>
                                    <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
                                    <ul>
                                        <li><span className="fa fa-bed"></span> 5 Beds</li>
                                        <li><span className="fa fa-bath"></span> 3 Baths</li>
                                        <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grids4-info  col-lg-4 col-md-6 mt-4">
                                <Link id="link" to="/properties-single"><img src="assets/images/g8.jpg" className="img-fluid" alt="" /></Link>
                                <div className="info-bg">
                                    <h5><Link id="link" to="/properties-single">798 Talbot St. Bridgewater</Link></h5>
                                    <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
                                    <ul>
                                        <li><span className="fa fa-bed"></span> 2 Beds</li>
                                        <li><span className="fa fa-bath"></span> 1 Baths</li>
                                        <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="grids4-info  col-lg-4 col-md-6 mt-4">
                                <Link id="link" to="/properties-single"><img src="assets/images/g7.jpg" className="img-fluid" alt="" /></Link>
                                <div className="info-bg">
                                    <h5><Link id="link" to="/properties-single">7240C Argyle St. Lawndale</Link></h5>
                                    <p>661-699 N Mc Clurg Ct, Chicago, IL 60611, USA</p>
                                    <ul>
                                        <li><span className="fa fa-bed"></span> 4 Beds</li>
                                        <li><span className="fa fa-bath"></span> 3 Baths</li>
                                        <li><span className="fa fa-share-square-o"></span> 1200 sq ft</li>
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

export default SearchResults