<<<<<<< HEAD
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
=======

import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from 'react-router-dom'
import Layout from './assets/components/layout/Layout'
import './App.css'

import Home from './assets/pages/Home'
import AboutUs from './assets/pages/AboutUs'
import Interior from './assets/pages/Interiors'
import Exterior from './assets/pages/Exteriors'
import Construction from './assets/pages/Constractions'
import Blogs from './assets/pages/Blogs'
import Contact from './assets/pages/Contact'
import Projects from './assets/pages/Projects'
import ExcursionSupervision from './assets/pages/ExcursionSupervision'
import ThreeDs from './assets/pages/ThreeDs'
import TowDs from './assets/pages/TowDs'
import NotFound from './assets/pages/NotFound'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/interior' element={<Interior />} />
            <Route path='/exterior' element={<Exterior />} />
            <Route path='/construction' element={<Construction />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/supervision' element={<ExcursionSupervision />} />
            <Route path='/3d' element={<ThreeDs />} />
            <Route path='/3d' element={<TowDs />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
>>>>>>> origin/main
    </>
  )
}

export default App