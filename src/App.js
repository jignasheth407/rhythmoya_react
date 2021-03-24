import React from 'react';
import './App.css';
import Banner from './components/banner/banner';
import SectionOne from './components/sectionOne/SectionOne';
import SectionTwo from './components/sectionTwo/SectionTwo';
import SectionThree from './components/sectionThree/SectionThree';
import SectionFour from './components/sectionFour/SectionFour';
import SectionFive from './components/sectionFive/SectionFive';
import Header from './layout/header/Header';
import SectionNine from './components/sectionNine/SectionNine';
import SectionSix from './components/sectionSix/SectionSix';
import SectionSeven from './components/sectionSeven/SectionSeven';
import SectionEight from './components/sectionEight/SectionEight';
import SectionTen from './components/sectionTen/SectionTen';
// import SectionEleven from './components/sectionEleven/SectionEleven';
import SectionTwelve from './components/sectionTwelve/SectionTwelve';
import SectionThirteen from './components/sectionThirteen/SectionThirteen';
import Footer from './layout/footer/Footer';
import Modal from '../src/components/modal/Modal';
import {Router, Route} from 'react-router-dom'
import OwlCarouselOne from './components/owlCarousel/OwlCarouselOne';



function App() {
  
  return (
    <div className="container-fluid">
      {/* <Router>
        <Route exact path="/" component= {Header} />
      </Router>       */}
      < Header />
      <Banner />      
      <SectionOne />
      <SectionTwo />
      {/* how it works */}
      <SectionThree/>
      <SectionFour/>
      <SectionFive />
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
      <SectionNine/>
      <SectionTen/>
      {/* <SectionEleven/> */}
      <OwlCarouselOne/>
      <SectionTwelve/>
      <SectionThirteen/>
      <Footer/>
      <Modal/>
      
    </div>
  );
}

export default App;
