
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-12 lg:px-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            SAT Spark
          </h3>
          <p className="text-gray-600 mb-4 max-w-md">
            Revolutionary AI-powered SAT preparation to help students achieve their target scores and get into their dream colleges.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><Link to="#" className="text-gray-600 hover:text-purple-600">Blog</Link></li>
            <li><Link to="#" className="text-gray-600 hover:text-purple-600">Success Stories</Link></li>
            <li><Link to="#" className="text-gray-600 hover:text-purple-600">SAT Guide</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link to="#" className="text-gray-600 hover:text-purple-600">About Us</Link></li>
            <li><Link to="#" className="text-gray-600 hover:text-purple-600">Contact</Link></li>
            <li><Link to="#" className="text-gray-600 hover:text-purple-600">Privacy Policy</Link></li>
            <li><Link to="#" className="text-gray-600 hover:text-purple-600">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-gray-200 text-center">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} SAT Spark. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
