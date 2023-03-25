import { Routes, Route } from "react-router-dom";
import { HistoryPage } from "./pages/History/History";
import { Home } from "./pages/Home/Home";
import { Library } from "./pages/Library/Library";
import { Liked } from "./pages/Liked/Liked";
import { Watch } from "./pages/Watch/Watch";
import { WatchLater } from "./pages/WatchLater/WatchLater";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch/:id" element={<Watch />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="/watchlater" element={<WatchLater />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/library" element={<Library />} />
    </Routes>
  );
}
