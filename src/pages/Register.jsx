export default function Register(){

return(

<div className="flex justify-center items-center h-screen">

<form className="border p-8">

<h2 className="text-2xl mb-4">Register</h2>

<input className="border p-2 mb-4 w-full" placeholder="Email"/>

<input className="border p-2 mb-4 w-full" placeholder="Password"/>

<button className="bg-blue-600 text-white px-4 py-2 w-full">
Register
</button>

</form>

</div>

)

}