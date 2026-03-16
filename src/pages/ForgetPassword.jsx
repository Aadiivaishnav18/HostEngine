import { useState } from "react"

export default function ForgetPassword(){

const [email,setEmail] = useState("")
const [message,setMessage] = useState("")

const handleSubmit = (e)=>{

e.preventDefault()

setMessage("If this email exists, a reset link has been sent.")

}

return(

<div className="min-h-screen flex items-center justify-center">

<form onSubmit={handleSubmit} className="p-8 border rounded-xl w-96">

<h2 className="text-3xl mb-6 text-center">
Forgot Password
</h2>

<input
type="email"
placeholder="Enter your email"
className="w-full p-3 border mb-4"
onChange={(e)=>setEmail(e.target.value)}
/>

<button className="w-full bg-blue-600 text-white py-3 rounded">
Send Reset Link
</button>

{message && (
<p className="text-green-600 mt-4 text-center">
{message}
</p>
)}

</form>

</div>

)

}