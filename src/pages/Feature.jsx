import Navbar from "../components/Navbar"
import FeatureCard from "../components/FeatureCard"
import Footer from "../components/Footer"

import { ShieldCheck, HardDrive, Server, Cloud, LifeBuoy, Database } from "lucide-react"

export default function Feature(){

return(

<div>

<Navbar/>

<section className="py-24">

<h1 className="text-5xl text-center font-bold mb-16">
Hosting Features
</h1>

<div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

<FeatureCard
icon={<HardDrive/>}
title="NVMe SSD Storage"
description="Lightning fast storage for maximum website speed"
/>

<FeatureCard
icon={<ShieldCheck/>}
title="Free SSL"
description="Secure your website with free SSL certificates"
/>

<FeatureCard
icon={<Server/>}
title="99.9% Uptime"
description="Reliable infrastructure with high availability"
/>

<FeatureCard
icon={<Cloud/>}
title="Cloud Infrastructure"
description="Powerful cloud hosting architecture"
/>

<FeatureCard
icon={<Database/>}
title="Daily Backups"
description="Automatic daily backups of your data"
/>

<FeatureCard
icon={<LifeBuoy/>}
title="24/7 Support"
description="Expert technical support anytime"
/>

</div>

</section>

<Footer/>

</div>

)

}