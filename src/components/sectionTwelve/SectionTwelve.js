import React from 'react'

const SectionTwelve = () => {
   return (
      <section id="faq" className="row grey-section">
          <div className=" container ">
            <div className="row">
                <div className="col-md-6"> 
                <div id="accordion1" className="faq_content2 text-left">
                         <div className=" animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.4s" >
                            <div className="card-header" id="headingOne">
                              <h5 className="mb-0"> <a className="collapsed"  data-toggle="collapse" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">&nbsp;&nbsp;When can i join?</a>
                              </h5>
                            </div>
                             <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion1">
                               <p> Rhythmoya will open on March 1st, 2021 for a limited number of applicants and we will not take “just anybody”...<br />You can Apply Here to see if you are eligible to become one of the founding Rhythmoya members.
                               </p>
                             </div>
                          </div>
                          <div className=" animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.6s" style={{animationDelay: "0.6s", opacity: "1"}}>
                            <div className="card-header" id="headingTwo">
                                <h5 className="mb-0">
                                  <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">&nbsp;&nbsp; What’s the investment?</a>
                                </h5>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion1">
                                <p> More data can be shown here
                                </p>
                             </div>
                          </div>
                          <div className=" animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="0.8s" style={{animationDelay: "0.8s", opacity: "1"}}>
                            <div className="card-header" id="headingThree">
                                <h5 className="mb-0">
                                  <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">&nbsp;&nbsp;  How quickly will I see results in my daily life?</a>
                                </h5>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion1">
                                <p>More data can be shown here
                                </p>
                             </div>
                          </div>
                          <div className=" animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1s" style={{animationDelay: "1s", opacity: "1"}}>
                              <div className="card-header" id="headingFour">
                                  <h5 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour"> &nbsp;&nbsp; What if I invest in myself to become a premium member and I don’t like it? </a>
                                  </h5>
                              </div>
                              <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion1">
                                  <p>More data can be shown here</p>
                                </div>
                           </div>
                          <div className=" animation animated fadeInUp" data-animation="fadeInUp" data-animation-delay="1s" style={{animationDelay: "1s", opacity: "1"}}>
                              <div className="card-header" id="headingfive">
                                  <h5 className="mb-0"> <a className="collapsed" data-toggle="collapse" href="#collapsefive" aria-expanded="false" aria-controls="collapsefive"> &nbsp;&nbsp; What are the rules?</a>
                                  </h5>
                              </div>
                              <div id="collapsefive" className="collapse" aria-labelledby="headingfive" data-parent="#accordion1">
                                  <p>More data can be shown here</p>
                                </div>
                           </div>
                    </div>
                </div>
              
                <div className="col-md-6 text-center ">
                  <div className="paddingfaq">
                    <h4 className="font-blue font-faq">FAQ</h4>
                    <h2>Still Not Sure?</h2>
                  </div>
                  
                </div>
            </div>
          </div>
        </section>
   )
}

export default SectionTwelve
