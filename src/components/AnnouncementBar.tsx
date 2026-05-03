// const AnnouncementBar = () => (
//   <section className="bg-secondary py-6">
//     <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
//       <p className="text-foreground/80 font-body text-sm md:text-base text-center md:text-left">
//         We approach hairdressing as a craft. We love this industry, and we love our clients.
//       </p>
//       <a
//         href="tel:+923478845268"
//         className="text-foreground/50 hover:text-primary font-body text-sm transition-colors"
//       >
//         Book An Appointment
//       </a>
//       {/* <a
//         href="#contact"
//         className="px-6 py-2 border border-primary text-primary text-sm font-body tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
//       >
//         Book An Appointment
//       </a> */}
//     </div>
//   </section>
// );

// export default AnnouncementBar;

const AnnouncementBar = () => {
  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    window.open(
      "https://wa.me/923478845268?text=Hi%20GulShahbaz%20Salon,%20I%20want%20to%20book%20an%20appointment",
      "_blank"
    );
  };

  return (
    <section className="bg-secondary py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-foreground/80 font-body text-sm md:text-base text-center md:text-left">
          We approach hairdressing as a craft. We love this industry, and we love our clients.
        </p>

        <button
          onClick={handleWhatsAppClick}
          className="px-6 py-2 border border-primary text-primary text-sm font-body tracking-wider hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          Book An Appointment
        </button>

      </div>
    </section>
  );
};

export default AnnouncementBar;
