import Navbar from "../components/Navbar"

export default function Dashboard(){

return(

<div>

<Navbar/>

<div className="min-h-screen p-10 bg-gray-50 dark:bg-black">

<h1 className="text-4xl font-bold mb-10 text-gray-800 dark:text-white">
User Dashboard
</h1>

<div className="grid md:grid-cols-3 gap-8">

{/* Hosting Card */}
<div className="p-6 border rounded-xl bg-white dark:bg-gray-900 hover:shadow-xl transition">

<h3 className="text-xl font-semibold text-gray-800 dark:text-white">
Active Hosting
</h3>

<p className="text-gray-500 mt-2">
Starter Plan
</p>

<p className="text-sm text-gray-400 mt-3">
Server Status: Active
</p>

</div>

{/* Domains Card */}
<div className="p-6 border rounded-xl bg-white dark:bg-gray-900 hover:shadow-xl transition">

<h3 className="text-xl font-semibold text-gray-800 dark:text-white">
Domains
</h3>

<p className="text-gray-500 mt-2">
2 Active Domains
</p>

<p className="text-sm text-gray-400 mt-3">
example.com  
mywebsite.net
</p>

</div>

{/* Billing Card */}
<div className="p-6 border rounded-xl bg-white dark:bg-gray-900 hover:shadow-xl transition">

<h3 className="text-xl font-semibold text-gray-800 dark:text-white">
Billing
</h3>

<p className="text-gray-500 mt-2">
Next payment: $7.99
</p>

<p className="text-sm text-gray-400 mt-3">
Due Date: 25 May 2026
</p>

</div>

</div>

</div>

</div>

)

}