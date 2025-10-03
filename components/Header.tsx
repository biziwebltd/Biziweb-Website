import { Button } from "./ui/button";
import logoIcon from 'figma:asset/159840d0bf43346af7607bfc5666b753f2845f97.png';

interface HeaderProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Header({ currentPage = 'home', onNavigate }: HeaderProps) {
  const handleNavClick = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center space-x-3 cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">B</span>
            </div>
            <span className="text-xl font-bold text-blue-800">BIZiWEB</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('home')}
              className={`font-medium transition-colors ${
                currentPage === 'home' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              HOME
            </button>
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              ABOUT US
            </a>
            <button 
              onClick={() => handleNavClick('portfolio')}
              className={`font-medium transition-colors ${
                currentPage === 'portfolio' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              PORTFOLIO
            </button>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              RESOURCES
            </a>
          </nav>

          {/* CTA Button */}
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium">
            BOOK YOUR MEETING
          </Button>
        </div>
      </div>
    </header>
  );
}