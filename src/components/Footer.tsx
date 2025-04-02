import React from 'react';
import Logo from '../assets/logo.png';

const Footer = () => {
  const navItems = ['Home', 'About Us', 'Services', 'Packages', 'Portfolio', 'Contact Us'];
  const services = ['Digital Marketing', 'Website Development', 'Branding & Design'];

  const onclickHandle = (type: string) => {
    if (type === "phone") {
      window.location.href = 'tel:+9676124330';
    } else if (type === "mail") {
      window.location.href = 'mailto:support@techlit.in'
    }
  }

  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={Logo} style={{ imageRendering: 'revert-layer', backgroundBlendMode: "hue" }} alt="Techlit Logo" className="h-11 w-26" />
            </div>
            <p className="text-gray-400">Empowering businesses with innovative digital solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400">{service}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li onClick={() => onclickHandle('phone')} className="text-gray-400 cursor-pointer">+91-9676124330</li>
              <li onClick={() => onclickHandle('mail')} className="text-gray-400 cursor-pointer">support@techlit.in</li>
              <li className="text-gray-400">www.techlit.in</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Techlit Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
