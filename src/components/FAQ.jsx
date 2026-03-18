import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "What is cPanel hosting?",
      a: "cPanel hosting provides a web-based control panel that simplifies website and server management. It allows you to manage files, databases, and email accounts without needing technical command-line skills.",
    },
    {
      q: "Do you provide free SSL?",
      a: "Yes! Security is our priority. Every hosting plan we offer includes a free Let's Encrypt SSL certificate that renews automatically.",
    },
    {
      q: "Can I upgrade my plan later?",
      a: "Absolutely. You can scale your resources up or down at any time through your dashboard. The transition is seamless with zero downtime for your website.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, i) => {
          const isOpen = activeIndex === i;
          
          return (
            <div 
              key={i} 
              className={`border rounded-xl transition-all duration-200 ${
                isOpen ? "border-blue-500 bg-blue-50/30" : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-slate-800"
                aria-expanded={isOpen}
              >
                <span className="pr-4">{faq.q}</span>
                <ChevronDown 
                  size={20} 
                  className={`text-slate-500 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-blue-600" : ""
                  }`} 
                />
              </button>

              {/* Animated Reveal */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="p-5 pt-0 text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}