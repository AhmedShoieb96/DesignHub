import React from 'react'
import Image from './image';
import ketchen from'../../images/sliderImages/ketchen.jpg';
import bathroom from'../../images/sliderImages/bath.jpg';
import masterClassic from'../../images/sliderImages/masterClassic.jpg';
import master from'../../images/sliderImages/MASTER1.jpg';
import dressing from'../../images/sliderImages/dressing.jpg';
import exterior from'../../images/sliderImages/exterior.jpg';
import cafe from'../../images/sliderImages/cafe.jpg';
import pharmacy from'../../images/sliderImages/pharmacy.jpg';
import './imageSlider.css'
import {useRef} from 'react';



export default function ImageSlider() {
    const images =[ ketchen,bathroom,masterClassic,master,dressing,exterior,cafe,pharmacy];
    const slideContainerRef = useRef(null);
    
    return (
        <> 
        <h2 className='title-Services'>Designs </h2>
        <div  className="imageSlider-container" ref={slideContainerRef}>
            
            {images.map((image , index) => (
                <Image key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
        </div>
        
        </>
       
    );
}