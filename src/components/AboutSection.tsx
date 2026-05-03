import heroSalon from "@/assets/hero-salon.jpg";

const AboutSection = () => (
  <section id="about" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6">
        Best Beauty Salon For <span className="text-gold-gradient">Women</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
        <div className="rounded-lg overflow-hidden">
          <img src={heroSalon} alt="Salon interior" loading="lazy" width={960} height={640} className="w-full object-cover rounded-lg" />
        </div>
        <div className="space-y-6">
          <p className="text-foreground/70 font-body leading-relaxed">
            GulShahbaz Beauty Salon is one of the best salons in Mandi shah Jewna, Jhang offering top beauty parlour services for women. We are more than just a salon; GulShahbaz Beauty Salon is a place where you can relax, refresh, and enhance your natural beauty.
          </p>
          <p className="text-foreground/70 font-body leading-relaxed">
            Our goal is to make every client feel confident, comfortable, and well cared for. With four conveniently located branches across Lahore, we are always close to serve you better.
          </p>
          {/* <div className="grid grid-cols-2 gap-4 pt-4">
            {["PIA Road (Head Office)", "MM Alam", "DHA Phase 3", "DHA Phase 6"].map((branch) => (
              <div key={branch} className="border border-border rounded-lg p-4">
                <p className="text-primary font-heading text-sm font-semibold">GulShahbaz Beauty Salon </p>
                <p className="text-foreground/60 font-body text-xs mt-1">{branch}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
