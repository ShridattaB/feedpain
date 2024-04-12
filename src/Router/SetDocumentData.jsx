import { Suspense, useEffect } from "react";

export default function SetDocumentData({ children, name }) {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    document.title = `FeedPain | ${name}`;
  });
  return <Suspense fallback={<label>Loading...</label>}> {children}</Suspense>;
}
