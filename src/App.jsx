import Header from "./HomePage/Header";
import Home from "./HomePage/Home";
import Login from "./LoginComponent/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
      {/* <Login />
       <Home />
      {/* <Login /> */}
      {/* <Home /> */}
      <Login />
    </>
  );
}

export default App;
