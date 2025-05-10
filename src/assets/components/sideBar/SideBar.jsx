import './SideBar.css'
import logo from '../../images/logo.png'
import Button from '../../utilities/ui/Button.jsx'

export default function HomeSideBar() {
  return (
    <nav className='navBar'>
      <img src={logo} alt='logo' className='logo' />
      <ul>
        <li>
          <Button textOnly>About</Button>
        </li>
        <li>
          <Button textOnly>About</Button>
        </li>

        <li>
          <Button textOnly>About</Button>
        </li>

        <li>
          <Button textOnly>About</Button>
        </li>
      </ul>
    </nav>
  )
}
