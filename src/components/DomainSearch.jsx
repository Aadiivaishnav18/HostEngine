import { useState } from "react"
import { Search } from "lucide-react"

export default function DomainSearch(){

const [domain,setDomain] = useState("")

const searchDomain = () =>{
 alert(`Searching for ${domain}`)
}

return(

<section className="py-20 text-center">

<h2 className="text-4xl font-bold mb-8">

Search Your Perfect Domain

</h2>

<div className="flex justify-center">

<input
type="text"
placeholder="search yourdomain.com"
className="p-4 w-96 border rounded-l-lg"
onChange={(e)=>setDomain(e.target.value)}
/>

<button
onClick={searchDomain}
className="bg-blue-600 px-6 rounded-r-lg text-white flex items-center gap-2">

<Search size={20}/>
Search

</button>

</div>

</section>

)
}