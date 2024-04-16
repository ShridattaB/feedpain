import { isAuthenticated } from "../../../Utils/userUtils";

const authenticated = isAuthenticated();
export default authenticated
  ? [
      { title: "Home", path: "", icon: "" },
      {
        title: "Feedback",
        path: "user/feedback",
        icon: "", 
      },
      { title: "Complaint", path: "user/complaint", icon: "" },
    ]
  : [
      { title: "Home", path: "/", icon: "" },
      { title: "About", path: "/about-us", icon: "" },
      { title: "FAQ", path: "/FAQ", icon: "" },
    ];
export const leftMenu = authenticated
  ? [{ title: "Profile", path: "user/profile", icon: "" }]
  : [
      { title: "Sign In", path: "sign-in", icon: "" },
      { title: "Sign Up", path: "sign-up", icon: "" },
    ];
