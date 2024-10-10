import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import Events from "./pages/Events";
import Root from "./layouts/Root";
import Contact from "./pages/Contact";
import Department from "./pages/Department";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="" element={<Welcome />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/department-overview/:department" element={<Department />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
