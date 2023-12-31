import CallApi from "./Components/CallApi.jsx";
import Root from "./Components/Root.jsx";
import Profile from "./Components/Profile.jsx";
import Component from "./Components/Component.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";
import Home from "./Components/Home.jsx";
import User from "./Components/User";
import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<CallApi />} />
        <Route path="/profile" element={<Profile />}>
          <Route
            path="edit"
            element={
              <div>
                <h3>Edit Profile</h3>
                <p>Edit me now</p>
              </div>
            }
          />
          <Route
            path="view"
            element={
              <div>
                <h3>View Profile</h3>
                <p>View me now</p>
              </div>
            }
          />
        </Route>
        <Route path="/component" element={<Component />} />
        <Route path="/user/:username" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return (
    <>
      <h1>Hello World</h1>
      <RouterProvider router={router} />
    </>
  );
}
