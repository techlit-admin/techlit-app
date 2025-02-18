import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa';
import './QuickAccessButton.css'; // CSS for styling

const QuickAccessButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleRedirect = (type:string) => {
    if (type === 'whatsapp') {
      window.location.href = 'https://wa.me/9676124330'; // WhatsApp number link
    } else if (type === 'phone') {
      window.location.href = 'tel:+9676124330'; // Phone link
    } else if (type === 'email') {
      window.location.href = 'mailto:support@techlit.in'; // Email link
    } else if (type === 'instagram') {
        window.location.href = 'https://www.instagram.com/techlit_solutions'; // Email link
    }
  };

  return (
    <div className="quick-access-container">
      <button className="quick-access-btn" onClick={handleToggle}>
        {isOpen ? 'X' : 'Quick Links'}
      </button>
      {isOpen && (
        <div className="quick-access-icons">          
          <button onClick={() => handleRedirect('phone')}>
            <FaPhone size={25} color="#34b7f1" />
          </button>
          <button onClick={() => handleRedirect('whatsapp')}>
            <FaWhatsapp size={30} color="#25D366" />
          </button>
          <button onClick={() => handleRedirect('instagram')}>
            <FaInstagram size={30} color="#000000" />
          </button>
          <button  onClick={() => handleRedirect('email')}>
            <FaEnvelope className="ml-1" size={25} color="#EA4335" />
          </button>
        </div>
      )}
    </div>
  );
};

export default QuickAccessButton;
