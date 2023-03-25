import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Watch } from "./pages/Watch/Watch";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch/:id" element={<Watch />} />
    </Routes>
  );
}
