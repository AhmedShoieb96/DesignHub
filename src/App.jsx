// Updated App.jsx
// import { useState } from 'react'
import './App.css'
import HomeSideBar from './assets/components/navBar/NavBar'
import PhoneIcon from './assets/components/phoneIcon/PhoneIcon'
import SimpleSlideshow from './assets/components/slideShow/Slider' 
import WhatsAppIcon from './assets/components/watsAppIcon/WhatsAppIcon'
import ImageSlider from './assets/components/imagesSlideShow/ImageSlider'

function App() {
  return (
    <>
      <HomeSideBar />
      <SimpleSlideshow />
      <WhatsAppIcon />
      <PhoneIcon/>
      <ImageSlider />
    </>
  )
}

export default App