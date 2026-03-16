import { useTheme } from "../context/ThemeContext"

export default function Footer(){

const {toggleTheme} = useTheme()

return(

<footer className="py-12 border-t border-gray-700">

<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

<div>

<h3 className="font-bold mb-4">Hosting</h3>

<ul className="space-y-2 text-gray-400">

<li>Shared Hosting</li>
<li>VPS Hosting</li>
<li>Cloud Hosting</li>

</ul>

</div>

<div>

<h3 className="font-bold mb-4">Company</h3>

<ul className="space-y-2 text-gray-400">

<li>About</li>
<li>Careers</li>
<li>Blog</li>

</ul>

</div>

<div>

<h3 className="font-bold mb-4">Support</h3>

<ul className="space-y-2 text-gray-400">

<li>Help Center</li>
<li>Contact</li>
<li>Status</li>

</ul>

</div>

<div>

<h3 className="font-bold mb-4">Theme</h3>

<button
onClick={toggleTheme}
className="border px-4 py-2 rounded">

Toggle Theme

</button>

</div>

</div>

<p className="text-center text-gray-500 mt-10">

© 2026 HostEngine Hosting

</p>

</footer>

)
}