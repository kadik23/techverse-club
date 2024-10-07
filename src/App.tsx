import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import Events from "./pages/Events";
import Root from "./layouts/Root";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="" element={<Welcome />} />
          <Route path="/events" element={<Events />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
