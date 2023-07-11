import { Route, Routes } from "react-router-dom";
// import Home from "./Route/Home";
// import Admin from "./Route/Admin";
// import Result from "./Route/Result";
// import Navigate from "./Navigate/Navigate";

import Menu from "./MenuBar/Menu";
import MenuHome from "./MenuBar/MenuHome";
import MenuLogin from "./MenuBar/MenuLogin";
import MenuProject from "./MenuBar/MenuProject";

function App() {
  return (
<div>
  {/* <Routes>
    <Route element ={<Menu />}>
    <Route path="/" element={<Home />} />
    <Route path="/result" element={<Result />} />
    <Route path="/admin" element={<Admin />} />
    </Route>
  </Routes> */}
  <Routes>
    <Route element ={<Menu />}>
    <Route path="/" element={<MenuHome />} />
    <Route path="/project" element={<MenuProject />} />
    <Route path="/login" element={<MenuLogin />} />
    </Route>
  </Routes>
</div>

);
}
export default App;
