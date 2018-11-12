import _ from 'lodash';
import Pages from '../pages';

const homePage = 'Home';
const errorPage = 'ErrorPage';
const pagesToOmitOnRoute = ['Dashboard', 'Profile'];
const pagesToOmitOnNavBar = [errorPage, 'Dashboard', 'Profile'];

function ComponentPagesForRoutes() {
  return _.filter(Pages, ({ name }) => name !== pagesToOmitOnRoute);
}

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
