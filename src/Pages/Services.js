import React from 'react'
import Banner from '../Common/Banner'
import Footer from '../Common/Footer'
import Header from '../Common/Header'

const Services = () => {
  return (
    <>
    <Header/>
      <Banner />
      <AboutCompo />
      <ServicesCompo />
      <MoreInfo />
      <Footer/>
    </>
  )
}

function AboutCompo() {
  return (
    <div>
      <section class="w3l-index2" id="about">
        <div class="calltoaction-20  py-5 editContent">
          <div class="container py-md-3">
            <div class="calltoaction-20-content row">
              <div class="column ccont-left col-lg-6">
                <div class="row">
                  <div class="col-sm-6">
                    <img src="assets/images/g1.jpg" class="img-responsive" alt="" />
                  </div>
                  <div class="col-sm-6 pt-5">
                    <img src="assets/images/g2.jpg" class="img-responsive" alt="" />
                  </div>
                  <div class="col-sm-6 pt-sm-0 pt-5">
                    <img src="assets/images/g3.jpg" class="img-responsive" alt="" />
                  </div>
                  <div class="col-sm-6 pt-5">
                    <img src="assets/images/g4.jpg" class="img-responsive" alt="" />
                  </div>
                </div>

              </div>

              <div class="column center-align-self col-lg-6 pl-lg-5 pl-3 mt-lg-0 mt-4">
                <h5 class="editContent">Find Your House From Here.</h5>
                <h3 class="editContent">Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod.</h3>
                <p class="editContent">Fusce faucibus ante vitae justo efficitur elementum. Donec faucibus arcu elementum, luctus justo. ac purus semper pharetra. Donec faucibus arcu elementum, luctus justo.</p>
                <p class="more-gap editContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam architecto, ex veritatis tempora aliquid labore natus autem iusto magni dicta incidunt nostrum odit veniam voluptas provident minus saepe reiciendis nulla dolore delectus molestias nam officiis repellat. Sequi corrupti reiciendis nostrum.</p>
                <a href="about.html" class="theme-button btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}
function ServicesCompo() {
  return (
    <section class="w3l-features-7">

      <div class="features py-5" id="services">
        <div class="container py-md-3">
          <div class="heading text-center mx-auto">
            <h3 class="head">Services</h3>
            <p class="my-3 head"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;
              Nulla mollis dapibus nunc, ut rhoncus
              turpis sodales quis. Integer sit amet mattis quam.</p>
          </div>
          <div class="fea-gd-vv row mt-5 pt-3">
            <div class="float-lt feature-gd col-lg-4 col-md-6">
              <div class="icon"> <span class="fa fa-file-text-o" aria-hidden="true"></span></div>
              <div class="icon-info">
                <h5><a href="properties.html">Flexible, Contemporary & Included Spaces</a></h5>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt  </p>
                <a href="properties.html" class="red mt-3">Read More <span class="fa fa-long-arrow-right"></span></a>
              </div>

            </div>
            <div class="float-mid feature-gd col-lg-4 col-md-6 mt-md-0 mt-5">
              <div class="icon"> <span class="fa fa-laptop" aria-hidden="true"></span></div>
              <div class="icon-info">
                <h5><a href="properties.html">Dedicated Production & Planning Teams</a></h5>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt  </p>
                <a href="properties.html" class="red mt-3">Read More <span class="fa fa-long-arrow-right"></span></a>
              </div>
            </div>
            <div class="float-rt feature-gd col-lg-4 col-md-6 mt-lg-0 mt-5">
              <div class="icon"> <span class="fa fa-clone" aria-hidden="true"></span></div>
              <div class="icon-info">
                <h5><a href="properties.html">Premium, Fresh Cuisine Made Onsite</a></h5>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt  </p>
                <a href="properties.html" class="red mt-3">Read More <span class="fa fa-long-arrow-right"></span></a>
              </div>
            </div>
            <div class="float-lt feature-gd col-lg-4 col-md-6 mt-5">
              <div class="icon"> <span class="fa fa-bullseye" aria-hidden="true"></span></div>
              <div class="icon-info">
                <h5><a href="properties.html">We’re Here To Make You Successful</a>
                </h5>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt  </p>
                <a href="properties.html" class="red mt-3">Read More <span class="fa fa-long-arrow-right"></span></a>
              </div>

            </div>
            <div class="float-mid feature-gd col-lg-4 col-md-6 mt-5">
              <div class="icon"> <span class="fa fa-cube" aria-hidden="true"></span></div>
              <div class="icon-info">
                <h5><a href="properties.html">Broker Cutting-Edge And Technology</a>
                </h5>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt  </p>
                <a href="properties.html" class="red mt-3">Read More <span class="fa fa-long-arrow-right"></span></a>
              </div>
            </div>
            <div class="float-rt feature-gd col-lg-4 col-md-6 mt-5">
              <div class="icon"> <span class="fa fa-spinner" aria-hidden="true"></span></div>
              <div class="icon-info">
                <h5><a href="properties.html">Human-Centered Design Friendly Spaces</a>
                </h5>
                <p> Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt  </p>
                <a href="properties.html" class="red mt-3">Read More <span class="fa fa-long-arrow-right"></span></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

function MoreInfo() {
  return (
    <section class="w3l-content-with-photo-4">
      <div id="content-with-photo4-block" class="py-5">
        <div class="container py-md-3">
          <div class="cwp4-two row">
            <div class="cwp4-image col-lg-6">
              <img src="assets/images/g4.jpg" class="img-responsive" alt="" />
            </div>
            <div class="cwp4-text col-lg-6 pl-lg-5 mt-lg-0 mt-4">
              <h3>Quality Services & Excellent Work!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              </p>
              <ul class="cont-4">
                <li>1. Business Services</li>
                <li>2. Swimming Pool </li>
                <li>3.  Restaurant</li>
                <li>4. Fitness Facility </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Services