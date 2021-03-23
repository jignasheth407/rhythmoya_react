import React, {useState} from 'react';

import Modal from '../modal/Modal';


const SectionThirteen = () => {
  
   return (
      <section id="review" className="row dark-section parallax-section">
      <div className="col-md-6">
        <img src="images/banner-img.png" className="img-fluid" alt="img1"/>
      </div>
      <div className="col-md-6">
        <h4 className="font-blue"> </h4>
        <h2> World Class Coach In Your Pocket</h2>
        <p>Join the Rhythmoya Community right now to get on the shortest path to your personal success... No matter what success looks like to you</p>
       
        <button data-toggle="modal" data-target="#myModal" className="btn btn-joinus" > JOIN US NOW</button>
              
        <p class="pt-5">"This is awesome. Clay is the most amazing persone in the whole entire world. Everybody wants to get Clayed. Clay's a wizard omg. Only one session he cleared my herpes and gave me boners like i was 14 again."</p>
       
        <div className="media">
          <img className="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/>
          <div className="media-body">
            <h5 className="mt-0">- Mac Ryan</h5>
            <i className="fa fa-star checked" aria-hidden="true"></i>
            <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
            <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
            <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
            <i className="fa fa-star checked pl-2" aria-hidden="true"></i>
          </div>
        </div>
        <Modal />

      </div>
    </section>
   )
}

export default SectionThirteen