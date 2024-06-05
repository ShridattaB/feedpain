import AboutUs from "../Components/Pages/About/AboutUs";
import FAQ from "../Components/Pages/FAQ/FAQ";
import PublicHome from "../Components/Pages/Landing/Home/PublicHome";
import SignIn from "../Components/Pages/Landing/Sign-in/SignIn";
import SignUp from "../Components/Pages/Landing/Sign-up/SignUp";
import AdminHome from '../Components/Pages/Private/Admin/AdminHome/AdminHome';
import UserList from "../Components/Pages/Private/Admin/UserList/UserList";
import Private from "../Components/Pages/Private/Home/Private";
import Profile from "../Components/Pages/Private/Profile/Profile";
import ViewFeedbackComplaint from "../Components/Pages/Private/ViewFeedbackComplaint/ViewFeedbackComplaint";
import Complaint from "./../Components/Pages/Private/Complaint/Complaint";
import Feedback from "./../Components/Pages/Private/Feedback/Feedback";
export const routeList = [
  {
    name: "Landing",
    path: `/`,
    exact: true,
    component: PublicHome,
    private: false,
    role: [],
  },
  {
    name: "Landing",
    path: `home`,
    exact: true,
    component: AdminHome,
    private: true,
    role: ['Admin'],
  },
  {
    name: "Landing",
    path: `home`,
    exact: true,
    component: Private,
    private: true,
    role: ['User'],
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
    path: "user-list",
    component: UserList,
    private: true,
    role: ["Admin"],
  },
  {
    name: "view",
    path: "feedback/view",
    component: ViewFeedbackComplaint,
    private: true,
    role: ["User","Admin"],
    
  }, {
    name: "view",
    path: "complaint/view",
    component: ViewFeedbackComplaint,
    private: true,
    role: ["User","Admin"],
    
  }
];
