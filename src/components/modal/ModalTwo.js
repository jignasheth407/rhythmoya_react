import React, { useRef, useEffect, useCallback } from 'react';
import styled from 'styled-components';

import {MdClose} from 'react-icons/md';
import {Formik} from 'formik';
import { Col, Row } from 'antd';
import './ModalTwo.css';

   const Background = styled.div`
     
      width: 100%;
      height: 100%;
      justify-content: center;
      display: flex;
      position: absolute;
      align-items: center;

   `
   const ModalWrapper = styled.div`
   width: 490px;
   height: 375px;
   box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
   background: #fff;
   color: #000;
   display: grid;
   z-index:100;
   /* grid-template-columns: 1fr 1fr; */
   position: relative;

   border-radius: 10px;
 `

   const ModalContent = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      line-height: 1.8;
      color: #141414;
      p {
  margin-bottom: 1rem;
      }
      button {
        padding: 10px 24px;
        background: #141414;
        color: #fff;
        border: none;
      }
   `

   const CloseModalButton = styled(MdClose)`
      cursor: pointer;
      position: absolute;
      top: 20px;
      right: 20px;
      width: 32px;
      height: 32px;
      padding: 0;
      z-index: 10;
   `

 const ModalTwo = ({ showModal, setShowModal }) => {
   
   const modalRef = useRef();

   const closeModal = e => {
      if (modalRef.current === e.target) {
         setShowModal(false)
      }
   }
   
   const keypress = useCallback(e => {
      if(e.key === 'Escape' && showModal) {
         setShowModal(false)
      }
   }, [setShowModal, showModal])


   
   return (         
   <> 
   { showModal ? (
      <Background ref={modalRef} onClick={closeModal}>
         <ModalWrapper showModal={showModal}>
            <ModalContent>
            <div>
                   <Formik 
                     initialValues={{
                        firstName: '',
                        email: ''
                     }}

                     onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                      }}
                     > 
                     
                     
                     <form method="POST" action="https://sourceconsulting.activehosted.com/proc.php" id="_form_5_" class="_form _form_5 _inline-form  _dark" novalidate>
    <input type="hidden" name="u" value="5" />
    <input type="hidden" name="f" value="5" />
    <input type="hidden" name="s" />
    <input type="hidden" name="c" value="0" />
    <input type="hidden" name="m" value="0" />
    <input type="hidden" name="act" value="sub" />
    <input type="hidden" name="v" value="2" />
    <div class="_form-content">
      <div class="_form_element _x53953185 _full_width _clear" >
        <div class="_form-title">
          Subscribe for Email Updates
        </div>
      </div>
      <div class="_form_element _x87525999 _full_width _clear" >
        <div class="_html-code">
          <p>
            Add a descriptive message telling what your visitor is signing up for here.
          </p>
        </div>
      </div>
      <div class="_form_element _x99567026 _full_width " >
        <label class="_form-label">
          Full Name
        </label>
        <div class="_field-wrapper">
          <input type="text" name="fullname" placeholder="Type your name" />
        </div>
      </div>
      <div class="_form_element _x99100671 _full_width " >
        <label class="_form-label">
          Email*
        </label>
        <div class="_field-wrapper">
          <input type="text" name="email" placeholder="Type your email" required/>
        </div>
      </div>
      <div class="_button-wrapper _full_width">
        <button id="_form_5_submit" class="_submit" type="submit">
          Submit
        </button>
      </div>
      <div class="_clear-element">
      </div>
    </div>
    <div class="_form-thank-you" style="display:none;">
    </div>
    <div class="_form-branding">
      <div class="_marketing-by">
        Marketing by
      </div>
      <a href="https://www.activecampaign.com/?utm_medium=referral&utm_campaign=acforms" class="_logo"></a>
    </div>
  </form>
                     
                     
                  </Formik>
               </div>
            </ModalContent> 
            <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)}/>           
         </ModalWrapper>
      </Background>
      ) : null}
   </>
   )
};


export default ModalTwo