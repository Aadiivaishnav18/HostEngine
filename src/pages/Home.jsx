import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DomainSearch from "../components/DomainSearch";
import Pricing from "../components/Pricing";
import Features from "../components/Features";
import Performance from "../components/Performance";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home(){

return(

<div>

{/* Navbar */}

<Navbar/>

{/* Hero Section */}

<Hero/>

{/* Domain Search */}

<DomainSearch/>

{/* Hosting Plans */}

<Pricing/>

{/* Features */}

<Features/>

{/* Server Performance */}

<Performance/>

{/* Customer Reviews */}

<Testimonials/>

{/* FAQ */}

<FAQ/>

{/* Call To Action */}

<CTA/>

{/* Footer */}

<Footer/>

</div>

)

}