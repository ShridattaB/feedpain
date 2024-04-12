import { IsAuthenticated } from "../../../Utils/userUtils";

const authenticated = IsAuthenticated();
export default authenticated
  ? [
      { title: "Home", path: "/", icon: "" },
      {
        title: "Feedback",
        path: "/feedback",
        icon: "", 
      },
      { title: "Complaint", path: "/complaint", icon: "" },
    ]
  : [
      { title: "Home", path: "/", icon: "" },
      { title: "About", path: "/about-us", icon: "" },
      { title: "FAQ", path: "/FAQ", icon: "" },
    ];
export const leftMenu = authenticated
  ? [{ title: "Profile", path: "/profile", icon: "" }]
  : [
      { title: "Sign In", path: "sign-in", icon: "" },
      { title: "Sign Up", path: "sign-up", icon: "" },
    ];
