import './NavBar.css'
import logo from '../../images/logo.png'
import Button from '../../utilities/ui/Button.jsx'
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function HomeSideBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  
  return (
  <>
      <nav className='navBar'>
      <img src={logo} alt='logo' className='logo' />
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

       <ul className={`navLinks ${menuOpen ? 'active' : ''}`}>
        <li>
          <Button textOnly className="btn">
            <Link to="/" className="btn">Home</Link>
          </Button>
        </li>

        <li>
          <Button textOnly className="btn">
            <Link to="/about" className="btn">About Us</Link>
          </Button>
        </li>

        {/* SERVICES DROPDOWN */}
        <li
          className="dropdown"
          onMouseHover={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
          onClick={() => setServicesOpen((prev) => !prev)}
        >
          <Button textOnly className="btn">
          <Link to="/services" className="btn">Services</Link>
          </Button>
          <div className={`dropdownMenu ${servicesOpen ? 'show' : ''}`}>
            <Link to="/interior">Interior Design</Link>
            <Link to="/exterior">Exterior Design</Link>
            <Link to="/construction">Construction</Link>
            
          </div>
        </li>

        {/* PROJECTS DROPDOWN */}
        <li
          className="dropdown"
          onMouseEnter={() => setProjectsOpen(true)}
          onMouseLeave={() => setProjectsOpen(false)}
          onClick={() => setProjectsOpen((prev) => !prev)}
        >
          <Button textOnly className="btn">
          <Link to="/projects" className="btn">Projects</Link>
          </Button>
          <div className={`dropdownMenu ${projectsOpen ? 'show' : ''}`}>
            <Link to="/3d">3D</Link>
            <Link to="/supervision">Execution Supervision</Link>
            
          
          </div>
        </li>

        <li>
          <Button textOnly className="btn">
            <Link to="/blogs" className="btn">Blogs</Link>
          </Button>
        </li>
        <li>
          <Button textOnly className="btn">
            <Link className="btn" to="/contact" >Contact</Link>
          </Button>
        </li>
        <li>
          <Button textOnly className="btn">
            AR
          </Button>
        </li>
      </ul>
    </nav>
   
    
  </>
  )
}
