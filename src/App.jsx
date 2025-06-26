import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import HeroForm from './components/HeroForm';
import PartnerBlock from './components/PartnerBlock';
import ListSection from './components/ListSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import CompanyLogo from './components/ComLogo';
import FooterHero from './components/FooterHero';
import Program from './components/Program';


function App() {
  return (
    <>
      <div className='main_container'>
        <Navbar />
        <HeroForm />
      </div>
      <CompanyLogo />
      <div className='block_container'>
        <PartnerBlock />
        <ListSection />
      </div>

      <Program />
      <FAQSection className='hero' />
      <FooterHero />
      <Footer />

    </>
  );
}

export default App;



