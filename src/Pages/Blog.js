import React from 'react'
import Header from '../Common/Header'
import Banner from '../Common/Banner'
import Footer from '../Common/Footer'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div>
      <Header />
      <Banner title={"Our Blog"} pageName={"blog"} />
      <Main />
      <Footer />
    </div>
  )
}
function Main() {
  return (
    <>
      <div className="w3l-grids-block-10" style={{ padding: '0 140px' }}>
        <section id="grids10-block" className="py-5">
          <div className="container py-md-3">
            <div className="row">
              <div className="grids10-info col-lg-4 col-md-6">
                <Link id="link" to="/blog-single"><img src="assets/images/g9.jpg" alt="" /></Link>
                <div className="blog-info">
                  <ul>
                    <li><Link id="link" to="/#"><span className="fa fa-calendar-o" aria-hidden="true"></span> November 25,2019</Link></li>
                    <li><Link id="link" to="/#"><span className="fa fa-comments-o" aria-hidden="true"></span> 15</Link></li>
                  </ul>
                  <h4><Link id="link" to="/blog-single">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </Link>
                  </h4>
                </div>
              </div>
              <div className="grids10-info col-lg-4 col-md-6 mt-md-0 mt-5">
                <Link id="link" to="/blog-single"><img src="assets/images/g8.jpg" alt="" /></Link>
                <div className="blog-info">
                  <ul>
                    <li><Link id="link" to="/#"><span className="fa fa-calendar-o" aria-hidden="true"></span> November 25,2019</Link></li>
                    <li><Link id="link" to="/#"><span className="fa fa-comments-o" aria-hidden="true"></span> 15</Link></li>
                  </ul>
                  <h4><Link id="link" to="/blog-single">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </Link>
                  </h4>


                </div>
              </div>
              <div className="grids10-info col-lg-4 col-md-6 mt-lg-0 mt-5">
                <Link id="link" to="/blog-single"><img src="assets/images/g7.jpg" alt="" /></Link>
                <div className="blog-info">
                  <ul>
                    <li><Link id="link" to="/#"><span className="fa fa-calendar-o" aria-hidden="true"></span> November 25,2019</Link></li>
                    <li><Link id="link" to="/#"><span className="fa fa-comments-o" aria-hidden="true"></span> 15</Link></li>
                  </ul>
                  <h4><Link id="link" to="/blog-single">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </Link>
                  </h4>


                </div>
              </div>

              <div className="grids10-info col-lg-4 col-md-6 mt-5">
                <Link id="link" to="/blog-single"><img src="assets/images/g6.jpg" alt="" /></Link>
                <div className="blog-info">
                  <ul>
                    <li><Link id="link" to="/#"><span className="fa fa-calendar-o" aria-hidden="true"></span> November 25,2019</Link></li>
                    <li><Link id="link" to="/#"><span className="fa fa-comments-o" aria-hidden="true"></span> 15</Link></li>
                  </ul>
                  <h4><Link id="link" to="/blog-single">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </Link>
                  </h4>


                </div>
              </div>
              <div className="grids10-info col-lg-4 col-md-6 mt-5">
                <Link id="link" to="/blog-single"><img src="assets/images/g5.jpg" alt="" /></Link>
                <div className="blog-info">
                  <ul>
                    <li><Link id="link" to="/#"><span className="fa fa-calendar-o" aria-hidden="true"></span> November 25,2019</Link></li>
                    <li><Link id="link" to="/#"><span className="fa fa-comments-o" aria-hidden="true"></span> 15</Link></li>
                  </ul>
                  <h4><Link id="link" to="/blog-single">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </Link>
                  </h4>


                </div>
              </div>
              <div className="grids10-info col-lg-4 col-md-6 mt-5">
                <Link id="link" to="/blog-single"><img src="assets/images/g4.jpg" alt="" /></Link>
                <div className="blog-info">
                  <ul>
                    <li><Link id="link" to="/#"><span className="fa fa-calendar-o" aria-hidden="true"></span> November 25,2019</Link></li>
                    <li><Link id="link" to="/#"><span className="fa fa-comments-o" aria-hidden="true"></span> 15</Link></li>
                  </ul>
                  <h4><Link id="link" to="/blog-single">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </Link>
                  </h4>


                </div>
              </div>
              <div className="grids10-info col-lg-4 col-md-6 mt-5">
                <Link id="link" to="/blog-single"><img src="assets/images/g3.jpg" alt="" /></Link>
                <div className="blog-info">
                  <ul>
                    <li><Link id="link" to="/#"><span className="fa fa-calendar-o" aria-hidden="true"></span> November 25,2019</Link></li>
                    <li><Link id="link" to="/#"><span className="fa fa-comments-o" aria-hidden="true"></span> 15</Link></li>
                  </ul>
                  <h4><Link id="link" to="/blog-single">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </Link>
                  </h4>


                </div>
              </div>
              <div className="grids10-info col-lg-4 col-md-6 mt-5">
                <Link id="link" to="/blog-single"><img src="assets/images/g2.jpg" alt="" /></Link>
                <div className="blog-info">
                  <ul>
                    <li><Link id="link" to="/#"><span className="fa fa-calendar-o" aria-hidden="true"></span> November 25,2019</Link></li>
                    <li><Link id="link" to="/#"><span className="fa fa-comments-o" aria-hidden="true"></span> 15</Link></li>
                  </ul>
                  <h4><Link id="link" to="/blog-single">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </Link>
                  </h4>


                </div>
              </div>
              <div className="grids10-info col-lg-4 col-md-6 mt-5">
                <Link id="link" to="/blog-single"><img src="assets/images/g1.jpg" alt="" /></Link>
                <div className="blog-info">
                  <ul>
                    <li><Link id="link" to="/#"><span className="fa fa-calendar-o" aria-hidden="true"></span> November 25,2019</Link></li>
                    <li><Link id="link" to="/#"><span className="fa fa-comments-o" aria-hidden="true"></span> 15</Link></li>
                  </ul>
                  <h4><Link id="link" to="/blog-single">Donec sed tempus enim, a congue risus. Pellentesque euismod massa </Link>
                  </h4>


                </div>
              </div>

            </div>
            <div className="pagination">
              <ul>
                <li> <Link id="link" to="/#none" className="not-allowed" disabled="">
                  <span className="fa fa-angle-double-left" aria-hidden="true"></span>
                </Link>
                </li>
                <li><Link id="link" className="active" to="/#page">1</Link></li>
                <li>
                  <Link id="link" to="/#page">2</Link>
                </li>
                <li>
                  <Link id="link" to="/#page">3</Link>
                </li>
                <li>
                  <Link id="link" to="/#page">4</Link>
                </li>
                <li>
                  <Link id="link" to="/#page">5</Link>
                </li>
                <li>
                  <Link id="link" to="/#page"><span className="fa fa-angle-double-right" aria-hidden="true"></span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Blog