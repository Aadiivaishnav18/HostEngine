import Navbar from "../components/Navbar"
import PricingCard from "../components/PricingCard"
import Footer from "../components/Footer"

export default function Pricing(){

return(

<div>

<Navbar/>

<section className="py-24 text-center">

<h1 className="text-5xl font-bold mb-12">
Hosting Plans
</h1>

<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<PricingCard
title="Starter"
price="3.99"
features={[
"10 GB SSD Storage",
"1 Website",
"Free SSL",
"24/7 Support"
]}
/>

<PricingCard
title="Pro"
price="7.99"
highlight
features={[
"50 GB SSD Storage",
"10 Websites",
"Free SSL",
"Daily Backup"
]}
/>

<PricingCard
title="Business"
price="12.99"
features={[
"Unlimited Websites",
"Unlimited Storage",
"Free Domain",
"Priority Support"
]}
/>

</div>

</section>

<Footer/>

</div>

)

}