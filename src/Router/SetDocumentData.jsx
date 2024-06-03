import { Suspense, useEffect } from "react";
import Loader from "../Components/Pages/Loader/Loader";

export default function SetDocumentData({ children, name }) {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = `FeedPain | ${name}`;
  });
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
}
