import { NavLink } from "./NavLink";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">KARV</h3>
            <p className="text-primary-foreground/90 italic mb-4">
              "THE PERFECT BLEND OF TASTE AND QUALITY"
            </p>
            <p className="text-primary-foreground/80 text-sm">
              When farmers grow, the world grows with them.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <NavLink to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </NavLink>
              <NavLink to="/products" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Our Products
              </NavLink>
              <NavLink to="/values" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Why KARV?
              </NavLink>
              <NavLink to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact Us
              </NavLink>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="text-primary-foreground/80 space-y-2">
              <p>Email: info@karv.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70 text-sm">
          <p>© {new Date().getFullYear()} KARV - Kale Agricultural Resources Venture. All rights reserved.</p>
          <p className="mt-2 italic">Good for You, Good for Farmers, Good for the Planet</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
