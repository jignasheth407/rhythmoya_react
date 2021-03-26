import React, {useState} from 'react';


 const Banner = () => {    
 
   
    return (
      <>
      <section id="about" className="banner dark-section row clearfix">
          <div className="container">
            <div className="row clearfix">
              <div className="col-md-6 header-heading">
                <h1>Say Goodbye to Outdated Self Development Courses & Say Hello to Rhythmoya...</h1>
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
                <div className="mb-2 float-left clearfix">
                <button data-toggle="modal" data-target="#myModal" className="btn btn-joinus float-left" > JOIN US NOW</button>
              <span className="text-light pl-3 float-left pt-2">&nbsp;&nbsp;<i className="far fa-play-circle fa-lg"></i>&nbsp;&nbsp;Watch Video</span>
                </div>
                
              
              
              <div id="carouselExampleControls" class="clearfix carousel pt-3 slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="media d-flex">
          <div className="media-img">
          <img className="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/></div>
          <div className="media-pera">
          <p className="mb-0">"ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"</p>
          <div className="media-body">
            <h6 className="mt-0 mb-0 font-blue">- Mac Ryan</h6>
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
            <h6 className="mt-0 mb-0 font-blue">- Mac Ryan</h6>
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
            <h6 className="mt-0 mb-0 font-blue">- Mac Ryan</h6>
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
              <div className="col-md-6 mt-3">
                <img src="images/banner-img.png" className="img-fluid" alt="banner"/>
              </div>
            </div>
            
          </div>
          
          
          {/* <div className="svg-separator dark-section">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2273 390" fill="#fff"><path d="M0,211.28s373-254,1119-205,765,173,1154,0v384H0Z"/></svg>
            </div>
          </div> */}
        </section>

          {/* mobile view      */}

      
        </>
   )
   
   
}

export default Banner
