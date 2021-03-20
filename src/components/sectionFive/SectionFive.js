import React, {useState} from 'react';

import Modal from '../modal/Modal';


const SectionFive = () => {
  
   return (
      <section id="features" className="row clearfix grey-section">
          <div className="container text-center">
             <h4 className="section-heading font-blue">Features</h4>

                <h2>The Ultimate Self Development App</h2>
            <div className="row clearfix">
              <div className="col-md-4">
                <img src="images/WidgetImage2.png" className="img-fluid" alt="img1" />
              </div>


              <div className="col-md-8 text-left">                
               
                <h4 className="pt-5"><b>Growth Tools</b></h4>
                <p>Start achieving anything you want in life with these 6 psychological tools designed to move you closer to your goals every single day… </p>
                <p>Simply open the app, login to your account and use your growth tools daily. </p>
                
                <button data-toggle="modal" data-target="#myModal" className="btn btn-joinus" > JOIN US NOW</button>
              
              </div>
              <Modal />
            </div>
          </div>
        
        </section>
   )
}

export default SectionFive