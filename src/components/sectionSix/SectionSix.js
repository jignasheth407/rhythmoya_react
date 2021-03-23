import React, {useState} from 'react';

import Modal from '../modal/Modal';

const SectionSix = () => {

   return (
   <section class="row clearfix grey-section">
      <div class="container text-center">
        <div class="row clearfix">
          <div class="col-md-8 text-left">                
            <h4 class="pt-5"><b>Accountability</b></h4>
            <p>Stop procrastinating and stay motivated to complete your commitments with your Success Partner In Crime who always has your back. You’ll always have a teammate to bounce ideas off of and hold you accountable.</p>
            <p>Your Accountability Parter will automatically change every single month, so you’ll never get too comfortable and slack off, and you’ll also get to meet some really cool people… </p>
            
            <button data-toggle="modal" data-target="#myModal" className="btn btn-joinus" > JOIN US NOW</button>
              

          </div>
          <div class="col-md-4 pt-5">
            <img src="images/WidgetImage3.png" class="img-fluid" alt="img1"/>
          </div>
        </div>
        <Modal />
      </div>
    
    </section>
   )
}

export default SectionSix