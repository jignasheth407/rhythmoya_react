import React, {useState} from 'react';
import {Button, ModalContainer} from '../sectionOne/SectionOne';
import styled from 'styled-components';
import GlobalStyle from '../../globalStyles';

import ModalTwo from '../modal/ModalTwo';

 const Banner = () => {    
  const [showModal, setShowModal] = useState(false)

  const openModal = () =>{ 
     setShowModal(prev => !prev) }
   
    return (
      <section id="about" className="banner dark-section row clearfix">
          <div className="container">
            <div className="row clearfix">
              <div className="col-md-6">
                <h1>Say Goodbye Outdated Self Development Courses & Say Hello to Rhythmoya...</h1>
                <h5>Notice meaningful changes in the first 7 days...</h5>
                <ul>
                  <li>Make a Bigger Impact</li>
                  <li>Make More Money</li>
                  <li>Build Powerful Relationships</li>
                  <li>Reduce And Eliminate Stress</li>
                  <li>Real Confidance In Yourself</li>
                  <li>Clear Past Trauma & Negative Beliefs</li> 
                </ul>                 
                {/* modal here */}
                <ModalContainer>
              <Button onClick={openModal} className="" > JOIN US</Button>
              <ModalTwo showModal={showModal} setShowModal={setShowModal}/>
              <GlobalStyle/>
              </ModalContainer>
              </div>
              <div className="col-md-6">
                <img src="images/banner-image1.png" className="img-fluid" alt="banner"/>
              </div>
            </div>
            
          </div>
          
          
          <div className="svg-separator dark-section">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2273 390" fill="#fff"><path d="M0,211.28s373-254,1119-205,765,173,1154,0v384H0Z"/></svg>
            </div>
          </div>
        </section>
   )
   
   
}

export default Banner
