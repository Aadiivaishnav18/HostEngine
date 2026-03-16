import { Link } from "react-router-dom"
import { Sun, Moon } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import { useAuth } from "../context/AuthContext"
import { useState } from "react"

export default function Navbar(){

const {theme, toggleTheme} = useTheme()
const {user, logout, getInitials} = useAuth()

const [open,setOpen] = useState(false)

return(

<nav className="fixed top-0 w-full backdrop-blur-md border-b border-gray-700 z-50">

<div className="max-w-7xl mx-auto flex justify-between items-center p-4">

<h1 className="text-2xl font-bold">HostEngine</h1>

{/* MENU */}

<div className="hidden md:flex gap-6">

<Link to="/">Home</Link>
<Link to="/pricing">Pricing</Link>
<Link to="/features">Features</Link>
<Link to="/domains">Domains</Link>
<Link to="/support">Support</Link>

</div>

{/* RIGHT SIDE */}

<div className="flex items-center gap-4">

{/* THEME BUTTON */}

<button onClick={toggleTheme}>

{theme === "dark" ? <Sun size={20}/> : <Moon size={20}/>}

</button>

{/* IF USER LOGGED IN */}

{user ? (

<div className="relative">

<div
onClick={()=>setOpen(!open)}
className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center cursor-pointer">

{getInitials(user.email)}

</div>

{open && (

<div className="absolute right-0 mt-2 w-40 bg-white dark:bg-black border rounded shadow">

<Link
to="/dashboard"
className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">

Dashboard

</Link>

<button
onClick={logout}
className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">

Logout

</button>

</div>

)}

</div>

) : (

<>

<Link
to="/login"
className="px-4 py-2 border rounded-lg">

Login

</Link>

<Link
to="/register"
className="px-4 py-2 bg-blue-600 rounded-lg text-white">

Register

</Link>

</>

)}

</div>

</div>

</nav>

)

}