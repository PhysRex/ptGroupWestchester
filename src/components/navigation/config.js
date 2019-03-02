import _ from 'lodash';
import fp from 'lodash/fp';

import Pages from '../pages';

const baseRoute = '/ptGroupWestchester';
const homePage = 'Home';
const errorPage = 'ErrorPage';
const pagesToOmitOnRoute = ['Dashboard', 'Profile'];
const pagesToOmitOnNavBar = [errorPage, 'Dashboard', 'Profile'];
const pageAliases = {
  Team: 'Our Team',
  Services: 'Our Services',
  Testimonials: 'Our Stories',
  Forms: 'Resources',
};


/**
 * @returns {array<JSX>} The page components in the React Router routes
 */
function getAllPageComponents() {
  return _.filter(Pages, ({ name }) => !pagesToOmitOnRoute.includes(name));
}

/**
 * @returns {array<string>} The page names to be shown in the navigation bar
 */
function menuPagesForNavBar() {
  return fp.compose(
    fp.map(page => ({
      name: page,
      alias: pageAliases[page] || page,
    })),
    fp.without(pagesToOmitOnNavBar),
    fp.map(({ name }) => name),
  )(Pages);
}

const allPageComponents = getAllPageComponents();
const menuPages = menuPagesForNavBar();

/**
 * Retrieves a specified page 
 * @param {string} pageName The name of the page to retrieves
 * @returns {JSX} A page component
 */
function getPageComponent(pageName) {
  return allPageComponents.find(({ name }) => name === pageName)['component'];
}


export {
  baseRoute,
  homePage,
  errorPage,
  allPageComponents,
  getPageComponent,
  getAllPageComponents,
  menuPages,
}
