import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Pricing from "./pages/Pricing"
import Feature from "./pages/Feature"
import Domains from "./pages/Domains"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import ForgetPassword from "./pages/ForgetPassword"

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/pricing" element={<Pricing/>}/>
<Route path="/features" element={<Feature/>}/>
<Route path="/domains" element={<Domains/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="/forgot-password" element={<ForgetPassword/>}/>
<Route path="/dashboard" element={<Dashboard/>}/>

</Routes>

</BrowserRouter>

)

}

export default App