import serviceMakeup from "@/assets/service-makeup.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceSpa from "@/assets/service-spa.jpg";
import servicePhotography from "@/assets/service-photography.jpg";

const images = [
  { src: serviceMakeup, label: "Makeup Trainings" },
  { src: serviceHair, label: "Hair Styling Sessions" },
  { src: serviceSpa, label: "Spa & Wellness" },
  { src: servicePhotography, label: "Photography Campaigns" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20">
    <div className="container mx-auto px-4">
      <p className="text-primary font-body text-sm tracking-widest text-center mb-2">STYLING INSPIRATION</p>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
        Current Trends, Tips & <span className="text-gold-gradient">Much More</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img) => (
          <div key={img.label} className="group relative overflow-hidden rounded-lg">
            <img
              src={img.src}
              alt={img.label}
              loading="lazy"
              width={640}
              height={640}
              className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-colors duration-300 flex items-end p-4">
              <p className="text-foreground font-body text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
