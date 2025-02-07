import React from 'react'
import Header from '../Common/Header'
import Banner from '../Common/Banner'
import Footer from '../Common/Footer'

const BlogSingle = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Main/>
        <Footer/>
    </div>
  )
}
function Main(){
    return(
        <>
        <section class="w3l-text-11" style={{padding:'0 250px'}}>
        <div class="text11 py-5">
            <div class="container py-md-3">
                <div class="text11-content">
                   
                    <img src="assets/images/g11.jpg" class="img-responsive margin-top" alt=""/>
                    <ul class="bl-single">
                        <li><a href="#"><span class="fa fa-calendar-o" aria-hidden="true"></span> November 25,2019</a></li>
                        <li><a href="#"><span class="fa fa-comments-o" aria-hidden="true"></span> 15</a></li>
                        <li><a href="#"><span class="fa fa-user" aria-hidden="true"></span> Williamson</a></li>
                    </ul>
                    <h4 class="heading">  Donec ipsum faucibus arcu elementum</h4>
                    <p>Fusce faucibus ante vitae justo efficitur elementum. Donec ipsum faucibus arcu elementum, luctus
                        justo. ac purus semper. Fusce faucibus ante vitae justo efficitur elementum. Donec ipsum
                        faucibus arcu elementum, luctus justo. ac purus semper."</p>
                    <p>Efficitur fusce faucibus ante vitae justo elementum. Donec ipsum faucibus arcu elementum, luctus
                        justo. ac purus semper. Fusce faucibus ante vitae justo efficitur elementum. Donec ipsum
                        faucibus arcu elementum, luctus justo. ac purus semper. Fusce faucibus ante vitae justo
                        efficitur elementum. Donec ipsum faucibus arcu elementum, luctus justo. ac purus semper.</p>
                    <div class="comments">
						<h3 class="aside-title ">Recent Comments</h3>
						<div class="comments-grids">
							<div class="media">
								<img class="img-responsive" src="assets/images/te1.jpg" alt="placeholder image"/>
								
								<div class="media-body comments-grid-right">
									<h4><a href="#">Henry Nicholas</a></h4>
									<ul class="">
										<li class="">15 Oct  2019
										</li>
									</ul>
									<p>Nullam facilisis diam non magna porta luctus. Aenean facilisis erat posuere erat ornare ultrices. Aliquam ac arcu interdum,Aliquam ac arcu interdum, dapibus nibh convallis, semper augue.</p>
									<a href="#comment" class="replay"><span class="fa fa-reply"></span> Reply</a>
								</div>
							</div>
							<div class="media second-part">
								<img class="img-responsive" src="assets/images/te2.jpg" alt="placeholder image"/>
								<div class="media-body comments-grid-right">
									<h4><a href="#">Shane Jessey</a></h4>
									<ul class="">
										<li class="">20 Oct 2019
											
										</li>
										
									</ul>
									<p>Nullam facilisis diam non magna porta luctus. Aenean facilisis erat posuere erat ornare ultrices. Aliquam ac arcu interdum,Aliquam ac arcu interdum, dapibus nibh convallis, semper augue.</p>
									<a href="#comment" class="replay"><span class="fa fa-reply"></span> Reply</a>
								</div>
							</div>
							<div class="media third-part">
									<img class="img-responsive" src="assets/images/te3.jpg" alt="placeholder image"/>
									<div class="media-body comments-grid-right">
										<h4><a href="#">John Cena</a></h4>
										<ul class="">
											<li class="">25 Oct 2019
											
											</li>
											
										</ul>
										<p>Nullam facilisis diam non magna porta luctus. Aenean facilisis erat posuere erat ornare ultrices. Aliquam ac arcu interdum,Aliquam ac arcu interdum, dapibus nibh convallis, semper augue.</p>
										<a href="#comment" class="replay"><span class="fa fa-reply"></span> Reply</a>
									</div>
								</div>
						</div>
					</div>
                    <div class="leave-comment-form" id="comment">
                        <h3 class="aside-title">Leave your comment</h3>
                        <form action="#" method="post">
                            <div class="input-grids">
                                <div class="form-group">
                                    <input type="text" name="Name" class="form-control" placeholder="Name" required=""/>
                                </div>
                                <div class="form-group">
                                    <input type="email" name="Email" class="form-control" placeholder="Email" required=""/>
                                </div>
                            </div>
                            <div class="form-group">
                                <textarea name="Message" class="form-control" placeholder="Your reply..." required=""/>
                            </div>
                            <div class="submit text-right">
                                <a href="#" class="actionbg">Post comment</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    );
}

export default BlogSingle