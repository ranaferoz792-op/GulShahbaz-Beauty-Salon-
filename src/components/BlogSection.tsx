import heroBridal from "@/assets/hero-bridal.jpg";
import serviceHair from "@/assets/service-hair.jpg";
import serviceMakeup from "@/assets/service-makeup.jpg";

const posts = [
  {
    image: heroBridal,
    date: "November 26, 2025",
    title: "Pakistani Bridal Makeup Trends 2024-2025",
    excerpt: "As the wedding season approaches, brides-to-be in Pakistan are on the lookout for the latest makeup trends...",
  },
  {
    image: serviceHair,
    date: "November 25, 2025",
    title: "Transform Your Look: Hair Color Trends",
    excerpt: "Elevate your style with a bold new hair color. From balayage to highlights, discover what's trending...",
  },
  {
    image: serviceMakeup,
    date: "November 25, 2025",
    title: "Achieve Radiant Skin with Hydrafacial",
    excerpt: "The ultimate guide to hydrafacial treatments. Learn how to achieve healthier, glowing skin...",
  },
];

const BlogSection = () => (
  <section id="blog" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
        News & <span className="text-gold-gradient">Articles</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.title} className="group bg-card rounded-lg overflow-hidden border border-border hover:border-primary/30 transition-colors">
            <div className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                width={640}
                height={400}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <p className="text-primary font-body text-xs tracking-widest mb-2">Blog</p>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-foreground/50 font-body text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground text-xs">{post.date}</span>
                <span className="text-primary text-xs hover:underline cursor-pointer">Read More →</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
