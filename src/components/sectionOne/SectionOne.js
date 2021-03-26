import React, {useState} from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../globalStyles';

import Modal from '../modal/Modal'

export const ModalContainer = styled.div`
   display: flex;
   align-items: center;
   
`

export const Button = styled.button`
padding: 0 35px;
line-height: 50px;
font-family: "Metropolis-Regular";
border: none;
color: #fff;
border-radius: .25rem;
position: relative;
background: #01a6e6;
background: linear-gradient(to bottom, #01a6e6 0%,#01a0e2 22%,#0180cd 71%,#0077c7 93%,#0471c3 100%);
`

 const SectionOne = () => {

   
   

   return (
      // section two just after banner

      <section className="row">
          <div className="container text-center"> 
          <h4 className="section-heading font-blue">Success at your fingertips, <br/>world class coach in your pocket</h4>           
           <h2>Doors Open March 1st, 2021</h2>
           <p>Apply now to see if you are eligible to become one of the founding members of Rhythmoya and receive 50% off plus bonus 1-1 performence sessions with world class coach  Clay Moffat once you complete the fiest 8 week of the program. </p>
           
              
              <button data-toggle="modal" data-target="#myModal" className="btn btn-joinus" > JOIN US NOW</button>
              
           
          </div>
          <Modal/>
        </section>
   )
}

export default SectionOne