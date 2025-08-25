import React from "react";
import {
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin as LinkedIn,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-br from-slate-800 to-slate-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Contact Us
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-800 to-gray-700 p-8 rounded-xl hover:shadow-neumorph shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-6 text-white">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href="tel:+919676124330"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                +91-9676124330
              </a>
              <a
                href="mailto:support@techlit.in"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                support@techlit.in
              </a>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/techlitsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
                </a>
                <Twitter className="h-6 w-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
                <a
                  href="https://www.instagram.com/techlit_solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
                </a>
                <a
                  href="https://www.linkedin.com/company/techlit-software-development"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedIn className="h-6 w-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
                </a>
              </div>
            </div>
          </div>

          <form className="space-y-4 bg-gradient-to-br from-cyan-800 to-gray-700 p-8 rounded-xl hover:shadow-neumorph shadow-xl transition-shadow">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-slate-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white shadow-inner"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-slate-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white shadow-inner"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Message
              </label>
              <textarea
                className="w-full px-4 py-2 bg-slate-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white shadow-inner"
                rows={4}
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors mt-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
