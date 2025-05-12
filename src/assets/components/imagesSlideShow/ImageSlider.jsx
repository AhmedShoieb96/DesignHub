import React, { useState, useEffect, useCallback } from 'react';
import Image from './Image';
import './imageSlider.css';
import ketchen from '../../images/sliderImages/ketchen.jpg';
import bathroom from '../../images/sliderImages/bath.jpg';
import masterClassic from '../../images/sliderImages/masterClassic.jpg';
import master from '../../images/sliderImages/MASTER1.jpg';
import dressing from '../../images/sliderImages/dressing.jpg';
import exterior from '../../images/sliderImages/exterior.jpg';
import cafe from '../../images/sliderImages/cafe.jpg';
import pharmacy from '../../images/sliderImages/pharmacy.jpg';

export default function ImageSlider() {
  // Array of images with titles
  const slides = [
    { image: ketchen, title: "Kitchen Design" },
    { image: bathroom, title: "Bathroom Design" },
    { image: masterClassic, title: "Classic Master Bedroom" },
    { image: master, title: "Master Bedroom" },
    { image: dressing, title: "Dressing Room" },
    { image: exterior, title: "Exterior Design" },
    { image: cafe, title: "Cafe Design" },
    { image: pharmacy, title: "Pharmacy Design" }
  ];
  
  // State for tracking current slide
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Function to navigate to next slide with wrapping - defined with useCallback
  const nextSlide = useCallback(() => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  }, [slides.length]);
  
  // Function to navigate to previous slide with wrapping
  const prevSlide = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  }, [slides.length]);
  
  // Function to go to a specific slide
  const goToSlide = (index) => {
    setActiveIndex(index);
  };
  
  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
  };
  
  // Auto-play effect
  useEffect(() => {
    // Only advance slides if not paused
    if (isPaused) return;
    
    const timer = setTimeout(() => {
      nextSlide();
    }, 4000);
    
    // Clean up timer when component unmounts or dependencies change
    return () => clearTimeout(timer);
  }, [activeIndex, isPaused, nextSlide]);
  
  return (
    <div className="imageSlider-wrapper">
      <h2 className="title-Services">Our Designs</h2>
      <p className="subtitle-Services">Elegant interior and exterior designs for your space</p>
      
      <div 
        className="slider-main"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="slider-content" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="slider-slide">
              <Image 
                src={slide.image} 
                alt={slide.title} 
                className="slider-image"
              />
              <div className="slider-caption">
                <h3>{slide.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation buttons */}
        <button 
          className="slider-nav slider-nav-prev" 
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <button 
          className="slider-nav slider-nav-next" 
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        {/* Progress bar */}
        <div className="slider-progress-container">
          <div 
            className="slider-progress-bar" 
            style={{ width: `${(activeIndex + 1) / slides.length * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* Indicator dots */}
      <div className="slider-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slider-indicator ${activeIndex === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}