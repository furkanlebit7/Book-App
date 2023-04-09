//PACKAGES
import { Outlet } from "react-router-dom";
//COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-bgMain min-h-screen">
      <div className="container py-10 mx-auto min-h-screen flex flex-col">
        <Header />
        <div className="grow py-10 flex">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
