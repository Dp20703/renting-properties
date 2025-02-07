import React from 'react'

const About = () => {
  return (
    <div>
      <Banner />
      <AboutCompo />
      <Features />
      <Team />
    </div>
  )
}
function Banner() {
  return (
    <div>
      <section class="w3l-inner-banner-main">
        <div class="about-inner">
          <div class="container">

            <ul class="breadcrumbs-custom-path">
              <h3>About</h3>
              <li><a href="index.html"><span class="fa fa-home" aria-hidden="true"></span> <span
                class="fa fa-angle-double-right" aria-hidden="true"></span></a></li>
              <li class="active">About</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}


function AboutCompo() {
  return (
    <>
      <section class="w3l-index1" id="about">
        <div class="calltoaction-20  py-5 editContent">
          <div class="container py-md-3">
            <div class="calltoaction-20-content row">
              <div class="column ccont-left col-lg-6">
                <img src="assets/images/g15.jpg" class="img-responsive" alt="" />
              </div>

              <div class="column center-align-self col-lg-6 mt-lg-0 mt-4 pl-lg-5 pl-3">
                <h5 class="editContent">About Real Estate</h5>
                <h3 class="editContent">We create functional, beautiful exteriors for our clients since 2010.</h3>
                <p class="more-gap editContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                  architecto, ex veritatis tempora aliquid labore natus autem iusto magni dicta incidunt nostrum odit
                  veniam voluptas provident minus saepe reiciendis nulla dolore delectus molestias nam officiis repellat.
                  Sequi corrupti reiciendis nostrum.</p>
                <a href="services.html" class="theme-button btn">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>);

}

function Features() {
  return (
    <>
      <section class="grids-1">
        <div class="grids py-5">
          <div class="container py-md-3">
            <div class="heading text-center mx-auto">
              <h3 class="head">Core Features</h3>
              <p class="my-3 head"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                Curae;
                Nulla mollis dapibus nunc, ut rhoncus
                turpis sodales quis. Integer sit amet mattis quam.</p>
            </div>
            <div class="grids-content row mt-5 pt-3">
              <div class="col-lg-4 col-md-6">
                <div class="column gri-1 text-left">
                  <div class="icon-top mb-4"><span class="fa fa-building-o"></span></div>
                  <h4><a href="services.html">Search Property From Anywhere</a></h4>
                  <p>Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                  <a href="services.html" class="red">Read More <span class="fa fa-long-arrow-right"></span></a>
                </div>
              </div>
              <div class="col-lg-4 col-md-6 mt-md-0 mt-4">
                <div class="column gri-3 text-left">
                  <div class="icon-top mb-4"><span class="fa fa-university"></span></div>

                  <h4><a href="services.html">Professional & Per Friendly Agents</a></h4>
                  <p>Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore .</p>
                  <a href="services.html" class="red">Read More <span class="fa fa-long-arrow-right"></span></a>
                </div>
              </div>
              <div class="col-lg-4 offset-lg-0 offset-md-3 col-md-6 mt-lg-0 mt-4">
                <div class="column gri-2 text-left">
                  <div class="icon-top mb-4"><span class="fa fa-hospital-o"></span></div>
                  <h4><a href="services.html">Buy and Sell Awesome Property</a></h4>
                  <p>Consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                  <a href="services.html" class="red">Read More <span class="fa fa-long-arrow-right"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

}
function Team() {
  return (
    <>
      <section class="w3l-team-61" id="team">
        <div class="team-61_sur py-5">
          <div class="container py-md-3">
            <div class="team-61_sur-wrap">
              <div class="grid grid-column-2">
                <div class="heading text-center mx-auto">
                  <h3 class="head">Our Agents</h3>
                  <p class="my-3 head"> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae;
                    Nulla mollis dapibus nunc, ut rhoncus
                    turpis sodales quis. Integer sit amet mattis quam.</p>
                </div>

                <div class="team-right-content row mt-5 pt-3">
                  <div class="teams-gd col-lg-3 col-sm-6">
                    <div class="team-member">
                      <div class="team-img">
                        <a href="agent-single.html"><img class="img-fluid" src="assets/images/t4.jpg" alt=""/></a>
                      </div>
                      <div class="team-hover">
                        <div class="desk">
                          <h4><a href="agent-single.html">Meet Me</a></h4>
                          <p>Lorem ipsum dolor sit amet,Ea consequuntur </p>
                        </div>
                        <div class="s-link">
                          <a href="#"><span class="fa fa-facebook"></span></a>
                          <a href="#"><span class="fa fa-twitter"></span></a>
                          <a href="#"><span class="fa fa-google-plus"></span></a>
                        </div>
                      </div>
                    </div>
                    <div class="team-title">
                      <h5><a href="agent-single.html">Martin Smith</a></h5>
                      <span>founder &amp; ceo</span>
                    </div>
                  </div>
                  <div class="teams-gd col-lg-3 col-sm-6 mt-sm-0 mt-4">
                    <div class="team-member">
                      <div class="team-img">
                        <a href="agent-single.html">
                          <img class="img-fluid" src="assets/images/t2.jpg" alt=""/></a>
                      </div>
                      <div class="team-hover">
                        <div class="desk">
                          <h4><a href="agent-single.html">Meet Me</a></h4>
                          <p>Lorem ipsum dolor sit amet,Ea consequuntur </p>
                        </div>
                        <div class="s-link">
                          <a href="#"><span class="fa fa-facebook"></span></a>
                          <a href="#"><span class="fa fa-twitter"></span></a>
                          <a href="#"><span class="fa fa-google-plus"></span></a>
                        </div>
                      </div>
                    </div>
                    <div class="team-title">
                      <h5><a href="agent-single.html">Franklin Harbet</a></h5>

                      <span>founder &amp; ceo</span>
                    </div>
                  </div>
                  <div class="teams-gd col-lg-3 col-sm-6 mt-lg-0 mt-4">
                    <div class="team-member">
                      <div class="team-img">
                        <a href="agent-single.html"><img class="img-fluid" src="assets/images/t3.jpg" alt=""/></a>
                      </div>
                      <div class="team-hover">
                        <div class="desk">
                          <h4><a href="agent-single.html">Meet Me</a></h4>
                          <p>Lorem ipsum dolor sit amet,Ea consequuntur </p>
                        </div>
                        <div class="s-link">
                          <a href="#"><span class="fa fa-facebook"></span></a>
                          <a href="#"><span class="fa fa-twitter"></span></a>
                          <a href="#"><span class="fa fa-google-plus"></span></a>
                        </div>
                      </div>
                    </div>
                    <div class="team-title">
                      <h5><a href="agent-single.html">Franklin Harbet</a></h5>
                      <span>founder &amp; ceo</span>
                    </div>
                  </div>
                  <div class="teams-gd col-lg-3 col-sm-6 mt-lg-0 mt-4">
                    <div class="team-member">
                      <div class="team-img">
                        <a href="agent-single.html"><img class="img-fluid" src="assets/images/t1.jpg" alt=""/></a>
                      </div>
                      <div class="team-hover">
                        <div class="desk">
                          <h4><a href="agent-single.html">Meet Me</a></h4>
                          <p>Lorem ipsum dolor sit amet,Ea consequuntur </p>
                        </div>
                        <div class="s-link">
                          <a href="#"><span class="fa fa-facebook"></span></a>
                          <a href="#"><span class="fa fa-twitter"></span></a>
                          <a href="#"><span class="fa fa-google-plus"></span></a>
                        </div>
                      </div>
                    </div>
                    <div class="team-title">
                      <h5><a href="agent-single.html">Linda Anderson</a></h5>

                      <span>founder &amp; ceo</span>
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

export default About