import { useState } from "react"

export default function FAQ(){

const faqs = [

{
q:"What is cPanel hosting?",
a:"cPanel hosting allows you to manage your website easily with a graphical interface."
},

{
q:"Do you provide free SSL?",
a:"Yes all hosting plans include free SSL certificates."
},

{
q:"Can I upgrade my plan later?",
a:"Yes you can upgrade your hosting plan anytime."
}

]

const [open,setOpen] = useState(null)

return(

<section className="py-20 max-w-4xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-10">

Frequently Asked Questions

</h2>

{faqs.map((f,i)=>(

<div key={i} className="border-b py-4">

<button
onClick={()=>setOpen(open===i?null:i)}
className="w-full text-left font-semibold">

{f.q}

</button>

{open===i && (

<p className="mt-2 text-gray-400">

{f.a}

</p>

)}

</div>

))}

</section>

)
}