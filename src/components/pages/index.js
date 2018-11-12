import Home from './Home';
import Profile from './Profile';
import Staff from './Staff';
import Forms from './Forms';
import Dashboard from './Dashboard';
import ErrorPage from './ErrorPage';

/**
 * The order of pages here determines the their order in the <NavBar/>
 * The "Home" page must always be the first page
 */
export default [
  Home,
  Staff,
  Forms,
  Profile, 
  Dashboard,
  ErrorPage,
];
