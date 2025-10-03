import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-bold">BIZiWEB</span>
            </div>
            
            <p className="text-blue-100 leading-relaxed mb-6">
              Your trusted partner for creating exceptional web experiences that drive business growth.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-blue-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-blue-100 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="text-blue-100 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#faq" className="text-blue-100 hover:text-white transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              <li><span className="text-blue-100">Web Design</span></li>
              <li><span className="text-blue-100">Development</span></li>
              <li><span className="text-blue-100">E-commerce</span></li>
              <li><span className="text-blue-100">SEO</span></li>
              <li><span className="text-blue-100">Digital Marketing</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-200 flex-shrink-0" />
                <span className="text-blue-100">hello@biziweb.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-200 flex-shrink-0" />
                <span className="text-blue-100">+44 20 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-200 flex-shrink-0" />
                <span className="text-blue-100">London, United Kingdom</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-100 text-center md:text-left">
              © 2024 <span className="font-semibold text-white">BIZiWEB</span>. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}