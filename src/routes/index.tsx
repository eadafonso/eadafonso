import { Routes, Route, BrowserRouter } from "react-router-dom";

// import NotFoundPage from "../pages/NotFound";

import Home from "../pages/home";
import Posts from "../pages/posts";

export function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/eadafonso" element={<Home />} />
        <Route path="/eadafonso/posts/:slug" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}
