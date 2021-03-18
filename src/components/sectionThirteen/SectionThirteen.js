import React, {useState} from 'react';
import {Button, ModalContainer} from '../sectionOne/SectionOne';
import GlobalStyle from '../../globalStyles';

import ModalTwo from '../modal/ModalTwo';


const SectionThirteen = () => {
  const [showModal, setShowModal] = useState(false)

   const openModal = () =>{ 
      setShowModal(prev => !prev) }
   return (
      <section id="review" class="row dark-section parallax-section">
      <div class="col-md-6">
        <img src="images/banner-image1.png" class="img-fluid"/>
      </div>
      <div class="col-md-6">
        <h4 class="font-blue"> Success at your fingertips</h4>
        <h2> World Class Coach In Your Pocket</h2>
        <p>Join the Rhythmoya Community right now to get on the shortest path to your personal success... No matter what success looks like to you</p>
        <ModalContainer>
              <Button onClick={openModal} className="" > JOIN US</Button>
              <ModalTwo showModal={showModal} setShowModal={setShowModal}/>
              <GlobalStyle/>
              </ModalContainer>
        <p class="pt-5">"This is awesome. Clay is the most amazing persone in the whole entire world. Everybody wants to get Clayed. Clay's a wizard omg. Only one session he cleared my herpes and gave me boners like i was 14 again."</p>
       
        <div class="media">
          <img class="mr-3" src="images/testimonial-img1.png" alt="Generic placeholder image img-circle"/>
          <div class="media-body">
            <h5 class="mt-0">- Mac Ryan</h5>
            <i class="fa fa-star checked" aria-hidden="true"></i>
            <i class="fa fa-star checked pl-2" aria-hidden="true"></i>
            <i class="fa fa-star checked pl-2" aria-hidden="true"></i>
            <i class="fa fa-star checked pl-2" aria-hidden="true"></i>
            <i class="fa fa-star checked pl-2" aria-hidden="true"></i>
          </div>
        </div>
        

      </div>
    </section>
   )
}

export default SectionThirteen