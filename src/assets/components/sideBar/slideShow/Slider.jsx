import React, { useState, useEffect } from 'react'
import Bedroom from '../../../images/bed.jpg'
import Living from '../../../images/living.jpg'
import Children from '../../../images/CHILDREN.jpg'
import Sofra from '../../../images/sofra.jpg'
import './ImageSlideshow.css'
const SimpleSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [Bedroom, Living, Children, Sofra]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [images.length])

  return (
    <div className='slideshow-container'>
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}

      <div className='gradient-overlay'></div>
    </div>
  )
}
export default SimpleSlideshow
