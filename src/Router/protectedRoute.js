import { Outlet, Route } from "react-router-dom";
import SetDocumentData from "./SetDocumentData";
export default (routes, role) => {
  const loverRole = role?.toLocaleLowerCase();
  if (role)
    return (
      <Route
        key={`${role}`}
        path={`${loverRole}`}
        exact={true}
        name={`${role} root`}
        index={false}
        element={<Outlet />}
      >
        {routes.map((item, index) => (
          <Route
            key={index}
            path={
              item.path === `${loverRole}` ? item.path + `/home` : item.path
            }
            exact={item.exact}
            name={item.name}
            index={item.path === "/"}
            element={
              <SetDocumentData name={item.name}>
                <item.component />
              </SetDocumentData>
            }
          />
        ))}
      </Route>
    );
  else
    return routes.map((item, index) => (
      <Route
        key={index}
        path={item.path}
        exact={item.exact}
        name={item.name}
        index={item.path === "/"}
        element={
          <SetDocumentData name={item.name}>
            <item.component isPublic={true} />
          </SetDocumentData>
        }
      />
    ));
};
