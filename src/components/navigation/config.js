import _ from 'lodash';
import Pages from '../pages';

const homePage = 'Home';
const errorPage = 'ErrorPage';
const pagesToOmitOnRoute = [''];
const pagesToOmitOnNavBar = [errorPage];

function ComponentPagesForRoutes() {
  return _.filter(Pages, ({ name }) => name !== pagesToOmitOnRoute);
}

function MenuPagesForNavBar() {
  const pageNames = Pages.map(({ name }) => name);
  return _.without(pageNames, ...pagesToOmitOnNavBar);
}


export {
  ComponentPagesForRoutes,
  MenuPagesForNavBar,
  homePage,
  errorPage,
}
