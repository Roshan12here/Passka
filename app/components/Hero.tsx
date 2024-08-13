import React from 'react';
import Navbar from './Navbar';
import Content from './HeroContent';

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center text-white" style={{ backgroundImage: "url('/bit.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-75"></div> {/* Adjusted opacity */}
      <div className="relative z-10">
        <Navbar />
        <Content />
      </div>
    </section>
  );
};

export default Hero;
