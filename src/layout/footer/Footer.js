import React from 'react'

const Footer = () => {
   return (
     <>
      <footer class="row">          

            <div class="col-md-4">
              <div class="footer-widget pl-5">
                <p class="mt-5"> All Right Reserved 2021</p>
              </div>
              
            </div>
            <div class="col-md-4 text-center">
              <div class="footer-widget">
                <img src="images/logo-footer.png" class="img-fluid"/>
              </div>
              
            </div>
            <div class="col-md-4">
              <div class="footer-widget pl-5">
                <p class="mt-5">Terms & Conditions - Privacy Pro</p>
              </div>
              
            </div>
            
        </footer>
        
        <a id="back-to-top" href="#" class="btn btn-top btn-lg back-to-top" role="button"><i class="fas fa-angle-up"></i></a>

        {/* <div id='toTop'><button>Top</button></div> */}
        </>
   )
}

export default Footer