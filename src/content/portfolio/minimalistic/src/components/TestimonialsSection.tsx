import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    quote: "Alex delivered a payment system that cut our failure rate by 68%. No fluff, just results. One of the best engineers I've worked with.",
    name: "Sarah Chen",
    role: "CTO, FinFlow",
    date: "Jan 2025",
    location: "San Francisco, US",
  },
  {
    quote: "We needed someone who could handle complexity without overengineering. Alex rebuilt our inventory system in 8 weeks — it's been flawless since.",
    name: "Marcus Rivera",
    role: "VP Engineering, LogiStack",
    date: "Oct 2024",
    location: "New York, US",
  },
  {
    quote: "Rare combination of deep technical skill and clear communication. Alex doesn't just write code — he solves business problems.",
    name: "Priya Sharma",
    role: "Founder, LearnPath",
    date: "Aug 2024",
    location: "Bangalore, IN",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  return (
    <section id="testimonials" className="border-t border-border/60">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-6 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Testimonials</h2>
          </div>
          <div className="border border-border rounded p-7 md:p-9">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[11px] text-muted-foreground font-mono tracking-wide uppercase">
                Testimonial // [{String(current + 1).padStart(2, "0")}]
              </span>
              <div className="flex gap-1">
                <button
                  onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
                  className="p-1.5 text-muted-foreground hover:text-foreground transition-colors duration-200 rounded hover:bg-secondary"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                </button>
                <button
                  onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
                  className="p-1.5 text-muted-foreground hover:text-foreground transition-colors duration-200 rounded hover:bg-secondary"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            <p className="text-foreground text-[15px] md:text-base leading-[1.7] mb-8">
              "{t.quote}"
            </p>
            <div className="border-t border-border mb-5" />
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[14px] font-semibold text-foreground">{t.name}</p>
                <p className="text-[13px] text-muted-foreground">{t.role}</p>
              </div>
              <div className="text-right">
                <p className="text-[12px] text-muted-foreground font-mono">{t.date}</p>
                <p className="text-[12px] text-muted-foreground font-mono">{t.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
