import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Root() {
  return (
    <div className="bg-primary min-h-screen">
      <div className="sm:px-8 px-4">
        <Navbar />
        <div className="pt-16">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Root;
