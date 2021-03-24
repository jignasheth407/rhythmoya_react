import React from 'react'

import OwlCarousel from "react-owl-carousel";


import '../../../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../../../node_modules/owl.carousel/dist/assets/owl.theme.default.css';
const options = {}

class SectionEleven extends React.Component {

   render() {

      return (
         <section class="row">
             <div class=" container text-center">
             <h4 class="font-blue">Find out why our users love Rhythmoya</h4>
             <h2 class="section-heading">Don't Just Our World For It</h2>
   
   
             <div class="clearfix">
               <OwlCarousel 
                  items={4}
                  dots={true}
                  nav={true}
                  autoplay={true}
               >
               <div class="item">
                  <div class="testi-body grey-section">
                  <i className="fa fa-star checked" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>   
                     <h4>Amazing App!</h4>
                     <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"</p>
   
                  </div>
                  <div className="media d-flex">
             <div className="media-img">
             <img className="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/></div>
             <div className="media-pera">          
             <div className="media-body">
               <h5 className="mt-0 mb-0">- John Doe</h5>
               <p className="mb-0">User for 4 months</p>
               
             </div>
             </div>
            
           </div>
               </div>

               <div class="item">
                  <div class="testi-body grey-section">
                  <i className="fa fa-star checked" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>   
                     <h4>Amazing App!</h4>
                     <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"</p>
   
                  </div>
                  <div className="media d-flex">
             <div className="media-img">
             <img className="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/></div>
             <div className="media-pera">          
             <div className="media-body">
               <h5 className="mt-0 mb-0">- John Doe</h5>
               <p className="mb-0">User for 4 months</p>
               
             </div>
             </div>
            
           </div>
               </div>

               <div class="item">
                  <div class="testi-body grey-section">
                  <i className="fa fa-star checked" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>   
                     <h4>Amazing App!</h4>
                     <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"</p>
   
                  </div>
                  <div className="media d-flex">
             <div className="media-img">
             <img className="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/></div>
             <div className="media-pera">          
             <div className="media-body">
               <h5 className="mt-0 mb-0">- John Doe</h5>
               <p className="mb-0">User for 4 months</p>
               
             </div>
             </div>
            
           </div>
               </div>

               <div class="item">
                  <div class="testi-body grey-section">
                  <i className="fa fa-star checked" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>   
                     <h4>Amazing App!</h4>
                     <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"</p>
   
                  </div>
                  <div className="media d-flex">
             <div className="media-img">
             <img className="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/></div>
             <div className="media-pera">          
             <div className="media-body">
               <h5 className="mt-0 mb-0">- John Doe</h5>
               <p className="mb-0">User for 4 months</p>
               
             </div>
             </div>
            
           </div>
               </div>

               </OwlCarousel>

   
   
   {/* 
                <OwlCarousel className="owl-theme" loop margin={6} dots={false} >
                <div class="item">
                  <div class="testi-body grey-section">
                  <i className="fa fa-star checked" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>   
                     <h4>Amazing App!</h4>
                     <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"</p>
   
                  </div>
                  <div className="media d-flex">
             <div className="media-img">
             <img className="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/></div>
             <div className="media-pera">          
             <div className="media-body">
               <h5 className="mt-0 mb-0">- John Doe</h5>
               <p className="mb-0">User for 4 months</p>
               
             </div>
             </div>
            
           </div>
               </div>
               <div class="item">
                  <div class="testi-body grey-section">
                  <i className="fa fa-star checked" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>   
                     <h4>Amazing App!</h4>
                     <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"</p>
   
                  </div>
                  <div className="media d-flex">
             <div className="media-img">
             <img className="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/></div>
             <div className="media-pera">          
             <div className="media-body">
               <h5 className="mt-0 mb-0">- John Doe</h5>
               <p className="mb-0">User for 4 months</p>
               
             </div>
             </div>
            
           </div>
               </div>
               <div class="item">
                  <div class="testi-body grey-section">
                  <i className="fa fa-star checked" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>   
                     <h4>Amazing App!</h4>
                     <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"</p>
   
                  </div>
                  <div className="media d-flex">
             <div className="media-img">
             <img className="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/></div>
             <div className="media-pera">          
             <div className="media-body">
               <h5 className="mt-0 mb-0">- John Doe</h5>
               <p className="mb-0">User for 4 months</p>
               
             </div>
             </div>
            
           </div>
               </div>
               <div class="item">
                  <div class="testi-body grey-section">
                  <i className="fa fa-star checked" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>   
                     <h4>Amazing App!</h4>
                     <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"</p>
   
                  </div>
                  <div className="media d-flex">
             <div className="media-img">
             <img className="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/></div>
             <div className="media-pera">          
             <div className="media-body">
               <h5 className="mt-0 mb-0">- John Doe</h5>
               <p className="mb-0">User for 4 months</p>
               
             </div>
             </div>
            
           </div>
               </div>
               <div class="item">
                  <div class="testi-body grey-section">
                  <i className="fa fa-star checked" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>   
                     <h4>Amazing App!</h4>
                     <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"</p>
   
                  </div>
                  <div className="media d-flex">
             <div className="media-img">
             <img className="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/></div>
             <div className="media-pera">          
             <div className="media-body">
               <h5 className="mt-0 mb-0">- John Doe</h5>
               <p className="mb-0">User for 4 months</p>
               
             </div>
             </div>
            
           </div>
               </div>
               <div class="item">
                  <div class="testi-body grey-section">
                  <i className="fa fa-star checked" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
               <i className="fa fa-star checked pl-2" aria-hidden="true"></i>   
                     <h4>Amazing App!</h4>
                     <p>ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"</p>
   
                  </div>
                  <div className="media d-flex">
             <div className="media-img">
             <img className="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/></div>
             <div className="media-pera">          
             <div className="media-body">
               <h5 className="mt-0 mb-0">- John Doe</h5>
               <p className="mb-0">User for 4 months</p>
               
             </div>
             </div>
            
           </div>
               </div>
               
                </OwlCarousel> */}
             
               
            </div>
   
   
   
   
   
             </div>
            
            
   
   
         </section>
      )
   }
   
}

export default SectionEleven
