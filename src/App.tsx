import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Welcome from "./pages/Welcome";
import Root from "./layouts/Root";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="" element={<Welcome />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
