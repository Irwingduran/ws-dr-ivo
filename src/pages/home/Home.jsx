import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './Hero'
import Banner from './Banner'
import About from './About'
import MapLocation from './MapLocation'
import TestimonialCarousel from './TestimonialCarousel'
import SurgeriesGrid from './SurgeriesGrid'
import Footer from '../../components/Footer'
import GrowIn from '../../animation/GrowIn'
import Contact from './Contact'

const Home = () => {
  return (
    <div className="px-[20px] font-space-grotesk max-w-[1440px] mx-auto lg:pt-[50px] lg:px-[100px]">
      <Navbar />
      <Hero />
      <GrowIn>
        <div id='about' className='py-16'>
        <About />
        </div>
      </GrowIn>
      <div id='service'>
      <SurgeriesGrid/>
      </div>
      <Banner/>
      <div id="location">
      <MapLocation/>
      </div>
      <div id='contact'>
      <Contact/>
      </div>
      <TestimonialCarousel/>
      <Footer />
    </div>
  )
}

export default Home;
