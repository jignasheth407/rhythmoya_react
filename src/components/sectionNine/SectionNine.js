import React, {useState} from 'react';

import Modal from '../modal/Modal';

const SectionNine = () => {

   return (
      <section class="row">
          <div class="container text-center">
            <div class="row clearfix">
              <div class="col-md-4">
                <img src="images/WidgetImage6.png" class="img-fluid" alt="img1"/>
              </div>
              <div class="col-md-8 text-left">                
                <h4 class="pt-5"><b>Chats & Channels</b></h4>
                <p>Connect, Contribute and Collaborate with other members inside the powerhouse community. </p>
                <p>You’re about to become part of an integrated community of very unique people from all around the world inside your Rhythmoya platform… </p>
                <p>Everyone wants you to win, and wants to win just as badly as you do...</p>
                
                <button data-toggle="modal" data-target="#myModal" className="btn btn-joinus" > JOIN US NOW</button>
              

              </div>
            </div>
            <Modal/>
          </div>
        </section>
   )
}

export default SectionNine