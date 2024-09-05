import React from 'react'
import Poster1 from './Poster1'
import Poster2 from './Poster2'
import Features from './Features'
import Pricing from './Pricing'
import Educate from './Educate'
import Testimonial from './Testimonial'
import Footer from '../../components/Footer'


function Home() {
  return (
    <div className='flex flex-col gap-3 mt-3'>
      <Poster1/>
      <Poster2 />
      <Features/>
      <Pricing/>
      <Educate/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default Home