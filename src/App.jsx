import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Layout from './assets/components/layout/Layout';
import './App.css';
// Pages
import Home from './assets/pages/Home';
import AboutUs from './assets/pages/AboutUs';
import Interior from './assets/pages/Interiors';
import Exterior from './assets/pages/Exteriors';
import Construction from './assets/pages/Constractions';
import Blogs from './assets/pages/Blogs';
import Contact from './assets/pages/Contact';
import Projects from './assets/pages/Projects';
import ExcursionSupervision from './assets/pages/ExcursionSupervision';
import ThreeDs from './assets/pages/ThreeDs';
import TowDs from './assets/pages/TowDs';
import NotFound from './assets/pages/NotFound';

// Components
import HomeSideBar from './assets/components/navBar/NavBar';
import PhoneIcon from './assets/components/phoneIcon/PhoneIcon';
import WhatsAppIcon from './assets/components/watsAppIcon/WhatsAppIcon';

function App() {
  return (
    <Router>
      {/* Global components that appear on all pages */}
      <HomeSideBar />
      <WhatsAppIcon />
      <PhoneIcon />
      
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/interior" element={<Interior />} />
          <Route path="/exterior" element={<Exterior />} />
          <Route path="/construction" element={<Construction />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/supervision" element={<ExcursionSupervision />} />
          <Route path="/3d" element={<ThreeDs />} />
          <Route path="/2d" element={<TowDs />} />
          <Route path="*" element={<NotFound />} />
          {/* Internal Design Route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;