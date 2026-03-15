import { Link } from "react-router-dom";

export default function Sidebar(){

return(

<div className="w-64 h-screen bg-black text-white p-6">

<h2 className="text-2xl font-bold mb-6">
HostEngine
</h2>

<ul className="space-y-4">

<li>
<Link to="/dashboard">Dashboard</Link>
</li>

<li>
<Link to="/dashboard/hosting">My Hosting</Link>
</li>

<li>
<Link to="/dashboard/domains">Domains</Link>
</li>

<li>
<Link to="/dashboard/billing">Billing</Link>
</li>

</ul>

</div>

)

}