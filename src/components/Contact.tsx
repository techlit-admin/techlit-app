import React from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl shadow-neumorph hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-semibold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-300">
                <Phone href='tel:+9676124330' className="h-5 w-5 mr-3 text-blue-400" />
                +91-9676124330
              </p>
              <p className="flex items-center text-gray-300">
                <Mail href='mailto:support@techlit.in' className="h-5 w-5 mr-3 text-blue-400" />
                support@techlit.in
              </p>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
                <Instagram href='https://www.instagram.com/techlit_solutions' className="h-6 w-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
                <LinkedIn className="h-6 w-6 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <form className="space-y-4 bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-xl shadow-neumorph hover:shadow-xl transition-shadow">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white shadow-inner"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white shadow-inner"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white shadow-inner"
                rows={4}
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors mt-auto"
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
 