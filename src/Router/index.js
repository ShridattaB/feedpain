import { Suspense, useEffect } from "react";
import { Route } from "react-router-dom";
import PageNotFound from "../Components/Pages/Error/PageNotFound";
import FeedPainTheme from "./../Components/Layouts/FeedPainTheme";
import protectedRoute from "./protectedRoute";
const SetDocumentData = ({ children, name }) => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = `FeedPain | ${name}`;
  });
  return <Suspense fallback={<label>Loading...</label>}> {children}</Suspense>;
};
export function getRoutes(routes, role) {
  return (
    <Route element={<FeedPainTheme isPublic={!role} />}>
      {protectedRoute(routes, role)}
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
