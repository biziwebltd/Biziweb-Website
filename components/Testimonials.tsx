import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart",
      content: "Exceptional Service and Amazing Results! BIZiWEB transformed our online presence completely. The team's expertise in web development and design is unmatched. Our traffic increased by 300% within the first month.",
      rating: 5,
      initials: "SJ",
      company: "TechStart",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc1ODgwMjQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",  
      content: "Working with BIZiWEB was a game-changer for our business. Their strategic approach to web design and digital marketing delivered results beyond our expectations. Highly recommended for any business looking to grow online.",
      rating: 5,
      initials: "MC",
      company: "GrowthCorp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzc3xlbnwxfHx8fDE3NTg4MDI0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <CardContent className="p-0">
                {/* Header with Client Name */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-800 text-lg">Client Name</h3>
                    <p className="text-blue-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  Exceptional Service and Amazing Results
                </h4>

                {/* Content */}
                <p className="text-gray-600 leading-relaxed">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}