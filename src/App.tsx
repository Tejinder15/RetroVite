import "./App.css";
import { FilterPanel } from "./components/FilterPanel";
import { Header } from "./components/Header";
import { VideoCard } from "./components/VideoCard";
import { Home } from "./pages/Home/Home";
import { Router } from "./router";

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
