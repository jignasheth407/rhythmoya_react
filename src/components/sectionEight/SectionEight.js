import React, {useState} from 'react';
import {ModalContainer} from '../sectionOne/SectionOne';
import GlobalStyle from '../../globalStyles';

import ModalTwo from '../modal/ModalTwo';
import ActiveSubscription from '../modal/ActiveSubscription';
import Modal from '../modal/Modal';

const SectionEight = () => {
 
   return (
      <section className="row">
          <div className="container text-center">
            <div className="row clearfix">
              <div className="col-md-8 text-left">                
                <h4><b>Mastery</b></h4>
                <p>Discover how to master your LIFE.</p>
                <p>Become Centered, Get Clear, Start Condensing Your Focus and Learn To Live Confidently…</p>
                <p>The mastery section uncovers step by step blueprints and guided hypnosis sessions to reprogram your mindset automatically and become a stronger, emotionally stable, better version of you than you could ever attain by yourself…</p>
                
              <button data-toggle="modal" data-target="#myModal" className="btn btn-joinus" > JOIN US NOW</button>
              
              </div>
              
              <div className="col-md-4 pt-5">
                <img src="images/WidgetImage5.png" className="img-fluid" alt="img1"/>
              </div>
            </div>            
              <Modal/>
          </div>
        </section>
   )
}

export default SectionEight