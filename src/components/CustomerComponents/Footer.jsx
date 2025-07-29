import { Link } from "react-router-dom";
import {
  Sun,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2">
              <Sun className="h-8 w-8 text-[#0a9586]" />
              <span className="text-xl font-bold text-[#0a9586]">
                Ray Solar Solutions
              </span>
            </Link>
            <p className="text-muted-foreground">
              Leading provider of sustainable solar lighting solutions,
              illuminating communities worldwide with clean, renewable energy.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:text-[#0a9586] transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold text-[#0a9586] mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {[
                ["Garden Lights", "/products/garden-lights"],
                ["Street Lights", "/products/street-lights"],
                ["Home Systems", "/products/home-systems"],
                ["Commercial Solutions", "/products/commercial"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-muted-foreground hover:text-[#0a9586] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-[#0a9586] mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                ["About Us", "/about"],
                ["Careers", "/careers"],
                ["Blog", "/blog"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-muted-foreground hover:text-[#0a9586] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-[#0a9586] mb-4">
              Get in Touch
            </h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-[#0a9586]" />
                <span className="text-sm">info@raysolarsolutions.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-[#0a9586]" />
                <span className="text-sm">+254 712 345 6781</span>
              </div>
              <div className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-[#0a9586] mt-0.5" />
                <span className="text-sm">
                  123 Solar Street, Green City, GC 12345
                </span>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-md font-medium text-[#0a9586] mb-3">
                Newsletter
              </h4>
              <div className="flex space-x-2">
                <Input placeholder="Your email" className="flex-1" />
                <Button
                  size="sm"
                  className="bg-[#0a9586] hover:bg-[#08756a] text-white font-semibold transition-colors"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ray Solar Solutions. All rights
              reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {[
                ["Privacy Policy", "/privacy"],
                ["Terms of Service", "/terms"],
                ["Cookie Policy", "/cookies"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  to={href}
                  className="text-muted-foreground hover:text-[#0a9586] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
