import Navbar from "../components/Navbar"
import DomainSearch from "../components/DomainSearch"
import Footer from "../components/Footer"

export default function Domains(){

return(

<div>

<Navbar/>

<section className="py-24 text-center">

<h1 className="text-5xl font-bold mb-10">
Find Your Perfect Domain
</h1>

<DomainSearch/>

</section>

<Footer/>

</div>

)

}