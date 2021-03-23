import React from 'react'

 const Navbar = () => {
   return (
      <>
      
      <nav id="desktop-nav" className="navbar navbar-expand-lg navbar-dark">
      <button className="navbar-toggler"  type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#banner" >
          <img src="images/logo.png" className="logo"/>
        </a>
        

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link page-scroll" href="#how">How it Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#review">Reviews</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">FAQ's</a>
            </li>                    
                      
          </ul>
                    
        </div>
      </nav>

      

      </>
   )
}

export default Navbar