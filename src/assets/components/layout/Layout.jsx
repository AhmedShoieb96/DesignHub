import { Outlet } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
import Footer from '../footer/Footer';
export default function Layout() {
 return (
    <div >
      
      <NavBar />
      
      
      <main >
        <Outlet />
      </main>
      
      <Footer />
    </div>
  );
}