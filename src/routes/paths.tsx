import Dashboard from "../pages/dashboard";
import Lunch from "../pages/lunch";
import LunchDetails from "../pages/lunchDetails.tsx";
import AddEditLunchForm from "../sections/AddEditLunchForm";
import LoginPage from "../pages/login";
import UpdateLunch from "../pages/updateLunch";

export const paths = {
  dashboard: "/",
  lunch: "/lunch",
  lunchDetails: "/lunch-details/",
  updateLunch: "/update-lunch/",
  addLunch: "/add-lunch/",
  editLunch: "/edit-lunch/",
  login: "/login",
  signup: "/signup",
  resetPassword: "reset-password",
  forgotPassword: "/forgot-password",
  error: "*",
};

export const routes = {
  dashboard: "/",
  lunch: "/lunch",
  lunchDetails: "/lunch-details/:id",
  updateLunch: "/update-lunch/",
  addLunch: "/add-lunch/",
  editLunch: "/edit-lunch/:id",
  login: "/login",
  signup: "/signup",
  resetPassword: "reset-password",
  forgotPassword: "/forgot-password",
  error: "*",
};

export const publicRoutes = {};

export const privateRoutes = {
  [paths.dashboard]: {
    name: "Dashboard",
    path: routes.dashboard,
    component: <Dashboard />,
  },
  [paths.lunch]: {
    name: "Lunch",
    path: routes.lunch,
    component: <Lunch />,
  },
  [paths.lunchDetails]: {
    name: "Lunch Details",
    path: routes.lunchDetails,
    component: <LunchDetails />,
  },
  [paths.updateLunch]: {
    name: "Update Lunch",
    path: routes.updateLunch,
    component: <UpdateLunch />,
  },
  [paths.editLunch]: {
    name: "Edit Lunch",
    path: routes.editLunch,
    component: <AddEditLunchForm formType="Edit" />,
  },
};

export const onlyPublicRoutes = {
  [paths.login]: {
    name: "Login",
    path: routes.login,
    component: <LoginPage />,
  },
};
