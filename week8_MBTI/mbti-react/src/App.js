import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Admin from "./admin";
import Result from "./Result";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<Result />} />
      <Route path="/admin" element={<Admin />} />
    </Routes> 
         
     
      </header>
    </div>
  );
}

export default App;
