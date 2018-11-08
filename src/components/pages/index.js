import Home from './Home';
import Profile from './Profile';
import Dashboard from './Dashboard';
import ErrorPage from './ErrorPage';

/**
 * The order of pages here determines the their order in the <NavBar/>
 * The "Home" page must always be the first page
 */
export default [
  Home,
  Profile, 
  Dashboard,
  ErrorPage,
];
