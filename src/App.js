import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Registration from "./components/Login/Registration";
import Users from "./components/Users";
import Home from "./Layouts/Home";
import Navbar from "./Layouts/Navbar";
import PrivateRoute from "./Routes/PrivateRoute";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
