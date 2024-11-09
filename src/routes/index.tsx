import { Routes, Route, BrowserRouter } from "react-router-dom";

// import NotFoundPage from "../pages/NotFound";

import Home from "../pages/home";
import Posts from "../pages/posts";

export function RoutesConfig() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:slug" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  );
}
