import { Outlet } from 'react-router-dom';
import NavBar from '../navBar/NavBar';
export default function Layout() {
 return (
    <div >
      
      <NavBar />
      
      
      <main >
        <Outlet />
      </main>
      
      {/* Footer can also be consistent */}
      {/* <Footer /> */}
    </div>
  );
}