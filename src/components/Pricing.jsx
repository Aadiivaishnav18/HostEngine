const plans=[

{
name:"Starter",
price:"₹99/mo",
features:["1 Website","50GB SSD","Free SSL"]
},

{
name:"Business",
price:"₹199/mo",
features:["5 Websites","150GB SSD","Free SSL"]
},

{
name:"Unlimited",
price:"₹399/mo",
features:["Unlimited Websites","Unlimited SSD","Free SSL"]
}

]

export default function Pricing(){

return(

<section className="py-20 bg-gray-100">

<div className="max-w-7xl mx-auto text-center">

<h2 className="text-4xl font-bold mb-10">

Hosting Plans

</h2>

<div className="grid md:grid-cols-3 gap-8">

{plans.map((plan,i)=>(

<div key={i} className="bg-white p-8 rounded-xl shadow">

<h3 className="text-2xl font-bold mb-4">

{plan.name}

</h3>

<p className="text-3xl mb-4">

{plan.price}

</p>

<ul className="mb-6">

{plan.features.map((f,index)=>(

<li key={index}>{f}</li>

))}

</ul>

<button className="bg-blue-600 text-white px-6 py-2 rounded">

Buy Now

</button>

</div>

))}

</div>

</div>

</section>

)

}