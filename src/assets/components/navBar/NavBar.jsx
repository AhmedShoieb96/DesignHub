import './NavBar.css'
import logo from '../../images/logo.png'
import Button from '../../utilities/ui/Button.jsx'

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
            Home
          </Button>
        </li>

        <li>
          <Button textOnly className="btn">
            About Us
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
            Services
          </Button>
          <div className={`dropdownMenu ${servicesOpen ? 'show' : ''}`}>
            <a href="#">Interior Design</a>
            <a href="#">Exterior Design</a>
            <a href="#">Construction</a>
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
            Projects
          </Button>
          <div className={`dropdownMenu ${projectsOpen ? 'show' : ''}`}>
            <a href="#">3D</a>
            <a href="#">Execution Supervision</a>
            <a href="#">TurnKey Solution</a>
          </div>
        </li>

        <li>
          <Button textOnly className="btn">
            Blogs
          </Button>
        </li>
        <li>
          <Button textOnly className="btn">
            Contact Us
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
