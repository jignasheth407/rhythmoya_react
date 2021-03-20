import React, {useState} from 'react';


 const Banner = () => {    
 
   
    return (
      <section id="about" className="banner dark-section row clearfix">
          <div className="container">
            <div className="row clearfix">
              <div className="col-md-6 header-heading">
                <h1>Say Goodbutton Outdated Self Development Courses & Say Hello to Rhythmoya...</h1>
                <h5>Notice meaningful changes in the first 7 days...</h5>
                <ul>
                  <li><i className="fa fa-check"></i>&nbsp;&nbsp;Make a Bigger Impact</li>
                  <li><i className="fa fa-check"></i>&nbsp;&nbsp;Make More Money</li>
                  <li><i className="fa fa-check"></i>&nbsp;&nbsp;Build Powerful Relationships</li>
                  <li><i className="fa fa-check"></i>&nbsp;&nbsp;Reduce And Eliminate Stress</li>
                  <li><i className="fa fa-check"></i>&nbsp;&nbsp;Real Confidance In Yourself</li>
                  <li><i className="fa fa-check"></i>&nbsp;&nbsp;Clear Past Trauma & Negative Beliefs</li> 
                </ul>                 
                {/* modal here */}
                <div>
                <button data-toggle="modal" data-target="#myModal" className="btn btn-joinus" > JOIN US NOW</button>
              <span >&nbsp;&nbsp;<i className="far fa-play-circle fa-lg"></i>&nbsp;&nbsp;Watch Video</span>
                </div>
                
              
              
              <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="media d-flex">
          <div className="media-img">
          <img className="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/></div>
          <div className="media-pera">
          <p className="mb-0">"ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"</p>
          <div className="media-body">
            <h5 className="mt-0 mb-0">- Mac Ryan</h5>
            <i className="fa fa-star checked" aria-hidden="true"></i>
            <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
            <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
            <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
            <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
          </div>
          </div>
         
        </div>
    </div>
    <div class="carousel-item">
    <div className="media d-flex">
          <div className="media-img">
          <img className="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/></div>
          <div className="media-pera">
          <p className="mb-0">"ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"</p>
          <div className="media-body">
            <h5 className="mt-0 mb-0">- Mac Ryan</h5>
            <i className="fa fa-star checked" aria-hidden="true"></i>
            <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
            <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
            <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
            <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
          </div>
          </div>
         
        </div>
    </div>
    <div class="carousel-item">
    <div className="media d-flex">
          <div className="media-img">
          <img className="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/></div>
          <div className="media-pera">
          <p className="mb-0">"ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"</p>
          <div className="media-body">
            <h5 className="mt-0 mb-0">- Mac Ryan</h5>
            <i className="fa fa-star checked" aria-hidden="true"></i>
            <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
            <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
            <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
            <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
          </div>
          </div>
         
        </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
       
             
              </div>
              {/* <div className="col-md-6">
                <img src="images/banner-img.png" className="img-fluid" alt="banner"/>
              </div> */}
            </div>
            
          </div>
          
          
          {/* <div className="svg-separator dark-section">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2273 390" fill="#fff"><path d="M0,211.28s373-254,1119-205,765,173,1154,0v384H0Z"/></svg>
            </div>
          </div> */}
        </section>
   )
   
   
}

export default Banner
