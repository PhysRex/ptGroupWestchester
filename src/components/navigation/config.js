import _ from 'lodash';

import Pages from '../pages';

const homePage = 'Home';
const errorPage = 'ErrorPage';
const pagesToOmitOnRoute = ['Dashboard', 'Profile'];
const pagesToOmitOnNavBar = [errorPage, 'Dashboard', 'Profile'];


/**
 * @returns {array<JSX>} The page components in the React Router routes
 */
function getAllPageComponents() {
  return _.filter(Pages, ({ name }) => name !== pagesToOmitOnRoute);
}

/**
 * @returns {array<string>} The page names to be shown in the navigation bar
 */
function menuPagesForNavBar() {
  const pageNames = Pages.map(({ name }) => name);
  return _.without(pageNames, ...pagesToOmitOnNavBar);
}

const allPageComponents = getAllPageComponents();

/**
 * Retrieves a specified page component 
 * @param {string} pageName The name of the page to retrieves
 * @returns {JSX} A page component
 */
function getPageComponent(pageName) {
  return allPageComponents.find(({name}) => name === pageName);
}


export {
  homePage,
  errorPage,
  allPageComponents,
  getPageComponent,
  getAllPageComponents,
  menuPagesForNavBar,
}
