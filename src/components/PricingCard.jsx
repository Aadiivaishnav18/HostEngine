export default function PricingCard({ title, price, features, highlight }) {

  return (

    <div className={`p-8 rounded-xl border transition hover:scale-105 
    ${highlight ? "border-blue-500 shadow-xl" : "border-gray-600"}`}>

      <h3 className="text-2xl font-bold">
        {title}
      </h3>

      <p className="text-4xl font-bold my-4">
        ${price}/mo
      </p>

      <ul className="space-y-2 text-gray-400">

        {features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}

      </ul>

      <button className="mt-6 w-full bg-blue-600 py-3 rounded-lg text-white hover:scale-105 transition">

        Choose Plan

      </button>

    </div>

  )
}