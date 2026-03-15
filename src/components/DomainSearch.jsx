import { useState } from "react"

export default function DomainSearch(){

const [domain,setDomain]=useState("")

function searchDomain(){

alert(domain + " availability check")

}

return(

<section className="py-20 text-center">

<h2 className="text-3xl font-bold mb-6">

Find Your Perfect Domain

</h2>

<div className="flex justify-center">

<input
className="border p-3 w-96"
placeholder="Enter domain name"
onChange={(e)=>setDomain(e.target.value)}
/>

<button
className="bg-blue-600 text-white px-6"
onClick={searchDomain}
>

Search

</button>

</div>

</section>

)

}