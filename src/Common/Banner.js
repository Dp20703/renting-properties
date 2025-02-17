import React from 'react'
import { Link } from 'react-router-dom'

const Banner = (props) => {
    return (
        <div>
            <section className="w3l-inner-banner-main">
                <div className="about-inner">
                    <div className="container">
                        <ul className="breadcrumbs-custom-path">
                            <h3>{props.title}</h3>
                            <li><Link id="link" to="/"><span className="fa fa-home" aria-hidden="true"></span> <span
                                className="fa fa-angle-double-right" aria-hidden="true"></span></Link></li>
                            <li className="active">{props.pageName}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Banner