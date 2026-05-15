import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Contact Us</h2>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@rentalcar.com</p>
      </div>
    </footer>
  );
};

export default Footer;