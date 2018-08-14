// public views
import LoginContainer from "../views/login/login";

//private views
import DashboardPage from "../views/dashboardPage";
import Studies from '../views/studies'
import Study from '../views/study'
import ImportData from '../views/importData'
import SiteAdministration from '../views/siteAdministration'


export const privateRoutes = {
  "/": DashboardPage,
  "/dashboard": DashboardPage,
  '/studies': Studies,
  '/study/:id/import-data': ImportData,
  '/study/:id/:tab': Study,
  '/settings':SiteAdministration
};

export const publicRoutes = {
  "/login": LoginContainer,
};
