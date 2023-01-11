import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router";
import { Context } from "./Context";
import { Home } from "./Public";
import { Login } from "./Public/Login";
import { Register } from "./Public/Register/Register";
import { Home as Good } from "./Private";
function App() {
  const {token} = useContext(Context)
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={token !== null? <Good/> : <Home/>}/>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}/>
        <Route path="*" element={<Navigate to={"/"} replace={true}/>}/>
      </Routes>
    </div>
  );
}

export default App;
