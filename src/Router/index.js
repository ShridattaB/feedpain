import { Suspense, useEffect } from "react";
import protectedRoute from "./protectedRoute";
import { Route } from "react-router-dom";
import PublicHome from "../Components/Pages/Landing/Home/PublicHome";
import Private from "../Components/Pages/Private/Home/Private";
import SignIn from "../Components/Pages/Landing/Sign-in/SignIn";
import SignUp from "../Components/Pages/Landing/Sign-up/SignUp";
import FeedPainTheme from "./../Components/Layouts/FeedPainTheme";
import { isAuthenticated } from "../Utils/userUtils";
import Feedback from "./../Components/Pages/Private/Feedback/Feedback";
import Complaint from "./../Components/Pages/Private/Complaint/Complaint";
import Profile from "../Components/Pages/Private/Profile/Profile";
import PageNotFound from "../Components/Pages/Error/PageNotFound";
import FAQ from "../Components/Pages/FAQ/FAQ";
import AboutUs from "../Components/Pages/About/AboutUs";
import { getUserRole } from "../Utils";
import UserList from "../Components/Pages/Private/Admin/UserList/UserList";
const authenticated = isAuthenticated();
const userRole=getUserRole()
const routes = [
  {
    name: "Landing",
    path: authenticated?`${userRole}`:`/`,
    exact: true,
    component: authenticated ? Private : PublicHome,
    private: authenticated,
    role: [...(authenticated ? ["Admin", "User"] : [])],
  },
  {
    name: "Sign In",
    path: "/sign-in",
    component: SignIn,
    private: false,
    role: [],
  },
  {
    name: "Sign Up",
    path: "/sign-up",
    component: SignUp,
    private: false,
    role: [],
  },
  {
    name: "About",
    path: "/about-us",
    component: AboutUs,
    private: false,
    role: [],
  },
  {
    name: "Feedback",
    path: "feedback",
    component: Feedback,
    private: true,
    role: ["Admin", "User"],
  },
  {
    name: "Complaint",
    path: "complaint",
    component: Complaint,
    private: true,
    role: ["Admin", "User"],
  },
  {
    name: "Profile",
    path: "profile",
    component: Profile,
    private: true,
    role: ["Admin", "User"],
  },
  {
    name: "FAQ",
    path: "/faq",
    component: FAQ,
    private: true,
    role: [],
  },
  {
    name: "User List",
    path: "admin/user-list",
    component: UserList,
    private: true,
    role: ["Admin"],
  },
];
const SetDocumentData = ({ children, name }) => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = `FeedPain | ${name}`;
  });
  return <Suspense fallback={<label>Loading...</label>}> {children}</Suspense>;
}; 
export default (
  <Route element={<FeedPainTheme />}> 
    {protectedRoute(routes)}
    <Route
      key={"error"}
      path={"*"}
      name={"Error"}
      element={
        <SetDocumentData name="Error">
          <PageNotFound />
        </SetDocumentData>
      }
    />
     
  </Route>
);
