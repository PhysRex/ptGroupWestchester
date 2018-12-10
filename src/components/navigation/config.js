import _ from 'lodash';
import Pages from '../pages';

const homePage = 'Home';
const errorPage = 'ErrorPage';
const pagesToOmitOnRoute = ['Dashboard', 'Profile'];
const pagesToOmitOnNavBar = [errorPage, 'Dashboard', 'Profile'];


/**
 * @returns {array<JSX>} The page components in the React Router routes
 */
function ComponentPagesForRoutes() {
  return _.filter(Pages, ({ name }) => name !== pagesToOmitOnRoute);
}

/**
 * @returns {array<string>} The page names to be shown in the navigation bar
 */
function MenuPagesForNavBar() {
  const pageNames = Pages.map(({ name }) => name);
  return _.without(pageNames, ...pagesToOmitOnNavBar);
}


export {
  homePage,
  errorPage,
  ComponentPagesForRoutes,
  MenuPagesForNavBar,
}
