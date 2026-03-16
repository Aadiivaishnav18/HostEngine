import { useState } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

export default function Login(){

const { login } = useAuth()
const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleSubmit = (e)=>{

e.preventDefault()

login(email)

navigate("/dashboard")

}

return(

<div className="min-h-screen flex items-center justify-center">

<form onSubmit={handleSubmit} className="p-8 border rounded-xl w-96">

<h2 className="text-3xl mb-6 text-center">
Login
</h2>

<input
type="email"
placeholder="Email"
className="w-full p-3 border mb-4"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
className="w-full p-3 border mb-4"
/>

<button className="w-full bg-blue-600 text-white py-3 rounded">

Login

</button>

</form>

</div>

)

}