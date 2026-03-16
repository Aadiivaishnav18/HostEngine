export default function Testimonials(){

const reviews = [

{
name:"John Smith",
text:"Best hosting provider I have ever used!"
},

{
name:"Michael Lee",
text:"Super fast servers and amazing support."
},

{
name:"Sarah Wilson",
text:"My website speed improved 3x after switching."
}

]

return(

<section className="py-20">

<h2 className="text-4xl font-bold text-center mb-12">

What Our Customers Say

</h2>

<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

{reviews.map((r,i)=>(

<div key={i} className="p-6 border rounded-xl shadow">

<p className="text-gray-400">

{r.text}

</p>

<h4 className="mt-4 font-semibold">

{r.name}

</h4>

</div>

))}

</div>

</section>

)
}