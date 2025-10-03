import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink, Monitor, Smartphone, ShoppingCart, Filter } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Sample portfolio items - you can replace these with your actual projects
  const portfolioItems = [
    {
      id: 1,
      title: "TechStart Platform",
      category: "SaaS Application",
      description: "A comprehensive business management platform for startups with analytics dashboard and user management.",
      image: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwc2hvd2Nhc2V8ZW58MXx8fHwxNzU4ODAyNDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      url: "https://example-techstart.com",
      type: "Web Application",
      icon: Monitor,
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "E-Commerce Store",
      category: "Online Retail",
      description: "Modern e-commerce website with payment integration, inventory management, and customer analytics.",
      image: "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODY5Nzc3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      url: "https://example-ecommerce.com",
      type: "E-commerce",
      icon: ShoppingCart,
      technologies: ["Next.js", "Stripe", "MongoDB", "Vercel"]
    },
    {
      id: 3,
      title: "Mobile App Landing",
      category: "Mobile App",
      description: "Responsive landing page for a mobile application with app store integration and user testimonials.",
      image: "https://images.unsplash.com/photo-1642132652806-8aa09801c2ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGUlMjBkZXNpZ24lMjBtb2NrdXB8ZW58MXx8fHwxNzU4NzE2NTU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      url: "https://example-mobile-app.com",
      type: "Landing Page",
      icon: Smartphone,
      technologies: ["Vue.js", "GSAP", "Netlify", "Tailwind CSS"]
    },
    {
      id: 4,
      title: "Corporate Website",
      category: "Business",
      description: "Professional corporate website with content management system and multi-language support.",
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHRlYW0lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU4ODAyNDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      url: "https://example-corporate.com",
      type: "Corporate Site",
      icon: Monitor,
      technologies: ["WordPress", "PHP", "MySQL", "AWS"]
    },
    {
      id: 5,
      title: "Analytics Dashboard",
      category: "Data Visualization",
      description: "Interactive dashboard for business analytics with real-time data visualization and reporting tools.",
      image: "https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc1ODc4NTYzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      url: "https://example-dashboard.com",
      type: "Dashboard",
      icon: Monitor,
      technologies: ["React", "D3.js", "Python", "FastAPI"]
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "Personal Brand",
      description: "Creative portfolio website for a designer with interactive galleries and contact forms.",
      image: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwc2hvd2Nhc2V8ZW58MXx8fHwxNzU4ODAyNDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      url: "https://example-portfolio.com",
      type: "Portfolio",
      icon: Monitor,
      technologies: ["Gatsby", "GraphQL", "Contentful", "Netlify"]
    }
  ];

  const categories = ["All", "Web Application", "E-commerce", "Landing Page", "Corporate Site", "Dashboard", "Portfolio"];

  const filteredItems = activeFilter === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.type === activeFilter);

  return (
    <section className="py-32 relative overflow-hidden min-h-screen">
      {/* Modern gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/70 via-white to-blue-100/50"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/20 to-blue-300/10 rounded-full mix-blend-normal filter blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-300/10 to-blue-400/20 rounded-full mix-blend-normal filter blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 border border-blue-300/50 mb-8">
            <span className="text-blue-800 font-semibold">🎨 Our Work</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 bg-clip-text text-transparent">
              Portfolio
            </span>
            <br />
            <span className="text-gray-900">Showcase</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our recent projects and discover how we've helped businesses 
            transform their digital presence with innovative solutions and exceptional design
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <div className="flex items-center gap-3 p-2 bg-white/80 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgba(30,64,175,0.08)]">
            <Filter className="w-5 h-5 text-blue-700 ml-2" />
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={activeFilter === category ? "default" : "ghost"}
                onClick={() => setActiveFilter(category)}
                className={`${
                  activeFilter === category 
                    ? "bg-gradient-to-r from-blue-700 to-blue-800 text-white shadow-[0_8px_30px_rgba(30,64,175,0.3)]" 
                    : "text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                } px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-0.5`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={item.id} 
                className="group relative bg-white/90 backdrop-blur-sm border-0 shadow-[0_8px_30px_rgba(30,64,175,0.08)] hover:shadow-[0_20px_60px_rgba(30,64,175,0.15)] transition-all duration-500 hover:-translate-y-2 rounded-3xl overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-800/20 to-transparent"></div>
                  
                  {/* Hover overlay with action button */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Button 
                        className="bg-white text-blue-800 hover:bg-blue-50 px-8 py-3 rounded-2xl font-semibold shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:-translate-y-1 transition-all duration-300"
                        onClick={() => window.open(item.url, '_blank')}
                      >
                        View Project <ExternalLink className="w-5 h-5 ml-2" />
                      </Button>
                    </div>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-6 left-6 group-hover:-translate-y-1 transition-transform duration-300">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-[0_8px_30px_rgba(30,64,175,0.2)]">
                      <Icon className="w-4 h-4 text-blue-700" />
                      <span className="text-sm font-semibold text-blue-800">{item.type}</span>
                    </div>
                  </div>

                  {/* Project number */}
                  <div className="absolute top-6 right-6 w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-[0_8px_30px_rgba(30,64,175,0.3)]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>

                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent mb-2">
                      {item.title}
                    </h3>
                    <p className="text-blue-600 font-semibold">{item.category}</p>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 text-sm rounded-lg font-semibold hover:scale-105 transition-transform duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Visit Website Button */}
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-blue-200 text-blue-700 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 hover:text-white hover:border-transparent font-semibold py-3 rounded-2xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(30,64,175,0.2)]"
                    onClick={() => window.open(item.url, '_blank')}
                  >
                    Visit Website <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-800/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-[0_20px_60px_rgba(30,64,175,0.1)] border border-blue-100/50">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"></div>
            
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-800 to-blue-700 bg-clip-text text-transparent">
                Ready to Start
              </span>
              <br />
              <span className="text-gray-900">Your Project?</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how we can help transform your business with a custom 
              web solution tailored to your unique needs and goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="group relative overflow-hidden bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-800 hover:to-blue-900 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-[0_12px_40px_rgba(30,64,175,0.3)] hover:shadow-[0_16px_50px_rgba(30,64,175,0.4)] transition-all duration-300 hover:-translate-y-1">
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              
              <Button 
                variant="outline" 
                className="border-2 border-blue-700 text-blue-800 hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 hover:text-white hover:border-transparent px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(30,64,175,0.2)]"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}