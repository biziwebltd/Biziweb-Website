import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50/50 via-white to-blue-100/30">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-blue-200/40 animate-float"></div>
      <div className="absolute top-40 right-40 w-8 h-8 rounded-full bg-blue-300/60"></div>
      <div className="absolute top-60 right-60 w-4 h-4 rounded-full bg-blue-400/50"></div>
      <div className="absolute bottom-40 right-20 w-16 h-16 rounded-full bg-blue-200/30 animate-float-delayed"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-blue-800">How We</span>{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Kraft</span>
                <br />
                <span className="text-blue-800">Your Online</span>
                <br />
                <span className="text-blue-800">Presence</span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
                Transform your business vision into powerful digital experiences. 
                We specialize in creating modern, responsive websites that drive 
                engagement and deliver measurable results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg">
                Start Your Project
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg"
                onClick={() => onNavigate && onNavigate('portfolio')}
              >
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Visual Element with floating graphics */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main visual - globe/sphere representing online presence */}
              <div className="w-80 h-80 relative">
                {/* Central sphere */}
                <div className="absolute inset-20 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 shadow-2xl">
                  <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <span className="text-3xl">🌐</span>
                    </div>
                  </div>
                </div>
                
                {/* Orbiting elements representing digital services */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce">
                  <span className="text-xl">💻</span>
                </div>
                
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-blue-600 rounded-full shadow-lg flex items-center justify-center animate-pulse">
                  <span className="text-white text-sm">📱</span>
                </div>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center animate-bounce delay-500">
                  <span className="text-xl">🎨</span>
                </div>
                
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-blue-500 rounded-full shadow-lg flex items-center justify-center animate-pulse delay-300">
                  <span className="text-white text-sm">⚡</span>
                </div>
                
                {/* Connection lines */}
                <div className="absolute inset-0 overflow-hidden rounded-full">
                  <div className="absolute top-8 left-1/2 w-px h-16 bg-gradient-to-b from-blue-300 to-transparent"></div>
                  <div className="absolute right-8 top-1/2 h-px w-16 bg-gradient-to-l from-blue-300 to-transparent"></div>
                  <div className="absolute bottom-8 left-1/2 w-px h-16 bg-gradient-to-t from-blue-300 to-transparent"></div>
                  <div className="absolute left-8 top-1/2 h-px w-16 bg-gradient-to-r from-blue-300 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}