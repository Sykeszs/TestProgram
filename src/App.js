import React from 'react';
import Header from './component/Header';
import MainPage from './component/Main';
import Trusted from './component/Trusted';
import CaseStudies from './component/Casestudies';
import WhatWeDo from './component/WhatWeDo';
import FullStack from './component/FullStack';
import OurProcess from './component/OurProcess';
import FAQ from './component/FAQ';
import Footer from './component/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Trusted />
      <CaseStudies />
      <WhatWeDo />
      <FullStack />
      <OurProcess />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
