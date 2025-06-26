import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header: React.FC = () => (
  <nav className="bg-white shadow-lg sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-blue-900">
            Poornima Interiors
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-blue-900 transition-colors">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-blue-900 transition-colors">Services</Link>
          <Link to="/portfolio" className="text-gray-700 hover:text-blue-900 transition-colors">Portfolio</Link>
          <Link to="/consultation" className="text-gray-700 hover:text-blue-900 transition-colors">Consultation</Link>
          <Link to="/cost-estimator" className="text-gray-700 hover:text-blue-900 transition-colors">Cost Estimator</Link>
          <Button asChild className="bg-blue-900 hover:bg-blue-800">
            <Link to="/consultation">Book Free Consultation</Link>
          </Button>
        </div>
        {/* Mobile menu button and logic can be added here if needed */}
      </div>
    </div>
  </nav>
);

export default Header;
