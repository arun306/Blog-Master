import Home from "./Pages/Home/Home";
import Write from "./Pages/Write/Write";
import Login from "./Pages/login/Login";
import Register from "./Pages/register/Register";
import Settings from "./Pages/settings/Settings";
import Single from "./Pages/single/Single";
import TopBar from "./components/Topbar/TopBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = true;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          path="/register"
          element={user ? <Home /> : <Register />}
        ></Route>
        <Route path="/login" element={user ? <Home /> : <Login />}></Route>

        <Route path="/write" element={user ? <Write /> : <Register />}></Route>
        <Route path="/settings" element={user ? <Settings /> : <Register />}></Route>
        <Route path="/post/:postId" element={<Single />}></Route>
      </Routes>
      {/* <Home /> */}
      {/* <Single /> */}
      {/* <Write /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <Settings /> */}
    </Router>
  );
}

export default App;
