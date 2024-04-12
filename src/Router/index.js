import { Suspense, useEffect } from "react";
import { Route } from "react-router-dom";
import PublicHome from "../Components/Pages/Landing/Home/PublicHome";
import Private from "../Components/Pages/Private/Home/Private";
import SignIn from "../Components/Pages/Landing/Sign-in/SignIn";
import SignUp from "../Components/Pages/Landing/Sign-up/SignUp";
import FeedPainTheme from "./../Components/Layouts/FeedPainTheme";
import { IsAuthenticated } from "../Utils/userUtils"
import Feedback from "./../Components/Pages/Private/Feedback/Feedback"
import Complaint from "./../Components/Pages/Private/Complaint/Complaint"
import Profile from "../Components/Pages/Private/Profile/Profile";
const authenticated = IsAuthenticated();
const routes = [
  {
    name: "Landing",
    path: "/",
    exact: true,
    component: authenticated ? Private : PublicHome,
    private: authenticated,
  },
  {
    name: "Sign In",
    path: "/sign-in",
    component: SignIn,
    private: false,
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    component: SignUp,
    private: false,
  },
  {
    name: "About",
    path: "/about-us",
    component: PublicHome,
    private: false,
  },
  {
    name: "Feedback",
    path: "/feedback",
    component: Feedback,
    private: true,
  },
  {
    name: "Complaint",
    path: "/complaint",
    component: Complaint,
    private: true,
  },
  {
    name: "Profile",
    path: "/profile",
    component: Profile,
    private: true,
  }
];
const SetDocumentData = ({ children, name }) => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = `FeedPain | ${name}`;
  });
  return <Suspense fallback={<label>Loading...</label>}> {children}</Suspense>;
};
const Routes = routes.map((item, index) => {
  return item.private ? (
    IsAuthenticated && (
      <Route
        key={index}
        path={item.path}
        exact={item.exact}
        name={item.name}
        index={item.path === "/"}
        element={
          <SetDocumentData name={item.name}>
            <item.component />
          </SetDocumentData>
        }
      />
    )
  ) : (
    <Route
      key={index}
      path={item.path}
      exact={item.exact}
      name={item.name}
      index={item.path === "/"}
      element={
        <SetDocumentData name={item.name}>
          <item.component />
        </SetDocumentData>
      }
    />
  );
});


export default (
  <Route element={<FeedPainTheme />}>
    {Routes}
    <Route
      key={"error"}
      path={"*"}
      name={"Error"}
      element={
        <SetDocumentData name="Error">
          <h1>Error</h1>
        </SetDocumentData>
      }
    />
  </Route>
);
