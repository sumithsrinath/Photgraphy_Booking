import Admin from "./components/Admin/Admin";
import Albums from "./components/Albums/Albums";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth/Auth";
// import { useSelector } from "react-redux";

function App() {
  // const isAdminLoggedIn = useSelector((state) => state.admin.isLoggedIn);
  // const isUserLoggedIn = useSelector((state) => state.user.isLoggedIn);
  // console.log("isAdminLoggedIn", isAdminLoggedIn);
  // console.log("isUserLoggedIn", isUserLoggedIn);

  return (
    <div>
      {/* {Header} */}
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/Auth" element={<Auth />} />
        </Routes>
      </section>

      {/* {HomePage} */}
    </div>
  );
}

export default App;
