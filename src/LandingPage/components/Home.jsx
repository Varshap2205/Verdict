import React from 'react';
import Hero from './Hero';
import Poster1 from './Poster1';
import Poster2 from './Poster2';
import Features from './Features';
import Pricing from './Pricing';
import Educate from './Educate';
import Testimonial from './Testimonial';
import Footer from '../../components/Footer';
import { useFirebase } from '../../Firebase/FireBase';
import Faq from './Faq';
import Navbar from '../../components/Navbar';
import Hire from './Hire';

function Home() {
  const firebase = useFirebase();
  console.log(firebase);

  return (
    <div className='flex flex-col gap-5'>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="poster1">
        <Poster1 />
      </section>
      <section id="educate">
        <Educate />
      </section>
      <section id="poster2">
        <Poster2 />
      </section>
      <section id="hire">
        <Hire />
      </section>
      <section id="pricing">
        <Pricing />
      </section>
      <section id="testimonials">
        <Testimonial />
      </section>
      <section id="faqs">
        <Faq />
      </section>
      <Footer />
    </div>
  );
}

export default Home;
