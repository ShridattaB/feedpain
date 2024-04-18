import { Suspense, useEffect } from "react";
import protectedRoute from "./protectedRoute";
import { Route } from "react-router-dom";
import FeedPainTheme from "./../Components/Layouts/FeedPainTheme";
import PageNotFound from "../Components/Pages/Error/PageNotFound";
const SetDocumentData = ({ children, name }) => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = `FeedPain | ${name}`;
  });
  return <Suspense fallback={<label>Loading...</label>}> {children}</Suspense>;
};
export function getRoutes(routes,role) {  
  return (
    <Route element={<FeedPainTheme />}>
      {protectedRoute(routes,role)}
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
}
