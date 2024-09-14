import React from 'react'
import Hero from './Hero'
import Poster1 from './Poster1'
import Poster2 from './Poster2'
import Features from './Features'
import Pricing from './Pricing'
import Educate from './Educate'
import Testimonial from './Testimonial'
import Footer from '../../components/Footer'
import { useFirebase } from '../../Firebase/FireBase'
import Faq from './Faq'
import Navbar from '../../components/Navbar'
import Hire from './Hire'

function Home() {
  const firebase = useFirebase()
  console.log(firebase);
  
  return (
    <div className='flex flex-col gap-5'>
      <Navbar/>
      <Hero/>
      <Features/>
      <Poster1/>
      <Educate/>
      <Poster2 />
      <Hire/>
      <Pricing/>
      <Testimonial/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default Home