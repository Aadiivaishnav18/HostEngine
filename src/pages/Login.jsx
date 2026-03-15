import { useNavigate } from "react-router-dom"

export default function Login(){

const navigate=useNavigate()

function handleLogin(e){

e.preventDefault()

localStorage.setItem("user","true")

navigate("/dashboard")

}

return(

<div className="flex justify-center items-center h-screen">

<form onSubmit={handleLogin} className="border p-8">

<h2 className="text-2xl mb-4">Login</h2>

<input className="border p-2 mb-4 w-full" placeholder="Email"/>

<input className="border p-2 mb-4 w-full" type="password" placeholder="Password"/>

<button className="bg-blue-600 text-white px-4 py-2 w-full">
Login
</button>

</form>

</div>

)

}