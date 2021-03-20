import React, {useState} from 'react';

import Modal from '../modal/Modal';

const SectionSeven = () => {


   return (
      <section class="row">
          <div class="container text-center">
            <div class="row clearfix">
              <div class="col-md-4">
                <img src="images/WidgetImage4.png" class="img-fluid" alt="img1"/>
              </div>
              <div class="col-md-8 text-left">                
                <h4 class="pt-5"><b>Zen</b></h4>
                <p>Meditate and Breathe your way to success. Inside your Zen section you’re going to find all the tools to get your mind and body functioning as one powerful unit 
                capable of more than you could imagine...</p>
                
                <button data-toggle="modal" data-target="#myModal" className="btn btn-joinus" > JOIN US NOW</button>
              
              </div>
              
            </div>
            <Modal />
          </div>
        </section>
   )
}

export default SectionSeven