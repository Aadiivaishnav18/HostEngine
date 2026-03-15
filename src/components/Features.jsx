export default function Features(){

const features=[
"Free SSL",
"SSD Storage",
"Daily Backup",
"24/7 Support"
]

return(

<section className="py-20 text-center">

<h2 className="text-3xl mb-8">Features</h2>

<div className="grid md:grid-cols-4 gap-6 px-10">

{features.map((f,i)=>(
<div key={i} className="shadow p-6">
{f}
</div>
))}

</div>

</section>

)

}