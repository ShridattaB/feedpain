import { Outlet, Route } from "react-router-dom";
import SetDocumentData from "./SetDocumentData";
import { getUserRole } from "../Utils";
export default (routes = []) => {
  const user = [];
  const admin = [];
  const route = [];
  const userRole = getUserRole();
  routes.map((rou) => {
    if (!rou.role.length) route.push(rou);
    if (userRole === "Admin" && rou.role.includes("Admin")) admin.push(rou);
    if (userRole === "User" && rou.role.includes("User")) user.push(rou);
  });
  let userRoute = [];
  let temp = [];
  switch (userRole) {
    case "Admin":
      user.map((item, index) =>
        temp.push(
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
      ); 
      userRoute.push(
        <Route
          key={"admin"}
          path={"/admin"}
          exact={true}
          name={"user root"}
          index={false}
          element={<Outlet />}
        >
          {temp}
        </Route>
      ); 
      break;
    case "User":
      user.map((item, index) =>
        temp.push(
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
      ); 
      userRoute.push(
        <Route
          key={"user"}
          path={"/user"}
          exact={true}
          name={"user root"}
          index={false}
          element={<Outlet />}
        >
          {temp}
        </Route>
      ); 
      break;

    default:
      route.map((item, index) =>
        userRoute.push(
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
      );
      break;
  } 
  return userRoute;
};
