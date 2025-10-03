import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function FAQ() {
  const faqs = [
    {
      question: "What type of businesses do you work with?",
      answer: "We work with businesses of all sizes, from startups to enterprise companies. Our experience spans across various industries including technology, healthcare, e-commerce, professional services, and more."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on complexity and scope. A basic business website typically takes 2-4 weeks, while more complex applications can take 8-16 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! We offer comprehensive maintenance and support packages to keep your website secure, updated, and performing optimally. This includes regular backups, security updates, and technical support."
    },
    {
      question: "Can you help with digital marketing and SEO?",
      answer: "Absolutely! In addition to web development, we offer digital marketing services including SEO optimization, content strategy, social media management, and paid advertising campaigns."
    },
    {
      question: "Do you work with existing websites or only new builds?",
      answer: "We work with both! Whether you need a complete redesign, functionality improvements, or just want to modernize your existing site, we can help enhance your current digital presence."
    },
    {
      question: "What's your approach to mobile responsiveness?",
      answer: "All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices. We test extensively across different screen sizes and browsers."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-800 mb-6">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - FAQ */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:text-blue-600 font-semibold py-5 text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pb-5 leading-relaxed text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right Column - CTA Cards */}
          <div className="space-y-8">
            {/* Get Website for Your Startup */}
            <Card className="border border-gray-200 bg-white rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDF8fHx8MTc1ODgwMjQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Startup team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-800 text-lg mb-2">Get Website for Your Startup</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Launch your startup with a professional website that converts visitors into customers.
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                        Get Website
                      </Button>
                      <span className="text-blue-600 font-bold">from £50 /month</span>
                    </div>
                    <p className="text-xs text-gray-500">OR</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Create Your Own Brand */}
            <Card className="border border-gray-200 bg-white rounded-xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1561736778-92e52a7769ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGRlc2lnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc1ODgwMjQ0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Brand design"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-800 text-lg mb-2">Create Your Own Brand</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      Build a strong brand identity with our comprehensive branding and design services.
                    </p>
                    <div className="flex items-center gap-2">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                        Get Started
                      </Button>
                      <span className="text-blue-600 font-bold">from £100 /month</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}