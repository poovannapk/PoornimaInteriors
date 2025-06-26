import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Poornima Interiors</h3>
          <p className="text-gray-400 mb-4">
            Transforming homes with premium interior design and renovation services across India.
          </p>
          <div className="flex space-x-4">
            {/* Social icons here (SVGs) */}
            {/* ...existing code... */}
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Kitchen Renovation</a></li>
            <li><a href="#" className="hover:text-white">Living Room Design</a></li>
            <li><a href="#" className="hover:text-white">Bedroom Interiors</a></li>
            <li><a href="#" className="hover:text-white">False Ceiling</a></li>
            <li><a href="#" className="hover:text-white">Complete Renovation</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Portfolio</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center">
              <Phone className="h-4 w-4 mr-2" />
              +91 9876543210
            </li>
            <li className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              info@Poornima Interiors.com
            </li>
            <li className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              Mumbai, Delhi, Bangalore
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Poornima Interiors. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;