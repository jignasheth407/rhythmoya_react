import React, {useState} from 'react';
import {Button, ModalContainer} from '../sectionOne/SectionOne'
import GlobalStyle from '../../globalStyles';

import ModalTwo from '../modal/ModalTwo'

const SectionSix = () => {
  const [showModal, setShowModal] = useState(false)

   const openModal = () =>{ 
      setShowModal(prev => !prev) }
   return (
   <section class="row clearfix grey-section">
      <div class="container text-center">
        <div class="row clearfix">
          <div class="col-md-8 text-left">                
            <h4 class="pt-5"><b>Accountability</b></h4>
            <p>Stop procrastinating and stay motivated to complete your commitments with your Success Partner In Crime who always has your back. You’ll always have a teammate to bounce ideas off of and hold you accountable.</p>
            <p>Your Accountability Parter will automatically change every single month, so you’ll never get too comfortable and slack off, and you’ll also get to meet some really cool people… </p>
            <ModalContainer>
              <Button onClick={openModal} className="" > JOIN US</Button>
              <ModalTwo showModal={showModal} setShowModal={setShowModal}/>
              <GlobalStyle/>
              </ModalContainer>

          </div>
          <div class="col-md-4">
            <img src="images/WidgetImage3.png" class="img-fluid"/>
          </div>
        </div>
      </div>
    
    </section>
   )
}

export default SectionSix