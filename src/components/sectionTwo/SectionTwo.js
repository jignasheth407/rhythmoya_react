import React, {useState} from 'react';
import {Button, ModalContainer} from '../sectionOne/SectionOne';
import GlobalStyle from '../../globalStyles';

import ModalTwo from '../modal/ModalTwo';

const SectionTwo = () => {
  const [showModal, setShowModal] = useState(false)

   const openModal = () =>{ 
      setShowModal(prev => !prev) }

   return (
      <section className="row clearfix grey-section">
          <div className="container">
            <div className="row clearfix">
              <div className="col-md-4">
                <img src="images/WidgetImage1.png" className="img-fluid"  alt="img1"/>
              </div>


              <div className="col-md-8">
                
                <h4 className="section-heading font-blue">Proven psychology that actually works… </h4>

                <h2>No More Of This Woo Woo Fluffy Self Help Speak That Never Truly Helps  Anyone…</h2>

                <p>Rhythmoya uses real, scientifically driven processes and systems designed to drastically improve all areas of your life... </p>
                <p>Psychologically designed to keep you on track and motivated, regardless of how busy you may or may not be… </p>
                <p>And with Growth Tools™ you get access to 6 exclusive strategies and tactics built to increase your performance, manage stress, learn quickly, and build the right habits to ultimately achieve anything you want in life easier, and faster. </p>
                <p>Delivered on an easy to use platform right on your smartphone.</p>
                <p><b>Apply Here to see if you are eligible to join Rhythmoya </b></p>
                <ModalContainer>
              <Button onClick={openModal} className="" > JOIN US</Button>
              <ModalTwo showModal={showModal} setShowModal={setShowModal}/>
              <GlobalStyle/>
              </ModalContainer>


              </div>
            </div>
          </div>
        
        </section>
   )
}

export default SectionTwo