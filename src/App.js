import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Registration from "./components/Login/Registration";
import Users from "./components/Users";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </>
  );
}

export default App;
