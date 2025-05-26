
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from 'react-router-dom'
import Layout from './assets/components/layout/Layout'
import './App.css'

import Home from './assets/pages/Home'
import AboutUs from './assets/pages/AboutUs'
import Interior from './assets/pages/Interior'
import Exterior from './assets/pages/Exteriors'
import Construction from './assets/pages/Constractions'
import Blogs from './assets/pages/Blogs'
import Contact from './assets/pages/Contact'

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
            
            <Route path='/supervision' element={<ExcursionSupervision />} />
            <Route path='/3d' element={<ThreeDs />} />
            <Route path='/3d' element={<TowDs />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
