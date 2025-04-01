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
import Mockup from './Mockup'
import Carousel from './Carousel'
import Partners from "./Partners"
import Widget from './Widget'
import Widgett from './Widgett'

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
      <div>
        <Mockup/>
      </div>
      <div id="location">
      <MapLocation/>
      </div>
      <Carousel/>
      <TestimonialCarousel/>
      <Banner/>
      <Widget/>
      <Widgett/>
      <Partners/>
        <Footer />
    </div>
  )
}

export default Home;
