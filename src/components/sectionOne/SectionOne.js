import React, {useState} from 'react';
import styled from 'styled-components';
import GlobalStyle from '../../globalStyles';

import ModalTwo from '../modal/ModalTwo'

export const ModalContainer = styled.div`
   display: flex;
   justify-content: center;
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

   const [showModal, setShowModal] = useState(false)

   const openModal = () =>{ 
      setShowModal(prev => !prev) }
   

   return (
      // section two just after banner

      <section className="row">
          <div className="container text-center">            
           <h2>Doors Open March 1st, 2021</h2>
           <p>Apply now to see if you are eligible to become one of the founding members of Rhythmoya and receive 50% off plus bonus 1-1 performence sessions with world class coach  Clay Moffat once you complete the fiest 8 week of the program. </p>
           
              <ModalContainer>
              <Button onClick={openModal} className="" > JOIN US</Button>
              <ModalTwo showModal={showModal} setShowModal={setShowModal}/>
              <GlobalStyle/>
              </ModalContainer>
           
          </div>
        </section>
   )
}

export default SectionOne