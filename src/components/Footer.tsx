import { MapPin, Phone } from "lucide-react";

const Footer = () => (
  <footer id="contact" className="bg-secondary border-t border-border pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        <div>
          <h3 className="text-2xl font-heading font-bold text-gold-gradient mb-4">GulShahbaz Beauty Salon </h3>
          <p className="text-foreground/50 font-body text-sm leading-relaxed">
            The best beauty salon for women in Mandi Shah Jeewna. Experience the difference of quality grooming.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["Women Deals","Services for Women", "Privacy Policy"].map((link) => (
              <li key={link}>
                <a href="#" className="text-foreground/50 hover:text-primary font-body text-sm transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-lg font-semibold text-foreground mb-4">Contact</h4>
          <div className="space-y-3">
            {[
              "Mandi Shah Jeewna, Jhang",
              "Gymnasium Mohar Wali Road, Mandi Shah Jeewna, Jhang",
                ].map((addr) => (
              <div key={addr} className="flex items-start gap-2">
                <MapPin size={14} className="text-primary mt-1 shrink-0" />
                <span className="text-foreground/50 font-body text-sm">{addr}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 mt-4">
              <Phone size={14} className="text-primary" />
              <a href="tel:+923478845268" className="text-foreground/50 hover:text-primary font-body text-sm transition-colors">
                0347-8845268
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-foreground/30 font-body text-xs">© 2026 GulShahbaz Beauty Salon. All rights reserved.</p>
        {/* <div className="flex gap-4">
          {["Facebook", "Instagram", "YouTube", "TikTok"].map((social) => (
            <a key={social} href="#" className="text-foreground/30 hover:text-primary font-body text-xs transition-colors">
              {social}
            </a>
          ))}
        </div> */}
      </div>
    </div>
  </footer>
);

export default Footer;
