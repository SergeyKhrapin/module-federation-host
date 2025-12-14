import { Suspense, lazy, useState } from "react";

const RemoteButton = lazy(() => import("remote/Button"));

export default function App() {
  // const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <h1>Host App</h1>

      {/* <button onClick={() => setIsShown(true)}>Show remote button</button>
      {isShown && <RemoteButton />} */}

      <Suspense fallback={<div>Loading remote outer...</div>}>
      <RemoteButton />
      </Suspense> 

    </div>
  );
}
