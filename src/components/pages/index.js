import Home from './Home';
import Profile from './Profile';
import Team from './Team';
import Forms from './Forms';
import Testimonials from './Testimonials';
import ErrorPage from './ErrorPage';

/**
 * The order of pages here determines the their order in the <NavBar/>
 * The "Home" page must always be the first page
 */

export default [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Team',
    component: Team,
  },
  {
    name: 'Testimonials',
    component: Testimonials,
  },
  {
    name: 'Forms',
    component: Forms,
  },
  {
    name: 'ErrorPage',
    component: ErrorPage,
  },

  {
    name: 'Profile',
    component: Profile,
  },
];
