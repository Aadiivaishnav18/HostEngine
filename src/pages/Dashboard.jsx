import Sidebar from "../dashboard/Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {

return (

<div className="flex">

<Sidebar/>

<div className="flex-1 p-10 bg-gray-100">

<Outlet/>

</div>

</div>

)

}