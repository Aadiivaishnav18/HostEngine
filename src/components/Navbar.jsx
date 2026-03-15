export default function Navbar(){

return(

<nav className="bg-black text-white">

<div className="max-w-7xl mx-auto flex justify-between items-center p-4">

<h1 className="text-2xl font-bold">
HostEngine
</h1>

<ul className="hidden md:flex gap-8">

<li className="hover:text-blue-400 cursor-pointer">
Hosting
</li>

<li className="hover:text-blue-400 cursor-pointer">
Domains
</li>

<li className="hover:text-blue-400 cursor-pointer">
Pricing
</li>

<li className="hover:text-blue-400 cursor-pointer">
Support
</li>

</ul>

<div className="flex gap-3">

<button className="border px-4 py-2 rounded">
Login
</button>

<button className="bg-blue-600 px-4 py-2 rounded">
Get Started
</button>

</div>

</div>

</nav>

)

}