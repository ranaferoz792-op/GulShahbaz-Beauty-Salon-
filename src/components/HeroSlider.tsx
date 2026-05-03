import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroSalon from "@/assets/hero-salon.jpg";
import heroBridal from "@/assets/hero-bridal.jpg";

const slides = [
  {
    image: heroSalon,
    title: "THE BEST MAKEUP DEALS",
    subtitle: "Best prices for your grooming treats",
  },
  {
    image: heroBridal,
    title: "WEDDING PHOTOGRAPHY",
    subtitle: "& videography services at economical budget",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-background/60" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold-gradient mb-4 animate-fade-in">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                {slide.subtitle}
              </p>
              {/* <a
                href="#contact"
                className="inline-block px-8 py-3 border border-primary text-primary font-body text-sm tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                Appointments
              </a> */}
              <button
  onClick={() =>
    window.open(
      "https://wa.me/923478845268?text=Hi%20GulShahbaz%20Salon,%20I%20want%20to%20book%20an%20appointment",
      "_blank"
    )
  }
  className="inline-block px-8 py-3 border border-primary text-primary font-body text-sm tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-fade-in"
  style={{ animationDelay: "0.4s" }}
>
  Appointments
</button>
            </div>
          </div>
        </div>
      ))}
      <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-primary transition-colors">
        <ChevronLeft size={40} />
      </button>
      <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 text-foreground/60 hover:text-primary transition-colors">
        <ChevronRight size={40} />
      </button>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === current ? "bg-primary" : "bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
