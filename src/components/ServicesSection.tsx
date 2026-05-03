import serviceSkincare from "@/assets/service-skincare.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceMakeup from "@/assets/service-makeup.jpg";
import servicePhotography from "@/assets/service-photography.jpg";
import serviceSpa from "@/assets/service-spa.jpg";

const womenServices = [
  { name: "SkinCare", image: serviceSkincare },
  { name: "Hair", image: serviceHair },
  { name: "Makeup", image: serviceMakeup },
  { name: "Photography", image: servicePhotography },
  { name: "Spa", image: serviceSpa },
];

const menServices = [
  { name: "SkinCare", image: serviceSkincare },
  { name: "Hair", image: serviceHair },
  { name: "Makeup", image: serviceMakeup },
  { name: "Photography", image: servicePhotography },
];

const ServiceCard = ({ name, image }: { name: string; image: string }) => (
  <div className="group relative overflow-hidden rounded-lg cursor-pointer">
    <img
      src={image}
      alt={name}
      loading="lazy"
      width={640}
      height={640}
      className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-background/50 group-hover:bg-background/30 transition-colors duration-300 flex items-center justify-center">
      <h3 className="text-xl font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
        {name}
      </h3>
    </div>
  </div>
);

const ServicesSection = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-4">
        <span className="text-gold-gradient">Women</span> Services
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
        {womenServices.map((s) => (
          <ServiceCard key={s.name + "-w"} {...s} />
        ))}
      </div>
      </div>


  </section>
);

export default ServicesSection;
