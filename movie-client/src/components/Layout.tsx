import { Outlet } from 'react-router-dom';
import NavigationMenu from './NavigationMenu';

const Layout = () => (
  <>
    <NavigationMenu />
    <Outlet />
  </>
);

export default Layout;