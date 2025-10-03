import { Card, CardContent } from "./ui/card";
import { Monitor, Smartphone, ShoppingCart, Search, TrendingUp, Settings } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Monitor,
      title: "Web Design & Development",
      description: "Custom websites built with modern technologies, responsive design, and optimized for performance."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Development", 
      description: "Websites that work perfectly on all devices, ensuring your audience can reach you anywhere."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration, inventory management, and sales analytics."
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic with our comprehensive SEO strategies."
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Grow your online presence with targeted marketing campaigns and social media strategies."
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Keep your website secure, updated, and performing at its best with our ongoing support."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive web solutions designed to help your business succeed online
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border border-gray-200 hover:border-blue-600 transition-all duration-300 hover:shadow-lg bg-white rounded-xl">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-blue-800 mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}