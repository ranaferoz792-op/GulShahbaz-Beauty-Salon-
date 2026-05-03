import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Which products do you use?",
    a: "There is a wide variety of products available, type of product or brand would get confirmed upon live skin consultation, or it would be respective to one's skin type or condition.",
  },
  {
    q: "What is the effective time period of hair deal?",
    a: "Permanent straightening services like extenso, rebonding, relaxing bring change to the existing hair shaft. The effect depends on one's hair growth rate — generally from 6 months to a year.",
  },
  {
    q: "What are hair cutting charges for men?",
    a: "Haircut charges for men start from Rs. 500 to Rs. 800 depending on the stylist's education and experience level.",
  },
  {
    q: "Is appointment necessary?",
    a: "You can come at any time but to avoid inconvenience, please make your appointment before coming. You can book online appointments on our website.",
  },
  {
    q: "What are your safety precautions?",
    a: "We use hand and floor sanitizers, gloves and masks, and train our staff to ensure the protection of our clients as well as ourselves.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <p className="text-primary font-body text-sm tracking-widest text-center mb-2">FREQUENTLY ASKED QUESTIONS</p>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
          Have a <span className="text-gold-gradient">Question?</span>
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-body text-foreground/90 text-sm">{faq.q}</span>
                <ChevronDown
                  className={`text-primary shrink-0 ml-4 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-40 pb-5 px-5" : "max-h-0"
                }`}
              >
                <p className="text-foreground/50 font-body text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
