import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import Root from "./layouts/Root";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="" element={<Welcome />} />
          <Route path="/contact-us" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
