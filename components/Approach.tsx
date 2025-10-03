import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Approach() {
  const steps = [
    {
      number: "01",
      title: "Get To Know You",
      description: "We start by understanding your business goals, target audience, and unique requirements to create a tailored strategy.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWV0aW5nJTIwYnVzaW5lc3MlMjBjb25zdWx0YXRpb258ZW58MXx8fHwxNzU4ODAyNDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
      side: "left"
    },
    {
      number: "02", 
      title: "Explore Your Options",
      description: "Our design team creates wireframes and explores different approaches that align with your brand and provide exceptional user experience.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwbGFubmluZ3xlbnwxfHx8fDE3NTg4MDI0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      side: "right"
    },
    {
      number: "03",
      title: "Create A Tailored Solution",
      description: "We build your website using cutting-edge technologies, ensuring it's fast, secure, and perfectly tailored to your needs.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTg4MDI0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      side: "left"
    },
    {
      number: "04",
      title: "Deploy The Solution",
      description: "After thorough testing, we deploy your solution and ensure everything works perfectly across all devices and platforms.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbGF1bmNoJTIwZGVwbG95fGVufDF8fHx8MTc1ODgwMjQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
      side: "right"
    },
    {
      number: "05",
      title: "Celebrate & Keep In Touch",
      description: "We celebrate your success and provide ongoing support to help you scale your online presence as your business grows.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNlbGVicmF0aW9uJTIwc3VjY2Vzc3xlbnwxfHx8fDE3NTg4MDI0NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      side: "left"
    }
  ];

  return (
    <section id="approach" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
            Step-by-Step Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a proven methodology to ensure your project's success from concept to completion
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                step.side === 'right' ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{step.number}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-800">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="relative">
                  <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
                    <ImageWithFallback
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Step number overlay */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-blue-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-blue-800 mb-4">
            Still Confused?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't worry! We're here to help you understand exactly how we can transform your online presence. 
            Book a free consultation and let's discuss your project.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            BOOK NOW
          </button>
        </div>
      </div>
    </section>
  );
}