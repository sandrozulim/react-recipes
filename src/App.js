import React from "react";
import RootLayout from "./components/Pages/RootLayout";
import Home from "./components/Pages/Home";
import Popular from "./components/Pages/Popular";
import Favorites from "./components/Pages/Favorites";
import SearchResults from "./components/Pages/SearchResults";

import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="popular" element={<Popular />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="search" element={<SearchResults />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
